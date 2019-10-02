package br.com.ifpb.teste.model;

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
