package br.com.ifpb.sysmeeting.model;

import java.sql.Time;
import java.util.Date;
import java.util.List;

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

@Entity
public class Reuniao {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private Date data;

	private Time horarioInicio;

	private Time horarioFinal;
	
	@Enumerated(EnumType.STRING)
	private TipoDeReuniao tipo;

	@Enumerated(EnumType.STRING)
	private EstadoDaReuniao estado;
	
//	@OneToOne
//	private Ata ata;
	
	@JoinTable(
			  name = "reuniao_itens_de_pauta", 
			  joinColumns = @JoinColumn(name = "id_item_de_pauta"), 
			  inverseJoinColumns = @JoinColumn(name = "id_reuniao"))
	@ManyToMany
	private List<ItemDePauta> itensDePauta;
	
	@ManyToOne
	private Orgao orgao;
	
	
	@JoinTable(
			  name = "reuniao_membros_presentes", 
			  joinColumns = @JoinColumn(name = "id_membro_presente"), 
			  inverseJoinColumns = @JoinColumn(name = "id_reuniao"))
	@ManyToMany
	private List<Membro> membrosPresentes;
	
//	@OneToMany(mappedBy="reuniao", targetEntity=JustificativaFalta.class,fetch = FetchType.EAGER)
//	private List<JustificativaFalta> justificativasDeFalta;
	

//	public Ata getAta() {
//		return ata;
//	}
//
//	public void setAta(Ata ata) {
//		this.ata = ata;
//	}

	public List<ItemDePauta> getItensDePauta() {
		return itensDePauta;
	}

	public void setItensDePauta(List<ItemDePauta> itensDePauta) {
		this.itensDePauta = itensDePauta;
	}

	public Orgao getOrgao() {
		return orgao;
	}

	public void setOrgao(Orgao orgao) {
		this.orgao = orgao;
	}

	public List<Membro> getMembros() {
		return membrosPresentes;
	}

	public void setMembros(List<Membro> membros) {
		this.membrosPresentes = membros;
	}

//	public List<JustificativaFalta> getJustificativasDeFalta() {
//		return justificativasDeFalta;
//	}
//
//	public void setJustificativasDeFalta(List<JustificativaFalta> justificativasDeFalta) {
//		this.justificativasDeFalta = justificativasDeFalta;
//	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TipoDeReuniao getTipo() {
		return tipo;
	}

	public void setTipo(TipoDeReuniao tipo) {
		this.tipo = tipo;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Time getHorarioInicio() {
		return horarioInicio;
	}

	public void setHorarioInicio(Time horarioInicio) {
		this.horarioInicio = horarioInicio;
	}

	public Time getHorarioFinal() {
		return horarioFinal;
	}

	public void setHorarioFinal(Time horarioFinal) {
		this.horarioFinal = horarioFinal;
	}

	public EstadoDaReuniao getEstado() {
		return estado;
	}

	public void setEstado(EstadoDaReuniao estado) {
		this.estado = estado;
	}

	
}
