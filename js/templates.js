// js/items.js

const itemsList = [
    // --- KITS PEGUE E MONTE (normalKits) ---
    {
        codigo: "PM001",
        nome: "Kit Pegue e Monte | Fundo do Mar",
        preco: 50.00,
        imagem: "/images/alugar/pegue_e_monte/kit/animais_marinhos_kit.png",
        categoria: "normalKits"
    },
    {
        codigo: "PM002",
        nome: "Kit Pegue e Monte | Exemplo 2",
        preco: 60.00,
        imagem: "/images/alugar/pegue_e_monte/kit/moana_kit.png",
        categoria: "normalKits"
    },

    // --- MINI KITS (miniKits) ---
    {
        codigo: "MK001",
        nome: "Mini Kit | ABC",
        preco: 25.00,
        imagem: "/images/alugar/pegue_e_monte/mini_kit/abc_mini_kit.png",
        categoria: "miniKits"
    },
    {
        codigo: "MK002",
        nome: "Mini Kit | Barbie",
        preco: 25.00,
        imagem: "/images/alugar/pegue_e_monte/mini_kit/barbie_mini_kit.png",
        categoria: "miniKits"
    },

    // --- BOLO FAKE (boloFake) ---
    {
        codigo: "BF001",
        nome: "Bolo Fake | Cinderela",
        preco: 150.30,
        imagem: "/images/alugar/bolo_fake/bolo_cinderela.png",
        categoria: "boloFake"
    },
    {
        codigo: "BF002",
        nome: "Bolo Fake | Branco e Vermelho",
        preco: 50.00,
        imagem: "/images/alugar/bolo_fake/bolo_braco_bascio.png",
        categoria: "boloFake"
    }
];

function renderItems() {
    
    itemsList.forEach(item => {
        
        const container = document.getElementById(item.categoria);

        
        if (container) {
            const cardHTML = `
                <div class="card dmaria-card buy-product">
                    <img src="${item.imagem}" alt="${item.nome}" class="card-img">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <p class="card-text">
                            ${item.nome}
                        </p>
                        <div class="d-flex justify-content-between">
                            <p class="fw-bold"> R$ ${item.preco.toFixed(2).replace('.', ',')} </p>
                            <p class="fw-semibold">CÓDIGO: ${item.codigo}</p>
                        </div>
                        <button class="btn bg-primary w-50 align-self-center"
                            data-img="${item.imagem}"
                            data-name="${item.nome}"
                            data-price="${item.preco}"
                            data-cod="${item.codigo}"
                            onclick="addShoppingCar(this)">
                            Adicionar
                        </button>
                    </div>
                </div>
            `;
            
            
            container.innerHTML += cardHTML;
        }
    });
}


document.addEventListener('DOMContentLoaded', renderItems);