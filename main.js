
// Componentes de ventana de escritorio
let [rswWindowControlsBar] = [
    require('./components/RSWWindowControlsBar.vue').default
]

// Componentes de estructura
let [rswModal, rswHeader] = [
    require('./components/RSWModal.vue').default,
    require('./components/RSWHeader.vue').default
]

// Componentes de formulario
let [rswForm, rswFieldInput, rswToggleInput] = [
    require('./components/RSWForm.vue').default,
    require('./components/RSWFieldInput.vue').default,
    require('./components/RSWToggleInput.vue').default
]

// En linea
let [rswNavList] = [
    require('./components/RSWNavList.vue').default
]

module.exports = {rswFieldInput, rswForm, rswModal, rswWindowControlsBar, rswHeader, rswNavList, rswToggleInput}