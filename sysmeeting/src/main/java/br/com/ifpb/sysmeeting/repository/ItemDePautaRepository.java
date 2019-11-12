package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.repository.itemDePauta.ItemDePautaRepositoryQuery;

public interface ItemDePautaRepository extends JpaRepository<ItemDePauta, Long>, ItemDePautaRepositoryQuery{
	
	

}
