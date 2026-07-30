import java.util.Scanner;

public class Ex04MultiplosComuns {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Ingrese o segundo número: ");
        int num2 = scanner.nextInt();

        System.out.println("Múltiplos comúns de " + num1 + " e " + num2 + ":");

        for (int i = 1; i <= num1 * num2; i++) {
            if (i % num1 == 0 && i % num2 == 0) {
                System.out.print(i + " ");
            }
        }
        scanner.close();
    }
}