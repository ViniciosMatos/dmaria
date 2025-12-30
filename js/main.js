document.addEventListener('DOMContentLoaded', function () {

    // CAPTURANDO AS SECTIONS
    const monteMenu = document.querySelector('#normalKits')
    const miniMonteMenu = document.querySelector('#miniKits')
    const boloMenu = document.querySelector('#boloFake')
    const categorySelect = document.querySelector('select')

    if (!monteMenu || !categorySelect) return

    function showThisMenuRent(button) {

        // esconde todas as sessões
        monteMenu.classList.add('hidden')
        miniMonteMenu.classList.add('hidden')
        boloMenu.classList.add('hidden')

        if (button === 'selectMonte') {
            // mostra esta sessão
            monteMenu.classList.remove('hidden')
            return
        }
        if (button === 'selectMiniMonte') {
            // mostra esta sessão
            miniMonteMenu.classList.remove('hidden')
        }
        if (button === 'selectBolo') {
            // mostra esta sessão
            boloMenu.classList.remove('hidden')
        }
    }

    function selectCategory(categoryParameter){
        if (categoryParameter === 'monte'){
            categorySelect.value = 'selectMonte'
            showThisMenuRent('selectMonte')
        } else if (categoryParameter === 'bolo'){
            categorySelect.value = 'selectBolo'
            showThisMenuRent('selectBolo')
        } else {
            showThisMenuRent(categorySelect.value)
        }
    }

    function getUrlParameter(url){
        const urlParameter = new URLSearchParams(window.location.search)
        return urlParameter.get(url)
    }

    const category = getUrlParameter('category')

    if (category){
        selectCategory(category)
    } else {
        showThisMenuRent(categorySelect.value)
    }

    categorySelect.addEventListener('change', function (){
        showThisMenuRent(this.value)
    })
}
)


// // ESCUTANDO BOTÃO OPTIONS
// const monte = document.querySelector('#selectMonte')
// const miniMonte = document.querySelector('#selectMiniMonte')
// const boloFake = document.querySelector('#selectBolo')

// // ESCUTANDO BOTÕES VER MAIS NO INDEX
// const indexMonte = document.querySelector('#indexMonte')
// const indexBoloFake = document.querySelector('#indexBolo')



