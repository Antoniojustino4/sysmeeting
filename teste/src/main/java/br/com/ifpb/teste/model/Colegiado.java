package br.com.ifpb.teste.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;


@Entity
@PrimaryKeyJoinColumn(name = "id")
public class Colegiado extends Orgao {

	private int tecAdmQntdMin = 1;

	private int tecAdmQntdMax;

	private int discenteQntdMax;

	private int discenteQntdMin = 1;

	private int docenteExternoQntdMin = 1;

	private int docenteExternoQntdMax;


	public Colegiado() {
		this.setVigenciaMandatoMeses(24);
		this.setVigenciaReconducaoMeses(12);
		this.setDocenteQntdMin(4);
	}
	
	
	public int getTecAdmQntdMin() {
		return tecAdmQntdMin;
	}

	public void setTecAdmQntdMin(int tecAdmQntdMin) {
		this.tecAdmQntdMin = tecAdmQntdMin;
	}

	public int getTecAdmQntdMax() {
		return tecAdmQntdMax;
	}

	public void setTecAdmQntdMax(int tecAdmQntdMax) {
		this.tecAdmQntdMax = tecAdmQntdMax;
	}

	public int getDiscenteQntdMax() {
		return discenteQntdMax;
	}

	public void setDiscenteQntdMax(int discenteQntdMax) {
		this.discenteQntdMax = discenteQntdMax;
	}

	public int getDiscenteQntdMin() {
		return discenteQntdMin;
	}

	public void setDiscenteQntdMin(int discenteQntdMin) {
		this.discenteQntdMin = discenteQntdMin;
	}

	public int getDocenteExternoQntdMin() {
		return docenteExternoQntdMin;
	}

	public void setDocenteExternoQntdMin(int docenteExternoQntdMin) {
		this.docenteExternoQntdMin = docenteExternoQntdMin;
	}

	public int getDocenteExternoQntdMax() {
		return docenteExternoQntdMax;
	}

	public void setDocenteExternoQntdMax(int docenteExternoQntdMax) {
		this.docenteExternoQntdMax = docenteExternoQntdMax;
	}

	
}
