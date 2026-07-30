import java.util.Scanner;

public class Exercicio4 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 4 --\n");

		System.out.println("  -- Calendario de pagos --\n");

		int pago = 10;
		int total = 0;
		for (int i = 1; i <= 10; i++) {
			total = total + pago;
			System.out.println(" . Pago [" + i + "]: " + pago + "€");
			pago = pago * 2;
			// System.out.println(" => Pago acumulado: " + total + "€");
		}		
		System.out.println("\n Pago total: " + total + "€");
		System.out.println("\n   -- FIN DO EXERCICIO 4 --");
		lerDatos.close();
	}
}
