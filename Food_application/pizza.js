
var x = document.querySelectorAll("card-text");
x.addEventListener('click', clickFunction, false);

function clickFunction(){
    var x = document.getElementsByClassName("card-text")[0];
    document.getElementById("order").innerHTML = x.innerText;
}

    
    

    /*var items = document.getElementsByClassName("card-text");
    for (var i = 0; i < items.length; i++) {
        var price = items[i].innerText;
        document.getElementById("order").innerHTML = items.innerText;    
    }*/
