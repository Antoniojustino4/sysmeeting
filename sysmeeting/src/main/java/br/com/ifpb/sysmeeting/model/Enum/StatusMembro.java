package br.com.ifpb.sysmeeting.model.Enum;

public enum StatusMembro {

	ADMINISTRADOR("Administrador"), FALTOSO("Faltoso"), ATUANTE("Atuante"),  DESLIGADO("Desligado");

	private String nome;
	
	private StatusMembro(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
