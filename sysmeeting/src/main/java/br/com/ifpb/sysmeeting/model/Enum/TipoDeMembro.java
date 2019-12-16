package br.com.ifpb.sysmeeting.model.Enum;

public enum TipoDeMembro {

	ADMINISTRADOR("Administrador"), PRESIDENTE("Presidente"), DOCENTE_INTERNO("Docente interno"),  TECNICO_ADMINISTRATIVO_PEDAGOGICO("Tecnico administrativo pedagogico"),
	DOCENTE_EXTERNO("Docente Externo"), DISCENTE("Discente"),  SUPLENTE_DISCENTE("Suplente Discente"),
	SUPLENTE_TECNICO_ADMINISTRATIVO_PEDAGOGICO("Suplente Tecnico Administrativo Pedagogico"),
	SUPLENTE_DOCENTE_EXTERNO("Suplente Docente Externo");

	private String nome;
	
	private TipoDeMembro(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}

}
