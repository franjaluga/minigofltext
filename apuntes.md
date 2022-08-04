# Apuntes de React

## **Clase 37 - Retornar elementos en el componente**

En un return de la APP en React, solo podemos hacerlo en una línea, entonces para hacerlo multilínea, se debe mantener un **nodo padre**, y hay dos formas:

1) importando un fragmento

```js
import { Fragment } from "react";

export function FirstApp(){
    return (
    <Fragment>
        <h1>FirstApp</h1>
        <p>Soy un subtitulo</p>    
    <Fragment/>
    );
```

2) vía etiqueta vacía de React

```js
export function FirstApp(){
    return (
    <>
        <h1>FirstApp</h1>
        <p>Soy un subtitulo</p>    
    </>
    );
}
```

## **Clase 38 - Impresión de variables en HTML**

En react podemos imprimir variables, 
en general se usan las llaves:
```js
{ }
```
Podemos imprimir variables, sin embargo NO podemos imprimir OBJETOS. Para poder mejorar esto tenemos que transformarlo a un JSON.stringify() un ejemplo de ello es el siguiente código

```js
const persona = {
    nombre:"Fran"
}

export function FirstApp(){
    return (
    <>
        <p>{JSON.stringify(persona.nombre)} </p>    
    </>
    );
}
```
luego, si no es un objeto, 
imprimimos normalmente, pero sin olvidarnos de las { }

```js
function Saludito(name){
    return `Hola loc@ ${name}`;
}

export function FirstApp(){
    return (
    <>
        <h1>{ Saludito("Bobi")}</h1>
        <p>Soy un subtitulo</p>   
    </>
    );
}
```

## **Clase 39 - Colocar estilos de CSS**

Podemos añadir CSS, pero la pregunta es ¿donde va?. Como se trata de un estilo global, NO hay que ponerlo en el componente, sino que en el main.jsx. De este modo se aplica a todo. Por ejemplo, creamos el siguiente styles.css en la carpeta de /src

```css
html, body {
    background-color: #21232A;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    padding: 70px;
}
```
luego, vamos a nuestro archivo main, y hacemos la importación

```js
import './styles.css';
```


## **Clase 40 - Comunicación entre componentes**

Para comunicarse entre componentes, primero la lógica es que un componente padre le pase un dato a un componente hijo.

Si el componente padre es una función, entonces, los valores se le pasan al hijo mediante sus argumentos.

Los argumentos pueden estar definidos o no.

Si los argumentos están definidos, React siempre me los va a pedir, 
para ello en el main.jsx se piden tras declarar la etiqueta <App />
Un ejemplo de ello es la siguiente comunicación

```js

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FirstApp title="Hola Bobi" />
    </StrictMode>
);

```
luego, en el otro componente, lo que hacemos es pasárle el dato a la función que lo va a usar

```js
export function FirstApp( {title} ){

    return (
    <>
        <h1>{ title }</h1>
        <p>Soy un subtitulo</p>   </>
    );
}
```


## **Clase 41 - prop-types**

que son los prop-types:
Sirven para exigir un tipo de datos en nuestra aplicacion
Por ejemplo, puedo pedirle a app que pida un Stringo un número,
o incluso que siempre se exija y no venga vacío.

Cuando no se cumple la condición, sale un error en la App.

Para ocupar los prop-types debemos hace una instalación

- Con CRA ya viene instalado, 
pero con Vite debemos hacer una instalación en la carpeta de la App

```
yarn install prop-types
```
Luego, debemos importar en nuestro componente dichas dependencias

```js
import Proptypes from 'prop-types';
```

y luego, fuera del componente, 
trabajamos el objeto en cuestión que tiene las condiciones (o reglas que definiteremos para cada tipo de dato), por ejemplo:

```js
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}
```
En el codigo anterior, lo que hicimos fue decir:
- Necesito que el título sea un string y siempre deba enviarse,
- mientras que en el caso del subtitulo, necesito que sea un número,
y que no pasa nada si no se envia dicho dato.

Por su parte en el main debería quedar así,
fíjate como subtitulo es un dato que no es requerido obligatoriamente

```js
ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FirstApp title="Hola Bobi" />
    </StrictMode>
);
```



## Clases finales:  HOOKS

¿Que es un hook?
Es como un gancho a un estado de un dato.

Si tengo por ejemplo en mi formulario un dato, y un boton, 
con el hook puedo vincular el boton a un evento para que cambie el valor de dicho dato.

Es una forma de comunicacion entre componentes.

#La primera pregunta que uno suele hacerse es: **donde va esto?**

En rigor, primero necesitamos un componente (que ya lo sabemos hacer),
es aquel lugar que me imprime el contenido (donde van las etiquetas html).
Entonces, antes de eso -antes de hacer el render-

Primero llamamos la librería del HOOK que viene de react,
en rigor los hooks siempre parten con "use"
```js
import { useState } from 'react';

```
luego, 
mandamos a llamar en un arreglo que tiene dos datos 
"un counter" y un "setSounter"
este arreglo tiene por igual a la función que inicialmen te importamos useState().

Esto lo podemos pasar a código de la siguiente forma:

```js
const [ counter, setCounter ] = useState();
```
luego, 
solo bastaría que invoquemos la función y le asignemos un valor.

Por ejemplo,
si yo qusiera hacer que un dato de mi web aumente en +1.
Primero, tengo que hacer el botón y darle un evento onClick.

El evento onClick, lo que hace es mandar a llamar a una fución,
entonces, tenemos que ponerle un nombre.
Como necestamos que se agregue +1, 
podemos usar un nombre de función llamado "handleAdd()".

Una vez que le pusimo nombre, tenemos que crear la función (que hemos de invocar)
como función de flecha

```html
<button onClick= { handleAdd }> 
   +1 
</button>

```

acá creamos una constante llamada handleAdd que es igual 
a una función de flecha, que recibe un bloque { }

Esta función, manda a llamar al setCounter y hace mover el valor
```js
const handleAdd = () => {
    setCounter( counter + 1 );
}
```

y eso es todo.
...