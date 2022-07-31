Proyecto final General Assembly.

API weatherbit.com & Mapbox.

Mi idea fue crear una Aplicación que descargara datos de una [API pública](https://www.weatherbit.io/),
datos meteorológicos en formato JSON, que después de obtenerlos los renderizaría en pantalla.
A las 2 semanas de empezar con ello y habiendo cumplido los requerimientos del proyecto, instalé una librería [MapBox](https://www.mapbox.com/) para poder ver sobre el mapa donde están situada la ciudad elegida.

Esta aplicación ha sido hecha en [React](https://es.reactjs.org/), para cumplir los requerimientos del proyecto he tenido que componetizar el código en partes y hacer test unitarios. Instalé otra librería llamada [jets](https://jestjs.io/es-ES/) para pasar un test unitario.
También es parte de los requerimientos es desplegar el proyecto en [Netlify](https://www.netlify.com/) y que este accesible para todos los publicos tanto en **githug** como en **Netlify**
para ello hay que compilar en una carpeta [Build] y después hacer el despliegue.
Empece el proyecto haciendo un boceto en papel muy sencillo que poco a poco ha ido tomando forma y transformándose.

![Page Scaffolding](/info/assets/boceto.jpg 'Page scaffolding')


Los principales retos a los que me enfrente fueros el desconocimiento de [React] y de todo el funcionamiento de su escalfolding, obtener la data de la **API publica** y renderizarla en pantalla, después hacer que apareciera un icono 
para representar gráficamente el tiempo de la ciudad para así dar más información de ella y el último lugar lo más complicado fue implementar **MapBox** y pasar las coordenadas de Longitud y latitud en el mapa y que mostrase la ciudad en el mismo.

También ha sido determinante importar los **Hooks** para que todo funcione bien y sé que se pueda componetizar todo.
He aprendido también que los **Test** son una parte muy importante de las aplicaciones en la que nos aseguramos de que todo funciona bien y no hay fallos.
He aprendido que la aplicación en la que he desplegado el proyecto **Netlify** es muy exigente, y que lo que funciona en local no tiene por qué funcionar al desplegarlo.

Aunque he cumplido los requerimientos del proyecto, quedan algunos puntos que tengo que abordar a partir de ahora, como los test, que auque tenemos un test unitario bastante simple funcionando en la aplicación, todavía no comprendo bien como hacer test a otras partes de la aplicación y también me queda en el tintero componetizar el elemento del mapa que aunque en local si lo he componetizado en **Netlify** todavía no, ya que al desplegar la aplicación no consigo ver el mapa en el momento de la exposición.

Este proyecto fue presentado ante los compañeros y maestros de General Assembly el día 25 de Julio de 2022.
Mi agradecimiento a todos los compañeros y agradecer a Los maestros Alex y Gabriel la cantidad de preguntas que me aclararon y personalmente a **Pedro Martin** por su implicación y explicaciones de la materia todos los días.
A partir de ahora iré mejorándolo con lo que es posible que en algún momento no ser pueda ver por diferentes motivos.

WEB: https://al2com-makes-great-sites.netlify.app/


El resultado es el siguiente,

![Page Scaffolding](/info/assets/Readme_foto1.PNG 'Page scaffolding')




