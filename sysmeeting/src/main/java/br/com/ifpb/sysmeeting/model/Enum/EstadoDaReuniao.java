package br.com.ifpb.sysmeeting.model.Enum;

public enum EstadoDaReuniao {

	AGENDADACOMPAUTA("Agendada com Pauta"), AGENDADASEMPAUTA("Agendada sem Pauta"), CANCELADA("Cancelada"),
	REALIZADA("Realizada");
	
	private String nome;
	
	private EstadoDaReuniao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
