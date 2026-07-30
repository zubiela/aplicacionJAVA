import java.util.Scanner;

public class Exercicio4 {

	public static void main(String[] args) {
		int oper1, oper2, opcion;
		double resultado = 0;

		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 4 --\n");
		System.out.print(" . Operando 1: ");
		oper1 = lerDatos.nextInt();
		System.out.print(" . Operando 2: ");
		oper2 = lerDatos.nextInt();

		System.out.println(" - MENÚ DE OPERACIÓNS ");
		System.out.println("  1. (+): suma os dos operandos.");
		System.out.println("  2. (-): resta os operandos na orde introducida.");
		System.out.println("  3. (*): multiplica os operandos.");
		System.out.println("  4. (/): divide los operandos, e deberá obter un resultado con decimais (double).");
		System.out.println("  5. (%): módulo, resto da división entre os dous operando");
		System.out.print(" > Seleccione unha opción: ");
		opcion = lerDatos.nextInt();

		switch (opcion) {
			case 1:
				resultado = oper1 + oper2;
				break;
			case 2:
				resultado = oper1 - oper2;
				break;
			case 3:
				resultado = oper1 * oper2;
				break;
			case 4:
				resultado = (double) oper1 / oper2;
				break;
			case 5:
				resultado = oper1 % oper2;
				break;

			default:
				System.out.println("[ERRO]: Non seleccionou ningunha opción válida");
				break;
		}
		if ((opcion >= 1) && (opcion <= 5))
			System.out.println(" => O resultado da opción '" + opcion + "' é '" + resultado + "'.");

		System.out.println("\n   -- FIN DO EXERCICIO 4 --");
		lerDatos.close();
	}

}
