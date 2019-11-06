package br.com.ifpb.sysmeeting.model;

public enum Titulacao {

	MESTRADO("MESTRADO"), DOUTORADO("DOUTORADO"),
	ESPECIALIZACAO("ESPECIALIZACAO"), GRADUACAO("GRADUACAO");

	private String nome;
	
	private Titulacao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
