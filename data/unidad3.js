window.JAVA_MENTOR_UNITS = window.JAVA_MENTOR_UNITS || [];
window.JAVA_MENTOR_UNITS.push({
  id:'unidad-3', title:'Unidad 3 · Fundamentos de POO y clase String', level:'Intermedio', estimatedMinutes:300,
  objectives:['Comprender clases, objetos, atributos, métodos y constructores a partir del material UD3.','Practicar encapsulación y uso de this.','Usar String para resolver ejercicios con cadenas de caracteres.','Preparar prácticas de introducción a POO, ejercicios de POO, cadenas y encriptado por sustitución.'],
  sections:[
    {title:'De variables sueltas a objetos', body:'La UD3 cambia el enfoque: un programa puede organizar datos y comportamiento en clases. Una clase describe el molde; cada objeto es una instancia con estado propio.', diagram:['Clase','Objeto','Atributos + métodos'], code:'public class Persona {\n  private String nome;\n  private int idade;\n}'},
    {title:'Atributos, métodos y encapsulación', body:'Los atributos suelen declararse privados para proteger el estado. Los métodos públicos permiten consultar o modificar datos de forma controlada.', code:'public String getNome() {\n  return nome;\n}\n\npublic void setNome(String nome) {\n  this.nome = nome;\n}'},
    {title:'Constructores y this', body:'Un constructor inicializa objetos en un estado válido. La palabra this distingue el atributo del parámetro cuando tienen el mismo nombre.', example:'new Persona("Ana", 20) crea un objeto Persona con sus datos iniciales.', code:'public Persona(String nome, int idade) {\n  this.nome = nome;\n  this.idade = idade;\n}'},
    {title:'Uso de la clase String', body:'El material incluye trabajo específico con cadenas: longitud, comparación, extracción, búsqueda, cambio de mayúsculas y recorrido carácter a carácter.', code:'String texto = "Java";\nSystem.out.println(texto.length());\nSystem.out.println(texto.charAt(0));\nSystem.out.println(texto.equals("Java"));'},
    {title:'Prácticas de cadenas y encriptado', body:'Las prácticas de la unidad aplican String a problemas como contar caracteres, transformar textos y sustituir símbolos mediante una clave. La idea es descomponer el texto y construir un resultado paso a paso.', example:'Recorrer cada carácter, buscar su posición en un alfabeto y añadir el carácter cifrado correspondiente.'}
  ],
  commonMistakes:['Comparar String con == en vez de equals.','Olvidar que los índices empiezan en 0.','Acceder directamente a atributos privados desde otra clase.','Crear constructores que no inicializan todos los atributos importantes.'],
  tips:['Empieza cada clase con atributos, constructor y toString para poder probar objetos.','Prueba cadenas vacías, con espacios y con mayúsculas/minúsculas.','Separa la lógica de cifrado en métodos pequeños.'],
  curiosities:['String parece un tipo simple, pero es una clase; por eso dispone de métodos como length(), substring() y equals().'],
  summary:'La unidad 3 organiza programas con objetos y practica manipulación de textos con String, preparando ejercicios de POO, repaso, cadenas y cifrado.',
  exercises:[
    {id:'u3-test-1',type:'choice',prompt:'¿Qué palabra limita el acceso directo a un atributo desde fuera de la clase?',options:['private','public','static'],answer:'private',hint:'Es la base de la encapsulación.',explanation:'private oculta el atributo y obliga a usar métodos de la clase.'},
    {id:'u3-test-2',type:'choice',prompt:'¿Cómo se comparan correctamente dos String por contenido?',options:['equals','==','compareTo siempre devuelve true'],answer:'equals',hint:'String es una clase.',explanation:'equals compara el contenido; == compara referencias.'},
    {id:'u3-fill-1',type:'fill',prompt:'Completa para obtener el primer carácter de texto: texto.____(0)',answer:'charAt',hint:'El índice 0 apunta al primer carácter.',explanation:'charAt(0) devuelve el primer carácter de una cadena no vacía.'},
    {id:'u3-code-1',type:'code',prompt:'Escribe una clase Cuenta con atributo saldo privado, constructor y método ingresar.',keywords:['class Cuenta','private','double saldo','Cuenta','ingresar'],hint:'El método debe sumar una cantidad al saldo.',explanation:'El ejercicio practica clase, atributo encapsulado, constructor y método que modifica estado.'}
  ]
});
