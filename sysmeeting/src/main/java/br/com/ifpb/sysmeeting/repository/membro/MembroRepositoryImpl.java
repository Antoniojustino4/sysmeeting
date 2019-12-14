package br.com.ifpb.sysmeeting.repository.membro;

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

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.Membro_;
import br.com.ifpb.sysmeeting.repository.filter.MembroFilter;

public class MembroRepositoryImpl implements MembroRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;

	public Membro findByEmail(MembroFilter membroFilter) {
		CriteriaBuilder builder= manager.getCriteriaBuilder();
		CriteriaQuery<Membro> criteria= builder.createQuery(Membro.class);
		Root<Membro> root= criteria.from(Membro.class);
		
		//criar restriçoes
		Predicate[] predicates= criarRestricoes(membroFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Membro> query= manager.createQuery(criteria);
		return query.getSingleResult();
	}

	private Predicate[] criarRestricoes(MembroFilter membroFilter, CriteriaBuilder builder, Root<Membro> root) {
		List<Predicate> predicates= new ArrayList<>();
		
		if (!StringUtils.isEmpty(membroFilter.getEmail())) {
			predicates.add(builder.equal(builder.lower(root.get(Membro_.email)),
					membroFilter.getEmail().toLowerCase()));
					
		}

		if (!StringUtils.isEmpty(membroFilter.getSenha())) {
			predicates.add(builder.equal(builder.lower(root.get(Membro_.senha)),
					membroFilter.getSenha().toLowerCase()));
					
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
