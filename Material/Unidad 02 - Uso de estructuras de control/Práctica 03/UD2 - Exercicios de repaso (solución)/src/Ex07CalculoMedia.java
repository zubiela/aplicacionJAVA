import java.util.Scanner;

public class Ex07CalculoMedia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double suma = 0;
        int contadorNotas = 0;
        boolean continuar = true;

        while (continuar) {
            System.out.print("Ingrese unha nota (ou introduza -1 para saír): ");
            double nota = scanner.nextDouble();

            if (nota == -1) {
                continuar = false;
            } else {
                suma += nota;
                contadorNotas++;
            }
        }

        if (contadorNotas > 0) {
            double media = suma / contadorNotas;
            System.out.println("A media das notas é: " + media);
        } else {
            System.out.println("Non se ingresaron notas.");
        }
        scanner.close();
    }
}