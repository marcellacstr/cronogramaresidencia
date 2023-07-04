
let input = document.getElementById('inputTarefa');

let btnAdd = document.getElementById('btn-add');

let main = document.getElementById('areaLista');

let contador = 0; 

function addTarefa(){

	//pegar o valor digitado no input

	let valorInput = input.value; 

	// o valor input não pode ser vazio, nem nulo nem indefinido 

	if((valorInput !== "") && (valorInput !== " ") && (valorInput != null) && (valorInput !== undefined)){
		//adiciona um número ao contador para sabermos depois qual número deletar

		++contador;

		let novoItem = `
			<div id="${contador}" class="item">
				<div onclick="marcarTarefa(${contador})" class="item-icone">
					<span id="icone_${contador}" class="material-symbols-outlined iconeGrande">check_box_outline_blank</span>
				</div>
				<div onclick="marcarTarefa(${contador})" class="item-nome">
					${valorInput} 
				</div>
				<div class="item-botao">
					<button onclick="deletarTarefa(${contador})" class="delete">
						<span class="material-symbols-outlined">delete</span>
					</button>
				</div>
			</div>
		`
		//o inner HTML do main recebe o que ele já tinha + um item novo

		main.innerHTML += novoItem;

	//zera de volta o input 
	input.value = "";
	input.focus();


}
}

input.addEventListenter("keyup", function(event) {
	// se a pessoa teclou enter
	if(event.keyCode === 13 || event.KeyCode === 36) {
		//ignore qualquer outra coisa que o enter normalmente faria
		event.preventDefault();
		//interprete o enter como um clique no elemento que tem ID btnAdd. e aí chama a função addTarefa
		btnAdd.click();
	}
})

function deletarTarefa(id){
	var tarefa = document.getElementById(id);
	tarefa.remove();

}

function marcarTarefa(id){
	var item = document.getElementById(id); //pega o valor do contador para saber qual o id contador daquele item
	var classe = item.getAttribute('class'); //descobre qual a classe daquela div

	//descobre se o elemento já foi clicado ou não
	if (classe == "item"){
		item.classList.add('clicado'); //adiciona a classe CLICADO na lista de classes daquele elemento; 

		var icone = document.getElementById('icone_' + id); //pega o ID desse ícone

		icone.replaceChildren(); //limpa tudo que tá dentro dele

		icone.innerHTML = "check_box"; //troca o interior do ícone por esse nome. O que altera o ícone

		item.parentNode.appendChild(item);
	} else {
		item.classList.remove('clicado');

		var icone = document.getElementById('icone_' + id); 

		icone.replaceChildren();

		icone.innerHTML = "check_box_outline_blank";
	}
}







