package br.com.ifpb.sysmeeting.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
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

	@PersistenceContext
	private EntityManager manager;

	public Campus save(Campus campus) throws DesafioException {

		if (validarCNPJ(campus)) {
			if (campus.getCursos().size() != 0) {
				// salvar os cursos que foram cadastrados juntamente com o campus
				for (Curso curso : campus.getCursos()) {
					curso.setCampus(campus);
				}
			}
			return campusRepository.save(campus);
		}
		// se campus ja tiver com cnpj no sistema, atualize o msm
		else if (campus.getCursos().size() != 0) {
			Campus campusBanco = buscarCampusPeloCnpj(campus);
			for (Curso curso : campus.getCursos()) {
				addCurso(campusBanco.getId(), curso);
			}
			return campusRepository.save(campusBanco);
		}
		else 
			throw new DesafioException("O CNPJ informado, já está cadastrado");

	}

	public Campus atualizar(Long codigo, Campus campus) throws DesafioException {
		Campus campusSalvo = buscarCampusPeloCodigo(codigo);
		if (campusSalvo == null) {
			throw new EmptyResultDataAccessException(1);
		}
		if (!validarCNPJ(campusSalvo)) {
			throw new DataIntegrityViolationException("campos obrigatorios não preenchidos ou inválidos");
		}

		BeanUtils.copyProperties(campus, campusSalvo, "id");
		return campusRepository.save(campusSalvo);
	}

	public Campus addCurso(Long codigo, Curso curso) {
		Campus campusSelecionado = buscarCampusPeloCodigo(codigo);
		curso.setCampus(campusSelecionado);
		cursoRepository.save(curso);
		campusSelecionado.addCurso(curso);
		return campusSelecionado;

	}

	public Page<Campus> filtrar(CampusFilter campusFilter, Pageable pageable) {
		return campusRepository.filtrar(campusFilter, pageable);
	}

	public Page<ResumoCampus> resumir(CampusFilter campusFilter, Pageable pageable) {
		return campusRepository.resumir(campusFilter, pageable);
	}

	private Campus buscarCampusPeloCodigo(Long codigo) {
		Campus campusSalvo = campusRepository.findOne(codigo);
		if (campusSalvo == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return campusSalvo;
	}

	private Campus buscarCampusPeloCnpj(Campus campus) {
		if (campus == null || campus.getCnpj() == null) {
			return null;
		}

		String jpql = "SELECT c FROM Campus c WHERE c.cnpj = :cnpj";

		TypedQuery<Campus> query = manager.createQuery(jpql, Campus.class);

		query.setParameter("cnpj", campus.getCnpj());

		Campus campusSalvo = query.getSingleResult();
		if (campusSalvo == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return campusSalvo;
	}

	private boolean validarCNPJ(Campus campus) throws DesafioException {
		if (campus == null || campus.getCnpj() == null) {
			return false;
		}

		String jpql = "SELECT COUNT(*) FROM Campus c WHERE c.cnpj = :cnpj";
		if (campus.getId() != null) {
			jpql += " AND c != :campus ";
		}

		TypedQuery<Long> query = manager.createQuery(jpql, Long.class);

		query.setParameter("cnpj", campus.getCnpj());
		if (campus.getId() != null) {
			query.setParameter("campus", campus);
		}

		Long count = query.getSingleResult();
		if (count > 0) {
			return false;
		}
		return true;

	}
}
