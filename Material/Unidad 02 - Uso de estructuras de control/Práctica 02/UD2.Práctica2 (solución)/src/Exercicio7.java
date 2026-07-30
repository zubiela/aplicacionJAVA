import java.util.Scanner;

public class Exercicio7 {
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("  -- EXERCICIO 7 --\n");

		System.out.print("  -- Indique un número para comprobar se é primo: ");
		int val = lerDatos.nextInt();

		int i = 2;
		int resto = -1;
		while ((i < val) && (resto != 0)) {
			resto = val % i;
			if (resto != 0)
				i++;
		}
		if (val == 1) {
			System.out.println("\n   => O número 1 non é primo.");
		}
		else if (resto == 0) {
			System.out.println("\n   => O número non é primo porque é divisible por " + i);
		}		
		else {
			System.out.println("\n   => O número é primo. ");
		}

		System.out.println("\n   -- FIN DO EXERCICIO 7 --");
		lerDatos.close();
	}
}
