package br.com.ifpb.sysmeeting.model;

public enum Turno {

	MATUTINO("MATUTINO"), VESPERTINO("VESPERTINO"), NORTUNO("NORTUNO"), INTEGRAL("INTEGRAL"),
	DIURNO("DIURNO");

	private String nome;
	
	private Turno(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
