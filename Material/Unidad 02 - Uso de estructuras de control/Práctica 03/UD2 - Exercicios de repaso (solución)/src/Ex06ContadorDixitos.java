import java.util.Scanner;

public class Ex06ContadorDixitos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número enteiro: ");
        int numero = scanner.nextInt();
        int numAbsoluto;

        int contadorDigitos = 0;
        if (numero < 0)
        	numAbsoluto = numero * (-1);
        else 
        	numAbsoluto = numero;
        
        while (numAbsoluto > 0) {
            numAbsoluto /= 10;
            contadorDigitos++;
        }

        System.out.println("O número " + numero + " ten " + contadorDigitos + " díxitos.");
        scanner.close();
    }
}
