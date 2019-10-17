package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.repository.MembroRepository;
import br.com.ifpb.sysmeeting.repository.NDERepository;

@Service
public class NDEService {

	@Autowired
	private NDERepository NDERepository;
	
	@Autowired
	private MembroRepository membroRepository;
	
	
	public NDE save(NDE orgao) {
		return NDERepository.save(orgao);
	}
	
	public NDE atualizar(Long codigo, NDE orgao) {
		NDE NDESalvo = buscarOrgaoPeloCodigo(codigo);
		if(NDESalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(orgao, NDESalvo, "id");
		return NDERepository.save(NDESalvo);
	}
	
	public NDE addMembros(Long codigo, Long codigoMembro) {
		NDE NDESalvo = buscarOrgaoPeloCodigo(codigo);
		Membro membro=buscarMembro(codigoMembro);
		NDESalvo.addMembros(membro);
		return NDERepository.save(NDESalvo);
	}
	
	public NDE removerMembros(Long codigo, Long codigoMembro) {
		NDE NDESalvo = buscarOrgaoPeloCodigo(codigo);
		Membro membro=buscarMembro(codigoMembro);
		NDESalvo.addMembros(membro);
		return NDERepository.save(NDESalvo);
	}
	
	public List<Membro> listarMembros(Long codigo) {
		NDE NDESalvo = buscarOrgaoPeloCodigo(codigo);
		return NDESalvo.getMembros();
	}

	
	
	private NDE buscarOrgaoPeloCodigo(Long codigo) {
		NDE NDESalvo= NDERepository.findOne(codigo);
		if(NDESalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return NDESalvo;
	}
	
	private Membro buscarMembro(Long codigo) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
}
