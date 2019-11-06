package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.repository.MembroRepository;
import br.com.ifpb.sysmeeting.repository.ColegiadoRepository;

@Service
public class ColegiadoService {

	@Autowired
	private ColegiadoRepository colegiadoRepository;
	
	@Autowired
	private MembroRepository membroRepository;
	
	
	public Colegiado save(Colegiado orgao) {
		return colegiadoRepository.save(orgao);
	}
	
	public Colegiado atualizar(Long codigo, Colegiado colegiado) {
		Colegiado colegiadoSalvo = buscarOrgaoPeloCodigo(codigo);
		if(colegiadoSalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		
		BeanUtils.copyProperties(colegiado, colegiadoSalvo, "id");
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado addMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = buscarOrgaoPeloCodigo(codigo);
		Membro membro=buscarMembro(codigoMembro);
		colegiadoSalvo.addMembros(membro);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado removerMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = buscarOrgaoPeloCodigo(codigo);
		Membro membro=buscarMembro(codigoMembro);
		colegiadoSalvo.addMembros(membro);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public List<Membro> listarMembros(Long codigo) {
		Colegiado colegiadoSalvo = buscarOrgaoPeloCodigo(codigo);
		return colegiadoSalvo.getMembros();
	}

	
	
	private Colegiado buscarOrgaoPeloCodigo(Long codigo) {
		Colegiado colegiadoSalvo= colegiadoRepository.findOne(codigo);
		if(colegiadoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return colegiadoSalvo;
	}
	
	private Membro buscarMembro(Long codigo) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
}
