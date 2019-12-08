package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.data.Data;
import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.Orgao;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.ColegiadoRepository;
import br.com.ifpb.sysmeeting.repository.filter.ColegiadoFilter;

@Service
public class ColegiadoService {

	@Autowired
	private ColegiadoRepository colegiadoRepository;
	
	@Autowired
	private MembroService membroService;
	
	@Autowired
	private ReuniaoService reuniaoService;
	
	@Autowired
	private ItemDePautaService itemDePautaService;
	
	
	public Colegiado save(Colegiado orgao) {
		if(!validarOrgao(orgao)) {
			throw new DataIntegrityViolationException("Operação nao permitida, precisa de um presidente");
		}
		Data.adicionarVencimentoDoOrgao(orgao);
		
		return colegiadoRepository.save(orgao);
	}
	
	public Colegiado atualizar(Long codigo, Colegiado colegiado) {
		Colegiado colegiadoSalvo = findOne(codigo);
		if(colegiadoSalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		if(!validarOrgao(colegiado)) {
			throw new DataIntegrityViolationException("Operação nao permitida, precisa de um presidente");
		}
		atualizarQuorum(colegiado);
		Data.adicionarVencimentoDoOrgao(colegiado);
		BeanUtils.copyProperties(colegiado, colegiadoSalvo, "id");
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado addMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		if(membro.getTipo().getNome()=="Presidente") {
			throw new DataIntegrityViolationException("Operação nao permitida, já existe predidente no orgão");
		}
		colegiadoSalvo.addMembros(membro);
		atualizarQuorum(colegiadoSalvo);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado removerMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		if(membro.getTipo().getNome()=="Presidente") {
			throw new DataIntegrityViolationException("Remoção de Presidente não permitida");
		}
		colegiadoSalvo.getMembros().remove(membro);
		atualizarQuorum(colegiadoSalvo);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado addReuniao(Long codigo,Reuniao reuniao) throws DesafioException {
		Colegiado colegiadoSalvo = findOne(codigo);
		reuniao.setOrgao(colegiadoSalvo);
		reuniaoService.save(reuniao);
		colegiadoSalvo.addReuniao(reuniao);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado criarItemDePauta(Long codigo,ItemDePauta item) {
		Colegiado colegiadoSelecionado = findOne(codigo);
		item.setOrgao(colegiadoSelecionado);
		itemDePautaService.save(item);
		colegiadoSelecionado.addItemDePauta(item);
		return colegiadoRepository.save(colegiadoSelecionado);
	}
	
	public List<Membro> listarMembros(Long codigo) {
		Colegiado colegiadoSalvo = findOne(codigo);
		return colegiadoSalvo.getMembros();
	}
	
	public List<Colegiado> filtrar(ColegiadoFilter colegiadoFilter){
		return colegiadoRepository.filtrar(colegiadoFilter);
	}
	
	public List<Colegiado> findAll(){
		return colegiadoRepository.findAll();
	}
	
	public void delete(Long codigo) {
		colegiadoRepository.delete(codigo);
	}

	
	public Colegiado findOne(Long codigo) {
		Colegiado colegiadoSalvo= colegiadoRepository.findOne(codigo);
		if(colegiadoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return colegiadoSalvo;
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
	
	private void atualizarQuorum(Colegiado colegiado) {
		colegiado.setQuorum(colegiado.getMembros().size());
	}
}
