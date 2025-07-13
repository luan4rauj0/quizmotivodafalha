# 🤖 Instruções para Editar Este Quiz em Outras IAs

## 📋 **Como Usar Este Projeto**

### 🎯 **Opção 1: Edição Rápida (Recomendada)**
1. **Abra o arquivo**: `quiz-config-editavel.json`
2. **Edite** as perguntas, respostas, pontuações
3. **Modifique** preços, planos, resultados
4. **Cole** este comando na IA:

```
"Use o arquivo quiz-config-editavel.json para recriar este quiz React com as modificações. 
Mantenha a estrutura: React + TypeScript + Tailwind CSS + Vite. 
Preserve todos os componentes e funcionalidades existentes."
```

### 🔧 **Opção 2: Edição Avançada**
Se precisar modificar a estrutura ou adicionar funcionalidades:

1. **Faça upload** de toda a pasta do projeto
2. **Identifique** os arquivos principais:
   - `src/data/quizConfig.ts` - Perguntas e configurações
   - `src/components/` - Componentes visuais
   - `src/hooks/useQuiz.ts` - Lógica do quiz

## 📁 **Estrutura do Projeto**

### 🎯 **Arquivos Principais para Edição:**
- **`quiz-config-editavel.json`** ← EDITE AQUI (mais fácil)
- `src/data/quizConfig.ts` ← Ou aqui (mais técnico)

### 🎨 **Componentes Visuais:**
- `src/components/QuizIntro.tsx` - Tela inicial
- `src/components/EnhancedQuizQuestion.tsx` - Perguntas
- `src/components/QuizResult.tsx` - Resultado final
- `src/components/LeadForm.tsx` - Formulário de contato
- `src/components/EconomyCalculator.tsx` - Calculadora

### ⚙️ **Lógica e Estado:**
- `src/hooks/useQuiz.ts` - Controla o fluxo do quiz
- `src/App.tsx` - Componente principal

## 🛠️ **Modificações Comuns**

### ✏️ **Para Mudar Perguntas:**
```json
{
  "id": "q1",
  "pergunta": "Sua nova pergunta aqui?",
  "opcoes": [
    { "texto": "Opção 1", "pontos": 5 },
    { "texto": "Opção 2", "pontos": 3 }
  ]
}
```

### 💰 **Para Mudar Preços:**
```json
{
  "planos": [
    {
      "nome": "Plano Básico",
      "preco": "R$39,90/mês",
      "descricao": "nova descrição"
    }
  ]
}
```

### 🎯 **Para Mudar Resultados:**
```json
{
  "resultados": [
    {
      "titulo": "Novo Diagnóstico",
      "descricao": "Nova descrição do resultado",
      "pontosMinimos": 0,
      "pontosMaximos": 100
    }
  ]
}
```

## 🚀 **Comandos Úteis para IAs**

### 📝 **Para Mudanças Simples:**
```
"Modifique a pergunta X para: [nova pergunta]
Altere o preço do plano Y para: [novo preço]
Use o arquivo quiz-config-editavel.json como base."
```

### 🎨 **Para Mudanças Visuais:**
```
"Altere as cores do quiz para [esquema de cores]
Modifique o design para ser mais [moderno/elegante/etc]
Mantenha toda a funcionalidade existente."
```

### ⚡ **Para Novas Funcionalidades:**
```
"Adicione [nova funcionalidade] ao quiz
Base-se no código existente em src/
Mantenha a compatibilidade com o sistema atual."
```

## 📦 **Tecnologias Usadas**
- ⚛️ **React 18** - Interface
- 🔷 **TypeScript** - Tipagem
- 🎨 **Tailwind CSS** - Estilização
- ⚡ **Vite** - Build tool
- 🎯 **Lucide React** - Ícones

## 🎯 **Funcionalidades Implementadas**
- ✅ 28 perguntas com sistema de pontuação
- ✅ Diagnóstico personalizado baseado em pontos
- ✅ Calculadora de economia vs tratamentos
- ✅ Roleta de desconto
- ✅ Formulário de captura de leads
- ✅ Design responsivo
- ✅ Modo escuro/claro
- ✅ Animações e micro-interações
- ✅ Sistema de badges/conquistas
- ✅ Analytics integrado
- ✅ Compartilhamento social

## 💡 **Dicas Importantes**
1. **Sempre teste** após modificações
2. **Mantenha** a estrutura de pontuação consistente
3. **Preserve** as funcionalidades de conversão
4. **Use** o arquivo JSON para mudanças rápidas
5. **Documente** mudanças importantes

---

## 🆘 **Precisa de Ajuda?**
Se algo não funcionar, envie para a IA:
- O arquivo `quiz-config-editavel.json` modificado
- Descrição do problema
- O que você quer alcançar

**Comando de emergência:**
```
"Recrie o quiz usando quiz-config-editavel.json como base. 
Corrija qualquer erro e mantenha todas as funcionalidades."
```