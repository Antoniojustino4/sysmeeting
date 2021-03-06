package br.com.ifpb.sysmeeting.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.ifpb.sysmeeting.model.Enum.Formacao;
import br.com.ifpb.sysmeeting.model.Enum.Modalidade;
import br.com.ifpb.sysmeeting.model.Enum.Turno;


@Entity
@JsonIgnoreProperties ({"colegiadoVigente", "ndeVigente"})
public class Curso {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String nome;
	
	@Enumerated(EnumType.STRING)
	private Turno turno;

	@Enumerated(EnumType.STRING)
	private Modalidade modalidade;

	@Enumerated(EnumType.STRING)
	private Formacao formacao;
	
	
	@OneToMany(mappedBy="curso",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("curso")
	private List<Orgao> orgoes = new ArrayList<Orgao>();
	
	@ManyToOne
	@JoinColumn(name = "id_campus")
	@JsonIgnoreProperties("cursos")
	private Campus campus;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_colegiado")
	@JsonProperty("colegiadoVigente")
	private Colegiado colegiadoVigente;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonProperty("ndeVigente")
	@JoinColumn(name = "id_nde")
	private NDE ndeVigente;
	

	public List<Orgao> getOrgoes() {
		return orgoes;
	}

	public void setOrgoes(List<Orgao> orgoes) {
		this.orgoes = orgoes;
	}
	
	public void addOrgao(Orgao orgao) {
		orgoes.add(orgao);
	}

	public Campus getCampus() {
		return campus;
	}

	public void setCampus(Campus campus) {
		this.campus = campus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Turno getTurno() {
		return turno;
	}

	public void setTurno(Turno turno) {
		this.turno = turno;
	}

	public Modalidade getModalidade() {
		return modalidade;
	}

	public void setModalidade(Modalidade modalidade) {
		this.modalidade = modalidade;
	}

	public Formacao getFormacao() {
		return formacao;
	}

	public void setFormacao(Formacao formacao) {
		this.formacao = formacao;
	}

	public Colegiado getColegiadoVigente() {
		return colegiadoVigente;
	}

	public void setColegiadoVigente(Colegiado colegiadoVigente) {
		this.colegiadoVigente = colegiadoVigente;
	}

	public NDE getNdeVigente() {
		return ndeVigente;
	}

	public void setNdeVigente(NDE ndeVigente) {
		this.ndeVigente = ndeVigente;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Curso other = (Curso) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
}
