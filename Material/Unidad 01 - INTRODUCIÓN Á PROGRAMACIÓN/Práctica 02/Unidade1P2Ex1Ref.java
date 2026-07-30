/**
 * Clase de referencia para realizar a aplicación da práctica 2 da unidade 1  
 */
public class Unidade1P2Ex1Ref {

	public static void main(String[] args) {		
		System.out.println("1. Comeza a nosa aplicación.");
		final short ALUMNOS_MATRICULADOS = 49; // Constante que garad o número de alumnos matriculados o módulo. Enteiro de tipo short
		final char GRUPO = 'A'; // Constante que indica o grupo do módulo. Tipo de dato char (carácter), 
								// ao que se asigna o valor entre aspas simples.
		
		String codModulo; // Código do módulo. Tipo de dato String
		String nomeModulo; // Nome do módulo. Tipo de dato String
		String profesor; // Nome do profesor. Tipo de dato String
		
		boolean estaActivo = false; // Indica se o módulo se está impartindo na actualidade. Tipo de dato boolean
		float notaMediaGrupo = 8.793f; // Nota media do módulo sobre o histórico de alumnado total. Tipo de dato float
		double segundosTotaisConectado; // Segundos totais conectado á plataforma do alumnado ao longo de todos os cursos do módulo.
									    // Tipo de ato double
		long datosCursoUtilizados; // Cantidade de datos en bits, utilizados polo módulo nos diferentes cursos. Tipo de dato long

		System.out.println("2. Asignamos un valor ás variables non inicializadas na súa declaración.");
		codModulo = "PROG";
		nomeModulo = "Programación";
		profesor = "Manuel Pacior";
		segundosTotaisConectado = 178823411.23;
		datosCursoUtilizados = 4320977328231L;		
		
		System.out.println("3. Sacamos por pantalla os datos das nosas variables no contexto axeitado.");
		System.out.println("   O módulo de " + nomeModulo + " [" + codModulo + "], grupo " + GRUPO  + ", ten en total '" + ALUMNOS_MATRICULADOS + "' alumnos: ");		
		System.out.println("     - Está actualmente activo: " + estaActivo);		
		System.out.println("     - É impartido por: " + profesor);		
		System.out.println("     - O modulo ten en total " + datosCursoUtilizados + " bytes utilizados en disco.");		
		System.out.println("     - A nota media do alumnado do módulo: " + notaMediaGrupo);		
		System.out.println("     - Total de segundos de traballo do módulo: " + segundosTotaisConectado);		
	}
}
