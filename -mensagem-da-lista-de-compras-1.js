function obtenhaMensagem(valor) {
    console.log(valor)

    // remova isso quando você começar a resolver este projeto
    if(valor<0){
      return "Número inválido";
    }
    if(valor === 0){
      return "Você não tem nenhum item em sua lista de compras";
    }
    if(valor === 1){
      return "Você tem 1 item em sua lista de compras";
    }
    if(valor > 1){
      return "Você tem mais de 1 item em sua lista de compras";
    }
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
	<h2>Lista de Compras</h2>
    <button id="dv-sub-item" class="btn btn-accent"
		> - </button>
    <input type="number" id="dv-items-count" value="0" 
		readonly class="textbox" />
    <button id="dv-add-item" class="btn btn-accent"
		> + </button>
    <p id="dv-message">
		</p>
</div>
`);

let itemsCount = document.querySelector("#dv-items-count");

function dvRenderizaMensagem() {
    let value = Number.parseInt(itemsCount.value, 10)
    let message = obtenhaMensagem(value)
    document.querySelector("#dv-message").textContent = message
}

document.querySelector("#dv-add-item").addEventListener("click", () => {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
    dvRenderizaMensagem();
});

document.querySelector("#dv-sub-item").addEventListener("click", () => {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) - 1;
    dvRenderizaMensagem();
});