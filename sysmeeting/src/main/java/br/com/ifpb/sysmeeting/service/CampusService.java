package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.repository.CampusRepository;
import br.com.ifpb.sysmeeting.repository.CursoRepository;
import br.com.ifpb.sysmeeting.repository.filter.CampusFilter;
import br.com.ifpb.sysmeeting.repository.projection.ResumoCampus;

@Service
public class CampusService {

	@Autowired
	private CampusRepository campusRepository;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	
	public Campus save(Campus campus) {
		if(campus.getCursos().size()!=0) {
			
			//salvar os cursos que foram cadastrados juntamente com o campus
			for (Curso curso : campus.getCursos()) {
				curso.setCampus(campus);
			}
		}
		
		return campusRepository.save(campus);
	}
	
	public Campus atualizar(Long codigo, Campus campus) {
		Campus campusSalvo = buscarCampusPeloCodigo(codigo);
		if(campusSalvo == null) {
			throw  new EmptyResultDataAccessException(1);
		}
		
		BeanUtils.copyProperties(campus, campusSalvo, "id");
		return campusRepository.save(campusSalvo);
	}

	
	public Campus addCurso(Long codigo,Curso curso) {
		Campus campusSelecionado = buscarCampusPeloCodigo(codigo);
		curso.setCampus(campusSelecionado);
		cursoRepository.save(curso);
		campusSelecionado.addCurso(curso);
		return campusSelecionado;
	
	}
	
	public Page<Campus> filtrar(CampusFilter campusFilter, Pageable pageable){
		return campusRepository.filtrar(campusFilter, pageable);
	}
	
	public Page<ResumoCampus> resumir(CampusFilter campusFilter, Pageable pageable){
		return campusRepository.resumir(campusFilter, pageable);
	}
	
	private Campus buscarCampusPeloCodigo(Long codigo) {
		Campus campusSalvo= campusRepository.findOne(codigo);
		if(campusSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return campusSalvo;
	}
}
