import java.util.Scanner;

public class Ex03Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número enteiro positivo: ");
        int numero = scanner.nextInt();

        int factorial = 1;

        for (int i = 1; i <= numero; i++) {
            factorial *= i;
        }

        System.out.println("O factorial de " + numero + " é: " + factorial);
        
        scanner.close();
    }
}