package br.com.ifpb.sysmeeting.repository.campus;

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

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.model.Campus_;
import br.com.ifpb.sysmeeting.repository.filter.CampusFilter;
import br.com.ifpb.sysmeeting.repository.projection.ResumoCampus;

public class CampusRepositoryImpl implements CampusRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Campus> filtrar(CampusFilter campusFilter, Pageable pageable) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Campus> criteria= builder.createQuery(Campus.class);
		Root<Campus> root= criteria.from(Campus.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(campusFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Campus> query= manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<> (query.getResultList(), pageable, total(campusFilter));
	}
	
	@Override
	public Page<ResumoCampus> resumir(CampusFilter campusFilter, Pageable pageable) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<ResumoCampus> criteria= builder.createQuery(ResumoCampus.class);
		Root<Campus> root= criteria.from(Campus.class);
		
		criteria.select(builder.construct(ResumoCampus.class,
				root.get(Campus_.nome),
				root.get(Campus_.cnpj),
				root.get(Campus_.cidade)));
		
		Predicate[] predicates= criarRestricoes(campusFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<ResumoCampus> query= manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<> (query.getResultList(), pageable, total(campusFilter));
	}

	private Predicate[] criarRestricoes(CampusFilter campusFilter, CriteriaBuilder builder, Root<Campus> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(!StringUtils.isEmpty(campusFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(Campus_.nome)),"%" + campusFilter.getNome().toLowerCase()+"%"));
		}
		
		
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}
	
	private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistroPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistroPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistroPorPagina);
		
	}
	
	private Long total(CampusFilter campusFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Campus> root = criteria.from(Campus.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(campusFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}


}
