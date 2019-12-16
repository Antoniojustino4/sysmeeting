package br.com.ifpb.sysmeeting.repository.filter;

import java.util.Date;

public class ReuniaoFilter {

	private Long id;
	
	private Date anoMes;
	
	private String orgao;

	public Long getId() {
		return id;
	}

	public void setId(Long nome) {
		this.id = nome;
	}

	public Date getAnoMes() {
		return anoMes;
	}

	public void setAnoMes(Date anoMes) {
		this.anoMes = anoMes;
	}

	public String getOrgao() {
		return orgao;
	}

	public void setOrgao(String orgao) {
		this.orgao = orgao;
	}
	
	
	
}
