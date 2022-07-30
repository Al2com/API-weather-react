Proyecto final General Assembly 
API weatherbit.com & Mapbox

Mi idea fue crear una Aplicación que descargara datos de una [API pública](https://www.weatherbit.io/),
datos meteorológicos en formato JSON, que después de obtenerlos los renderizaría en pantalla.
A las 2 semanas de empezar con ello y habiendo cumplido los requerimientos del proyecto, instalé una librería [MapBox](https://www.mapbox.com/) para poder ver sobre el mapa donde está la ciudad elegida e información de ella.

Esta aplicación ha sido hecha en [React](https://es.reactjs.org/), para cumplir los requerimientos del proyecto he tenido que componetizar el código en partes y hacer un test. Instalé otra librería llamada [jets](https://jestjs.io/es-ES/) para pasar un test y demostrar que sabemos hacerlo.
También es parte de los requerimientos es desplegar el proyecto en [Netlify](https://www.netlify.com/)
para ello hay que compilar en una carpeta [Build] y después hacer el despliegue.
Empece el proyecto haciendo un boceto en papel muy sencillo que poco a poco ha ido tomando forma y transformándose.

![Page Scaffolding](/info/assets/boceto.jpg 'Page scaffolding')


Los principales retos a los que me enfrente fueros el desconocimiento de [React] y de todo el funcionamiento de su escalfolding, obtener la data de la **API publica** y renderizarla en pantalla, después hacer que apareciera un icono 
para representar gráficamente el tiempo de la ciudad para así dar más información de ella y el último lugar lo más complicado fue implementar **MapBox** y pasar las coordenadas de Longitud y latitud en el mapa y que mostrase la ciudad en el mismo.

También ha sido determinante el import de los **Hooks** para que todo funcione bien y sé que se pueda monetizar todo.
He aprendido también que los **Test** son una parte muy importante de las aplicaciones en la que nos aseguramos de que todo funciona bien y no hay fallos.
He aprendido que la aplicación en la que he desplegado el proyecto **netlify** es muy exigente, y que lo que funciona en local no tiene por qué funcionar al desplegarlo.

Este proyecto fue presentado ante los compañeros y maestros de General Assembly el día 25 de Julio de 2022.
A partir de ahora iré mejorándolo con lo que es posible que en algún momento no ser pueda ver por diferentes motivos 
WEB: https://alvaro-es-deployment-demo.netlify.app/


El resultado es el siguiente,

![Page Scaffolding](/info/assets/Readme_foto1.PNG 'Page scaffolding')







