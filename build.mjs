import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const distDir = join(root, 'dist');
const filesToCopy = ['index.html', 'styles.css'];

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

for (const file of filesToCopy) {
  cpSync(join(root, file), join(distDir, file));
}

console.log('Built static website in dist/.');
