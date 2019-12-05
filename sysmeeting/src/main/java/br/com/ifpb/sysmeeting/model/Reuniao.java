package br.com.ifpb.sysmeeting.model;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
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
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.ifpb.sysmeeting.model.Enum.EstadoDaReuniao;
import br.com.ifpb.sysmeeting.model.Enum.TipoDeReuniao;

@Entity
@JsonIgnoreProperties("orgao")
public class Reuniao {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column(name = "data_reuniao")
	@NotNull
	private Date data;

	private Time horarioInicio;

	private Time horarioFinal;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "tipo_de_reuniao")
	@NotNull
	private TipoDeReuniao tipo;

	@Enumerated(EnumType.STRING)
	@Column(name = "estado_da_reuniao")
	private EstadoDaReuniao estado;
	
//	@OneToOne
//	private Ata ata;
	
	@JoinTable(
			  name = "reuniao_itens_de_pauta", 
			  joinColumns = @JoinColumn(name = "id_reuniao"), 
			  inverseJoinColumns = @JoinColumn(name = "id_item_de_pauta"))
	@JsonIgnoreProperties("reunioes")
	@ManyToMany
	private List<ItemDePauta> itensDePauta = new ArrayList<ItemDePauta>();
	
	@ManyToOne
	@JsonProperty
	@JoinColumn(name = "id_orgao")
	private Orgao orgao;
	
	
	@JoinTable(
			  name = "reuniao_membros_presentes", 
			  joinColumns = @JoinColumn(name = "id_reuniao"), 
			  inverseJoinColumns = @JoinColumn(name = "id_membro_presente"))
	@ManyToMany
	private List<Membro> membrosPresentes = new ArrayList<Membro>();;
	
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
	
	public void addItemDePauta(ItemDePauta item) {
		itensDePauta.add(item);
	}
	
	public void removerItemDePauta(ItemDePauta item) {
		itensDePauta.remove(item);
	}

	public Orgao getOrgao() {
		return orgao;
	}

	public void setOrgao(Orgao orgao) {
		this.orgao = orgao;
	}

	

//	public List<JustificativaFalta> getJustificativasDeFalta() {
//		return justificativasDeFalta;
//	}
//
//	public void setJustificativasDeFalta(List<JustificativaFalta> justificativasDeFalta) {
//		this.justificativasDeFalta = justificativasDeFalta;
//	}

	public List<Membro> getMembrosPresentes() {
		return membrosPresentes;
	}

	public void setMembrosPresentes(List<Membro> membrosPresentes) {
		this.membrosPresentes = membrosPresentes;
	}

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
