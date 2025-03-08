## Sistema de reembolso

 # [X] - pegar os elementos do formulário.
  <!-- Ex. const amount = documento.getElementById("amount") -->

 # [X] - capturar o evento do input (value) para formatar o valor.
  <!-- 1) Fazer uma validação com regex para aceitar só NUMEROS no input -->
  <!-- 2) Transformar o valor em CENTAVOS -->
  <!-- 3) Atualizar o valor do input -->

 # [X] - formatar o valor para real 
  <!-- Returna o valor convertido p string usando >> the current locale <<  -->

- Obs: e.preventDefault() é usado para quando fazer um submit a pagina NAO recarregar.

 # [X] - criar objeto com os detalhes do formulario
  <!-- e.preventDefault = desativa o recarregamento da pagina -->

 # [X] - criar uma função para adicionar uma nova despesa na lista.

 # [X] - função de criar um li
  <!-- para fazer isso eu utilizei o seguinte código:
  
  1) criei o ícone: 
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)
  
  2) criei a informação (div):
    const exprenseInfo = document.createElement("div")
    exprenseInfo.classList.add("expense-info")
   
  3) criei nome da dispesa:
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

  4) criei o span(categoria):
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name

  por fim isso: exprenseInfo.append(expenseName, expenseCategory) || para adicionar tudo na div
   -->

 # [X] - adicionar o valor da dispesa.
  <!-- Fizemos isso criando o elemento span e um smal com innerHTML -->