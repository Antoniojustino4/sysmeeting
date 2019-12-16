package br.com.ifpb.sysmeeting.repository.reuniao;

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

import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.model.Reuniao_;
import br.com.ifpb.sysmeeting.repository.filter.ReuniaoFilter;

public class ReuniaoRepositoryImpl implements ReuniaoRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Reuniao> filtrar(ReuniaoFilter reuniaoFilter, Pageable pageable) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Reuniao> criteria= builder.createQuery(Reuniao.class);
		Root<Reuniao> root= criteria.from(Reuniao.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(reuniaoFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Reuniao> query= manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<> (query.getResultList(), pageable, total(reuniaoFilter));
	}
	
//	@Override
//	public Page<ResumoCampus> resumir(ReuniaoFilter reuniaoFilter, Pageable pageable) {
//		CriteriaBuilder builder= manager.getCriteriaBuilder();
//		CriteriaQuery<ResumoCampus> criteria= builder.createQuery(ResumoCampus.class);
//		Root<Reuniao> root= criteria.from(Reuniao.class);
//		
//		criteria.select(builder.construct(ResumoCampus.class,
//				root.get(Campus_.nome),
//				root.get(Campus_.cnpj),
//				root.get(Campus_.cidade)));
//		
//		Predicate[] predicates= criarRestricoes(reuniaoFilter, builder, root);
//		criteria.where(predicates);
//		
//		TypedQuery<ResumoCampus> query= manager.createQuery(criteria);
//		adicionarRestricoesDePaginacao(query, pageable);
//		
//		return new PageImpl<> (query.getResultList(), pageable, total(reuniaoFilter));
//	}

	private Predicate[] criarRestricoes(ReuniaoFilter reuniaoFilter, CriteriaBuilder builder, Root<Reuniao> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(reuniaoFilter.getId() != null) {
			predicates.add(builder.equal((root.get(Reuniao_.id)),reuniaoFilter.getId()));
		}
		
		if(reuniaoFilter.getAnoMes() != null) {
			predicates.add(
					builder.equal(root.get(Reuniao_.data), reuniaoFilter.getAnoMes()));
	
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
	
	private Long total(ReuniaoFilter reuniaoFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Reuniao> root = criteria.from(Reuniao.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(reuniaoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}


}
