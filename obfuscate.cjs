const fs = require('fs');
const path = require('path');

// Função para ofuscar strings sensíveis
function obfuscateStrings(code) {
  // Ofuscar nomes de variáveis e funções
  const obfuscated = code
    .replace(/const\s+(\w+)\s*=/g, 'const _0x$1=')
    .replace(/let\s+(\w+)\s*=/g, 'let _0x$1=')
    .replace(/var\s+(\w+)\s*=/g, 'var _0x$1=')
    .replace(/function\s+(\w+)/g, 'function _0x$1')
    .replace(/export\s+const\s+(\w+)/g, 'export const _0x$1')
    .replace(/import\s+\{\s*(\w+)\s*\}\s+from/g, 'import {_0x$1} from');
  
  return obfuscated;
}

// Função para ofuscar arquivos JS
function obfuscateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const obfuscated = obfuscateStrings(content);
    fs.writeFileSync(filePath, obfuscated);
    console.log(`✅ Ofuscado: ${filePath}`);
  } catch (error) {
    console.log(`❌ Erro ao ofuscar ${filePath}:`, error.message);
  }
}

// Função para processar diretório
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.mjs')) {
      obfuscateFile(filePath);
    }
  });
}

// Executar ofuscação
console.log('🔒 Iniciando ofuscação de código...');
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  processDirectory(distPath);
  console.log('✅ Ofuscação concluída!');
} else {
  console.log('❌ Diretório dist não encontrado. Execute npm run build primeiro.');
} 