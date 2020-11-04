//const URL="https://java-api-spring-bot.herokuapp.com/validacpf?cpf="
const URL="https://vanilla-cpf-tt.herokuapp.com/validacpf?cpf="
function validar(){

	var txtCPF = document.getElementById("txtCpf").value;

	fetch(URL+txtCPF)
	   .then(res=>res.json())
	   .then(res=>verifica(res))
}

function verifica(res){
	if (res.status == "valido"){
		document.getElementById("msgResult").innerHTML = "<h3 class=\"valido\"> CPF Valido </h3>";

	}
	else{
		document.getElementById("msgResult").innerHTML = "<h3 class=\"invalido\"> CPF Invalido </h3>";
	}
}
