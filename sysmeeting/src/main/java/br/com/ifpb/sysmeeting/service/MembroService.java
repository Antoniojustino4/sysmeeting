package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.MembroRepository;

@Service
public class MembroService {

	@Autowired
	private MembroRepository membroRepository;
	
	@Autowired
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	public Membro save(Membro membro) {
		validarMembro(membro);
		return membroRepository.save(membro);
	}
	
	
	public Membro atualizar(Long codigo, Membro membro) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		validarMembro(membro);
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
	
	public void validarMembro(Membro membro) {
		if(membro.getNome()== null || membro.getEmail()== null || membro.getSenha()== null) {
//			throw new DataIntegrityViolationException("Operação nao permitida, membro obrigatórios nao preenchidos");
		}else {
			membro.setSenha(encoder.encode(membro.getSenha()));
		}
	}
}
