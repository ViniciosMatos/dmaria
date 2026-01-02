document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrinho();
});



function renderizarCarrinho() {
    
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];

    const containerCarrinho = document.querySelector('#lista-do-carrinho');
    const containerTotal = document.querySelector('#resumo-total');

    
    containerCarrinho.innerHTML = '';
    if (containerTotal) containerTotal.innerHTML = '';

    
    if (carrinho.length === 0) {
        containerCarrinho.innerHTML = `
            <div class="alert alert-warning text-center">
                Seu carrinho está vazio. <a href="../index.html">Voltar as compras</a>
            </div>`;
        return;
    }

    let valorTotalCarrinho = 0;

    
    carrinho.forEach(item => {
        
        const precoPorItem = parseFloat(item.price);
        const quantidade = parseInt(item.quant);
        const subtotal = precoPorItem * quantidade;

        valorTotalCarrinho += subtotal;

        containerCarrinho.innerHTML += `
            <div class="item-carrinho card mb-3 p-3 shadow-sm">
                <div class="d-flex gap-3">
                    
                    <img src="${item.img}">
                    
                    <div class="flex-grow-1">
                        <h5 class="mb-1 fs-6">${item.name}</h5>
                        <p class="text-muted mb-2">Unitário: R$ ${precoPorItem.toFixed(2).replace('.', ',')}</p>
                        
                        <div class="d-flex align-items-center gap-2">
                            <button class="btn btn-sm btn-outline-danger" onclick="alterarQuantidade('${item.cod}', -1)">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            
                            <span class="fw-bold px-2 border rounded bg-light">${quantidade}</span>
                            
                            <button class="btn btn-sm btn-outline-success" onclick="alterarQuantidade('${item.cod}', 1)">
                                <i class="fa-solid fa-plus"></i>
                            </button>

                             <button class="btn btn-sm btn-danger ms-3" onclick="removerItem('${item.cod}')" title="Excluir">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>

                    <div class="">
                        <p class="fw-bold fs-5 text-center text-success">R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
            </div>
        `;
    });

    const totalFormatado = valorTotalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const carrinhoMain = document.querySelector('.carrinho-compras');

    const resumoAntigo = document.querySelector('.carrinho-infos');
    if (resumoAntigo) resumoAntigo.remove();

    carrinhoMain.innerHTML += `
        <section class="carrinho-infos border p-4 bg-white rounded shadow-sm mt-3">
            <h3 class="mb-3 text-center">Resumo do Pedido</h3>
            <div class="d-flex justify-content-between align-items-center border-top pt-3">
                <span class="fs-5">Total a Pagar:</span>
                <span class="fs-2 fw-bold text-success">${totalFormatado}</span>
            </div>
            <button class="btn btn-success w-100 mt-3 py-2 fw-bold" onclick="finalizarWhatsApp()">
                <i class="fa-brands fa-whatsapp"></i> Finalizar Pedido
            </button>
            <button class="btn btn-danger w-100 mt-4" onclick="limparCarrinho()"> 
                Limpar Carrinho
            </button>
        </section>
    `;

    return totalFormatado
}


function alterarQuantidade(idProduto, mudanca) {
    
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];

    const index = carrinho.findIndex(item => item.cod == idProduto);

    if (index !== -1) {
        let qtdAtual = parseInt(carrinho[index].quant || carrinho[index].quantidade);

        qtdAtual += mudanca;

        if (qtdAtual < 1) {
            qtdAtual = 1;
        }

        if (carrinho[index].quant) carrinho[index].quant = qtdAtual;
        if (carrinho[index].quantidade) carrinho[index].quantidade = qtdAtual;

        localStorage.setItem('carrinhoDMaria', JSON.stringify(carrinho));

        renderizarCarrinho();
    }
}

function removerItem(idProduto) {
    if (!confirm("Deseja remover este item do carrinho?")) return;

    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];

    const novoCarrinho = carrinho.filter(item => item.cod != idProduto);

    localStorage.setItem('carrinhoDMaria', JSON.stringify(novoCarrinho));
    renderizarCarrinho();
}

function limparCarrinho() {
    if (!confirm("Deseja limpar o carrinho?")) return
    localStorage.clear();
    renderizarCarrinho();
}

function finalizarWhatsApp() {
    let carrinhoFinalizado = JSON.parse(localStorage.getItem('carrinhoDMaria'))

    let mensagem = encodeURIComponent(`*PEDIDO DMARIA DECORAÇÕES*
    
*Lista*:
`)

    let numeroLista = 0
    let valorTotal = 0

    carrinhoFinalizado.forEach(item => {
        let nome = item.name
        const quantidade = parseInt(item.quant)
        const valor = parseFloat(item.price)
        const codigo = item.cod
        const subtotal = valor * quantidade
        const subtotalFormatado = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        numeroLista += 1
        valorTotal += valor

        mensagem += encodeURIComponent(`${numeroLista}. (${quantidade}x) ${nome} [${subtotalFormatado}]
`)

    })

    mensagem += encodeURIComponent(`

*Valor Total: ${renderizarCarrinho()}*`)

    const linkWhatsapp = `https://wa.me/5551994808982?text=${mensagem}`
    console.log(linkWhatsapp)
    window.open(linkWhatsapp, '_blank')
}