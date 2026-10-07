import os
import shutil
import logging
import sys
from pathlib import Path
from typing import List, Dict, Any, Optional

# ==========================================
# 1. Logging & Custom Exceptions
# ==========================================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("RepoMaintenance")


class MaintenanceError(Exception):
    """Base exception for repository maintenance operations."""
    pass


class SystemPermissionError(MaintenanceError):
    """Raised when file permissions prevent cleanup."""
    pass


class FileSystemOperationError(MaintenanceError):
    """Raised when an I/O filesystem error occurs."""
    pass


# ==========================================
# 2. Repository Auditor Engine
# ==========================================
class RepositoryAuditor:
    """
    Audits the repository structure for essential Next.js and Python files.
    """
    REQUIRED_FILES: List[str] = [
        "package.json",
        "next.config.ts",
        "tsconfig.json",
        "README.md",
        ".gitignore"
    ]
    REQUIRED_DIRS: List[str] = [
        "src",
        "public",
        "api"
    ]

    def __init__(self, root_dir: str = "."):
        self.root_path = Path(root_dir).resolve()

    def audit(self) -> Dict[str, List[str]]:
        logger.info(f"Auditing repository at: {self.root_path}")
        missing_files = [f for f in self.REQUIRED_FILES if not (self.root_path / f).exists()]
        missing_dirs = [d for d in self.REQUIRED_DIRS if not (self.root_path / d).is_dir()]

        if not missing_files and not missing_dirs:
            logger.info("✓ All required files and directories are present.")
        else:
            if missing_files:
                logger.warning(f"Missing files: {missing_files}")
            if missing_dirs:
                logger.warning(f"Missing directories: {missing_dirs}")

        return {"files": missing_files, "directories": missing_dirs}


# ==========================================
# 3. Backup Cleaner Engine
# ==========================================
class BackupCleaner:
    """
    Safely manages and removes .conflict_backups directories.
    """
    def __init__(self, root_dir: str = "."):
        self.root_path = Path(root_dir).resolve()
        self.backup_dir = self.root_path / ".conflict_backups"

    def purge_backups(self, dry_run: bool = False) -> bool:
        if not self.backup_dir.exists():
            logger.info("No .conflict_backups directory found. Clean workspace.")
            return True

        if dry_run:
            logger.info(f"[DRY-RUN] Would delete: {self.backup_dir}")
            return True

        try:
            logger.info(f"Removing backup directory: {self.backup_dir}")
            shutil.rmtree(self.backup_dir)
            logger.info("✓ .conflict_backups successfully removed.")
            return True
        except PermissionError as pe:
            raise SystemPermissionError("Insufficient permissions to remove backups.") from pe
        except OSError as oe:
            raise FileSystemOperationError(f"OS error occurred: {str(oe)}") from oe


# ==========================================
# 4. Main Execution
# ==========================================
if __name__ == "__main__":
    print("\n==========================================")
    print("  ProHR AI - Repository Auditor & Cleaner ")
    print("==========================================\n")
    
    try:
        auditor = RepositoryAuditor()
        auditor.audit()
        
        cleaner = BackupCleaner()
        cleaner.purge_backups(dry_run=False)
        print("\n✓ Repository check and cleanup completed!")
    except MaintenanceError as elem:
        print(f"\n❌ [Execution Error]: {elem}")
        sys.exit(1)
