package br.com.ifpb.sysmeeting.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.ifpb.sysmeeting.model.Enum.RegimeTraballho;
import br.com.ifpb.sysmeeting.model.Enum.StatusMembro;
import br.com.ifpb.sysmeeting.model.Enum.TipoDeMembro;
import br.com.ifpb.sysmeeting.model.Enum.Titulacao;

@Entity
public class Membro {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nome;

	@Enumerated(EnumType.STRING)
	private Titulacao titulo;

	@Enumerated(EnumType.STRING)
	private TipoDeMembro tipo;

	@Enumerated(EnumType.STRING)
	private StatusMembro statusMembro;

	@Enumerated(EnumType.STRING)
	private RegimeTraballho regime;

//	@JsonIgnoreProperties("assinatura")
//	private byte assinatura;
//	
//	@JsonIgnoreProperties("diploma")
//	private byte diploma;
//
//	@JsonIgnoreProperties("foto")
//	private byte foto;
	
	
	@JoinTable(
			  name = "reuniao_membros_presentes", 
			  joinColumns = @JoinColumn(name = "id_membro_presente"), 
			  inverseJoinColumns = @JoinColumn(name = "id_reuniao"))
	@ManyToMany
	private List<Reuniao> reunioes = new ArrayList<Reuniao>();
//	
//	@OneToMany(mappedBy="membro", targetEntity=Opiniao.class,cascade=CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Opiniao> opinioes = new ArrayList<Opiniao>();
//	
//	@ManyToOne
//	private Edital edital;
	
	
	@JoinTable(
			  name = "orgao_membros", 
			  joinColumns = @JoinColumn(name = "membro_id"), 
			  inverseJoinColumns = @JoinColumn(name = "orgao_id"))
	@ManyToMany
	@JsonIgnoreProperties("membros")
	private List<Orgao> orgoes = new ArrayList<Orgao>();
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_conta_acesso")
	private ContaAcesso contaAcesso;
//	
//	@OneToMany(mappedBy="membroRequerente", targetEntity=JustificativaFalta.class,
//			cascade=CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<JustificativaFalta> justificativas = new ArrayList<JustificativaFalta>();
//	
//	@ManyToMany
//	private List<Atividade> atividades = new ArrayList<Atividade>();
	
//	@ManyToOne
//	@JoinColumn(name = "id_ata")
//	private Ata ataIndicacao;

	
	public List<Reuniao> getReunioes() {
		return reunioes;
	}

	public void setReunioes(List<Reuniao> reunioes) {
		this.reunioes = reunioes;
	}
//
//	public List<Opiniao> getOpinioes() {
//		return opinioes;
//	}
//
//	public void setOpinioes(List<Opiniao> opinioes) {
//		this.opinioes = opinioes;
//	}
//
//	public Edital getEdital() {
//		return edital;
//	}
//
//	public void setEditla(Edital edital) {
//		this.edital = edital;
//	}

	
	public List<Orgao> getOrgoes() {
		return orgoes;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setOrgoes(List<Orgao> orgoes) {
		this.orgoes = orgoes;
	}

	public ContaAcesso getContaAcesso() {
		return contaAcesso;
	}

	public void setContaAcesso(ContaAcesso contaAcesso) {
		this.contaAcesso = contaAcesso;
	}

//	public List<JustificativaFalta> getJustificativas() {
//		return justificativas;
//	}
//
//	public void setJustificativas(List<JustificativaFalta> justificativas) {
//		this.justificativas = justificativas;
//	}
//
//	public List<Atividade> getAtividades() {
//		return atividades;
//	}
//
//	public void setAtividades(List<Atividade> atividades) {
//		this.atividades = atividades;
//	}

//	public Ata getAtaIndicacao() {
//		return ataIndicacao;
//	}
//
//	public void setAtaIndicacao(Ata ataIndicacao) {
//		this.ataIndicacao = ataIndicacao;
//	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Titulacao getTitulo() {
		return titulo;
	}

	public void setTitulo(Titulacao titulo) {
		this.titulo = titulo;
	}

	public TipoDeMembro getTipo() {
		return tipo;
	}

	public void setTipo(TipoDeMembro tipo) {
		this.tipo = tipo;
	}

	public StatusMembro getStatusMembro() {
		return statusMembro;
	}

	public void setStatusMembro(StatusMembro statusMembro) {
		this.statusMembro = statusMembro;
	}

	public RegimeTraballho getRegime() {
		return regime;
	}

	public void setRegime(RegimeTraballho regime) {
		this.regime = regime;
	}

//	public byte getAssinatura() {
//		return assinatura;
//	}
//
//	public void setAssinatura(byte assinatura) {
//		this.assinatura = assinatura;
//	}
//
//	public byte getDiploma() {
//		return diploma;
//	}
//
//	public void setDiploma(byte diploma) {
//		this.diploma = diploma;
//	}
//
//	public byte getFoto() {
//		return foto;
//	}
//
//	public void setFoto(byte foto) {
//		this.foto = foto;
//	}

	
}
