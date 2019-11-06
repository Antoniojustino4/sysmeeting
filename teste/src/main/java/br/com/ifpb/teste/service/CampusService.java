package br.com.ifpb.sysmeeting.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.repository.CampusRepository;
import br.com.ifpb.sysmeeting.repository.CursoRepository;

@Service
public class CampusService {

	@Autowired
	private CampusRepository campusRepository;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	
	public Campus save(Campus campus) {
		if(campus.getCursos()!=null) {
			campusRepository.save(campus);
			
			//salvar os cursos que foram cadastrados juntamente com o campus
			for (Curso curso : campus.getCursos()) {
				curso.setCampus(campus);
				cursoRepository.save(curso);
				campus.addCurso(curso);
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
	
	private Campus buscarCampusPeloCodigo(Long codigo) {
		Campus campusSalvo= campusRepository.findOne(codigo);
		if(campusSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return campusSalvo;
	}
}
