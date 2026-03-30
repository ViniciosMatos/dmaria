document.addEventListener('DOMContentLoaded', function () {
    const initialFilter = document.getElementById('initialFilter')

    const boloSection = document.getElementById('boloFake');
    const conjuntosGrandesSection = document.getElementById('conjuntosGrandes');
    const conjuntosPequenosSection = document.getElementById('conjuntosPequenos');
    const cortinasSection = document.getElementById('cortinas');
    const mesasSection = document.getElementById('mesas');
    const tapetesSection = document.getElementById('tapetes');
    const vasosSection = document.getElementById('vasos');
    const adicionaisSection = document.getElementById('adicionais');

    const filterSection = document.querySelectorAll('.chooseCategory');

    let boldFilter = initialFilter;

    function hideCategory(element) {
        const category = element.value;

        boldFilter.classList.remove('fw-bold');
        element.classList.add('fw-bold');
        boldFilter = element;

        boloSection.classList.add('hidden');
        conjuntosGrandesSection.classList.add('hidden');
        conjuntosPequenosSection.classList.add('hidden');
        cortinasSection.classList.add('hidden');
        mesasSection.classList.add('hidden');
        tapetesSection.classList.add('hidden');
        vasosSection.classList.add('hidden');
        adicionaisSection.classList.add('hidden');



        if (category === 'boloFake') {
            boloSection.classList.remove('hidden');
        }
        if (category === 'conjuntosGrandes') {
            conjuntosGrandesSection.classList.remove('hidden');
        }
        if (category === 'conjuntosPequenos') {
            conjuntosPequenosSection.classList.remove('hidden');
        }
        if (category === 'cortinas') {
            cortinasSection.classList.remove('hidden');
        }
        if (category === 'mesas') {
            mesasSection.classList.remove('hidden');
        }
        if (category === 'tapetes') {
            tapetesSection.classList.remove('hidden')
        }
        if (category === 'vasos') {
            vasosSection.classList.remove('hidden');
        }
        if (category === 'adicionais') {
            adicionaisSection.classList.remove('hidden');
        }

    }


    filterSection.forEach(categoryFilter => {
        categoryFilter.addEventListener('click', function () {
            hideCategory(this);
        });
    });

});