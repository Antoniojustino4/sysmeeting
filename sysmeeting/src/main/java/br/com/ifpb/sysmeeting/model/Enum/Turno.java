package br.com.ifpb.sysmeeting.model.Enum;

public enum Turno {

	MATUTINO("MATUTINO"), VESPERTINO("VESPERTINO"), NOTURNO("NOTURNO"), INTEGRAL("INTEGRAL"),
	DIURNO("DIURNO");

	private String nome;
	
	private Turno(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
