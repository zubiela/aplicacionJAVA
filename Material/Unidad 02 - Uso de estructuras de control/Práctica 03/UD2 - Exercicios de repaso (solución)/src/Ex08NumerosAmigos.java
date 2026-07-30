import java.util.Scanner;

public class Ex08NumerosAmigos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Ingrese o segundo número: ");
        int num2 = scanner.nextInt();

        int sumaDivisores1 = 0;
        int sumaDivisores2 = 0;

        for (int i = 1; i <= num1 / 2; i++) {
            if (num1 % i == 0) {
                sumaDivisores1 += i;
            }
        }

        for (int i = 1; i <= num2 / 2; i++) {
            if (num2 % i == 0) {
                sumaDivisores2 += i;
            }
        }

        if (sumaDivisores1 == num2 && sumaDivisores2 == num1) {
            System.out.println(num1 + " e " + num2 + " son números amigos.");
        } else {
            System.out.println(num1 + " e " + num2 + " non son números amigos.");
        }
        scanner.close();
    }
}