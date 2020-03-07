package br.com.ifpb.sysmeeting.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.data.Data;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.RegistroTextual;
import br.com.ifpb.sysmeeting.model.Enum.EstadoItemDePauta;
import br.com.ifpb.sysmeeting.repository.ItemDePautaRepository;
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;

@Service
public class ItemDePautaService {

	@Autowired
	private ItemDePautaRepository itemDePautaRepository;

	
	public ItemDePauta save(ItemDePauta item) {
		if(item.getEstado()==null) {
			item.setEstado(EstadoItemDePauta.FORADEPAUTA);
		}
		if(item.getDataSugestao()==null) {
			item.setDataSugestao(Data.getDateTime());
		}
		return itemDePautaRepository.save(item);
	}
	
	public ItemDePauta atualizar(Long codigo, ItemDePauta item) {
		ItemDePauta itemSalvo= itemDePautaRepository.findOne(codigo);
		if(itemSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(item, itemSalvo, "id","estado", "orgao","dataEnquadrado","dataSugestao");
		return itemDePautaRepository.save(itemSalvo);
	}

	
	public ItemDePauta findOne(Long codigo) {
		ItemDePauta itemSalvo= itemDePautaRepository.findOne(codigo);
		if(itemSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return itemSalvo;
	}
	
	public Page<ItemDePauta> filtrar(ItemDePautaFilter itemFilter, Pageable pageable){
		return itemDePautaRepository.filtrar(itemFilter, pageable);
	}
	
	public List<ItemDePauta> buscarItensPorEstado(String estado){
		List<ItemDePauta> itens = itemDePautaRepository.findAll();
		List<ItemDePauta> itensSugeridos= new ArrayList<ItemDePauta>();
		for (ItemDePauta itemDePauta : itens) {
			if(itemDePauta.getEstado().getNome().equalsIgnoreCase(estado)) {
				itensSugeridos.add(itemDePauta);
			}
		}
		return itensSugeridos;
	}
	
	public void delete(Long codigo) {
		itemDePautaRepository.delete(codigo);
	}

	public List<RegistroTextual> buscarRegistros(Long codigo) {
		ItemDePauta itemSalvo= itemDePautaRepository.findOne(codigo);
		return itemSalvo.getRegistroTextual();
	}
	
}
