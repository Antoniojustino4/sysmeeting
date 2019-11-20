package br.com.ifpb.sysmeeting.model.Enum;

public enum EstadoAtividadeItem {
	
	CONCLUIDA("CONCLUIDA"), EMANDAMENTO("EMANDAMENTO"), CANCELADA("CANCELADA") ;
	
	private String nome;
	
	private EstadoAtividadeItem(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
