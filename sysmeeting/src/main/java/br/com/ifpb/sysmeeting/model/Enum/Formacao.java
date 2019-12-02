package br.com.ifpb.sysmeeting.model.Enum;

public enum Formacao {

	TECNOLOGO("Tecnologo"), BACHARELADO("Bacharelado"), LICENCIATURA("Licenciatura");

	private String nome;
	
	private Formacao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
