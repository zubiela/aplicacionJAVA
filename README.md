# JAVA MENTOR DAM

JAVA MENTOR DAM es una aplicación educativa estática para estudiar Programación de DAM con Java. Está pensada para abrirse directamente desde `index.html`, sin instalaciones, frameworks ni servidor.

## Qué incluye la versión 0.1

- Pantalla de inicio con progreso, XP, tiempo de estudio y acceso rápido.
- Navegación SPA sin recargas: Inicio, Temario, Ejercicios, Exámenes, Retos, Mi progreso y Configuración.
- Unidad 1 completa sobre primeros pasos con Java, reescrita con explicaciones sencillas, ejemplos, errores frecuentes, consejos, curiosidades y resumen.
- 30 ejercicios interactivos:
  - 10 preguntas tipo test.
  - 10 ejercicios de completar código.
  - 10 ejercicios de escribir código.
- Mini examen de la Unidad 1 con modo práctica.
- Persistencia en LocalStorage: XP, porcentaje, ejercicios realizados, aciertos, errores, tiempo estudiado, unidades completadas y última sesión.
- Modo oscuro, exportación, importación y reinicio de progreso.

## Cómo ejecutar

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Empieza por **Temario → Unidad 1** o pulsa **Continuar** desde la pantalla inicial.

No necesitas Node.js, Java, Maven, Gradle ni conexión a internet.

## Estructura del proyecto

```text
index.html              Punto de entrada de la aplicación
css/                    Estilos separados por responsabilidad
js/                     Módulos JavaScript de la SPA
data/                   Unidades del curso y ejercicios
exams/                  Definición de exámenes
assets/                 Imágenes, iconos y fuentes futuras
README.md               Documentación del proyecto
CHANGELOG.md            Historial de versiones
```

## Cómo añadir unidades

Crea un archivo en `data/` siguiendo el patrón de `data/unidad1.js` y añade un objeto a `window.JAVA_MENTOR_UNITS` con:

- `id`, `title`, `level`, `estimatedMinutes`.
- `objectives`.
- `sections` con explicación, ejemplos, diagramas o código.
- `commonMistakes`, `tips`, `curiosities`, `summary`.
- `exercises`.

Después incluye el script en `index.html` antes de los módulos de `js/`.

## Cómo añadir ejercicios

Cada ejercicio necesita:

- `id` único.
- `type`: `choice`, `fill` o `code`.
- `prompt` con el enunciado.
- `answer` para test y completar código.
- `keywords` para ejercicios de escritura libre.
- `hint` y `explanation` para que la corrección enseñe, no solo diga si está bien o mal.

## Cómo añadir exámenes

Añade un archivo en `exams/` que empuje objetos a `window.JAVA_MENTOR_EXAMS`. Cada examen referencia ejercicios existentes mediante sus identificadores para reutilizar la corrección y el seguimiento de progreso.

## Principios de diseño

- Aprender practicando: cada bloque de teoría debe llevar a una interacción.
- Código sin frameworks para mantener portabilidad total.
- Separación clara entre contenido, estado, navegación, corrección y presentación.
- Preparado para incorporar el material real del profesor sin copiarlo literalmente.
