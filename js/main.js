document.addEventListener('DOMContentLoaded', function () {

    // CAPTURANDO AS SECTIONS 
    const cachepoMenu = document.querySelector('#cachepo')
    const monteMenu = document.querySelector('#normalKits')
    const miniMonteMenu = document.querySelector('#miniKits')
    const mesaMenu = document.querySelector('#mesa')
    const painelMenu = document.querySelector('#painel')
    const tapeteMenu = document.querySelector('#tapete')
    const boloMenu = document.querySelector('#boloFake')

    // CAPTURANDO OS RADIOS
    const radioButtons = document.querySelectorAll('input[name="categoryFilter"]')

    if (!monteMenu) return

    function showThisMenuRent(selectedValue) {

        cachepoMenu.classList.add('hidden')
        monteMenu.classList.add('hidden')
        miniMonteMenu.classList.add('hidden')
        mesaMenu.classList.add('hidden')
        painelMenu.classList.add('hidden')
        tapeteMenu.classList.add('hidden')
        boloMenu.classList.add('hidden')

        if (selectedValue === 'selectCachepo') {
            cachepoMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectMonte') {
            monteMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectMiniMonte') {
            miniMonteMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectMesa') {
            mesaMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectPainel') {
            painelMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectTapete') {
            tapeteMenu.classList.remove('hidden')
        }
        else if (selectedValue === 'selectBolo') {
            boloMenu.classList.remove('hidden')
        }
    }

    //BOTOES OUVINDO 
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            showThisMenuRent(this.value)
        })
    })

    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get(name)
    }

    const categoryParam = getUrlParameter('category')

    const urlMap = {
        'cachepo': 'selectCachepo',
        'monte': 'selectMonte',
        'mini': 'selectMiniMonte',
        'mesa': 'selectMesa',
        'painel': 'selectPainel',
        'tapete': 'selectTapete',
        'bolo': 'selectBolo'
    }

    if (categoryParam && urlMap[categoryParam]) {
        // SE ENTRAR NO PARAMETRO COM A URL, FILTRA SOZINHO
        const radioToCheck = document.querySelector(`input[value="${urlMap[categoryParam]}"]`)
        if (radioToCheck) {
            radioToCheck.checked = true
            showThisMenuRent(radioToCheck.value)
        }
    } else {
        //SENAO PEGA O PADRAO
        const checkedRadio = document.querySelector('input[name="categoryFilter"]:checked')
        if (checkedRadio) {
            showThisMenuRent(checkedRadio.value)
        }
    }
})


function addShoppingCar(button){

    const produto = {
        cod: button.getAttribute('data-cod'),
        name: button.getAttribute('data-name'),
        price: parseFloat(button.getAttribute('data-price')),
        img: button.getAttribute('data-img'),
        quant: 1
    }


let shoppingCar = JSON.parse(localStorage.getItem('carrinhoDMaria')) || []

const itemExist = shoppingCar.find(item => item.cod == produto.cod)

if (itemExist){
    itemExist.quant += 1
    alert("Produto adicionado ao carrinho")
} else {
    shoppingCar.push(produto)
    alert("Produto adicionado ao carrinho")
}

localStorage.setItem('carrinhoDMaria', JSON.stringify(shoppingCar));

}
