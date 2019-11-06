package br.com.ifpb.sysmeeting.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name = "item_de_pauta")
@JsonIgnoreProperties({ "itemDePauta" })
public class ItemDePauta {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String descricao;

	private Date dataSugestao;

	private Date dataEnquadrado;
	
	@OneToOne
	@JoinColumn(name = "id_item_de_pauta")
	@JsonProperty("itemDePauta")
	private ItemDePauta itemDePauta;
	
//	@OneToOne
//	private Votacao votacao;
	
//	@OneToOne
//	private RegistroTextualAta registroTextualAta;
	
//	@OneToMany(mappedBy="itemDePauta", targetEntity=Opiniao.class,fetch = FetchType.LAZY)
//	private List<Opiniao> opinioes;
	
//	@ManyToMany
//	private List<Interessado> interessados;
	
	
	@JoinTable(
			  name = "reuniao_itens_de_pauta", 
			  joinColumns = @JoinColumn(name = "id_item_de_pauta"), 
			  inverseJoinColumns = @JoinColumn(name = "id_reuniao"))
	@ManyToMany
	private List<Reuniao> reunioes;
	
//	@ManyToMany
//	private List<Atividade> atividades;
	
//	@ManyToOne
//	private Atribuicao atribuicao;

//	public RegistroTextualAta getRegistroTextualAta() {
//		return registroTextualAta;
//	}
//
//	public void setRegistroTestualAta(RegistroTextualAta registroTextualAta) {
//		this.registroTextualAta = registroTextualAta;
//	}
//
//	public List<Opiniao> getOpinioes() {
//		return opinioes;
//	}
//
//	public void setOpinioes(List<Opiniao> opinioes) {
//		this.opinioes = opinioes;
//	}
//
	public List<Reuniao> getReunioes() {
		return reunioes;
	}

	public void setReunioes(List<Reuniao> reunioes) {
		this.reunioes = reunioes;
	}
//
//	public List<Atividade> getAtividades() {
//		return atividades;
//	}
//
//	public void setAtividades(List<Atividade> atividades) {
//		this.atividades = atividades;
//	}
//
//	public Atribuicao getAtribuicao() {
//		return atribuicao;
//	}
//
//	public void setAtribuicao(Atribuicao atribuicao) {
//		this.atribuicao = atribuicao;
//	}
//
//	public List<Interessado> getInteressados() {
//		return interessados;
//	}
//
//	public void setInteressados(List<Interessado> interessados) {
//		this.interessados = interessados;
//	}
//
//	public Votacao getVotacao() {
//		return votacao;
//	}
//
//	public void setVotacao(Votacao votacao) {
//		this.votacao = votacao;
//	}
	
	

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
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
		ItemDePauta other = (ItemDePauta) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getDataSugestao() {
		return dataSugestao;
	}

	public void setDataSugestao(Date dataSugestao) {
		this.dataSugestao = dataSugestao;
	}

	public Date getDataEnquadrado() {
		return dataEnquadrado;
	}

	public void setDataEnquadrado(Date dataEnquadrado) {
		this.dataEnquadrado = dataEnquadrado;
	}

	
}
