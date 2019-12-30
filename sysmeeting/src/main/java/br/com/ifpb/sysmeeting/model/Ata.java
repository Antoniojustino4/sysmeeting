package br.com.ifpb.sysmeeting.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Ata {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private Date dataDaPublicacao;
	
	@OneToMany(mappedBy="ata", cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("ata")
	private List<RegistroTextual> registrosTextuais = new ArrayList<RegistroTextual>();
	
	@OneToOne(mappedBy="ata")
	@JsonIgnoreProperties("ata")
	private Reuniao reuniao;
	
	@OneToMany(mappedBy="ataIndicacao", cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Membro> membros;
	

	public List<Membro> getMembros() {
		return membros;
	}

	public void setMembros(List<Membro> membros) {
		this.membros = membros;
	}

	public List<RegistroTextual> getRegistrosTextuais() {
		return registrosTextuais;
	}

	public void setRegistroTextuais(List<RegistroTextual> registroTextual) {
		this.registrosTextuais = registroTextual;
	}
	
	public void addRegistro(RegistroTextual registro) {
		registrosTextuais.add(registro);
	}

	public Reuniao getReuniao() {
		return reuniao;
	}

	public void setReuniao(Reuniao reuniao) {
		this.reuniao = reuniao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDataDaPublicacao() {
		return dataDaPublicacao;
	}

	public void setDataDaPublicacao(Date dataDaPublicacao) {
		this.dataDaPublicacao = dataDaPublicacao;
	}

	
	
}
