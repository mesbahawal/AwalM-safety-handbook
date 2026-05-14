const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "example.txt");

// ── 1. CREATE ──────────────────────────────────────────────────────────────
function createFile() {
  const initialContent = "Hello! This file was created by file-operations.js.\n";
  fs.writeFileSync(FILE_PATH, initialContent, "utf8");
  console.log(`✅ File created at: ${FILE_PATH}`);
  console.log(`   Initial content: "${initialContent.trim()}"\n`);
}

// ── 2. READ ────────────────────────────────────────────────────────────────
function readFile() {
  const content = fs.readFileSync(FILE_PATH, "utf8");
  console.log("📖 Reading file...");
  console.log(`   Current content:\n   "${content.trim()}"\n`);
  return content;
}

// ── 3. WRITE (append) ──────────────────────────────────────────────────────
function writeToFile(newLine) {
  fs.appendFileSync(FILE_PATH, newLine, "utf8");
  console.log(`✏️  Appended to file: "${newLine.trim()}"`);
}

// ── 4. OVERWRITE a specific line ───────────────────────────────────────────
function overwriteFile(newContent) {
  fs.writeFileSync(FILE_PATH, newContent, "utf8");
  console.log(`🔄 File overwritten with new content.\n`);
}

// ── RUN ────────────────────────────────────────────────────────────────────
console.log("=== File Operations Demo ===\n");

// Step 1 – create
createFile();

// Step 2 – read what was just created
readFile();

// Step 3 – append two new lines
writeToFile("Line added on first write.\n");
writeToFile(`Timestamp: ${new Date().toISOString()}\n`);

// Step 4 – read again to confirm the appended lines
readFile();

// Step 5 – fully overwrite the file
overwriteFile("File has been completely overwritten.\nFresh start!\n");

// Step 6 – final read to show the result
readFile();

console.log("✅ All operations complete.");
