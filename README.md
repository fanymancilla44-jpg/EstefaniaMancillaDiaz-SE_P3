# Akinator One Piece Edition

Este proyecto es un juego tipo Akinator basado en personajes de One Piece. El usuario piensa en un personaje y el sistema experto hace preguntas de si o no para intentar adivinarlo.

El sistema usa reglas, casos, preguntas generales, preguntas especificas y puntajes para acercarse poco a poco al personaje correcto.

## Objetivo

Desarrollar un sistema experto tipo Akinator que pueda adivinar personajes de One Piece mediante preguntas de si o no, usando una base de conocimientos con personajes, atributos, reglas de puntaje y aprendizaje de nuevos casos.

## Como funciona

El juego empieza haciendo preguntas generales como:

- El personaje es hombre?
- Es pirata?
- Pertenece a los Sombrero de Paja?
- Tiene fruta del diablo?
- Usa espada?
- Es de la Marina?

Despues, dependiendo de las respuestas, el sistema hace preguntas mas especificas para acercarse al personaje.

Por ejemplo, si el usuario responde que el personaje es pirata, pertenece a los Sombrero de Paja y tiene fruta del diablo, el sistema puede preguntar algo mas especifico como:

- Su cuerpo se estira como goma?

Si la respuesta es si, el sistema suma muchos puntos a Luffy y puede adivinarlo.

## Tipo de sistema

Este proyecto funciona como un sistema experto porque tiene:

- Base de conocimientos
- Casos
- Reglas
- Atributos
- Encadenamiento por preguntas
- Puntajes
- Aprendizaje de nuevos personajes

## Base de conocimientos

La base de conocimientos esta formada por personajes de One Piece. Cada personaje tiene atributos como:

- hombre
- pirata
- sombrero de paja
- marine
- revolucionario
- villano
- capitan
- emperador
- fruta del diablo
- usa espada
- haki
- gyojin
- cyborg
- esqueleto
- medico
- princesa
- wano

Tambien existen atributos mas especificos para distinguir personajes, por ejemplo:

- fruta de goma para Luffy
- tres espadas para Zoro
- clima tact para Nami
- reno medico para Chopper
- esqueleto musico para Brook
- ope ope para Law
- separar el cuerpo para Buggy

## Nodos o casos

El sistema tiene 64 personajes base, por lo que se puede considerar que tiene 64 casos o nodos principales.

Cada personaje funciona como un caso dentro del sistema experto.

## Preguntas

El sistema tiene preguntas generales y preguntas decisivas.

Las preguntas generales ayudan a separar a los personajes por ramas.

Ejemplo:

- Es hombre?
- Es pirata?
- Es de la Marina?
- Tiene fruta del diablo?

Las preguntas decisivas ayudan a identificar casi directamente a un personaje.

Ejemplo:

- Su cuerpo se estira como goma? para Luffy
- Usa tres espadas? para Zoro
- Es un reno medico? para Chopper
- Es un esqueleto musico? para Brook

## Puntajes

Cada pregunta tiene un peso o puntaje.

Si la respuesta del usuario coincide con los atributos de un personaje, ese personaje suma puntos.

Si la respuesta no coincide, el personaje pierde puntos.

Cuando un personaje llega a un puntaje alto y tiene ventaja sobre los demas, el sistema intenta adivinarlo.

## Aprendizaje

Si el sistema no adivina correctamente, el usuario puede enseñarle un nuevo personaje.

El sistema pide:

- Nombre del personaje
- Descripcion corta
- Imagen del personaje
- Respuestas a las preguntas de caracteristicas
- Una pregunta unica para distinguirlo

Despues guarda ese personaje en el navegador usando localStorage.

En la siguiente partida, el sistema ya puede usar el nuevo personaje aprendido.

## Imagenes

El proyecto permite mostrar imagenes de los personajes.

Las imagenes se guardan en la carpeta img.

Ejemplo:

- img/luffy.png
- img/zoro.png
- img/nami.png
- img/sanji.png

Si una imagen no existe, el juego sigue funcionando, pero no la muestra.

## Herramientas utilizadas

- HTML para la estructura del juego
- CSS para el diseño, ventanas y animaciones
- JavaScript para la logica del sistema experto
- Visual Studio Code para editar el codigo
- GitHub para guardar y compartir el proyecto
- LocalStorage para guardar personajes aprendidos

## Archivos del proyecto

- index.html
- style.css
- script.js
- README.md
- carpeta img

## Como ejecutar el proyecto

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo index.html.
3. Ejecutarlo con Live Server.
4. Pensar en un personaje de One Piece.
5. Responder las preguntas con si o no.
6. Revisar si el sistema adivina el personaje.
7. Si no adivina, usar la opcion de aprendizaje.

## Conclusion

Este proyecto cumple con la dinamica de un juego tipo Akinator o Adivina Quien, pero aplicado a personajes de One Piece. El sistema usa preguntas, ramas, puntajes y aprendizaje para intentar llegar al personaje correcto. Ademas, puede mejorar con el tiempo porque permite agregar nuevos personajes.