package br.com.ifpb.sysmeeting.exceptionhandler;

public class DesafioException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public DesafioException(String mensagem) {
		super(mensagem);
	}
	
	public DesafioException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}
	
	

}
