package br.com.ifpb.teste.model;

public enum StatusMembro {

	FALTOSO("FALTOSO"), ATUANTE("ATUANTE"),  DESLIGADO("DESLIGADO");

	private String nome;
	
	private StatusMembro(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
