// ELEMENTOS DO FORMULÁRIO.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// selecionar elementos da lista
const expenseList = document.querySelector("ul")

// CAPTURA EVENTO DO INPUT PARA FORMATAR O VALOR
amount.oninput = () => {
  // só pega numeros
  let value = amount.value.replace(/\D/g, "");

  // transformar o valor em CENTAVOS.
  value = Number(value) / 100

  // atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

//FORMATANDO PARA O PADRÃO REAL BRASILEIRO
function formatCurrencyBRL(value) {
 
  // returna o valor convertido p string usando -> the current locale <- .
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return value
}


// CAPTURA EVENTO DE SUBMIT DO FORMULÁRIO
form.onsubmit = (e) => {
  //NÃO recarregar página.
  e.preventDefault()

  // nova dispesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  // chama a função de adicionar o item na lista.
  expenseAdd(newExpense)
}

function expenseAdd(newExpense){
  try {
    // criar o elemento para adicionar na lista.
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    // criar o icone da categoria
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    // adicionar informarções no item
    expenseItem.append(expenseIcon)
    
    // adiciona item na lista
    expenseList.append(expenseItem)

  } catch (error) {
    alert("não foi possível atualizar.")
    console.log(error)
  }
}