package br.com.ifpb.sysmeeting.repository.itemDePauta;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;

public interface ItemDePautaRepositoryQuery {
	
	public Page<ItemDePauta> filtrar(ItemDePautaFilter itemFilter, Pageable pageable);

}
