package br.com.ifpb.sysmeeting.model.Enum;

public enum EstadoAtividadeItem {
	
	CONCLUIDA("Concluída"), EMANDAMENTO("Em Andamento"), CANCELADA("Cancelada") ;
	
	private String nome;
	
	private EstadoAtividadeItem(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
