// ELEMENTOS DO FORMULÁRIO.
const amount = document.getElementById("amount")


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