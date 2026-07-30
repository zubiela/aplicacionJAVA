import java.util.Scanner;

public class Ex02NumerosPrimos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número enteiro positivo: ");
        int numero = scanner.nextInt();

        boolean ePrimo = true;

        if (numero < 2) {
            ePrimo = false;
        } else {
            for (int i = 2; i <= numero; i++) {
                if (numero % i == 0) {
                    ePrimo = false;
                    break;
                }
            }
        }

        if (ePrimo) {
            System.out.println(numero + " é un número primo.");
        } else {
            System.out.println(numero + " non é un número primo.");
        }        
        scanner.close();
    }
}