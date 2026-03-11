import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { rmSync } from "fs";

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const libDir = path.join(__dirname, "Website", "lib");

const packages = [
  "bootstrap",
  "durandal",
  "font-awesome",
  "jquery",
  "knockout",
  "requirejs-text",
];

// Remove old lib folder
rmSync(libDir, { recursive: true, force: true });

// Copy each package
for (const pkg of packages) {
  const srcFolder = path.join(__dirname, "node_modules", pkg);
  const destFolder = path.join(libDir, pkg);

  fs.copySync(srcFolder, destFolder, { overwrite: true });
  console.log(`Copied ${pkg} → Website/lib/${pkg}`);
}

console.log("All packages copied successfully!");
