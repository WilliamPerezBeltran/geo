# Prueba
- Implementar un sistema de geolocalización de tareas de campo que incluya un módulo de autenticación.

## Stack

- react 17.0.2,
- js-cookie3.0.1
- mapbox-gl 2.5.0
- node-sass 4.14.1
- react-dom 17.0.2 
- react-hook-form 7.17.2 
- react-redux 7.1.3
- react-router-dom 5.3.0
- redux 4.0.5
- redux-thunk 2.3.0

### Clonar repositorio

```bash
# clonar repositorio
$ git clone https://github.com/WilliamPerezBeltran/geo.git

# Ir al directorio del app
$ cd geo
```

### Instalar dependencias 

```bash
# instalar con npm 
$ npm install

# Instalar con yarn 
$ yarn o yarn install 
```


### Ejecutar aplicación

```bash
# Ejecutar app con npm 
$ npm start

# Ejecutar app con yarn 
$ yarn start
```

## Qué incluye

```

├───public/
│   ├───favicon.ico
│   ├───index.html
│   ├───logo192.png
│   ├───logo512.png
│   ├───manifest.json
│   └───robots.txt
├───src/
│   ├───auth/
│   │   ├───AuthContext.js
│   │   ├───AuthRoute.js
│   │   └───Index.js
│   ├───components/
│   │   ├───Detail.js
│   │   ├───Index.js
│   │   ├───Job.js
│   │   ├───Jobs.js
│   │   ├───List.js
│   │   ├───LocationUser.js
│   │   ├───Login.js
│   │   ├───Map.js
│   │   ├───Me.js
│   │   └───NavBar.js
│   ├───constants/
│   │   └───Constants.js
│   ├───images/
│   ├───services/
│   │   ├───FetchJobs.js
│   │   ├───FetchLogin.js
│   │   └───FetchPersonalData.js
│   ├───style/
│   │   ├───Detail.scss
│   │   ├───Job.scss
│   │   ├───List.scss
│   │   ├───Login.scss
│   │   ├───Me.scss
│   │   └───NavBar.scss
│   ├───ActionCreator.js
│   ├───App.js
│   ├───App.scss
│   ├───App.test.js
│   ├───index.css
│   ├───index.js
│   ├───reportWebVitals.js
│   ├───setupTests.js
│   └───store.js
├───.gitignore
├───README.md
├───package-lock.json
├───package.json
└───yarn.lock

```


## Explicación de las carpetas

- auth: Código donde se encuentra todo lo relacionado a la autenticación.
- components: Archivos javascript en donde cada uno es un componente.
- constants: Constantes de la aplicación.
- images: Imágenes de la aplicación. 
- services: Código donde se encuentra todo lo relacionado los servicios de la aplicación o llamados a apis externas.
- style: Código donde se encuentra todo lo relacionado a los estilos de la aplicación.

## Explicación de archivos 

- AuthContext.js = Creación del contexto 
- AuthRoute.js = creación de las rutas del contexto
- Detail.js = Detalle del job 
- Job.js = Component donde se lista la información propia del job
- Jobs.js = Component donde se donde llama a los jobs
- List.js = Código donde se aloja el listado de los jobs por llamado
- LocationUser.js = Código para mostrar la localización del actual usuario
- Login.js = Código donde se hace el login del usuario
- Map.js = Código donde se lista la ubicación geográfica de los jobs 
- Me.js = Código donde se aloja la información del usuario 
- NavBar.js = Navbar de la aplicación
- Constants.js = Código donde se encuentran todas las constantes de la aplicación
- FetchJobs.js = Servicio que implementa el llamado a https://coding-test.rootstack.net/api/jobs
- FetchLogin.js = Servicio que implementa el llamado a https://coding-test.rootstack.net/api/auth/login.
- FetchPersonalData.js = Servicio que implementa el llamado a https://coding-test.rootstack.net/api/auth/me
- store.js = Código donde se encuentra alojado el árbol del estado de la aplicación
- ActionCreator.js = Código donde se encuentra alojado los action creator
- App.js = Código en donde se encuentra las rutas no autorizadas y las rutas autorizadas de la aplicación

## Creador

**William Pérez**

- <https://github.com/WilliamPerezBeltran>

