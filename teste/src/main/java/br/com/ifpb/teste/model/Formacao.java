package br.com.ifpb.teste.model;

public enum Formacao {

	TECNOLOGO("TECNOLOGO"), BACHARELADO("BACHARELADO"), LICENCIATURA("LICENCIATURA");

	private String nome;
	
	private Formacao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
