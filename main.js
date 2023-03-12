window.onload = function() {
    footer()

    offerBdg()
    // invisible() 
}

function footer() {  
    let nViaggi = document.querySelectorAll('img').length -4
    let span = document.createElement('span')
    span.classList.add('text-light')
    span.innerHTML = 'Questa pagina contiene ' + nViaggi + ' offerte di viaggio!'
    document.querySelector('#conteggio').appendChild(span)
}

function offerBdg() { 
    let nCard = document.querySelectorAll('#wel-summer .card-body') 
    // for (let badge of nCard) {
        
    // }
    for (let i = 0; i < nCard.length; i++) {
        const badge = nCard[i]
        let span = `<span class="position-absolute top-100 start-100 translate-middle text-warning bg-danger p-2 border border-light rounded-circle">HOT</span>`
        badge.innerHTML += span
    }
}

function invisible() {
    let card = document.querySelectorAll('.card') 
    // for (let badge of nCard) {
        
    // }
    for (let i = 0; i < card.length; i++) {
        const removeCard = card[i]
        let span = `<span class="text-danger bg-success text-center">HOT</span>`
        removeCard.remove()
    }
}