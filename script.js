//parte de colocar a data
function calcular(){
    
    let dataInput = document.getElementById("date").value 
    
    if (dataInput){
        let novaData = calcularDatafutura(dataInput)
        document.getElementById("resultado").innerText = "nova data: " + novaData
    }else{
        alert("por favor, selecione uma data!")
    }
}

function calcularDatafutura(data){
    let dataInicial = new Date(data)
    let dataFinal = new Date (dataInicial)
    dataFinal.setDate(dataFinal.getDate() + 28)

    let dia = dataFinal.getDate()
    let mes = dataFinal.getMonth() + 1
    let ano = dataFinal.getFullYear()

    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`
}