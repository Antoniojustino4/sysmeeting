package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.repository.ItemDePautaRepository;

@Service
public class ItemDePautaService {

	@Autowired
	private ItemDePautaRepository itemDePautaRepository;

	
	public ItemDePauta save(ItemDePauta curso) {
		return itemDePautaRepository.save(curso);
	}
	
	public ItemDePauta atualizar(Long codigo, ItemDePauta curso) {
		ItemDePauta cursoSalvo= itemDePautaRepository.findOne(codigo);
		if(cursoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(curso, cursoSalvo, "id");
		return itemDePautaRepository.save(cursoSalvo);
	}
	
//	public ItemDePauta addNDE(Long codigo,NDE orgao) {
//		ItemDePauta cursoSelecionado = buscarCursoPeloCodigo(codigo);
//		orgao.setCurso(cursoSelecionado);
//		NDERepository.save(orgao);
//		cursoSelecionado.addOrgao(orgao);
//		return itemDePautaRepository.save(cursoSelecionado);
//	
//	}
//	
//	public ItemDePauta addColegiado(Long codigo,Colegiado orgao) {
//		ItemDePauta cursoSelecionado = buscarCursoPeloCodigo(codigo);
//		orgao.setCurso(cursoSelecionado);
//		colegiadoRepository.save(orgao);
//		cursoSelecionado.addOrgao(orgao);
//		return itemDePautaRepository.save(cursoSelecionado);
//	}
	
	public ItemDePauta buscarPeloCodigo(Long codigo) {
		ItemDePauta itemSalvo= itemDePautaRepository.findOne(codigo);
		if(itemSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return itemSalvo;
	}
	
	public List<ItemDePauta> findAll(){
		return itemDePautaRepository.findAll();
	}
	
	public void delete(Long codigo) {
		itemDePautaRepository.delete(codigo);
	}
}
