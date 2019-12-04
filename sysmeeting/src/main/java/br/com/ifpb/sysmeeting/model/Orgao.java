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
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
public abstract class Orgao {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private int quorum;
	
	private Date inicioDeMandato;
	
	private Date vencimentoDeMandato;

	private int vigenciaMandatoMeses;

	private int vigenciaReconducaoMeses;

	private int docenteQntdMin;

	private int docenteQntdMax;
	
//	@OneToMany(mappedBy="orgao", targetEntity=Atribuicao.class,cascade=CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Atribuicao> atribuicoes = new ArrayList<Atribuicao>();
	
	@ManyToOne
	@JsonIgnoreProperties("orgoes")
	@JoinColumn(name = "id_curso")
	private Curso curso;
	
//	@OneToOne(mappedBy="orgao", targetEntity=Portaria.class)
//	private Portaria portaria;
		
	@JoinTable(
			  name = "orgao_membros", 
			  joinColumns = @JoinColumn(name = "orgao_id"), 
			  inverseJoinColumns = @JoinColumn(name = "membro_id"))
	@ManyToMany(cascade = CascadeType.ALL)
	@JsonIgnoreProperties("orgoes")
	private List<Membro> membros = new ArrayList<Membro>();
	
//	@OneToOne
//	private Edital edital;
	
	@OneToMany(mappedBy="orgao", targetEntity=Reuniao.class ,cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("orgao")
	private List<Reuniao> reunioes = new ArrayList<Reuniao>();
	
	
	@OneToMany(mappedBy="orgao", targetEntity=ItemDePauta.class ,cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("orgao")
	private List<ItemDePauta> itensDePauta = new ArrayList<ItemDePauta>();
	
	
//	public List<Atribuicao> getAtribuicoes() {
//		return atribuicoes;
//	}
//
//	public void setAtribuicoes(List<Atribuicao> atribuicoes) {
//		this.atribuicoes = atribuicoes;
//	}
	
	
	
	public void addItemDePauta(ItemDePauta item) {
		itensDePauta.add(item);
	}
	
	public Date getVencimentoDeMandato() {
		return vencimentoDeMandato;
	}

	public void setVencimentoDeMandato(Date vencimentoDeMandato) {
		this.vencimentoDeMandato = vencimentoDeMandato;
	}

	public void removerItemDePauta(ItemDePauta item) {
		itensDePauta.remove(item);
	}

	public Curso getCurso() {
		return curso;
	}

	public List<ItemDePauta> getItensDePauta() {
		return itensDePauta;
	}

	public void setItensDePauta(List<ItemDePauta> itensDePauta) {
		this.itensDePauta = itensDePauta;
	}

	public Date getInicioDeMandato() {
		return inicioDeMandato;
	}

	public void setInicioDeMandato(Date inicioDeMandato) {
		this.inicioDeMandato = inicioDeMandato;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

//	public Portaria getPortaria() {
//		return portaria;
//	}
//
//	public void setPortaria(Portaria portaria) {
//		this.portaria = portaria;
//	}

	public List<Membro> getMembros() {
		return membros;
	}

	public void setMembros(List<Membro> membros) {
		this.membros = membros;
	}
	
	public void addMembros(Membro membro) {
		membros.add(membro);
	}

//	public Edital getEdital() {
//		return edital;
//	}
//
//	public void setEdital(Edital edital) {
//		this.edital = edital;
//	}
//
	public List<Reuniao> getReunioes() {
		return reunioes;
	}

	public void setReunioes(List<Reuniao> reunioes) {
		this.reunioes = reunioes;
	}
	
	public void addReuniao(Reuniao reuniao) {
		reunioes.add(reuniao);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQuorum() {
		return quorum;
	}

	public void setQuorum(int quorum) {
		this.quorum = quorum;
	}

	public int getVigenciaMandatoMeses() {
		return vigenciaMandatoMeses;
	}

	public void setVigenciaMandatoMeses(int vigenciaMandatoMeses) {
		this.vigenciaMandatoMeses = vigenciaMandatoMeses;
	}

	public int getVigenciaReconducaoMeses() {
		return vigenciaReconducaoMeses;
	}

	public void setVigenciaReconducaoMeses(int vigenciaReconducaoMeses) {
		this.vigenciaReconducaoMeses = vigenciaReconducaoMeses;
	}

	public int getDocenteQntdMin() {
		return docenteQntdMin;
	}

	public void setDocenteQntdMin(int docenteQntdMin) {
		this.docenteQntdMin = docenteQntdMin;
	}

	public int getDocenteQntdMax() {
		return docenteQntdMax;
	}

	public void setDocenteQntdMax(int docenteQntdMax) {
		this.docenteQntdMax = docenteQntdMax;
	}

	
}
