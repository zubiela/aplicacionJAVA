import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 2 --\n");
		System.out.print(" . Temperatura máxima (F): ");
		float temp_maxima = lerDatos.nextFloat();
		System.out.print(" . Temperatura (ºC): ");
		float temperatura = lerDatos.nextFloat();
		
		System.out.println("\n . Formula: F = 32 + ( 9 * ºC / 5)");
		temperatura = 32 + (9*temperatura/5);
		System.out.println(" . Temperatura (ºF): " + temperatura + "\n");
		
		
		if (temperatura < temp_maxima) {
			System.out.println(" => A temperatura '" + temperatura + "F' é inferior á temperatura máxima '" + temp_maxima + "F' .");
		}
		else if (temperatura > temp_maxima) {
			System.out.println(" => A temperatura '" + temperatura + "F' supera a temperatura máxima '" + temp_maxima + "F' .");
		}
		else {
			System.out.println(" => A temperatura '" + temperatura + "F' é igual á temperatura máxima '" + temp_maxima + "F' .");
		}
		System.out.println("\n   -- FIN DO EXERCICIO 2 --");
		lerDatos.close();
	}

}
