import java.util.Scanner;

public class Exercicio3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final double CREDITO_MAXIMO = 20000;
				
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 3 --\n");
		System.out.println(" . Crédito máximo permitido: " + CREDITO_MAXIMO);
		System.out.print(" . Prezo do produto: ");
		double prezoProduto = lerDatos.nextDouble();
		double prezoTotal = prezoProduto * 1.21;
		System.out.println(" . Prezo con IVE (21%): " + prezoTotal + "\n");
		
		if (prezoTotal <= CREDITO_MAXIMO) {
			System.out.println(" => O usuario pode comprar o produto porque non supera o crédito máximo.");
		}
		else {
			System.out.println(" => O usuario non pode comprar o produto porque supera o crédito máximo.");
		}
		System.out.println("\n   -- FIN DO EXERCICIO 3 --");
		lerDatos.close();
	}

}
