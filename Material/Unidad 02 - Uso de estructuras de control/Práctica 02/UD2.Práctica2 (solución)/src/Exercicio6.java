import java.util.Scanner;

public class Exercicio6 {
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 6 --\n");
		final int tamTotal = 10;
		
		String[] nomes = new String[tamTotal];
		int[] idades = new int[tamTotal];

		for (int i = 0; i < nomes.length; i++) {
			System.out.println("\n - Datos do usuario [" + (i+1) +"]: ");
			System.out.print("    . Nome do usuario: ");
			nomes[i] = lerDatos.nextLine();
			System.out.print("    . Idade do usuario: ");
			idades[i] = lerDatos.nextInt();
			lerDatos.nextLine();
		}

		System.out.println("\n - Os datos gardados para os usuarios son: ");
		float idadeMedia = 0;
		for (int i = 0; i < nomes.length; i++) {
			System.out.println(" - Datos do usuario [" + i+1 +"]: nome = " + nomes[i] + ", idade = " + idades[i]);
			idadeMedia += idades[i];
		}			
		idadeMedia = idadeMedia/nomes.length;
		System.out.println("\n - A idade media dos usuarios é: " + idadeMedia);
		
		System.out.println("\n   -- FIN DO EXERCICIO 6 --");
		lerDatos.close();
	}
}
