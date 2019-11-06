package br.com.ifpb.teste.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Campus.class)
public abstract class Campus_ {

	public static volatile ListAttribute<Campus, Curso> cursos;
	public static volatile SingularAttribute<Campus, String> cidade;
	public static volatile SingularAttribute<Campus, String> nome;
	public static volatile SingularAttribute<Campus, Long> id;

}

