# Week 11 - Challenge XMAS

## ROBOTS

#### DEPLOY NETLIFY https://202210-w11-xmas-miguelpgomez.netlify.app/

#### SONAR : https://sonarcloud.io/project/overview?id=mig-code_202210-w11-xmas-miguelpgomez

## DESCRIPCIÓN

Tendrás que crear un frontend en React que permita al usuario gestionar un listado con sus robots.

Crea una home page inicial y un menu que navegue entre la home y los robots. La página inicial algún logo junto con el número de robots disponibles

El estado y su lógica debe estar en un custom Hook. Opcionalmente puedes llevar su instancia a un Contexto

El usuario debe poder listar, crear, modificar y borrar robots (CRUD).

Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

    Velocidad (0-10)
    Resistencia (0-10)
    Fecha de creación
    Usuario que crea el robot

(La imagen la puedes conseguir en el API de https://robohash.org)

Los datos deben de tener persistencia en JSON-Server. Crea un servicio/repository para abstraer las interacciones con tu API. Utiliza para ello clases de TS.
Requisitos

Testea todo lo posible al terminar cada componente o elemento. Cuidado: te falta testing

Mejora el CSS. Estaría muy bien que lo hicieras con BEM y SASS

Cuida el valor semántico del HTML y valídalo.

Incluye las Actions de Audit y testing/sonar

Protege la rama main de github y obliga que se cumplan las actions para poder mergear las PR Trabaja con ramas cortas (unos pocos commits) Cuida especialmente los mensajes de los commits

Volviendo al testing: haz que se recoja en sonar y trata de llegar al 100% de coverage
Extras

    Crea una página de favoritos para los robots que seleccione el usuario,

    Crea una página de detalle para los robots. Puedes añadir al modelo la información que se te ocurra para mostrarla en esta página.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
