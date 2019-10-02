package br.com.ifpb.teste.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.ifpb.teste.model.Campus;
import br.com.ifpb.teste.model.Curso;
import br.com.ifpb.teste.repository.CampusRepository;
import br.com.ifpb.teste.repository.CursoRepository;

@Service
public class CampusService {

	@Autowired
	private CampusRepository campusRepository;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	
	public Campus save(Campus campus) {
		return campusRepository.save(campus);
	}
	
	public Campus atualizar(Long codigo, Campus campus) {
		Campus campusSalvo = buscarCampusPeloCodigo(codigo);
		BeanUtils.copyProperties(campus, campusSalvo, "id");
		return campusRepository.save(campusSalvo);
	}

	
	public Campus addCurso(Long codigo,Curso curso) {
		Campus campusSelecionado = buscarCampusPeloCodigo(codigo);
		curso.setCampus(campusSelecionado);
		cursoRepository.save(curso);
		campusSelecionado.addCurso(curso);
		return campusRepository.save(campusSelecionado);
	
	}
	
	private Campus buscarCampusPeloCodigo(Long codigo) {
		Campus campusSalvo= campusRepository.findOne(codigo);
		if(campusSalvo==null) {
			throw new EmptyResultDataAccessException(1);
		}
		return campusSalvo;
	}
}
