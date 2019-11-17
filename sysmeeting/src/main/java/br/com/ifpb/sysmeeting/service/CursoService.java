package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.data.Data;
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.repository.ColegiadoRepository;
import br.com.ifpb.sysmeeting.repository.CursoRepository;
import br.com.ifpb.sysmeeting.repository.NDERepository;
import br.com.ifpb.sysmeeting.repository.filter.CursoFilter;

@Service
public class CursoService {

	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private NDERepository NDERepository;
	
	@Autowired
	private ColegiadoRepository colegiadoRepository;
	
	public Curso save(Curso curso) {
		return cursoRepository.save(curso);
	}
	
	public Curso atualizar(Long codigo, Curso curso) {
		Curso cursoSalvo= cursoRepository.findOne(codigo);
		if(cursoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(curso, cursoSalvo, "id");
		return cursoRepository.save(cursoSalvo);
	}
	
	public Curso addNDE(Long codigo,NDE orgao) {
		Curso cursoSelecionado = buscarCursoPeloCodigo(codigo);
		orgao.setCurso(cursoSelecionado);
		orgao.setInicioDeMandato(Data.getDateTime());
		NDERepository.save(orgao);
		cursoSelecionado.addOrgao(orgao);
		return cursoSelecionado;
	
	}
	
	public Curso addColegiado(Long codigo,Colegiado orgao) {
		Curso cursoSelecionado = buscarCursoPeloCodigo(codigo);
		orgao.setCurso(cursoSelecionado);
		orgao.setInicioDeMandato(Data.getDateTime());
		colegiadoRepository.save(orgao);
		cursoSelecionado.addOrgao(orgao);
		return cursoSelecionado;
	}
	
	public Page<Curso> filtrar(CursoFilter cursoFilter, Pageable pageeble){
		return cursoRepository.filtrar(cursoFilter, pageeble);
	}
	
	private Curso buscarCursoPeloCodigo(Long codigo) {
		Curso cursoSalvo= cursoRepository.findOne(codigo);
		if(cursoSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return cursoSalvo;
	}
	
	
}
