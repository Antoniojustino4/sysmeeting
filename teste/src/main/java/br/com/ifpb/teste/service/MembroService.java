package br.com.ifpb.teste.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.teste.model.Membro;
import br.com.ifpb.teste.repository.MembroRepository;

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
}
