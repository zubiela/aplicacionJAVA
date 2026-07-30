window.JAVA_MENTOR_UNITS = window.JAVA_MENTOR_UNITS || [];
window.JAVA_MENTOR_UNITS.push({
  id:'unidad-1', title:'Unidad 1 · Primeros pasos con Java', level:'Inicial', estimatedMinutes:180,
  objectives:['Entender qué es programar y qué papel ocupa Java.','Reconocer la estructura mínima de un programa Java.','Usar variables, tipos básicos y mensajes por consola.','Practicar lectura de enunciados y detección de errores frecuentes.'],
  sections:[
    {title:'Programar es dar instrucciones', body:'Un programa es una receta muy precisa. Una persona puede entender “calienta un poco el agua”, pero Java necesita pasos exactos y símbolos correctos. Por eso entrenaremos primero la lectura: qué entra, qué proceso ocurre y qué sale.', example:'Entrada: edad del alumno → Proceso: comprobar si es mayor de edad → Salida: mensaje por pantalla.', diagram:['Entrada','Proceso','Salida']},
    {title:'La clase y el método main', body:'Java organiza el código en clases. Para empezar, imagina una clase como una caja con el nombre del archivo. Dentro colocamos el método main, que es la puerta por la que Java empieza a ejecutar.', code:'public class HolaDAM {\n  public static void main(String[] args) {\n    System.out.println("Hola, DAM");\n  }\n}'},
    {title:'Variables y tipos', body:'Una variable es una caja con etiqueta. La etiqueta es el nombre y el tipo indica qué puede guardar. int guarda enteros, double guarda decimales, boolean guarda verdadero/falso, char guarda un carácter y String guarda texto.', code:'int edad = 19;\ndouble nota = 8.5;\nboolean aprobado = true;\nString nombre = "Ana";'},
    {title:'Operadores y salida por consola', body:'Los operadores permiten calcular o comparar. System.out.println muestra información. Una buena costumbre es imprimir mensajes claros para comprobar lo que hace el programa paso a paso.', code:'int puntos = 10 + 5;\nSystem.out.println("Puntos: " + puntos);'}
  ],
  commonMistakes:['Olvidar el punto y coma al final de una instrucción.','Escribir Main en lugar de main. Java distingue mayúsculas y minúsculas.','Guardar texto con comillas simples en vez de dobles.','Usar nombres de variables que no explican su propósito.'],
  tips:['Lee el error de compilación desde la primera línea.','Escribe programas pequeños y ejecútalos a menudo.','Nombra variables como si explicaras el problema a otra persona.'],
  curiosities:['Java se diseñó con el lema “write once, run anywhere”: compilar una vez y ejecutar en distintas plataformas.'],
  summary:'En esta unidad has aprendido a ver un programa como una secuencia de instrucciones, reconocer main, declarar variables básicas y mostrar resultados por consola.',
  exercises:[
  {
    "id": "test-1",
    "type": "choice",
    "prompt": "¿Cuál es la puerta de entrada de un programa Java?",
    "options": [
      "main",
      "start",
      "run"
    ],
    "answer": "main",
    "explanation": "Java comienza ejecutando public static void main(String[] args).",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-2",
    "type": "choice",
    "prompt": "¿Qué tipo usarías para una edad entera?",
    "options": [
      "int",
      "String",
      "boolean"
    ],
    "answer": "int",
    "explanation": "Una edad sin decimales encaja en int.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-3",
    "type": "choice",
    "prompt": "¿Qué instrucción imprime una línea?",
    "options": [
      "System.out.println",
      "Console.write",
      "print.line"
    ],
    "answer": "System.out.println",
    "explanation": "System.out.println escribe en consola y salta de línea.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-4",
    "type": "choice",
    "prompt": "¿Java distingue mayúsculas?",
    "options": [
      "Sí",
      "No",
      "Solo en clases"
    ],
    "answer": "Sí",
    "explanation": "Java es case-sensitive: edad y Edad son nombres distintos.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-5",
    "type": "choice",
    "prompt": "¿Qué símbolo cierra una instrucción simple?",
    "options": [
      ";",
      ".",
      ":"
    ],
    "answer": ";",
    "explanation": "La mayoría de instrucciones terminan con punto y coma.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-6",
    "type": "choice",
    "prompt": "¿Qué tipo representa verdadero/falso?",
    "options": [
      "boolean",
      "double",
      "char"
    ],
    "answer": "boolean",
    "explanation": "boolean solo admite true o false.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-7",
    "type": "choice",
    "prompt": "¿Cómo se escribe texto literal?",
    "options": [
      "\"Hola\"",
      "'Hola'",
      "<Hola>"
    ],
    "answer": "\"Hola\"",
    "explanation": "String usa comillas dobles.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-8",
    "type": "choice",
    "prompt": "¿Qué operador concatena texto?",
    "options": [
      "+",
      "&",
      "%"
    ],
    "answer": "+",
    "explanation": "El operador + une texto con valores.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-9",
    "type": "choice",
    "prompt": "¿Qué nombre es más claro?",
    "options": [
      "numeroAlumnos",
      "x",
      "dato"
    ],
    "answer": "numeroAlumnos",
    "explanation": "Un nombre expresivo reduce errores.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "test-10",
    "type": "choice",
    "prompt": "¿Qué archivo suele coincidir con una clase public Hola?",
    "options": [
      "Hola.java",
      "main.java",
      "Clase.txt"
    ],
    "answer": "Hola.java",
    "explanation": "Una clase pública Hola debe estar en Hola.java.",
    "hint": "Piensa en la sintaxis básica de Java."
  },
  {
    "id": "fill-1",
    "type": "fill",
    "prompt": "public static ____ main(String[] args) { }",
    "answer": "void",
    "explanation": "El hueco se completa con “void” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-2",
    "type": "fill",
    "prompt": "public static void main(____[] args) { }",
    "answer": "String",
    "explanation": "El hueco se completa con “String” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-3",
    "type": "fill",
    "prompt": "System.out.____(\"Hola\");",
    "answer": "println",
    "explanation": "El hueco se completa con “println” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-4",
    "type": "fill",
    "prompt": "____ edad = 18;",
    "answer": "int",
    "explanation": "El hueco se completa con “int” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-5",
    "type": "fill",
    "prompt": "____ precio = 2.5;",
    "answer": "double",
    "explanation": "El hueco se completa con “double” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-6",
    "type": "fill",
    "prompt": "____ activo = true;",
    "answer": "boolean",
    "explanation": "El hueco se completa con “boolean” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-7",
    "type": "fill",
    "prompt": "public ____ Alumno { }",
    "answer": "class",
    "explanation": "El hueco se completa con “class” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-8",
    "type": "fill",
    "prompt": "public ____ void main(String[] args) { }",
    "answer": "static",
    "explanation": "El hueco se completa con “static” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-9",
    "type": "fill",
    "prompt": "____ class Hola { }",
    "answer": "public",
    "explanation": "El hueco se completa con “public” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "fill-10",
    "type": "fill",
    "prompt": "int puntos = 3____",
    "answer": ";",
    "explanation": "El hueco se completa con “;” para respetar la sintaxis Java.",
    "hint": "Mira la palabra que falta alrededor del hueco."
  },
  {
    "id": "code-1",
    "type": "code",
    "prompt": "Declara una variable entera llamada edad con valor 20.",
    "answer": "int edad = 20;",
    "keywords": [
      "int",
      "edad",
      "20"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-2",
    "type": "code",
    "prompt": "Declara un String nombre con el valor Ana.",
    "answer": "String nombre = \"Ana\";",
    "keywords": [
      "String",
      "nombre",
      "\"Ana\""
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-3",
    "type": "code",
    "prompt": "Imprime por consola Hola Java.",
    "answer": "System.out.println(\"Hola Java\");",
    "keywords": [
      "System.out.println",
      "\"Hola",
      "Java\""
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-4",
    "type": "code",
    "prompt": "Declara un boolean llamado aprobado con valor true.",
    "answer": "boolean aprobado = true;",
    "keywords": [
      "boolean",
      "aprobado",
      "true"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-5",
    "type": "code",
    "prompt": "Declara un double llamado nota con valor 7.5.",
    "answer": "double nota = 7.5;",
    "keywords": [
      "double",
      "nota",
      "7.5"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-6",
    "type": "code",
    "prompt": "Suma 4 y 6 en una variable total.",
    "answer": "int total = 4 + 6;",
    "keywords": [
      "int",
      "total",
      "4"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-7",
    "type": "code",
    "prompt": "Declara un char inicial con la letra A.",
    "answer": "char inicial = 'A';",
    "keywords": [
      "char",
      "inicial",
      "'A'"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-8",
    "type": "code",
    "prompt": "Imprime la variable edad.",
    "answer": "System.out.println(edad);",
    "keywords": [
      "System.out.println",
      "edad"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-9",
    "type": "code",
    "prompt": "Crea una clase pública llamada Prueba.",
    "answer": "public class Prueba { }",
    "keywords": [
      "public",
      "class",
      "Prueba"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  },
  {
    "id": "code-10",
    "type": "code",
    "prompt": "Escribe la cabecera del método main.",
    "answer": "public static void main(String[] args) { }",
    "keywords": [
      "public",
      "static",
      "void"
    ],
    "explanation": "La respuesta debe usar el tipo correcto, el nombre pedido y una sintaxis coherente.",
    "hint": "Comprueba tipo, nombre, valor y punto y coma si procede."
  }
]
});
