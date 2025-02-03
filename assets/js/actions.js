var extraBtn = document.getElementById('btn-extra')
extraBtn.addEventListener('click', function() {
    let extra1 = document.getElementById('extra1')
    let extra2 = document.getElementById('extra2')
    let extra3 = document.getElementById('extra3')

    let display1 = getComputedStyle(extra1).display
    if (display1 == 'none') {
        extra1.style.display = 'block'
        extra2.style.display = 'block'
        extra3.style.display = 'block'
        extraBtn.innerText = 'Mostrar menos'
    }
    else {
        extra1.style.display = 'none'
        extra2.style.display = 'none'
        extra3.style.display = 'none'
        extraBtn.innerText = 'Mostrar mais'
    }
})

var planejaLogo = document.getElementById('planeja-facil')
var rotacionado = false
planejaLogo.addEventListener('click', function() {
    if (rotacionado == false) {
        planejaLogo.style.transform = 'rotate(360deg)'
        rotacionado = true
    }
    else {
        planejaLogo.style.transform = 'rotate(-360deg)'
        rotacionado = false
    }
})

var email = document.getElementById('email')
var iconeEmail = document.getElementById('icone-email')
email.addEventListener("mouseover", function() {
    iconeEmail.style.display = 'block'
    setTimeout(() => {
        iconeEmail.style.transform = 'rotate(360deg)'
    }, '500');
    
})