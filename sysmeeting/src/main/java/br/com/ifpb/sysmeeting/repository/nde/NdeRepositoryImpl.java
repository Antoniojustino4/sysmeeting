package br.com.ifpb.sysmeeting.repository.nde;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.model.NDE_;
import br.com.ifpb.sysmeeting.repository.filter.NdeFilter;

public class NdeRepositoryImpl implements NdeRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<NDE> filtrar(NdeFilter ndeFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<NDE> criteria= builder.createQuery(NDE.class);
		Root<NDE> root= criteria.from(NDE.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(ndeFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<NDE> query= manager.createQuery(criteria);
		return query.getResultList();
	}

	private Predicate[] criarRestricoes(NdeFilter ndeFilter, CriteriaBuilder builder, Root<NDE> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(ndeFilter.getDataMandato() != null) {
			predicates.add(
					builder.greaterThanOrEqualTo(root.get(NDE_.inicioDeMandato), ndeFilter.getDataMandato()));
	
		}
		
		if(ndeFilter.getDataMandato() != null) {
			predicates.add(
					builder.lessThanOrEqualTo(root.get(NDE_.vencimentoDeMandato), ndeFilter.getDataMandato()));
			
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
