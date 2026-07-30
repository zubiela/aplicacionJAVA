window.JAVA_MENTOR_UNITS = window.JAVA_MENTOR_UNITS || [];
window.JAVA_MENTOR_UNITS.push({
  id:'unidad-2', title:'Unidad 2 · Uso de estructuras de control', level:'Básico', estimatedMinutes:240,
  resources:[
    {label:'Apuntes UD2: estructuras de control',href:'Material/Unidad 02 - Uso de estructuras de control/UD2 - Uso de estruturas de control.pdf'},
    {label:'Práctica 1: selección',href:'Material/Unidad 02 - Uso de estructuras de control/Práctica 01/UD2. Práctica 1 - Uso de estruturas de control de selección.pdf'},
    {label:'Práctica 2: repetición',href:'Material/Unidad 02 - Uso de estructuras de control/Práctica 02/UD2. Práctica 2 - Uso de estruturas de repetición.pdf'},
    {label:'Ejercicios de repaso UD2',href:'Material/Unidad 02 - Uso de estructuras de control/Práctica 03/UD2. Exercicios de repaso.pdf'}
  ],
  objectives:['Tomar decisiones con if, if/else y switch según el material de UD2.','Repetir instrucciones con while, do while y for.','Aplicar contadores, acumuladores, validaciones y recorridos sencillos.','Resolver prácticas parecidas a las de selección, repetición y repaso sin memorizar soluciones.'],
  sections:[
    {title:'Selección: elegir un camino', body:'La UD2 introduce las estructuras de control de selección para que el programa no ejecute siempre lo mismo. Primero se formula una condición booleana y después se decide qué bloque se ejecuta.', example:'Si una nota es mayor o igual que 5, se muestra aprobado; en caso contrario, suspenso.', code:'if (nota >= 5) {\n  System.out.println("Aprobado");\n} else {\n  System.out.println("Suspenso");\n}'},
    {title:'Condiciones bien expresadas', body:'Las condiciones combinan operadores relacionales y lógicos. Conviene escribirlas de forma legible y probar los límites: menor, igual y mayor.', example:'Para validar una edad laboral: edad >= 16 && edad <= 67.', code:'boolean edadValida = edad >= 16 && edad <= 67;'},
    {title:'switch para casos concretos', body:'Cuando una variable puede tomar varios valores discretos, switch permite separar casos. Es útil para menús, días, opciones o códigos sencillos.', code:'switch (opcion) {\n  case 1: System.out.println("Alta"); break;\n  case 2: System.out.println("Baja"); break;\n  default: System.out.println("Opción incorrecta");\n}'},
    {title:'Repetición: automatizar tareas', body:'Las prácticas de repetición trabajan bucles while, do while y for. Antes de programar hay que identificar inicio, condición de parada y actualización para evitar bucles infinitos.', diagram:['Inicializar','Comprobar condición','Ejecutar bloque','Actualizar'], code:'for (int i = 1; i <= 10; i++) {\n  System.out.println(i);\n}'},
    {title:'Patrones de ejercicios de la unidad', body:'El material de repaso usa patrones típicos: contar dígitos, sumar pares, calcular factoriales, comprobar primos, contar vocales, medias, cifrados sencillos y juegos de palabras.', example:'Un acumulador suma importes; un contador registra cuántos datos válidos se introdujeron.'}
  ],
  commonMistakes:['Confundir = con == en condiciones.','Olvidar actualizar la variable de control de un while.','No probar casos límite como 0, 1, negativos o la opción por defecto.','Usar muchos if independientes cuando son alternativas excluyentes.'],
  tips:['Escribe la condición en lenguaje natural antes de traducirla a Java.','Dibuja una tabla con los valores del bucle en las primeras iteraciones.','Valida entradas antes de hacer cálculos.'],
  curiosities:['Los ejercicios de cifrado y juegos de palabras permiten practicar bucles sin depender de interfaces gráficas.'],
  summary:'Esta unidad se centra en controlar el flujo: decidir con selección y repetir con bucles, aplicando patrones de contador, acumulador, validación y recorrido.',
  exercises:[
    {id:'u2-test-1',type:'choice',prompt:'¿Qué operador compara igualdad en Java?',options:['==','=','!='],answer:'==',hint:'No es el operador de asignación.',explanation:'== compara valores; = asigna un valor a una variable.'},
    {id:'u2-test-2',type:'choice',prompt:'¿Qué bucle garantiza al menos una ejecución?',options:['do while','while','for'],answer:'do while',hint:'La condición se revisa al final.',explanation:'do while ejecuta el bloque antes de comprobar la condición.'},
    {id:'u2-fill-1',type:'fill',prompt:'Completa la condición para repetir mientras i sea menor o igual que 10: while (____) { i++; }',answer:'i <= 10',hint:'Incluye el 10.',explanation:'La condición i <= 10 mantiene el bucle hasta procesar el límite superior.'},
    {id:'u2-code-1',type:'code',prompt:'Escribe un fragmento que acumule la suma de los números pares del 1 al 20.',keywords:['for','%','==','suma'],hint:'Recorre del 1 al 20 y filtra con módulo.',explanation:'El patrón combina bucle for, condición de paridad y acumulador suma.'}
  ]
});
