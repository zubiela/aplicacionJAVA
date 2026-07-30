import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner lerDatos = new Scanner(System.in);
		System.out.println("   -- EXERCICIO 1 --\n");
		System.out.print(" . Nome: ");
		String nome = lerDatos.nextLine();
		System.out.print(" . Apelidos: ");
		String apelidos = lerDatos.nextLine();

		System.out.print(" . Idade: ");
		int idade = lerDatos.nextInt();
		
		System.out.print("\n => O usuario '" + nome + " " + apelidos + "' ten '" + idade + "' anos, así que é");		
		if (idade < 18) {
			System.out.println(" menor de idade");
		}
		else {
			System.out.println(" maior de idade");
		}
		System.out.println("\n   -- FIN DO EXERCICIO 1 --");
		lerDatos.close();
	}

}
