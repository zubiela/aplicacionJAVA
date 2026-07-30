import java.util.Scanner;

/**
 * Clase de exemplo onde se usa a Clase Scanner para ler datos
 */
public class ExLerDatos {
	public static void main(String[] args) {
		Scanner lerDatos = new Scanner(System.in);
		System.out.print("Introduce o teu nome: ");
		String nome = lerDatos.nextLine();
		System.out.print("Introduce o teu DNI: ");
		String dni = lerDatos.next();
		
		lerDatos.nextLine();
		System.out.print("Introduce a túa idade: ");
		int idade = lerDatos.nextInt();

		lerDatos.nextLine();
		System.out.print("Cal é a súa estatura (m): ");
		double estatura = lerDatos.nextDouble();
		
		System.out.println("");
		System.out.println("O usuario seleccionado é " + nome + " con DNI '" + dni + "' mide " + estatura + " e ten " + idade + " anos de idade.");
	}
}