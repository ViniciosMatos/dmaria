// Função principal que roda ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrinho();
});

// Função que desenha o carrinho na tela
function renderizarCarrinho() {
    // 1. Pega os dados atualizados
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];
    
    const containerCarrinho = document.querySelector('#lista-do-carrinho');
    const containerTotal = document.querySelector('#resumo-total'); // Criei um ID específico para o resumo
    
    // Limpa a tela antes de desenhar (evita duplicar itens ao atualizar)
    containerCarrinho.innerHTML = '';
    if(containerTotal) containerTotal.innerHTML = '';

    // Se vazio, mostra aviso
    if (carrinho.length === 0) {
        containerCarrinho.innerHTML = `
            <div class="alert alert-warning text-center">
                Seu carrinho está vazio. <a href="../index.html">Voltar as compras</a>
            </div>`;
        return;
    }

    let valorTotalCarrinho = 0;

    // 2. Loop para desenhar cada item
    carrinho.forEach(item => {
        // Garante que são números para o cálculo
        const precoPorItem = parseFloat(item.price); 
        const quantidade = parseInt(item.quant);
        const subtotal = precoPorItem * quantidade;

        valorTotalCarrinho += subtotal;

        containerCarrinho.innerHTML += `
            <div class="item-carrinho card mb-3 p-3 shadow-sm">
                <div class="d-flex align-items-center gap-3">
                    
                    <img src="${item.img}">
                    
                    <div class="flex-grow-1">
                        <h5 class="mb-1">${item.name}</h5>
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

                    <div class="text-end">
                        <p class="fw-bold fs-5 text-success">R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // 3. Exibe o Resumo Final (Total)
    const totalFormatado = valorTotalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // Procura onde desenhar o total. Se não existir a div #resumo-total, desenha no carrinhoMain
    const carrinhoMain = document.querySelector('.carrinho-compras');
    
    // Remove resumo antigo se houver para não duplicar
    const resumoAntigo = document.querySelector('.carrinho-infos');
    if(resumoAntigo) resumoAntigo.remove();

    carrinhoMain.innerHTML += `
        <section class="carrinho-infos border p-4 bg-white rounded shadow-sm mt-3">
            <h3 class="mb-3">Resumo do Pedido</h3>
            <div class="d-flex justify-content-between align-items-center border-top pt-3">
                <span class="fs-5">Total a Pagar:</span>
                <span class="fs-2 fw-bold text-success">${totalFormatado}</span>
            </div>
            <button class="btn btn-success w-100 mt-3 py-2 fw-bold" onclick="finalizarWhatsApp()">
                <i class="fa-brands fa-whatsapp"></i> Finalizar Pedido
            </button>
        </section>
    `;
}

// --- FUNÇÕES DE AÇÃO (PRECISAM FICAR FORA DO DOMContentLoaded) ---

function alterarQuantidade(idProduto, mudanca) {
    // 1. Pega o carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];

    // 2. Encontra o item pelo ID
    const index = carrinho.findIndex(item => item.cod == idProduto);

    if (index !== -1) {
        // 3. Verifica nomes das variáveis (para compatibilidade com seu código antigo)
        let qtdAtual = parseInt(carrinho[index].quant || carrinho[index].quantidade);
        
        // 4. Aplica a mudança (+1 ou -1)
        qtdAtual += mudanca;

        // 5. Se for menor que 1, não faz nada (ou poderia remover)
        if (qtdAtual < 1) {
            qtdAtual = 1; 
        }

        // 6. Salva o novo valor
        if(carrinho[index].quant) carrinho[index].quant = qtdAtual;
        if(carrinho[index].quantidade) carrinho[index].quantidade = qtdAtual;

        localStorage.setItem('carrinhoDMaria', JSON.stringify(carrinho));
        
        // 7. MÁGICA: Renderiza tudo de novo para atualizar os preços na tela
        renderizarCarrinho();
    }
}

function removerItem(idProduto) {
    if(!confirm("Deseja remover este item do carrinho?")) return;

    let carrinho = JSON.parse(localStorage.getItem('carrinhoDMaria')) || [];
    
    // Filtra criando uma nova lista SEM o item que queremos apagar
    const novoCarrinho = carrinho.filter(item => item.cod != idProduto);

    localStorage.setItem('carrinhoDMaria', JSON.stringify(novoCarrinho));
    renderizarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem('carrinhoDMaria');
    renderizarCarrinho();
}