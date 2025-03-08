# 💰 Sistema de Reembolso

Este projeto é um sistema simples de **reembolso** desenvolvido com **HTML, CSS e JavaScript**, com foco principal na manipulação do **JavaScript** para capturar eventos, formatar valores e atualizar dinamicamente a interface do usuário.

---

## ✨ Funcionalidades

### ✅ 1. Captura dos elementos do formulário
📌 Os elementos do formulário são selecionados usando `document.getElementById()` para manipulação posterior.

### ✅ 2. Tratamento do input de valores
🔹 O valor inserido pelo usuário é capturado e formatado corretamente:
  - ✨ Validação com **RegEx** para permitir apenas números.
  - 💲 Conversão do valor para centavos.
  - 🔄 Atualização do campo de input com o formato correto.

### ✅ 3. Formatação para moeda brasileira (BRL)
💵 O valor é formatado para **Real (R$)** utilizando `Intl.NumberFormat()` com a localidade adequada.

### ✅ 4. Prevenção do recarregamento da página
⚠️ O método `e.preventDefault()` é utilizado no evento de submissão do formulário para evitar que a página recarregue ao adicionar uma nova despesa.

### ✅ 5. Criação de um objeto com os dados da despesa
📄 Ao submeter o formulário, um **objeto** contendo os detalhes da despesa é criado dinamicamente.

### ✅ 6. Adição da despesa à lista
📋 Uma nova despesa é adicionada à **lista de reembolsos** por meio de uma função específica.

### ✅ 7. Criação dos elementos HTML dinamicamente
🛠️ Para exibir as despesas na interface, os seguintes elementos são criados dinamicamente:
  - 🖼️ **Ícone da despesa** (`img`) baseado na categoria.
  - 📌 **Informações da despesa** (`div` contendo o nome e a categoria).
  - ✍️ **Nome da despesa** (`strong`).
  - 🏷️ **Categoria da despesa** (`span`).
  - 💲 **Valor da despesa** (`span` com `innerHTML`).
  
Os elementos são organizados e inseridos no DOM para exibição dinâmica.

---

## 🛠️ Tecnologias Utilizadas
- 🌐 **HTML** para estruturação da página.
- 🎨 **CSS** para estilização (opcional, foco no JavaScript).
- ⚡ **JavaScript** para manipulação dos elementos e eventos.

---

## 🚀 Como Usar
1️⃣ Insira o valor da despesa no campo correspondente.
2️⃣ Escolha a categoria da despesa.
3️⃣ Clique no botão de adicionar para incluir a despesa na lista.
4️⃣ O valor será formatado corretamente e exibido junto à lista de reembolsos.

---

## 📌 Observação
✅ O código foi estruturado para ser **dinâmico e modular**, facilitando futuras melhorias ou integrações.

✨ *Este projeto é ideal para quem deseja praticar manipulação do DOM e eventos no JavaScript!* 🚀

💜 *Projeto do módulo JavaScript Intermediário da Rocketseat* 
