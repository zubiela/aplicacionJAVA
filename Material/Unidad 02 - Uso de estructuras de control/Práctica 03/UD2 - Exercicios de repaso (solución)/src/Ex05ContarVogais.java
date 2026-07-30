import java.util.Scanner;

public class Ex05ContarVogais {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese unha palabra: ");
        String palabra = scanner.nextLine().toLowerCase();

        int contadorVocais = 0;

        for (int i = 0; i < palabra.length(); i++) {
            char letra = palabra.charAt(i);
            if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
                contadorVocais++;
            }
        }

        System.out.println("A palabra " + palabra + " ten " + contadorVocais + " vocáis.");
        scanner.close();
    }
}