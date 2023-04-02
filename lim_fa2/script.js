function add(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = +x + +y;

    document.getElementById("result").innerHTML = "The sum of " + x + " and " + y + " is " + z + ".";
}

function sub(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x - y;

    document.getElementById("result").innerHTML = "The difference of " + x + " and " + y + " is " + z + ".";
}

function mul(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x * y;

    document.getElementById("result").innerHTML = "The product of " + x + " and " + y + " is " + z + ".";
}

function div(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x / y;

    document.getElementById("result").innerHTML = "The quotient of " + x + " and " + y + " is " + z + ".";
}

function mod(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var z = x % y;

    document.getElementById("result").innerHTML = "The remainder of " + x + " and " + y + " is " + z + ".";
}