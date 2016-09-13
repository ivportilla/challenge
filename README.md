# Challenge

### Estado
En este momento solo se encuentra implementada una parte de lo solicitado:
* Filtro por categorias
* Sidebar
* Lista de inspecciones

Faltante:
* Funcionalidad para filtrar por nombre
* Funcionalidad para cambiar estado de una inspección
* Funcionalidad para tomar foto y agregar comentario
* Servicio para subir la foto
* Persistencia de la información

### Como ejecutarlo
Debe tener instalado React-Native, en este caso lo que se hizo fue utilizando
la última versión 0.33, para su instalación se recomienda seguir la [guía oficial](https://facebook.github.io/react-native/docs/getting-started.html#content)

Pasos para la ejecución:
* Iniciar servidor con el comando react-native start
* Con el emulador o dispositivo conectado ejecutar react-native run-android
* La aplicación debería correr con normalidad
> Se recomienda utiliza Android 5.0+ para evitar problemas con el bundler de react-native.

### Detalles
En la realización de ésto se pudo concluir que el manejo de información por si solo es complicado y emplear algo como Redux para controlar el estado completo de la aplicación podría facilitar mucho el trabajo.
