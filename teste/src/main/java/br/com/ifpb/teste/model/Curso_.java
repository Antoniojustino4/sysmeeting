package br.com.ifpb.teste.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Curso.class)
public abstract class Curso_ {

	public static volatile SingularAttribute<Curso, Formacao> formacao;
	public static volatile SingularAttribute<Curso, Campus> campus;
	public static volatile ListAttribute<Curso, Orgao> orgoes;
	public static volatile SingularAttribute<Curso, String> nome;
	public static volatile SingularAttribute<Curso, Long> id;
	public static volatile SingularAttribute<Curso, Turno> turno;
	public static volatile SingularAttribute<Curso, Modalidade> modalidade;

}

