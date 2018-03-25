
// Componentes de ventana de escritorio
const [rswWindowControlsBar] = [
    require('./components/RSWWindowControlsBar.vue').default
]

// Componentes de estructura
const [rswModal, rswHeader] = [
    require('./components/RSWModal.vue').default,
    require('./components/RSWHeader.vue').default
]

// Componentes de formulario
const [rswForm, rswFieldInput, rswToggleInput] = [
    require('./components/RSWForm.vue').default,
    require('./components/RSWFieldInput.vue').default,
    require('./components/RSWToggleInput.vue').default
]

// En linea
const [rswNavList] = [
    require('./components/RSWNavList.vue').default
    
]

export {rswFieldInput, rswForm, rswModal, rswWindowControlsBar, rswHeader, rswNavList, rswToggleInput}