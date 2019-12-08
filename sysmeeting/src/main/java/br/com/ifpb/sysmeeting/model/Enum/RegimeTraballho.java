package br.com.ifpb.sysmeeting.model.Enum;

public enum RegimeTraballho {

	INTEGRAL("Integral"), PARCIAL("Parcial"), DEDICACAOEXCLUSIVA("Dedicação Exclusiva");

	private String nome;
	
	private RegimeTraballho(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
