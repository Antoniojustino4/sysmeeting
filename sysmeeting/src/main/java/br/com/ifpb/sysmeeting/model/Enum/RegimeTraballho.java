package br.com.ifpb.sysmeeting.model.Enum;

public enum RegimeTraballho {

	INTEGRAL("INTEGRAL"), PARCIAL("PARCIAL"), DEDICACAOEXCLUSIVA("DEDICACAOEXCLUSIVA");

	private String nome;
	
	private RegimeTraballho(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
