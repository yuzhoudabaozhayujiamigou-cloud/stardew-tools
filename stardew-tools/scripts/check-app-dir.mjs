import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, "app");
const srcAppDir = path.join(projectRoot, "src", "app");
const ROUTE_FILE_REGEX = /\.(tsx|ts|jsx|js|mdx)$/i;

function directoryHasRouteFiles(dir) {
  if (!fs.existsSync(dir)) {
    return false;
  }

  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }

      if (ROUTE_FILE_REGEX.test(entry.name)) {
        return true;
      }
    }
  }

  return false;
}

const hasRootAppRoutes = directoryHasRouteFiles(appDir);
const hasSrcAppRoutes = directoryHasRouteFiles(srcAppDir);

if (hasRootAppRoutes && hasSrcAppRoutes) {
  console.error("Build blocked: both `app/` and `src/app/` contain route files.");
  console.error("Next.js will prioritize `app/` and ignore routes in `src/app/`.");
  console.error("Move misplaced files into `src/app/` and retry.");
  process.exit(1);
}
