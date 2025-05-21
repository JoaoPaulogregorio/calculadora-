let formulario = document.querySelector("#calculadora")
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event)

    let valorDoVeiculo = event.target.valorDoVeiculo.value
    let valorDeEntrada = event.target.valorDeEntrada.value
    let numeroDeParcelas = event.target.numeroDeParcelas.value
    let taxaDeJuros = event.target.taxaDeJuros.value

    let valorFinanciado = valorDoVeiculo - valorDeEntrada

    let divValorFinanciado = document.querySelector("#valor-financiado")
    divValorFinanciado.textContent = "R$" + valorFinanciado
    
    })

document.querySelector("#valorDoVeículo").addEventListener("keyup"), function(event) {
    console.log(event.target.value)
    let valorDoVeículo = event.target.value.trim()
    let valorDeEntrada = document.querySelector("#valorDeEntrada").value.trim()
    if (valorDoVeículo == "" || valorDeEntrada == "") {
       return
    }

    let divValorFinanciado = document.querySelector("#valor-financiado")
    let valorFinanciadoFloat = parseFloat(valorDoVeículo) - parseFloat(valorDeEntrada) 
    divValorFinanciado.textContent = "R$" + valorFinanciadoFloat
}

document.querySelector("#valorDeEntrada").addEventListener("keyup"), function(event) {
    console.log(event.target.value)
    let valorDeEntrada = event.target.value.trim()
    let valorDoVeículo = document.querySelector("#valorDoVeículo").value.trim()
    if (valorDoVeículo == "" || valorDeEntrada == "") {
       return
}

    let divValorFinanciado = document.querySelector("#valor-financiado")
    let valorFinanciadoFloat = parseFloat(valorDoVeículo) - parseFloat(valorDeEntrada) 
    divValorFinanciado.textContent = "R$" + valorFinanciadoFloat
}
document.querySelector("#valorDeEntrada").addEventListener("keyup", function(event){
    alert(event.target.value)   

})
