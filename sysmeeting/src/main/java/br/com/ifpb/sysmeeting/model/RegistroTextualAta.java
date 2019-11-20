package br.com.ifpb.sysmeeting.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "registro_textual_ata")
public class RegistroTextualAta {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String texto;

	@JoinTable(
			  name = "resgistro_textual_itens_de_pauta", 
			  joinColumns = @JoinColumn(name = "id_resgisto_textual"), 
			  inverseJoinColumns = @JoinColumn(name = "id_item_de_pauta"))
	@ManyToMany
	private List<ItemDePauta> itensDePauta = new ArrayList<ItemDePauta>();
	
	@ManyToOne
	private Ata ata;
	

	public Ata getAta() {
		return ata;
	}

	public void setAta(Ata ata) {
		this.ata = ata;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public List<ItemDePauta> getItensDePauta() {
		return itensDePauta;
	}

	public void setItensDePauta(List<ItemDePauta> itensDePauta) {
		this.itensDePauta = itensDePauta;
	}
	
	

}
