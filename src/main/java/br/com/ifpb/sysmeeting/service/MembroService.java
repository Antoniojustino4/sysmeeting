package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.factory.annotation.Autowired;
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
}
