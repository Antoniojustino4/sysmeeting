package br.com.ifpb.sysmeeting.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Ata.class)
public abstract class Ata_ {

	public static volatile ListAttribute<Ata, RegistroTextualAta> registrosTextuaisAta;
	public static volatile SingularAttribute<Ata, Integer> numero;
	public static volatile SingularAttribute<Ata, Date> dataDaPublicacao;
	public static volatile ListAttribute<Ata, Membro> membros;
	public static volatile SingularAttribute<Ata, Long> id;

}

