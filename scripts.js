
 function sorte() {
    var input1 = Math.ceil(document.querySelector(".input-1").value)
    var input2 = Math.floor(document.querySelector(".input-2").value)

    var result = Math.floor(Math.random() * (input1 - input2 + 1)) + input2;



    if (input2 < input1) {
        alert(result)
    }
    else {
        alert("O valor MIN tem que ser maior que o valor MAX")
    }
} 
