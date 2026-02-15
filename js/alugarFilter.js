document.addEventListener('DOMContentLoaded', function () {
    const boloSection = document.querySelector('#boloFake')
    const pegueMonteSection = document.querySelector('#pegueMonte')
    const miniKitsSection = document.querySelector('#miniKits')
    const mesasSection = document.querySelector('#mesas')
    const tapetesSection = document.querySelector('#tapetes')
    const vasosSection = document.querySelector('#vasos')
    const adicionaisSection = document.querySelector('#adicionais')

    const radioButtons = document.querySelectorAll('input[name="categoryFilter"]')

    function hideCategory(category) {
        boloSection.classList.add('hidden')
        pegueMonteSection.classList.add('hidden')
        miniKitsSection.classList.add('hidden')
        mesasSection.classList.add('hidden')
        tapetesSection.classList.add('hidden')
        vasosSection.classList.add('hidden')
        adicionaisSection.classList.add('hidden')

        if (category === 'bolo-fake') {
            boloSection.classList.remove('hidden')
        }

        else if (category === 'pegue-monte') {
            pegueMonteSection.classList.remove('hidden')
        }

        else if (category === 'mini-kits') {
            miniKitsSection.classList.remove('hidden')
        }

        else if (category === 'mesas') {
            mesasSection.classList.remove('hidden')
        }

        else if (category === 'tapetes') {
            tapetesSection.classList.remove('hidden')
        }

        else if (category === 'vasos') {
            vasosSection.classList.remove('hidden')
        }

        else if (category === 'adicionais') {
            adicionaisSection.classList.remove('hidden')
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            hideCategory(this.value)
        })
    })
})