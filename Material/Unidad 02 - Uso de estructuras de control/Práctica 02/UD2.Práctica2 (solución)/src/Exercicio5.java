import java.util.Scanner;

public class Exercicio5 {
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 5 --\n");

		System.out.print("  -- Indique un número para comezar a conta atrás: ");
		int val = lerDatos.nextInt();
		
		for (int i=val; i>=0; i--) {
			if (i==val)
				System.out.println("- Vai comezar a conta atrás!");
			System.out.println("  => Contador: " + i);
			Thread.sleep(1000);
		}
		System.out.println("  ¡¡¡BOOOOM!!! ");
		System.out.println("\n   -- FIN DO EXERCICIO 5 --");
		lerDatos.close();
	}
}
