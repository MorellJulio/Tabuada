function tabuada(){
    //Número ditavel
    var num = document.getElementById('txtnum')
    //div com resultado
    var res = document.getElementById('resultado')
    //tabuada
    if(num.value.length == 0){
        alert('Por favor insira um número!')
    }else{
        var n = Number(num.value)
        res.innerHTML = ''//limpa a div antes de colocar a tabuada 
        for(var c = 1; c <= 10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c}<br>`
        }
    }
}