# Challenge Frontend 

Aplicacion creada con create-react-app.

Realizada con React, usando jsx y css


# Para iniciar el proyecto

### `npm start`

### `npm dev`

ambos comandos inician la aplicacion en el puerto 3000


## Estructura APP:

### Paginas

#### Layout:
  Caputar el search del usuario, onChange evalua si es una cadena de texto y actualiza el contexto.
  
  Si al capturar la busqueda, valida atraves de una expresion regular, si los caracteres son numericos. De serlo hace un redirect a /machine/ mas el ID ingresado

#### Home:
  Esta pagina se encarga de renderizar la lista de maquinas que coincidan con la busqueda del usuario.
  
  Las maquinas brindadas por el hook useMachine
  
  Los datos de busqueda llegan atraves del Context SearchContext
  

#### Machine
  Se encarga de renderizar la informacion de una maquina

  Recibe por parametros el ID de la maquina y solicita la informacion al hook useMachine
  
  En el caso de no existir la maquina con el ID ingresado, recibiremos un mensaje y nos redirige automaticamente al home

#### Custom Hooks
  UseMachine: Se encarga de llamar al servicio machine.jsx y hacer validaciones para que los componentes reciban la informacion que esperan, ademas de devolver el estado de "cargando"
  
  UseCalidad: Recibe un valor y lo convierte segun a %. Segun lo indicaba el enunciado del challenge
  
  UsePulverizadoraIndicator: Recibe el valor de un indicardor, referido a pulverizadora y lo multiplica para renderizarlo de la manera esperada
  


#### Service
  machine.jsx Hace los llamados a la api, en los diferentes endpoints. Controla errores y estados de las llamadas.

#### Router
  se instala react-router-dom, para manejar las rutas

#### Extras
  react-spinner: barra de carga, para darle mejor feedback al usuario.
  
  react-host-toaster: aplicacion de notifiaciones, se usa para notificar errores en los querys, busquedas del usuario o errores externos en los llamados



