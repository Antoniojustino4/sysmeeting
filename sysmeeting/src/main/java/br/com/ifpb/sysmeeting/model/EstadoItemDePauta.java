package br.com.ifpb.sysmeeting.model;

public enum EstadoItemDePauta {

	SUGERIDO("SUGERIDO"), ANALISANDO("ANALISANDO"), REJEITADO("REJEITADO"), ENQUADRADO("ENQUADRADO"),
	FORADEPAUTA("FORADEPAUTA"), ENCAMINHADO("ENCAMINHADO"), FINALIZADO("FINALIZADO"), EMPAUTA("EMPAUTA");
	
	private String nome;
	
	private EstadoItemDePauta(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	

}
