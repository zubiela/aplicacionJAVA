import java.util.Scanner;

public class Ex09CifradoCesar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese a mensaxe a cifrar: ");
        String mensaxe = scanner.nextLine().toUpperCase();

        System.out.print("Ingrese o número de posicións a desprazar (valor enteiro): ");
        int desprazamento = scanner.nextInt();

        StringBuilder cifrada = new StringBuilder();

        for (int i = 0; i < mensaxe.length(); i++) {
            char caracter = mensaxe.charAt(i);

            if (caracter >= 'A' && caracter <= 'Z') {
                char cifrado = (char) (((caracter - 'A' + desprazamento) % 26) + 'A');
                cifrada.append(cifrado);
            } else {
                cifrada.append(caracter);
            }
        }

        System.out.println("Mensaxe cifrada: " + cifrada);
        scanner.close();
    }
}