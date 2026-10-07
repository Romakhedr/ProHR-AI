"""
ProHR AI - Repository Restructuring & Unnesting Script
Author: Senior Software Engineer
Description: Safely extracts nested Next.js application directory (pro-hr-ai-app)
             into the root workspace while resolving file conflicts and logging actions.
"""

import sys
import shutil
import logging
from pathlib import Path
from typing import List, Optional

# ==========================================
# 1. Logging Configuration
# ==========================================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("ProjectUnnester")


class UnnestingError(Exception):
    """Custom exception class for repository structure execution errors."""
    pass


# ==========================================
# 2. Main Architecture Engine Class
# ==========================================
class ProjectUnnester:
    """
    Production-grade class to handle unnesting of project sub-directories.
    Follows SOLID principles, robust exception handling, and atomic-like execution.
    """

    def __init__(self, target_folder: str = "pro-hr-ai-app", root_dir: str = "."):
        """
        Initialize base and target path structures.
        
        :param target_folder: Directory name containing the nested app files.
        :param root_dir: Root repository path.
        """
        self.root_path = Path(root_dir).resolve()
        self.nested_path = self.root_path / target_folder
        self.backup_path = self.root_path / ".conflict_backups"

    def validate_environment(self) -> None:
        """Ensure the source directory exists and is valid before file mutation."""
        logger.info("Checking repository path health and target directory...")
        if not self.nested_path.exists():
            raise UnnestingError(f"Target folder does not exist: {self.nested_path}")
        if not self.nested_path.is_dir():
            raise UnnestingError(f"Target path is not a directory: {self.nested_path}")
        logger.info(f"Target directory validated: '{self.nested_path.name}'")

    def _backup_conflict_item(self, item_path: Path) -> Path:
        """
        Backup existing root files before moving to prevent data loss.
        
        :param item_path: Path of the conflicting item in root.
        :return: Backup destination path.
        """
        self.backup_path.mkdir(exist_ok=True)
        backup_dest = self.backup_path / f"{item_path.name}.bak"
        
        counter = 1
        while backup_dest.exists():
            backup_dest = self.backup_path / f"{item_path.name}.bak_{counter}"
            counter += 1

        shutil.move(str(item_path), str(backup_dest))
        logger.warning(
            f"Conflict detected for '{item_path.name}'. Existing item moved to backup: "
            f"'{backup_dest.relative_to(self.root_path)}'"
        )
        return backup_dest

    def execute_unnest(self) -> bool:
        """
        Execute file extraction and structural cleanup.
        
        :return: True if the operation completes successfully.
        """
        logger.info(f"Starting unnesting process for folder: '{self.nested_path.name}'...")

        try:
            self.validate_environment()

            items: List[Path] = list(self.nested_path.iterdir())
            if not items:
                logger.warning(f"Target folder '{self.nested_path.name}' is already empty.")
                return True

            for item in items:
                target_destination = self.root_path / item.name

                # Handle root name collisions safely
                if target_destination.exists():
                    self._backup_conflict_item(target_destination)

                # Move item to root path
                shutil.move(str(item), str(target_destination))
                logger.info(f"✓ Successfully extracted: {item.name} -> Root")

            # Remove empty nested directory
            remaining_items = list(self.nested_path.iterdir())
            if not remaining_items:
                self.nested_path.rmdir()
                logger.info(f"✓ Empty folder '{self.nested_path.name}' removed.")
            else:
                logger.warning(f"Notice: Unextracted items remain in '{self.nested_path.name}'.")

            logger.info("🎉 Repository layout successfully normalized!")
            return True

        except PermissionError as pe:
            logger.error("System permission denied during file operations.")
            raise UnnestingError("Access denied: Check file write permissions.") from pe
        except OSError as oe:
            logger.error(f"Operating System I/O error: {str(oe)}")
            raise UnnestingError(f"FileSystem error encountered: {str(oe)}") from oe
        except Exception as e:
            logger.critical(f"Unexpected execution error: {str(e)}", exc_info=True)
            raise UnnestingError(f"Unnesting failed: {str(e)}") from e


# ==========================================
# 3. Execution Entry Point
# ==========================================
if __name__ == "__main__":
    print("\n==========================================")
    print("  ProHR AI - Project Structure Unnester   ")
    print("==========================================\n")
    
    try:
        unnester = ProjectUnnester(target_folder="pro-hr-ai-app", root_dir=".")
        unnester.execute_unnest()
        print("\n✅ Project structure successfully normalized!")
    except UnnestingError as err:
        print(f"\n❌ [Execution Error]: {err}")
        sys.exit(1)
