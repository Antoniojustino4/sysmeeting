package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.RegistroTextual;
import br.com.ifpb.sysmeeting.repository.RegistroTextualRepository;

@Service
public class RegistroTextualService {

	@Autowired
	private RegistroTextualRepository registroRepository;
	
	@Autowired
	private ItemDePautaService itemService;

	public RegistroTextual save(RegistroTextual registro) throws DesafioException {
		if (registro.getItensDePauta().size() != 0) {
			for (ItemDePauta item : registro.getItensDePauta()) {
				registro.addItem(buscarItem(item.getId()));
			}

			return registroRepository.save(registro);
		} else {
			throw new DesafioException("registro textual precisa ser refenrente a algum item De pauta!");
		}
	}

	public RegistroTextual findOne(Long codigo) {
		RegistroTextual registroSalvo = registroRepository.findOne(codigo);
		if (registroSalvo == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return registroSalvo;
	}
	
	public ItemDePauta buscarItem(Long codigo) {
		return itemService.findOne(codigo);
	}

//	public RegistroTextual addRegistro(RegistroTextual ata, RegistroTextual registro) {
//		registro.setAta(ata);
//		registroRepository.save(registro);
//		ata.addRegistro(registro);
//		return ata;
//
//	}
}
