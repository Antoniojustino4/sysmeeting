package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.Ata;
import br.com.ifpb.sysmeeting.repository.AtaRepository;

@Service
public class AtaService {

	@Autowired
	private AtaRepository ataRepository;
	
	
	public Ata save(Ata ata) throws DesafioException {
		if (ata.getRegistrosTextuaisAta().size() == 0) {
			throw new DesafioException("Ata nao pode ser criada sem registro textual!");
		}
		return ataRepository.save(ata);
	}

	public Ata findOne(Long codigo) {
		Ata ataSalvo= ataRepository.findOne(codigo);
		if(ataSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return ataSalvo;
	}
}
