package br.com.ifpb.sysmeeting.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(RegistroTextual.class)
public abstract class RegistroTextual_ {

	public static volatile SingularAttribute<RegistroTextual, String> texto;
	public static volatile SingularAttribute<RegistroTextual, Long> id;
	public static volatile ListAttribute<RegistroTextual, ItemDePauta> itensDePauta;
	public static volatile SingularAttribute<RegistroTextual, Ata> ata;

}

