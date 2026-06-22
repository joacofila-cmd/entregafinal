function abrirMenu() {
    let menu = document.querySelector('#menu')
    menu.classList.toggle('abierto')
}
function seleccionarMonto(elemento, valor) {
    // Saca la clase seleccionado de todos los montos
    let montos = document.querySelectorAll('.monto-item')
    montos.forEach(function(monto) {
        monto.classList.remove('seleccionado')
    })

    // Marca el seleccionado y pone el valor en el input
    elemento.classList.add('seleccionado')
    document.getElementById('monto').value = valor
}