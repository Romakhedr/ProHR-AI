import logging
from pathlib import Path
from typing import Dict, Any, List

# إعداد نظام التسجيل الاحترافي
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s (Line %(lineno)d): %(message)s"
)
logger = logging.getLogger("ProjectAuditEngine")

class ProjectAuditError(Exception):
    pass

class ProjectAuditor:
    def __init__(self, root_dir: str = "."):
        self.root_path = Path(root_dir)
        self.critical_directories = ["src", "src/app", "src/components", "api", "public"]
        self.critical_files = ["package.json", "README.md", ".gitignore"]
        self.legacy_files = ["index.html", "login.html"]

    def audit_structure(self) -> Dict[str, Any]:
        logger.info("بدء فحص هيكلية المشروع والتحقق من النواقص...")
        if not self.root_path.exists() or not self.root_path.is_dir():
            raise ProjectAuditError(f"مسار الجذر غير صالح: {self.root_path}")

        missing_dirs = [d for d in self.critical_directories if not (self.root_path / d).is_dir()]
        missing_files = [f for f in self.critical_files if not (self.root_path / f).is_file()]
        warnings = [f"ملف قديم في الجذر: {l}" for l in self.legacy_files if (self.root_path / l).is_file()]

        status = "HEALTHY"
        if missing_dirs or missing_files:
            status = "CRITICAL_GAPS_FOUND"
        elif warnings:
            status = "WARNING_CLEANUP_NEEDED"

        return {
            "status": status,
            "missing_directories": missing_dirs,
            "missing_files": missing_files,
            "warnings": warnings,
            "summary": "اكتمل التدقيق بنجاح ورصد الحالة التشغيلية."
        }

if __name__ == "__main__":
    try:
        auditor = ProjectAuditor(".")
        report = auditor.audit_structure()
        print("\n=== 📊 تقرير تدقيق هيكلية المشروع ===")
        for k, v in report.items():
            print(f"• {k}: {v}")
        print("=======================================\n")
    except Exception as e:
        print(f"❌ خطأ في التدقيق: {e}")
