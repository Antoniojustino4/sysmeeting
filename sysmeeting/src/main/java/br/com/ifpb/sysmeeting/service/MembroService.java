package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.MembroRepository;

@Service
public class MembroService {

	@Autowired
	private MembroRepository membroRepository;
	
	
	public Membro save(Membro membro) {
		return membroRepository.save(membro);
	}
	
	
	public Membro atualizar(Long codigo, Membro membro) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(membro, membroSalvo, "id");
		return membroRepository.save(membroSalvo);
	}
	
	public Membro findOne(Long codigo) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
}
