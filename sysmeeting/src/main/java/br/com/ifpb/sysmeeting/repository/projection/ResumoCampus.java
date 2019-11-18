package br.com.ifpb.sysmeeting.repository.projection;

public class ResumoCampus {

	
	private String nome;
	
	private String cnpj;
	
	private String cidade;
	

	public ResumoCampus(String nome, String cnpj, String cidade) {
		super();
		this.nome = nome;
		this.cnpj = cnpj;
		this.cidade = cidade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	
}
