package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.Ata;
import br.com.ifpb.sysmeeting.repository.AtaRepository;
import br.com.ifpb.sysmeeting.repository.RegistroTextualRepository;

@Service
public class AtaService {

	@Autowired
	private AtaRepository ataRepository;

	@Autowired
	private RegistroTextualRepository registroRepository;

//	@Autowired
//	private RegistroTextualService registroService;

	public Ata save(Ata ata) throws DesafioException {
		if (ata.getRegistrosTextuais().size() != 0) {

			return ataRepository.save(ata);
		} else {
			throw new DesafioException("Ata nao pode ser criada sem registro textual!");
		}
	}

	public Ata findOne(Long codigo) {
		Ata ataSalvo = ataRepository.findOne(codigo);
		if (ataSalvo == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return ataSalvo;
	}

//	addRegistro(ata, registro);
//}

}
