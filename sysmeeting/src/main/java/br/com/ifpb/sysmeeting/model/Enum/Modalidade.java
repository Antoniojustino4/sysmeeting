package br.com.ifpb.sysmeeting.model.Enum;

public enum Modalidade {

	PRESENCIAL("Presencial"), ADISTANCIA("EAD"), SEMIPRESENCIAL("Semi Presencial");

	private String nome;
	
	private Modalidade(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
