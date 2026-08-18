const button = document.querySelector("button")
const input = document.getElementById("minutos")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularFatura)

function calcularFatura() {
    const minutos = input.valueAsNumber

    if (input.value === "") {
        alert("Digite um valor válido!")
        return
    }

    if (minutos <= 100) {
        paragrafoResultado.textContent = "Fatura: R$ 50,00"
    } else {
        const fatura = (minutos - 100) * 2 + 50
        const faturaConvertidaEmReais = fatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        paragrafoResultado.textContent = `Fatura: ${faturaConvertidaEmReais}`
    }

    // paragrafoResultado.textContent = minutos <= 100 ? "Fatura: R$ 50,00" : "Fatura: " + ((minutos - 100) * 2 + 50).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}