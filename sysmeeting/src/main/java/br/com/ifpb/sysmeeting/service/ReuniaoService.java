package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

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
		if(reuniao.getItensDePauta().size()!=0) {
			reuniaoRepository.save(reuniao);
			
			//salvar os Itens que foram cadastrados juntamente com o Reuniao
			for (ItemDePauta item : reuniao.getItensDePauta()) {
				item.addReuniao(reuniao);
				itemDePautaRepository.save(item);
				reuniao.addItemDePauta(item);
			}
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
	
	public Reuniao addItemDePauta(Long codigo,ItemDePauta item) {
		Reuniao reuniaoSelecionada = buscarPeloCodigo(codigo);
		item.addReuniao(reuniaoSelecionada);
		reuniaoSelecionada.addItemDePauta(item);
		reuniaoRepository.save(reuniaoSelecionada);
		return reuniaoSelecionada;
	}
	
	
	public Reuniao buscarPeloCodigo(Long codigo) {
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
