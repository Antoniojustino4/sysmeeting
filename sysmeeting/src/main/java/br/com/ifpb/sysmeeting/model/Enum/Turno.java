package br.com.ifpb.sysmeeting.model.Enum;

public enum Turno {

	MATUTINO("Matutino"), VESPERTINO("Vespertino"), NOTURNO("Noturno"), INTEGRAL("Integral"),
	DIURNO("Diurno");

	private String nome;
	
	private Turno(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
