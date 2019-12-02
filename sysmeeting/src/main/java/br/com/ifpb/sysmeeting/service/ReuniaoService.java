package br.com.ifpb.sysmeeting.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.model.Enum.EstadoDaReuniao;
import br.com.ifpb.sysmeeting.model.Enum.EstadoItemDePauta;
import br.com.ifpb.sysmeeting.repository.ReuniaoRepository;

@Service
public class ReuniaoService {

	@Autowired
	private ReuniaoRepository reuniaoRepository;
	
	@Autowired
	private ItemDePautaService itemDePautaService;
	
	
	public Reuniao save(Reuniao reuniao) throws DesafioException {
		if(reuniao.getItensDePauta().size()!= 0) {
			reuniao.setEstado(EstadoDaReuniao.AGENDADACOMPAUTA);
			reuniaoRepository.save(reuniao);
			
			//salvar os Itens que foram cadastrados juntamente com o Reuniao
			for (ItemDePauta item : reuniao.getItensDePauta()) {
				item.setEstado(EstadoItemDePauta.EMPAUTA);
				itemDePautaService.save(item);
			}
		}else {
			reuniao.setEstado(EstadoDaReuniao.AGENDADASEMPAUTA);
		}
		if(validarData(reuniao)) {
			return reuniaoRepository.save(reuniao);
		}
		return null;
		
	}
	
	public Reuniao atualizar(Long codigo, Reuniao reuniao) throws DesafioException {
		Reuniao reuniaoSalvo= reuniaoRepository.findOne(codigo);
		if(reuniaoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		reuniao = verificarEstadoDaReuniao(reuniao);
		validarData(reuniaoSalvo);
		BeanUtils.copyProperties(reuniao, reuniaoSalvo, "id");
		return reuniaoRepository.save(reuniaoSalvo);
	}
	
	public Reuniao criarItemDePauta(Long codigo,ItemDePauta item) {
		Reuniao reuniaoSelecionada = findOne(codigo);
		item.setEstado(EstadoItemDePauta.EMPAUTA);
		item.addReuniao(reuniaoSelecionada);
		item.setOrgao(reuniaoSelecionada.getOrgao());
		itemDePautaService.save(item);
		reuniaoSelecionada.getOrgao().addItemDePauta(item);
		reuniaoSelecionada.addItemDePauta(item);
		reuniaoSelecionada.setEstado(EstadoDaReuniao.AGENDADACOMPAUTA);
		return reuniaoRepository.save(reuniaoSelecionada);
	}
	
	public Reuniao addItemDePauta(Long codigoReuniao,Long codigoItem) {
		Reuniao reuniaoSelecionada = findOne(codigoReuniao);
		ItemDePauta itemSelecionado = buscarItemPeloCodigo(codigoItem);
		itemSelecionado.setEstado(EstadoItemDePauta.EMPAUTA);
		reuniaoSelecionada.addItemDePauta(itemSelecionado);
		reuniaoSelecionada.setEstado(EstadoDaReuniao.AGENDADACOMPAUTA);
		return reuniaoRepository.save(reuniaoSelecionada);
	}
	
	public Reuniao removerItemDePauta(Long codigo,Long codigoItem) {
		Reuniao reuniaoSelecionada = findOne(codigo);
		ItemDePauta itemSelecionado = buscarItemPeloCodigo(codigoItem);
		itemSelecionado.setEstado(EstadoItemDePauta.FORADEPAUTA);
		reuniaoSelecionada.removerItemDePauta(itemSelecionado);
		reuniaoSelecionada = verificarEstadoDaReuniao(reuniaoSelecionada);
		return reuniaoRepository.save(reuniaoSelecionada);
	}
	
	private Reuniao verificarEstadoDaReuniao(Reuniao reuniao) {
		if(reuniao.getItensDePauta().size() != 0) {
			reuniao.setEstado(EstadoDaReuniao.AGENDADACOMPAUTA);
			return reuniao;
		}else {
			reuniao.setEstado(EstadoDaReuniao.AGENDADASEMPAUTA);
			return reuniao;
		}
	}
	
	public ItemDePauta buscarItemPeloCodigo(Long codigo) {
		ItemDePauta itemSalvo= itemDePautaService.findOne(codigo);
		if(itemSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return itemSalvo;
	}
	
	public Reuniao findOne(Long codigo) {
		Reuniao reuniaoSalvo= reuniaoRepository.findOne(codigo);
		if(reuniaoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return reuniaoSalvo;
	}
	
	public List<Reuniao> findAll(){
		return reuniaoRepository.findAll();
	}
	
	public void delete(Long codigo) {
		reuniaoRepository.delete(codigo);
	}
	
	private static boolean validarData(Reuniao reuniao) throws DesafioException {
		if(reuniao.getData() != null) {
			DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
			Date date = new Date();
			String a = dateFormat.format(date);
			
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
			Date data = null;
			try {
				data = formato.parse(a);
			} catch (ParseException e) {
				throw new DesafioException(e.getLocalizedMessage());
			}
			if (reuniao.getData().after(data)) {
				return true;
			}
		}
		throw new DesafioException("Data de Reuniao Inválida");
	}
}
