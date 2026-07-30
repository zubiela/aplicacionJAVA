window.JAVA_MENTOR_UNITS = window.JAVA_MENTOR_UNITS || [];
window.JAVA_MENTOR_UNITS.push({
  id:'unidad-4', title:'Unidad 4 · Control de excepcións', level:'Intermedio', estimatedMinutes:180,
  resources:[
    {label:'Apuntes UD4: control de excepcións',href:'Material/Unidad 04 - Control de excepcións/UD 4 - Control de excepcións (v1.3).pdf'},
    {label:'Recurso: propagación de excepciones',href:'Material/Unidad 04 - Control de excepcións/Recursos - Propagación de Excepciones en Java.pdf'},
    {label:'Práctica UD4',href:'Material/Unidad 04 - Control de excepcións/Practica/UD 4. Práctica 1 - Control de excepcións.pdf'}
  ],
  objectives:['Entender qué es una excepción y cuándo aparece.','Controlar errores con try, catch y finally.','Diferenciar captura y propagación de excepciones.','Aplicar el tratamiento de errores en entradas de usuario y operaciones sensibles.'],
  sections:[
    {title:'Qué es una excepción', body:'El material de UD4 trabaja situaciones anómalas que interrumpen el flujo normal: datos mal introducidos, divisiones no válidas, índices fuera de rango o recursos que no están disponibles.', example:'Si se intenta convertir "abc" a entero, Java lanza una excepción porque el dato no tiene formato numérico.'},
    {title:'try y catch', body:'El bloque try contiene el código que puede fallar. El bloque catch describe cómo reaccionar cuando aparece un tipo concreto de excepción.', code:'try {\n  int idade = Integer.parseInt(texto);\n  System.out.println(idade);\n} catch (NumberFormatException e) {\n  System.out.println("Introduce un número válido");\n}'},
    {title:'finally y limpieza', body:'finally se ejecuta tanto si hubo excepción como si no. Se utiliza para acciones de cierre o limpieza cuando son necesarias.', code:'try {\n  System.out.println("Operación");\n} finally {\n  System.out.println("Fin del intento");\n}'},
    {title:'Propagación', body:'Una excepción puede capturarse donde se produce o propagarse para que la trate otro método. La decisión depende de quién tiene información suficiente para recuperar el programa.', diagram:['Método que falla','Propaga excepción','Método que captura','Mensaje o recuperación']},
    {title:'Buenas prácticas', body:'No se trata de ocultar errores, sino de dar respuestas claras y mantener el programa en estado consistente. Captura excepciones concretas y acompaña el mensaje con una solución para el usuario.'}
  ],
  commonMistakes:['Capturar Exception para todo sin saber qué falló.','Dejar catch vacíos.','Usar excepciones para controlar lógica normal que podría validarse antes.','Mostrar mensajes técnicos poco útiles al usuario final.'],
  tips:['Valida la entrada cuando puedas y usa excepciones para casos anómalos.','Captura primero excepciones específicas.','Incluye mensajes de recuperación: qué debe corregir el usuario.'],
  curiosities:['La propagación permite separar el lugar donde ocurre el problema del lugar donde se decide cómo resolverlo.'],
  summary:'La unidad 4 enseña a anticipar fallos, capturarlos con bloques try/catch/finally y decidir cuándo conviene propagar una excepción.',
  exercises:[
    {id:'u4-test-1',type:'choice',prompt:'¿En qué bloque se coloca el código que puede lanzar una excepción?',options:['try','catch','finally'],answer:'try',hint:'Es el bloque que se intenta ejecutar.',explanation:'try envuelve el código potencialmente problemático.'},
    {id:'u4-test-2',type:'choice',prompt:'¿Qué bloque se ejecuta incluso si no hay excepción?',options:['finally','catch','throws'],answer:'finally',hint:'Se usa para limpieza.',explanation:'finally se ejecuta al final del intento, haya o no excepción.'},
    {id:'u4-fill-1',type:'fill',prompt:'Completa el tipo de excepción al convertir texto no numérico con Integer.parseInt: ____',answer:'NumberFormatException',hint:'Indica formato numérico incorrecto.',explanation:'NumberFormatException aparece cuando una cadena no se puede convertir a número.'},
    {id:'u4-code-1',type:'code',prompt:'Escribe un fragmento que lea o reciba un texto y controle el fallo al convertirlo a int.',keywords:['try','catch','Integer.parseInt','NumberFormatException'],hint:'Mete parseInt dentro del try y el mensaje de error en catch.',explanation:'El patrón básico de UD4 es aislar la operación peligrosa y capturar una excepción concreta.'}
  ]
});
