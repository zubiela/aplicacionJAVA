import java.util.Scanner;

public class Exercicio2 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 2 --\n");
		
		int numVeces;
		do {
			System.out.print(" . Indica o número de veces que se amosará a mensaxe: ");
			numVeces = lerDatos.nextInt();

			if ((numVeces < 1) || (numVeces > 99)) {
				System.out.println("   [ERROR] O número de veces debe estar no rango [1, 99].");
			}
			else {
				for (int i = 1; i <= numVeces; i++) {
					System.out.println("Amosando a mensaxe número " + i);
				}
			}
		}
		while ((numVeces < 1) || (numVeces > 99));

		System.out.println("\n   -- FIN DO EXERCICIO 2 --");
		lerDatos.close();
	}
}
