package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.EstadoDaReuniao;
import br.com.ifpb.sysmeeting.model.EstadoItemDePauta;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.ItemDePautaRepository;
import br.com.ifpb.sysmeeting.repository.ReuniaoRepository;

@Service
public class ReuniaoService {

	@Autowired
	private ReuniaoRepository reuniaoRepository;
	
	@Autowired
	private ItemDePautaRepository itemDePautaRepository;
	
	
	public Reuniao save(Reuniao reuniao) {
		if(reuniao.getItensDePauta().size()!= 0) {
			reuniao.setEstado(EstadoDaReuniao.AGENDADACOMPAUTA);
			reuniaoRepository.save(reuniao);
			
			//salvar os Itens que foram cadastrados juntamente com o Reuniao
			for (ItemDePauta item : reuniao.getItensDePauta()) {
				item.setEstado(EstadoItemDePauta.EMPAUTA);
				itemDePautaRepository.save(item);
			}
		}else {
			reuniao.setEstado(EstadoDaReuniao.AGENDADASEMPAUTA);
		}
		
		return reuniaoRepository.save(reuniao);
	}
	
	public Reuniao atualizar(Long codigo, Reuniao reuniao) {
		Reuniao reuniaoSalvo= reuniaoRepository.findOne(codigo);
		if(reuniaoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(reuniao, reuniaoSalvo, "id");
		return reuniaoRepository.save(reuniaoSalvo);
	}
	
	public Reuniao criarItemDePauta(Long codigo,ItemDePauta item) {
		Reuniao reuniaoSelecionada = buscarReuniaoPeloCodigo(codigo);
		item.addReuniao(reuniaoSelecionada);
		item.setEstado(EstadoItemDePauta.EMPAUTA);
		itemDePautaRepository.save(item);
		reuniaoSelecionada.addItemDePauta(item);
		reuniaoRepository.save(reuniaoSelecionada);
		return reuniaoSelecionada;
	}
	
	public Reuniao addItemDePauta(Long codigoReuniao,Long codigoItem) {
		Reuniao reuniaoSelecionada = buscarReuniaoPeloCodigo(codigoReuniao);
		ItemDePauta itemSelecionado = buscarItemPeloCodigo(codigoItem);
		itemSelecionado.addReuniao(reuniaoSelecionada);
		itemSelecionado.setEstado(EstadoItemDePauta.EMPAUTA);
		reuniaoSelecionada.addItemDePauta(itemSelecionado);
		reuniaoRepository.save(reuniaoSelecionada);
		return reuniaoSelecionada;
	}
	
	public Reuniao removerItemDePauta(Long codigo,ItemDePauta item) {
		Reuniao reuniaoSelecionada = buscarReuniaoPeloCodigo(codigo);
		item.removerReuniao(reuniaoSelecionada);
		item.setEstado(EstadoItemDePauta.FORADEPAUTA);
		reuniaoSelecionada.removerItemDePauta(item);
		reuniaoRepository.save(reuniaoSelecionada);
		return reuniaoSelecionada;
	}
	
	public ItemDePauta buscarItemPeloCodigo(Long codigo) {
		ItemDePauta itemSalvo= itemDePautaRepository.findOne(codigo);
		if(itemSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return itemSalvo;
	}
	
	public Reuniao buscarReuniaoPeloCodigo(Long codigo) {
		Reuniao reuniaoSalvo= reuniaoRepository.findOne(codigo);
		if(reuniaoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return reuniaoSalvo;
	}
	
	public List<Reuniao> findAll(){
		return reuniaoRepository.findAll();
	}
	
	public void delete(Long codigo) {
		reuniaoRepository.delete(codigo);
	}
}
