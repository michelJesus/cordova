function mostraInputList()
{
	if (document.getElementById("inputList").style.display == "none") {
		document.getElementById("inputList").style.display = "block";
		document.getElementById("divLogin").style.display = "none";
	}else{
		document.getElementById("inputList").style.display = "none";
		document.getElementById("divLogin").style.display = "block";
	}
}

function mostraInputList2()
{
	if (document.getElementById("inputList2").style.display == "block") {
		document.getElementById("inputList2").style.display = "none";
		document.getElementById("inputList").style.display = "block";
	}else{
		document.getElementById("inputList2").style.display = "block";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList3()
{
	if (document.getElementById("inputList3").style.display == "block") {
		document.getElementById("inputList3").style.display = "none";
		document.getElementById("inputList2").style.display = "block";
	}else{
		document.getElementById("inputList3").style.display = "block";
		document.getElementById("inputList2").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList4()
{
	if (document.getElementById("inputList4").style.display == "block") {
		document.getElementById("inputList4").style.display = "none";
		document.getElementById("inputList3").style.display = "block";
	}else{
		document.getElementById("inputList4").style.display = "block";
		document.getElementById("inputList3").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList5()
{
	if (document.getElementById("inputList5").style.display == "block") {
		document.getElementById("inputList5").style.display = "none";
		document.getElementById("inputList4").style.display = "block";
	}else{
		document.getElementById("inputList5").style.display = "block";
		document.getElementById("inputList4").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList6()
{
	if (document.getElementById("inputList6").style.display == "block") {
		document.getElementById("inputList6").style.display = "none";
		document.getElementById("inputList5").style.display = "block";
	}else{
		document.getElementById("inputList6").style.display = "block";
		document.getElementById("inputList5").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList7()
{
	if (document.getElementById("inputList7").style.display == "block") {
		document.getElementById("inputList7").style.display = "none";
		document.getElementById("inputList6").style.display = "block";
	}else{
		document.getElementById("inputList7").style.display = "block";
		document.getElementById("inputList6").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList8()
{
	if (document.getElementById("inputList8").style.display == "block") {
		document.getElementById("inputList8").style.display = "none";
		document.getElementById("inputList7").style.display = "block";
	}else{
		document.getElementById("inputList8").style.display = "block";
		document.getElementById("inputList7").style.display = "none";
		document.getElementById("inputList6").style.display = "none";
		document.getElementById("inputList").style.display = "none";
	}
}

function mostraInputList9()
{
	if (document.getElementById("inputList9").style.display == "block") {
		document.getElementById("inputList9").style.display = "none";
		document.getElementById("inputList8").style.display = "block";
	}else{
		document.getElementById("inputList9").style.display = "block";
		document.getElementById("inputList8").style.display = "none";
	}
}

function mostraPopup()
{
	if (document.getElementById("backgroundPopup").style.display == "block") {
		document.getElementById("backgroundPopup").style.display = "none";
	}else{
		document.getElementById("backgroundPopup").style.display = "block";
	}
}

function mostraMenuOpcao()
{
	classe = document.getElementById('menuOpcao').className;
	if (classe == 'menu-opcao') {
		document.getElementById('menuOpcao').className = 'menu-opcao-oculta'
	} else {
		document.getElementById('menuOpcao').className = 'menu-opcao';
	};
}
