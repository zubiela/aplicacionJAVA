window.JAVA_MENTOR_UNITS = window.JAVA_MENTOR_UNITS || [];
window.JAVA_MENTOR_UNITS.push({
  id:'unidad-1', title:'Unidad 1 · Introdución a Java. Elementos da linguaxe', level:'Inicial', estimatedMinutes:260,
  objectives:['Instalar y reconocer el entorno de trabajo Java/JDK/Eclipse trabajado en la práctica inicial.','Comprender qué es un algoritmo y cómo se transforma en código Java.','Dominar la estructura de una aplicación: clase, método main, bloques, comentarios e instrucciones.','Usar identificadores, palabras reservadas, literales, variables, constantes y tipos de datos primitivos.','Aplicar operadores, expresiones, conversiones de tipo y entrada/salida básica por consola.'],
  resources:[
    {label:'Apuntes UD1: Introdución a Java',href:'Material/Unidad 01 - INTRODUCIÓN Á PROGRAMACIÓN/UD 1 - Introdución a Java. Elementos da linguaxe (v1.2).pdf'},
    {label:'Recursos UD1',href:'Material/Unidad 01 - INTRODUCIÓN Á PROGRAMACIÓN/133_15021482_ZSIFC02_MP0485_B_ UD1 - Re...pdf'},
    {label:'Práctica 1: JDK, Eclipse y primera app',href:'Material/Unidad 01 - INTRODUCIÓN Á PROGRAMACIÓN/Práctica 01/UD1. Práctica 1 - Instalando Java JDK e Eclipse. A miña primeira aplicación.pdf'},
    {label:'Práctica 2: Tipos de datos',href:'Material/Unidad 01 - INTRODUCIÓN Á PROGRAMACIÓN/Práctica 02/UD1. Práctica 2 - Tipos de datos en Java.pdf'}
  ],
  sections:[
    {title:'Mapa de estudio de la UD1', body:'La unidad debe estudiarse como una cadena: primero entiendes el problema, después diseñas un algoritmo, lo escribes en Java, compilas, ejecutas y corriges errores. Así conectas los apuntes de elementos del lenguaje con las prácticas de instalación, primera aplicación y tipos de datos.', note:'No estudies Java como una lista de palabras sueltas. Cada concepto tiene una función dentro del ciclo problema → algoritmo → programa → prueba.', diagram:['Problema','Algoritmo','Código Java','Compilar','Ejecutar','Depurar'], schema:['Algoritmo: pasos finitos, ordenados y no ambiguos.','Programa: algoritmo escrito con la sintaxis de un lenguaje.','Depuración: lectura de errores y corrección progresiva.']},
    {title:'Java, JDK, JRE, JVM e IDE', body:'Java es el lenguaje; el JDK aporta herramientas para desarrollar, como el compilador; el JRE permite ejecutar aplicaciones; y la JVM interpreta el bytecode en cada sistema. El IDE, como Eclipse, ayuda a escribir, organizar, ejecutar y revisar el código.', note:'Si un programa no arranca, diferencia el problema: puede faltar JDK, puede estar mal configurado el proyecto o puede existir un error de sintaxis en el código.', diagram:['.java','javac','bytecode .class','JVM','Programa en ejecución'], example:'El archivo Hola.java se compila y genera Hola.class; la JVM ejecuta ese bytecode.'},
    {title:'Estructura mínima de una aplicación Java', body:'Una aplicación básica se organiza en una clase pública cuyo nombre coincide con el archivo. Dentro se coloca el método main, que es el punto de entrada. Las llaves delimitan bloques y cada instrucción simple termina con punto y coma.', note:'Java distingue mayúsculas y minúsculas: main no es Main, String no es string y una clase Hola debe estar en Hola.java.', code:'public class Hola {\n  public static void main(String[] args) {\n    System.out.println("Ola, Java");\n  }\n}'},
    {title:'Comentarios, bloques e instrucciones', body:'Los comentarios explican intención y no se ejecutan. Las instrucciones son órdenes concretas; los bloques agrupan instrucciones entre llaves. Mantener sangría constante permite ver qué código pertenece a cada bloque.', note:'Un comentario no debe repetir lo evidente; debe aclarar decisiones, fórmulas o pasos que podrían confundirse al estudiar.', schema:['// comentario de una línea','/* comentario de varias líneas */','{ ... } bloque de código','; final de instrucción simple'], code:'// Mostra unha mensaxe inicial\nSystem.out.println("Inicio do programa");'},
    {title:'Identificadores y palabras reservadas', body:'Los identificadores nombran clases, variables, métodos y constantes. Deben ser claros, no pueden ser palabras reservadas y no deben empezar por número. En Java se suele usar camelCase para variables y métodos, y PascalCase para clases.', note:'Un buen nombre funciona como una mini-explicación: numeroAlumnos enseña más que n o x.', example:'Clase: CalculoNota. Variable: notaMedia. Constante: IVA.', schema:['Válidos: idade, notaMedia, totalAlumnos.','Evitar: class, 2nota, ñ confusa en entornos ajenos, nombres sin significado.']},
    {title:'Variables, constantes y literales', body:'Una variable reserva memoria para un dato que puede cambiar. Una constante se declara con final cuando el valor no debe modificarse. Un literal es el valor escrito directamente en el código: 10, 3.5, true, \'A\' o "texto".', note:'Antes de elegir el tipo, pregúntate qué valores son válidos y si pueden cambiar durante el programa.', diagram:['Tipo','Nombre','Valor'], code:'int idade = 19;\nfinal double PI = 3.1416;\nString nome = "Ana";'},
    {title:'Tipos de datos primitivos y String', body:'La UD1 introduce tipos básicos: byte, short, int y long para enteros; float y double para decimales; char para un carácter; boolean para verdadero/falso. String se usa desde el inicio para textos, aunque no sea primitivo.', note:'Usa int para enteros habituales y double para decimales salvo que el enunciado pida otra cosa. String lleva comillas dobles; char lleva comillas simples.', schema:['Enteros: byte, short, int, long.','Decimales: float, double.','Carácter: char.','Lógico: boolean.','Texto: String.'], code:'char letra = \'A\';\nboolean aprobado = true;\ndouble prezo = 12.99;'},
    {title:'Operadores y expresiones', body:'Una expresión combina valores, variables y operadores para producir un resultado. Debes distinguir operadores aritméticos, relacionales, lógicos, asignación, incremento/decremento y concatenación de cadenas.', note:'El operador + suma números, pero concatena cuando participa un String. Por eso "Nota: " + 7 produce texto.', schema:['Aritméticos: +, -, *, /, %.','Relacionales: ==, !=, >, >=, <, <=.','Lógicos: &&, ||, !.','Asignación: =, +=, -=.'], code:'int resto = 17 % 5;\nboolean valido = idade >= 18 && idade <= 65;\nSystem.out.println("Resto: " + resto);'},
    {title:'Conversiones de tipo', body:'Java puede convertir automáticamente algunos valores cuando no hay pérdida de información, por ejemplo de int a double. Si puede perderse información, se usa una conversión explícita o cast.', note:'Un cast no redondea de forma inteligente: al convertir double a int se pierde la parte decimal.', diagram:['Conversión implícita segura','Cast explícito','Posible pérdida de datos'], code:'int unidades = 7;\ndouble total = unidades;\nint parteEntera = (int) 7.9;'},
    {title:'Entrada y salida por consola', body:'La salida básica se realiza con System.out.print o System.out.println. Para leer datos por consola se puede usar Scanner, importándolo y convirtiendo cada lectura al tipo adecuado.', note:'Si mezclas nextInt() y nextLine(), puede quedar un salto de línea pendiente. Es uno de los errores más habituales al empezar.', code:'import java.util.Scanner;\n\nScanner sc = new Scanner(System.in);\nSystem.out.print("Introduce a túa idade: ");\nint idade = sc.nextInt();\nSystem.out.println("Idade: " + idade);'},
    {title:'Errores de compilación, ejecución y lógica', body:'Un error de compilación impide generar el .class; un error de ejecución aparece mientras el programa corre; un error lógico produce un resultado incorrecto aunque el programa no falle. La UD1 exige aprender a leer mensajes y probar paso a paso.', note:'La primera línea útil del error suele indicar archivo, línea y tipo de problema. Corrige de uno en uno y vuelve a ejecutar.', diagram:['Compilación','Ejecución','Resultado esperado'], example:'Falta de punto y coma: compilación. División entre cero: ejecución. Fórmula mal planteada: lógica.'},
    {title:'Ejemplo integrador de la unidad', body:'Este ejemplo reúne estructura, variables, constantes, operaciones, conversión, entrada/salida y mensajes claros. Úsalo como plantilla mental para las prácticas de tipos de datos.', note:'La solución importante no es copiar el código, sino reconocer qué parte corresponde a entrada, proceso y salida.', diagram:['Entrada: nombre y nota','Proceso: calcular subida','Salida: informe'], code:'import java.util.Scanner;\n\npublic class InformeNota {\n  public static void main(String[] args) {\n    final double EXTRA = 0.5;\n    Scanner sc = new Scanner(System.in);\n\n    System.out.print("Nome: ");\n    String nome = sc.nextLine();\n    System.out.print("Nota: ");\n    double nota = sc.nextDouble();\n\n    double notaFinal = nota + EXTRA;\n    System.out.println(nome + " ten unha nota final de " + notaFinal);\n  }\n}'}
  ],
  commonMistakes:['Olvidar instalar o seleccionar correctamente el JDK en el entorno.','No hacer coincidir el nombre de la clase pública con el archivo .java.','Olvidar llaves, paréntesis o punto y coma.','Confundir = con ==.','Usar comillas simples para textos String.','No inicializar variables antes de usarlas.','Ignorar mayúsculas/minúsculas en palabras como String, System o main.'],
  tips:['Estudia cada apartado con el PDF abierto desde Material descargable.','Después de leer teoría, escribe un ejemplo mínimo y ejecútalo.','Haz una tabla con variable, tipo, valor inicial y cambio esperado.','Lee los errores desde arriba y corrige el primero antes de mirar los demás.'],
  curiosities:['Java compila a bytecode para que la JVM lo ejecute en distintos sistemas, idea relacionada con la portabilidad del lenguaje.'],
  summary:'La UD1 queda cubierta como base de lenguaje: entorno Java, ciclo de compilación/ejecución, estructura de clase y main, comentarios, identificadores, variables, constantes, literales, tipos, operadores, conversiones, entrada/salida y lectura de errores.',
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
