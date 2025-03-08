// ELEMENTOS DO FORMULÁRIO.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// selecionar elementos da lista
const expenseList = document.querySelector("ul")
const expensesTotal = document.querySelector("aside header h2") 
const expensesQuantity = document.querySelector("aside header p span")

// CAPTURA EVENTO DO INPUT PARA FORMATAR O VALOR
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, ""); 
  value = Number(value) / 100;
  amount.value = formatCurrencyBRL(value);
}

//FORMATANDO PARA O PADRÃO REAL BRASILEIRO
function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// CAPTURA EVENTO DE SUBMIT DO FORMULÁRIO
form.onsubmit = (e) => {
  e.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
}

// ADICIONA UM NOVO ITEM NA LISTA
function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    expenseInfo.append(expenseName, expenseCategory);

    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.replace("R$", "").trim()}`;

    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);

    updateTotals();
  } catch (error) {
    alert("Não foi possível atualizar.");
    console.log(error);
  }
}

// ATUALIZAR OS TOTAIS
function updateTotals() {
  try {
    const itens = expenseList.children;

    expensesQuantity.textContent = `${itens.length} ${itens.length > 1 ? "despesas" : "despesa"}`;

    let total = 0;
    
    // percorrer cada item da lista
    for (let item of itens) {
      const itemAmount = item.querySelector(".expense-amount");
      
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".");
      
      value = parseFloat(value);

      if (isNaN(value)) {
        return alert("Não foi possível calcular o total.");
      }

      total += value;
    }

    // criar a span para adicionar o R$ formatado 
    expensesTotal.innerHTML = "";
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // formata o valor e remove o R$ do small
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")
    
    expensesTotal.innerHTML = ""

    // adiciono o simbolo e o valor total formatado
    expensesTotal.append(symbolBRL, total)

  } catch (error) {
    console.log(error);
  }
}
