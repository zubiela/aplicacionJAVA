import java.util.Scanner;

public class Exercicio3_Alternativa {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 3 --\n");

		final int min = 1;
		final int max = 20;
		int val = (int) (Math.floor(Math.random() * (max - min + 1) + min));
	
		boolean acertou = false;
		
		int i=1;
		do {
			System.out.print("\n - [Intento: " + i + "] Adiviña o número: ");
			int numero = -1;
			do {
				numero = lerDatos.nextInt();
				if ((numero < 1) || (numero > 20))
					System.out.print("   [ERRO] O numero está fora de rango, volve a introducilo: ");
			}
			while ((numero < 1) || (numero > 20));

			if (numero == val) {
				System.out.println("  - Parabéns, acertaches o número, era '" + val + "' :).");
				acertou = true;
			}
			else {
				System.out.println(" - Sintoo, o número indicado non é o correcto :(.");
			}
			i++;
		}
		while ((i<6) && !acertou);
		if (!acertou)
			System.out.println(" Fin do xogo, acadou o número máximo de intentos!, O número era: " + val);

		System.out.println("\n   -- FIN DO EXERCICIO 3 --");
		lerDatos.close();
	}
}
