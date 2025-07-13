# Quiz Bolt 🎯

Um quiz interativo e moderno desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Deploy no GitHub Pages

### Pré-requisitos
- Node.js instalado
- Conta no GitHub
- Repositório criado no GitHub

### Passos para Deploy

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Fazer build do projeto:**
   ```bash
   npm run build
   ```

4. **Deploy automático:**
   ```bash
   npm run deploy
   ```

### Configuração no GitHub

1. Vá para **Settings** do seu repositório
2. Role até **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Selecione a branch **gh-pages** e pasta **/(root)**
5. Clique **Save**

### URL do Deploy
Após o deploy, seu quiz estará disponível em:
`https://[seu-usuario].github.io/quizmetabolico/`

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── data/          # Configurações do quiz
├── hooks/         # Custom hooks
├── types/         # Tipos TypeScript
└── main.tsx       # Entry point
```

## 🎨 Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **Lucide React** - Ícones 