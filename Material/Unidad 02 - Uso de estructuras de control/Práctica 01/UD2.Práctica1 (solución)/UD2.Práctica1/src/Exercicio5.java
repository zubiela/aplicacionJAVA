import java.util.Scanner;

public class Exercicio5 {

	public static void main(String[] args) {
		int opcion;
		double area = 0;

		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 5 --\n");
		
		System.out.println(" - MENÚ DE OPERACIÓNS ");
		System.out.println("  1. Calcular área dun rectángulo.");
		System.out.println("  2. Calcular área dun triángulo.");
		System.out.println("  3. Calcular área dunha circunferencia.");
		System.out.print(" > Seleccione unha opción: ");
		opcion = lerDatos.nextInt();

		switch (opcion) {
			case 1:
				float largo, altRect;
				System.out.print(" - Largo (ancho): ");
				largo = lerDatos.nextFloat();
				System.out.print(" - Altura: ");
				altRect = lerDatos.nextFloat();				
				area = largo * altRect;
				break;
			case 2:
				float base, altTriangulo;
				System.out.print(" - Base: ");
				base = lerDatos.nextFloat();
				System.out.print(" - Altura: ");
				altTriangulo = lerDatos.nextFloat();				
				area = (base * altTriangulo)/2;
				break;
			case 3:
				float diametro;
				System.out.print(" - Diámetro: ");
				diametro = lerDatos.nextFloat();				
				area = (diametro/2) * (diametro/2) * 3.14;
				break;

			default:
				System.out.println(" [ERRO]: Non seleccionou ningunha opción válida");
				break;
		}
		if ((opcion >= 1) && (opcion <= 3))
			System.out.println(" => O resultado da opción '" + opcion + "' é área = '" + area + "'.");

		System.out.println("\n   -- FIN DO EXERCICIO 5 --");
		lerDatos.close();

	}

}
