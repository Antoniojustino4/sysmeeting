package br.com.ifpb.sysmeeting.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ContaAcesso.class)
public abstract class ContaAcesso_ {

	public static volatile SingularAttribute<ContaAcesso, String> senha;
	public static volatile SingularAttribute<ContaAcesso, Double> matricula;
	public static volatile SingularAttribute<ContaAcesso, Membro> membro;
	public static volatile SingularAttribute<ContaAcesso, Long> id;
	public static volatile SingularAttribute<ContaAcesso, String> email;

}

