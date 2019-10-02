package br.com.ifpb.sysmeeting.model;

public enum Modalidade {

	PRESENCIAL("PRESENCIAL"), ADISTANCIA("ADISTANCIA"), SEMIPRESENCIAL("SEMIPRESENCIAL");

	private String nome;
	
	private Modalidade(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
