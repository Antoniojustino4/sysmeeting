package br.com.ifpb.sysmeeting.model.Enum;

public enum TipoDeReuniao {

	ORDINARIA("Ordinária"), EXTRAORDINARIA("Extraordinária");

	private String nome;
	
	private TipoDeReuniao(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
