import java.util.Scanner;

public class Ex01SumaNumerosPares {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese un número enteiro positivo: ");
		final int inicio = 2;
		int numero = scanner.nextInt();

		int suma = 0;
		for (int i = inicio; i <= numero; i += 2) {
			suma += i;
		}

		System.out.println("A suma de todos os números pares desde " + inicio + " até " + numero + " é igual a " + suma);
		
		scanner.close();
	}
}
