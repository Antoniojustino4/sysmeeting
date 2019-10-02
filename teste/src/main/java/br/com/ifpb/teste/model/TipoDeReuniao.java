package br.com.ifpb.teste.model;

public enum TipoDeReuniao {

	ORDINARIA("ORDINARIA"), EXTRAORDINARIA("EXTRAORDINARIA");

	private String nome;
	
	private TipoDeReuniao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
