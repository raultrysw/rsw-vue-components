# Componentes de ventana de escritorio
## WindowControlsBar
Componente que tiene tres botones:
- Uno para cerrar
- Otro para minimizar
- Otro para maximizar o restaurar

# Componentes de estructura
## Header
Componente para añadirle una cabecera a la aplicacion

### Propiedades
- **title**: Título de la app

## Modal
Componente para configurar una ventana modal para la aplicación

### Propiedades
- **title**: Título de la ventana modal

### Eventos
- **Close**: El usuario cerro la aplicación dándole a la X

# Componentes de formulario
## Form
Componente para configurar un formulario para la aplicación

### Propiedades
- **submitText**: Texto del botón de submit
- **submitHandler**: Función manejadora del evento onSubmit del formulario
- **formName**: Nombre del formulario

## ToggleInput
Componente que consta de un label, que tiene dentro un input que al hacer click emite el evento input

### Propiedades
- **text**: Texto del botón

__Emite un valor booleano__

# Componentes en linea
## NavList
Componente que agrega una barra de navegación horizontal a la aplicación

### Propiedades
- **links**: Objeto con la cantidad de links que va a tener la aplicación (la clave es el texto del link y el valor link en si)