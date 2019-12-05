package br.com.ifpb.sysmeeting.repository.colegiado;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.Orgao_;
import br.com.ifpb.sysmeeting.repository.filter.ColegiadoFilter;

public class ColegiadoRepositoryImpl implements ColegiadoRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<Colegiado> filtrar(ColegiadoFilter colegiadoFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Colegiado> criteria= builder.createQuery(Colegiado.class);
		Root<Colegiado> root= criteria.from(Colegiado.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(colegiadoFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Colegiado> query= manager.createQuery(criteria);
		return query.getResultList();
	}

	private Predicate[] criarRestricoes(ColegiadoFilter colegiadoFilter, CriteriaBuilder builder, Root<Colegiado> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(colegiadoFilter.getDataMandato() != null) {
			predicates.add(
					builder.greaterThanOrEqualTo(root.get(Orgao_.inicioDeMandato), colegiadoFilter.getDataMandato()));
	
		}
		
		if(colegiadoFilter.getDataMandato() != null) {
			predicates.add(
					builder.lessThanOrEqualTo(root.get(Orgao_.vencimentoDeMandato), colegiadoFilter.getDataMandato()));
			
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
