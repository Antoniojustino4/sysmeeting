package br.com.ifpb.sysmeeting.model.Enum;

public enum EstadoItemDePauta {

	SUGERIDO("Sugerido"), ANALISANDO("Analisando"), REJEITADO("Rejeitado"), ENQUADRADO("Enquadrado"),
	FORADEPAUTA("Fora de Pauta"), ENCAMINHADO("Emcaminhado"), FINALIZADO("Finalizado"), EMPAUTA("Em Pauta");
	
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
