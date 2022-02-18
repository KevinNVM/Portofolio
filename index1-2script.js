// get input ids

var input_fields = document.getElementById('a1').value;

// buttons to input fields

function btn1() {
	document.getElementById("a1").value += "1"
	}

function btn2() {
	document.getElementById("a1").value += "2"
	}

function btn3() {
	document.getElementById("a1").value += "3"
	}

function btn4() {
	document.getElementById("a1").value += "4"
	}

function btn5() {
	document.getElementById("a1").value += "5"
	}

function btn6() {
	document.getElementById("a1").value += "6"
	}

function btn7() {
	document.getElementById("a1").value += "7"
	}

function btn8() {
	document.getElementById("a1").value += "8"
	}

function btn9() {
	document.getElementById("a1").value += "9"
	}

function btn0() {
	document.getElementById("a1").value += "0"
	}

function btnplus() {
	document.getElementById("a1").value += "+"
	}

function btnmin() {
	document.getElementById("a1").value += "-"
	}

function btntimes() {
	document.getElementById("a1").value += "*"
	}

function btndivide() {
	document.getElementById("a1").value += "/"
	}

function btndot() {
	document.getElementById("a1").value += "."
	}

function btndel() {
	var xyz = document.getElementById("a1").value
	console.log(xyz)
	var yxz = xyz.substring(0, xyz.length - 1);
	document.getElementById("a1").value = yxz
	}

function count() {
	var result = eval(document.getElementById("a1").value)
	document.getElementById("a1").value = result
	}

function btnclear() {
	document.getElementById('a1').value = " "
	}

function btnpercent() {
	document.getElementById("a1").value += "%"
	}


/////////////////////////////////////////////////////////////////////////////////////


















































