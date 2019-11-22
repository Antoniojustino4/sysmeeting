package br.com.ifpb.sysmeeting.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Membro;
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
		return colegiadoRepository.save(orgao);
	}
	
	public Colegiado atualizar(Long codigo, Colegiado colegiado) {
		Colegiado colegiadoSalvo = findOne(codigo);
		if(colegiadoSalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		
		BeanUtils.copyProperties(colegiado, colegiadoSalvo, "id");
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado addMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		colegiadoSalvo.addMembros(membro);
		return colegiadoRepository.save(colegiadoSalvo);
	}
	
	public Colegiado removerMembros(Long codigo, Long codigoMembro) {
		Colegiado colegiadoSalvo = findOne(codigo);
		Membro membro=buscarMembro(codigoMembro);
		colegiadoSalvo.getMembros().remove(membro);
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
		item.addOrgao(colegiadoSelecionado);
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
	
	private Membro buscarMembro(Long codigo) {
		Membro membroSalvo= membroService.findOne(codigo);
		if(membroSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return membroSalvo;
	}
}
