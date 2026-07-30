
/**
 * Clase de referencia para realizar a aplicación da práctica 2 da unidade 1  
 */
public class Unidade1P2Ex3 {

	public static void main(String[] args) {		
		String codPedido; // Código de pedido
		String nomeCliente; // Nome do cliente
		
		boolean pedidoFinalizado = false; // Garda se o pedido se atopa finalizado
		float totalPedido; // Prezo total do pedido en €  // <= totalPedido é inicializada despois cun decimal (tipos float ou double)
		// boolean pedidoFinalizado; // <= a variable pedidoFinalizado non pode ser declarada dúas veces no mesmo ámbito.
		
		totalPedido = 154.34f; // Se é float debemos indicalo cunha 'f' ou 'F' ao final.
		codPedido = "45621"; // Código de pedido está definida de tipo String
		nomeCliente = "Xoel Souto"; // <= Había que indicar aspas dobres, é de tipo String 
		
		System.out.println("O pedido " + codPedido + " do cliente: '" + nomeCliente + "'"); // <= O comentario ábrese coas aspas dobres, non simples
																							 //    Os puntos ao final estaban mal colocados.
		System.out.println(" - Ten un custo total de: " + totalPedido + " €"); // <= Para concatenar cadeas de texto temos que usar o operador '+'	
		System.out.println(" - O pedido está finalizado: " + pedidoFinalizado);	
	}
}
