package br.com.ifpb.sysmeeting.repository.curso;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;

import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.model.Curso_;
import br.com.ifpb.sysmeeting.repository.filter.CursoFilter;

public class CursoRepositoryImpl implements CursoRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Curso> filtrar(CursoFilter cursoFilter, Pageable pageable) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Curso> criteria= builder.createQuery(Curso.class);
		Root<Curso> root= criteria.from(Curso.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(cursoFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Curso> query= manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<> (query.getResultList(), pageable, total(cursoFilter));
	}

	private Predicate[] criarRestricoes(CursoFilter cursoFilter, CriteriaBuilder builder, Root<Curso> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(!StringUtils.isEmpty(cursoFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(Curso_.nome)),"%" + cursoFilter.getNome().toLowerCase()+"%"));
		}
		
		if(!StringUtils.isEmpty(cursoFilter.getNomeDoCampus())) {
			predicates.add(builder.like(
					builder.lower(root.get(Curso_.campus.getName())),"%" + cursoFilter.getNomeDoCampus().toLowerCase()+"%"));
		}
		
		
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}
	
	private void adicionarRestricoesDePaginacao(TypedQuery<Curso> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistroPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistroPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistroPorPagina);
		
	}
	
	private Long total(CursoFilter cursoFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Curso> root = criteria.from(Curso.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(cursoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}
	

}
