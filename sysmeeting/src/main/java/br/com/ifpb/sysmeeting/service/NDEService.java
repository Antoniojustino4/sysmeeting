package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.data.Data;
import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.model.Orgao;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.NDERepository;

@Service
public class NDEService {

	@Autowired
	private NDERepository ndeRepository;
	
	@Autowired
	private MembroService membroService;
	
	@Autowired
	private ReuniaoService reuniaoService;
	
	@Autowired
	private ItemDePautaService itemDePautaService;
	
	public NDE save(NDE orgao) {
		if(!validarOrgao(orgao)) {
			throw new DataIntegrityViolationException("Operação nao permitida, precisa de um presidente");
		}
		Data.adicionarVencimentoDoOrgao(orgao);
		return ndeRepository.save(orgao);
	}
	
	public NDE atualizar(Long codigo, NDE orgao) {
		NDE NDESalvo = findOne(codigo);
		if(NDESalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		if(!validarOrgao(orgao)) {
			throw new DataIntegrityViolationException("Operação nao permitida, precisa de um presidente");
		}
		atualizarQuorum(orgao);
		Data.adicionarVencimentoDoOrgao(orgao);
		BeanUtils.copyProperties(orgao, NDESalvo, "id");
		return ndeRepository.save(NDESalvo);
	}
	
	public NDE addMembros(Long codigo, Long codigoMembro) {
		NDE NDESalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		if(membro.getTipo().getNome()=="Presidente") {
			throw new DataIntegrityViolationException("Operação nao permitida, já existe predidente no orgão");
		}
		NDESalvo.addMembros(membro);
		atualizarQuorum(NDESalvo);
		return ndeRepository.save(NDESalvo);
	}
	
	public NDE removerMembros(Long codigo, Long codigoMembro) {
		NDE NDESalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		if(membro.getTipo().getNome()=="Presidente") {
			throw new DataIntegrityViolationException("Remoção de Presidente não permitida");
		}
		NDESalvo.getMembros().remove(membro);
		atualizarQuorum(NDESalvo);
		return ndeRepository.save(NDESalvo);
	}
	
	public List<Membro> listarMembros(Long codigo) {
		NDE NDESalvo = findOne(codigo);
		return NDESalvo.getMembros();
	}

	public NDE addReuniao(Long codigo,Reuniao reuniao) throws DesafioException {
		NDE NDESalvo = findOne(codigo);
		reuniao.setOrgao(NDESalvo);
		reuniaoService.save(reuniao);
		NDESalvo.addReuniao(reuniao);
		return ndeRepository.save(NDESalvo);
	}
	
	public NDE criarItemDePauta(Long codigo,ItemDePauta item) {
		NDE NDESelecionado = findOne(codigo);
		item.setOrgao(NDESelecionado);
		itemDePautaService.save(item);
		NDESelecionado.addItemDePauta(item);
		return ndeRepository.save(NDESelecionado);
	}
	
	public NDE findOne(Long codigo) {
		NDE NDESalvo= ndeRepository.findOne(codigo);
		if(NDESalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return NDESalvo;
	}
	
	public List<NDE> findAll(){
		return ndeRepository.findAll();
	}
	
	public void delete(Long codigo) {
		ndeRepository.delete(codigo);
	}
	
	private boolean validarOrgao(Orgao orgao) {
		if(orgao.getMembros().size()!=0) {
			for (Membro membro : orgao.getMembros()) {
				if(membro.getTipo().getNome().equals("PRESIDENTE")) {
					membroService.save(membro);
					return true;
				}
			}
		}
		return false;
	}
	
	private Membro buscarMembro(Long codigo) {
		Membro membroSalvo= membroService.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
	
	private void atualizarQuorum(NDE nde) {
		nde.setQuorum(nde.getMembros().size());
	}
	
}
