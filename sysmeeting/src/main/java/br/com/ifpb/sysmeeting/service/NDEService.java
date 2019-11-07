package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.model.Orgao;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.MembroRepository;
import br.com.ifpb.sysmeeting.repository.NDERepository;

@Service
public class NDEService {

	@Autowired
	private NDERepository NDERepository;
	
	@Autowired
	private MembroRepository membroRepository;
	
	@Autowired
	private ReuniaoService reuniaoService;
	
	public NDE save(NDE orgao) {
		if(!validarOrgao(orgao)) {
			throw new DataIntegrityViolationException("Operação nao permitida, precisa de um presidente");
		}
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

	public NDE addReuniao(Long codigo,Reuniao reuniao) {
		NDE NDESalvo = buscarOrgaoPeloCodigo(codigo);
		reuniao.setOrgao(NDESalvo);
		reuniaoService.save(reuniao);
		return NDESalvo;
	}
	
	private NDE buscarOrgaoPeloCodigo(Long codigo) {
		NDE NDESalvo= NDERepository.findOne(codigo);
		if(NDESalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return NDESalvo;
	}
	
	public boolean validarOrgao(Orgao orgao) {
		if(orgao.getMembros().size()!=0) {
			for (Membro membro : orgao.getMembros()) {
				if(membro.getTipo().getNome().equals("PRESIDENTE")) {
					membroRepository.save(membro);
					return true;
				}
			}
		}
		return false;
	}
	
	private Membro buscarMembro(Long codigo) {
		Membro membroSalvo= membroRepository.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
}
