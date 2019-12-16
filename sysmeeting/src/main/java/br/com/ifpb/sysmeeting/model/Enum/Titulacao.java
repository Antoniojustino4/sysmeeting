package br.com.ifpb.sysmeeting.model.Enum;

public enum Titulacao {

	ADMINISTRADOR("Administrador"), MESTRADO("Mestrado"), DOUTORADO("Doutorado"),
	ESPECIALIZACAO("Especialização"), GRADUACAO("Graduação");

	private String nome;
	
	private Titulacao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
