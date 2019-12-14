package br.com.ifpb.sysmeeting.repository.itemDePauta;

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

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.ItemDePauta_;
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;

public class ItemDePautaRepositoryImpl implements ItemDePautaRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<ItemDePauta> filtrar(ItemDePautaFilter itemFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<ItemDePauta> criteria = builder.createQuery(ItemDePauta.class);
		Root<ItemDePauta> root = criteria.from(ItemDePauta.class);

		// criar restriçoes
		Predicate[] predicates = criarRestricoes(itemFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<ItemDePauta> query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);

		return new PageImpl<>(query.getResultList(), pageable, total(itemFilter));
	}

	private Predicate[] criarRestricoes(ItemDePautaFilter itemFilter, CriteriaBuilder builder, Root<ItemDePauta> root) {
		List<Predicate> predicates = new ArrayList<>();

		if (!StringUtils.isEmpty(itemFilter.getAssunto())) {
			predicates.add(builder.like(builder.lower(root.get(ItemDePauta_.assunto)),
					"%" + itemFilter.getAssunto().toLowerCase() + "%"));
		}

		if (!StringUtils.isEmpty(itemFilter.getEstado())) {
			predicates.add(builder.like(builder.lower(root.get(ItemDePauta_.estado.getName())),
					"%" + itemFilter.getAssunto().toLowerCase() + "%"));
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
	
	private Long total(ItemDePautaFilter itemFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<ItemDePauta> root = criteria.from(ItemDePauta.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(itemFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}

}
