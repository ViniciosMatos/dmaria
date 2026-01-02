const isGitHub = window.location.hostname.includes('github.io');

const root = isGitHub ? '/dmaria/' : '/';

const itemsList = [
    // --- KITS PEGUE E MONTE (normalKits) ---
    {
        codigo: "PM001",
        nome: "Kit Pegue e Monte | Fundo do Mar",
        preco: 50.00,
        imagem: `${root}images/alugar/pegue_e_monte/kit/animais_marinhos_kit.png`,
        categoria: "normalKits"
    },
    {
        codigo: "PM002",
        nome: "Kit Pegue e Monte | Exemplo 2",
        preco: 60.00,
        imagem: `${root}images/alugar/pegue_e_monte/kit/moana_kit.png`,
        categoria: "normalKits"
    },

    // --- MINI KITS (miniKits) ---
    {
        codigo: "MK001",
        nome: "Mini Kit | ABC",
        preco: 25.00,
        imagem: `${root}images/alugar/pegue_e_monte/mini_kit/abc_mini_kit.png`,
        categoria: "miniKits"
    },
    {
        codigo: "MK002",
        nome: "Mini Kit | Barbie",
        preco: 25.00,
        imagem: `${root}images/alugar/pegue_e_monte/mini_kit/barbie_mini_kit.png`,
        categoria: "miniKits"
    },

    // --- BOLO FAKE (boloFake) ---
    {
        codigo: "BF001",
        nome: "Bolo Fake | Cinderela",
        preco: 150.30,
        imagem: `${root}images/alugar/bolo_fake/bolo_cinderela.png`,
        categoria: "boloFake"
    },
    {
        codigo: "BF002",
        nome: "Bolo Fake | Branco e Vermelho",
        preco: 50.00,
        imagem: `${root}images/alugar/bolo_fake/bolo_braco_bascio.png`,
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

function renderHeader() {
    const tagHeader = document.querySelector('#header')

    if (tagHeader){
        const header = `
            <img src="${root}images/dmarialogo.png" alt="Logo D'Maria Decorações" class="">

            <div class="right-side d-flex align-items-center">
                <a href="${root}pages/carrinhoCompras.html">
                    <i class="fa-solid fa-cart-shopping medium-color fs-5"></i>
                </a>
                
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="offcanvas offcanvas-end text-bg light-background" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header ">
                                <h5 class="offcanvas-title medium-color" id="offcanvasNavbarLabel">D'Maria Decorações</h5>
                                <button type="button" class="btn-close btn-close d-lg-none" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>

                            <div class="offcanvas-body">

                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item ">
                                        <a class="nav-link medium-color" aria-current="page" href="${root}index.html">Início</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle medium-color" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Serviços
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu light-background">
                                            <li><a class="dropdown-item medium-color"
                                                    href="${root}pages/alugarProdutos.html?category=bolo">Bolo
                                                    Fake</a></li>
                                            <li><a class="dropdown-item medium-color"
                                                    href="${root}pages/decoracao.html">Decorações</a></li>
                                            <li><a class="dropdown-item medium-color"
                                                    href="${root}pages/comprarProdutos.html">Para
                                                    Comprar</a></li>
                                            <li><a class="dropdown-item medium-color"
                                                    href="${root}pages/alugarProdutos.html?category=monte">Pegue e
                                                    Monte</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link medium-color" href="#">Sobre Nós</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link medium-color" href="#">Contatos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        `
        tagHeader.innerHTML += header
    }
}

document.addEventListener('DOMContentLoaded', renderItems)
document.addEventListener('DOMContentLoaded', renderHeader);
