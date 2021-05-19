const $ = (id) => document.getElementById(id)

/*Descargar el meme, aplico la función y con domtoimage capturo la imagen */
/*blob es un objeto */
const descargarMeme = () =>{
  domtoimage.toBlob($('canvas-meme')).then(function (blob){
    saveAs(blob, 'mi-meme.png')
  })
}

/*inicializar temas */
const inicializarTemas = () => {
    $('boton-tema-oscuro').addEventListener('click', cambiarModoClaro)
    $('boton-tema-claro').addEventListener('click', cambiarModoOscuro)
  }
const inicializarPaneles = () => {
  $('panel-img-boton').addEventListener('click', () => {
    mostrarPanelImagen()
    mostrarPanel()
  })
  $('texto-panel-boton').addEventListener('click' , () => {
    mostrarPanelTexto()
    mostrarPanel()
  })
  $('panel-cerrar-boton').addEventListener('click', ocultarPanel)
}
const inicializarImagen = () => {
  $('url-img-input').addEventListener('input', actualizarImagen)
  $('blend-mode-color-input').addEventListener('input', actualizarColorMezcla)
  $('blend-mode-select').addEventListener('change', actualizarTipoMezcla)
  $('brightness-slider').addEventListener('change', actualizarFiltros)
  $('opacity-slider').addEventListener('change', actualizarFiltros)
  $('blur-slider').addEventListener('change', actualizarFiltros)
  $('contrast-slider').addEventListener('change', actualizarFiltros)
  $('grayscale-slider').addEventListener('change', actualizarFiltros)
  $('hue-slider').addEventListener('change', actualizarFiltros)
  $('sepia-slider').addEventListener('change', actualizarFiltros)
  $('saturate-slider').addEventListener('change', actualizarFiltros)
  $('invert-slider').addEventListener('change', actualizarFiltros)
  $('default-filters-button').addEventListener('click', reestrablecerFiltros)

  window.addEventListener('resize', ajustarImagen)
}
const inicializarTexto = () => {
  $('top-text-input').addEventListener('input', actualizarTextos)
  $('bottom-text-input').addEventListener('input', actualizarTextos)
  $('no-top-text-checkbox').addEventListener('change', alternarTextos)
  $('no-bottom-text-checkbox').addEventListener('change', alternarTextos)
  $('text-font-select').addEventListener('change', actualizarFuente)
  $('text-size-input').addEventListener('input', actualizarTamanioTexto)
  $('text-left-align-button').addEventListener('click', () =>
    alinearTexto('left')
  )
  $('text-center-align-button').addEventListener('click', () =>
    alinearTexto('center')
  )
  $('text-right-align-button').addEventListener('click', () =>
    alinearTexto('right')
  )
  $('text-color-input').addEventListener('input', actualizarColorTexto)
  $('text-background-color-input').addEventListener(
    'input',
    actualizarFondoTexto
  )
  $('text-no-background-checkbox').addEventListener('change', () => {
    actualizarFondoTexto()
    actualizarPosicionTexto()
  })
  $('no-outline-button').addEventListener('click', () => {
    actualizarContorno('ninguno')
  })
  $('light-outline-button').addEventListener('click', () => {
    actualizarContorno('claro')
  })
  $('dark-outline-button').addEventListener('click', () => {
    actualizarContorno('oscuro')
  })
  $('padding-input').addEventListener('input', actualizarEspaciado)
  $('line-height-input').addEventListener('change', actualizarInterlineado)

  window.addEventListener('resize', ajustarTexto)
}
const inicializarValoresDefault = () => {
  ajustarImagen()
  actualizarFuente()
  actualizarColorTexto()
  actualizarFondoTexto()
  actualizarPosicionTexto()
  ajustarTexto()
}
const inicializar = () => {
    inicializarTemas()
    inicializarPaneles()
    inicializarImagen()
    inicializarTexto()
    inicializarValoresDefault()
  
    $('descargar-meme').addEventListener('click', descargarMeme)
  }
  window.onload = inicializar


/*tema */
const cambiarModoOscuro =() =>{
    document.body.classList.remove('tema-claro')
    document.body.classList.add('tema-oscuro')
}
const cambiarModoClaro = () =>{
    document.body.classList.remove('tema-oscuro')
    document.body.classList.add('tema-claro')
}
/*Imagen */
const actualizarImagen = (evento) =>{
    if(evento.target.value.length !==0){
        $('img-meme').style.backgroundImage=`url("${evento.target.value}")`
    }
}
const actualizarColorMezcla = (evento) =>{
  $('blend-mode-color').innerText = evento.target.value.toUpperCase()
  $('img-meme').style.backgroundColor = evento.target.value
}
const actualizarTipoMezcla = (evento) =>{
  $('img-meme').style.backgroundBlendMode = evento.target.value
}

/* parte de texto hace mica */
/*Paneles */
const ocultarPanel = () => {
    $('panel').classList.add('oculto')
  }
  
  const mostrarPanel = () => {
    $('panel').classList.remove('oculto')
  }
  
  const mostrarPanelImagen = () => {
    $(`panel-text`).classList.add('oculto')
    $(`panel-img`).classList.remove('oculto')
  }
  
  const mostrarPanelTexto = () => {
    $(`panel-img`).classList.add('oculto')
    $(`panel-text`).classList.remove('oculto')
  }