package br.com.ifpb.sysmeeting.model;

public enum Modalidade {

	PRESENCIAL("PRESENCIAL"), ADISTANCIA("EAD"), SEMIPRESENCIAL("SEMIPRESENCIAL");

	private String nome;
	
	private Modalidade(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
