import java.util.Scanner;
import java.util.Random;

public class Ex10XogoPalabras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random rand = new Random();

        String[] palabras = {"programacion", "ordenador", "desenvolvemento", "java", "galego", "exercicio", "aleatorio"};
        String palabraAdivinar = palabras[rand.nextInt(palabras.length)];
        char[] palabraGuiones = new char[palabraAdivinar.length()];

        for (int i = 0; i < palabraGuiones.length; i++) {
            palabraGuiones[i] = '_';
        }

        int intentosMaximos = 7;
        int intentosRestantes = intentosMaximos;

        System.out.println("Benvido ao Xogo de Palabras!");
        System.out.println("Adiviña a palabra: " + String.valueOf(palabraGuiones));

        while (intentosRestantes > 0) {
            System.out.print("Introduce unha letra: ");
            char letra = scanner.next().charAt(0);

            boolean acerto = false;

            for (int i = 0; i < palabraAdivinar.length(); i++) {
                if (palabraAdivinar.charAt(i) == letra) {
                    palabraGuiones[i] = letra;
                    acerto = true;
                }
            }

            if (!acerto) {
                intentosRestantes--;
                System.out.println("Letra incorrecta. Intentos restantes: " + intentosRestantes);
            } else {
                System.out.println("Bo traballo: " + String.valueOf(palabraGuiones));
            }

            if (String.valueOf(palabraGuiones).equals(palabraAdivinar)) {
                System.out.println("Parabéns! Adiviñaches a palabra: " + palabraAdivinar);
                break;
            }
        }

        if (intentosRestantes == 0) {
            System.out.println("Agotáronse os intentos. A palabra correcta era: " + palabraAdivinar);
        }
        scanner.close();
    }
}