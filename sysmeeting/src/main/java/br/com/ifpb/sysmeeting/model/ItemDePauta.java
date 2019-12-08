package br.com.ifpb.sysmeeting.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.ifpb.sysmeeting.model.Enum.EstadoItemDePauta;


@Entity
@Table(name = "item_de_pauta")
@JsonIgnoreProperties({"reunioes","orgao"})
public class ItemDePauta {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String descricao;
	
	private String assunto;

	private Date dataSugestao;

	private Date dataEnquadrado;
	
	private EstadoItemDePauta estado;
	
	@OneToOne
	@JoinColumn(name = "id_item_de_pauta")
	@JsonIgnoreProperties("itemDePauta")
	private ItemDePauta itemDePauta;
	
//	@OneToOne
//	private Votacao votacao;
	
//	@JoinTable(
//			  name = "registro_textual_itens_de_pauta", 
//			  joinColumns = @JoinColumn(name = "id_item_de_pauta"), 
//			  inverseJoinColumns = @JoinColumn(name = "id_registro_textual"))
//	@ManyToMany
//	private List<RegistroTextualAta> registroTextualAta = new ArrayList<RegistroTextualAta>();
	
//	@OneToMany(mappedBy="itemDePauta", targetEntity=Opiniao.class,fetch = FetchType.LAZY)
//	private List<Opiniao> opinioes = new ArrayList<Opiniao>();
	
//	@ManyToMany
//	private List<Interessado> interessados = new ArrayList<Interessado>();
	
	
	@JoinTable(
			  name = "reuniao_itens_de_pauta", 
			  joinColumns = @JoinColumn(name = "id_item_de_pauta"), 
			  inverseJoinColumns = @JoinColumn(name = "id_reuniao"))
	@JsonProperty
	@ManyToMany
	private List<Reuniao> reunioes = new ArrayList<Reuniao>();
	
//	@ManyToMany
//	private List<Atividade> atividades;
	
//	@ManyToOne
//	private Atribuicao atribuicao;

	@ManyToOne
	@JsonProperty
	@JoinColumn(name = "id_orgao")
	private Orgao orgao;
	
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


	public Orgao getOrgao() {
		return orgao;
	}


	public void setOrgao(Orgao orgao) {
		this.orgao = orgao;
	}


	public void setReunioes(List<Reuniao> reunioes) {
		this.reunioes = reunioes;
	}
	
	public void addReuniao(Reuniao reuniao) {
		reunioes.add(reuniao);
	}
	
	public void removerReuniao(Reuniao reuniao) {
		reunioes.remove(reuniao);
	}
	
//
//	public void setReunioes(List<Reuniao> reunioes) {
//		this.reunioes = reunioes;
//	}
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

	public EstadoItemDePauta getEstado() {
		return estado;
	}

	public void setEstado(EstadoItemDePauta estado) {
		this.estado = estado;
	}

	public ItemDePauta getItemDePauta() {
		return itemDePauta;
	}

	public void setItemDePauta(ItemDePauta itemDePauta) {
		this.itemDePauta = itemDePauta;
	}

//	public List<RegistroTextualAta> getRegistroTextualAta() {
//		return registroTextualAta;
//	}
//	
//	public void setRegistroTextualAta(List<RegistroTextualAta> registroTextualAta) {
//		this.registroTextualAta = registroTextualAta;
//	}

	
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
	
	

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
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
