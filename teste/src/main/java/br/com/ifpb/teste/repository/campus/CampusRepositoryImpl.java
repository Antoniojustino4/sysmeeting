package br.com.ifpb.teste.repository.campus;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import br.com.ifpb.teste.model.Campus;
import br.com.ifpb.teste.model.Campus_;
import br.com.ifpb.teste.repository.filter.CampusFilter;

public class CampusRepositoryImpl implements CampusRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<Campus> filtrar(CampusFilter campusFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Campus> criteria= builder.createQuery(Campus.class);
		Root<Campus> root= criteria.from(Campus.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(campusFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Campus> query= manager.createQuery(criteria);
		return query.getResultList();
	}

	private Predicate[] criarRestricoes(CampusFilter campusFilter, CriteriaBuilder builder, Root<Campus> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if(!StringUtils.isEmpty(campusFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(Campus_.nome)),"%" + campusFilter.getNome().toLowerCase()+"%"));
		}
		
		
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
