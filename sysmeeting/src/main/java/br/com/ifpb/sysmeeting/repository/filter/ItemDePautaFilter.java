package br.com.ifpb.sysmeeting.repository.filter;

import br.com.ifpb.sysmeeting.model.EstadoItemDePauta;

public class ItemDePautaFilter {
	
	private EstadoItemDePauta estado;
	
	private String assunto;

	public EstadoItemDePauta getEstado() {
		return estado;
	}

	public void setEstado(EstadoItemDePauta estado) {
		this.estado = estado;
	}

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}
	
	

}
