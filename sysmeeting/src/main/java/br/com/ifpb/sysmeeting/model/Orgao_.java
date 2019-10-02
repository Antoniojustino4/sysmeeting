package br.com.ifpb.sysmeeting.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Orgao.class)
public abstract class Orgao_ {

	public static volatile SingularAttribute<Orgao, Integer> vigenciaReconducaoMeses;
	public static volatile SingularAttribute<Orgao, Integer> docenteQntdMax;
	public static volatile SingularAttribute<Orgao, Integer> vigenciaMandatoMeses;
	public static volatile SingularAttribute<Orgao, Integer> docenteQntdMin;
	public static volatile SingularAttribute<Orgao, Curso> curso;
	public static volatile SingularAttribute<Orgao, Integer> quorum;
	public static volatile ListAttribute<Orgao, Membro> membros;
	public static volatile SingularAttribute<Orgao, Long> id;

}

