package br.com.ifpb.teste.model;

public enum EstadoDaReuniao {

	AGENDADACOMPAUTA("AGENDADACOMPAUTA"), AGENDADASEMPAUTA("AGENDADASEMPAUTA"), CANCELADA("CANCELADA"),
	REALIZADA("REALIZADA");
	
	private String nome;
	
	private EstadoDaReuniao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
