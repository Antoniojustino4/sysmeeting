package br.com.ifpb.sysmeeting.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;


@Entity
@PrimaryKeyJoinColumn(name = "id")
public class NDE extends Orgao {
	
	public NDE() {
		this.setVigenciaMandatoMeses(24);
		this.setVigenciaReconducaoMeses(24);
		this.setDocenteQntdMin(5);
	}

	
}
