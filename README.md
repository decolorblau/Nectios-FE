# PRUEBA TECNICA NECTIOS FRONT-END

BLUEWORLD es una aplicación Front-end realizada con Vue3, Vuex y Vuetify 3 Alpha. Todos los datos los obtiene consumiendo una API de Nectios. Las peticiones se hacen con Axios.

Al entrar, la primera vista es un Login con validadción. Si el usuario es correcto este login nos devuelve un token que se almacena al LocalStorage, de esta manera la sesión permanece abierta hasta que el usuario cierra su sesión con el Logout, que se borraran todos sus datos del LocalStorage.

Una vez el usuario obtiene el token y accede, se le redirige a la Home Page. Dondé encontramos una grid con 12 productos y una paginación para poder acceder al resto de productos que nos devuelve la API.

Al clicar al producto se abre un detalle del producto donde vemos más información y los comentarios del los usuarios sobre aquel producto. Tambien podemos añadir nuevos comentarios sobre aquel producto.

Si accedemos a "+ADDPRODUCT" en el navegador se abrirá un formulario para poder crear nuevos productos.

En la aplicación tambíen podemos encontrar un apartado de usuario, dónde podemos ver la foto, nombre, email, telefono del usuario y el número total de comentarios que ha hecho.

Toda la applicación es responsive. El diseño y su template esta hecho, en su gran mayoria con elementos de Vuetify 3.0.0. Alpha, y me ayudado de SASS, aplicando BEM en las clases, para conseguir la personalización en el diseño que deseaba.

La aplicación esta testeada con JEST.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run unit tests

```
npm test
```

### Run unit tests with coverage

```
npm run test-test
```

### Lints and fixes files

```
npm run lint
```
