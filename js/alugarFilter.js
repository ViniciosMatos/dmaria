document.addEventListener('DOMContentLoaded', function () {
    const boloSection = document.querySelector('#boloFake')
    const conjuntosGrandesSection = document.querySelector('#conjuntosGrandes')
    const conjuntosPequenosSection = document.querySelector('#conjuntosPequenos')
    const cortinasSection = document.querySelector('#cortinas')
    const mesasSection = document.querySelector('#mesas')
    const tapetesSection = document.querySelector('#tapetes')
    const vasosSection = document.querySelector('#vasos')
    const adicionaisSection = document.querySelector('#adicionais')

    const filterSection = document.querySelectorAll('.chooseCategory')

    function hideCategory(category) {
        console.log("Funciona")
        console.log(category)

        boloSection.classList.add('hidden')
        conjuntosGrandesSection.classList.add('hidden')
        conjuntosPequenosSection.classList.add('hidden')
        cortinasSection.classList.add('hidden')
        mesasSection.classList.add('hidden')
        tapetesSection.classList.add('hidden')
        vasosSection.classList.add('hidden')
        adicionaisSection.classList.add('hidden')

        if (category === 'boloFake') {
            boloSection.classList.remove('hidden')
        }
        if (category === 'conjuntosGrandes') {
            conjuntosGrandesSection.classList.remove('hidden')
        }
        if (category === 'conjuntosPequenos') {
            conjuntosPequenosSection.classList.remove('hidden')
        }
        if (category === 'cortinas') {
            cortinasSection.classList.remove('hidden')
        }
        if (category === 'mesas') {
            mesasSection.classList.remove('hidden')
        }
        if (category === 'tapetes') {
            tapetesSection.classList.remove('hidden')
        }
        if (category === 'vasos') {
            vasosSection.classList.remove('hidden')
        }
        if (category === 'adicionais') {
            adicionaisSection.classList.remove('hidden')
        }

    }


    filterSection.forEach(category => {
        category.addEventListener('click', function () {
            hideCategory(this.value)
        })
    });

})