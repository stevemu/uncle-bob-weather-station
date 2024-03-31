//  Usage: node update-imports.js
//  Description: This script updates import statements in .js and .ts files to include the ".ts" extension.

import fs from 'fs';
import path from 'path';

const srcDir = './src';

// Function to recursively process files in a directory
async function processDirectory(directory) {
  const files = await fs.promises.readdir(directory, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      // Recurse into subdirectories
      await processDirectory(path.join(directory, file.name));
    } else if (file.name.endsWith('.js') || file.name.endsWith('.ts')) {
      // Process .js and .ts files
      const filePath = path.join(directory, file.name);
      await processFile(filePath);
    }
  }
}

// Function to process a single file
async function processFile(filePath) {
  let content = await fs.promises.readFile(filePath, 'utf8');

  // Modify import statements that do not end with ".ts"
  content = content.replace(
    /import\s+([\s\S]+?)\s+from\s+['"]([^'"\s]+)['"];?/g,
    (match, importClause, importPath) => {
      if (
        !importPath.endsWith('.ts') &&
        !importPath.startsWith('.') &&
        !importPath.startsWith('@')
      ) {
        return `import ${importClause} from '${importPath}.ts';`;
      } else if (
        !importPath.endsWith('.ts') &&
        importPath.startsWith('.') &&
        !importPath.includes('.js')
      ) {
        // Adjust the script to handle relative imports within the project
        return `import ${importClause} from '${importPath}.ts';`;
      }
      return match;
    },
  );

  await fs.promises.writeFile(filePath, content, 'utf8');
}

// Start processing the src directory
processDirectory(srcDir)
  .then(() => console.log('Import statements updated.'))
  .catch((error) => console.error('An error occurred:', error));
