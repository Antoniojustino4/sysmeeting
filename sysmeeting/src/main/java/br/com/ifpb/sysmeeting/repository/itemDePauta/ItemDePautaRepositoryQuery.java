package br.com.ifpb.sysmeeting.repository.itemDePauta;

import java.util.List;

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;

public interface ItemDePautaRepositoryQuery {
	
	public List<ItemDePauta> filtrar(ItemDePautaFilter itemFilter);

}
