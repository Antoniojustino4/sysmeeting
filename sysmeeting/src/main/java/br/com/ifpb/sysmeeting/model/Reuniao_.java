package br.com.ifpb.sysmeeting.model;

import java.sql.Time;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Reuniao.class)
public abstract class Reuniao_ {

	public static volatile SingularAttribute<Reuniao, Time> horarioInicio;
	public static volatile SingularAttribute<Reuniao, TipoDeReuniao> tipo;
	public static volatile SingularAttribute<Reuniao, EstadoDaReuniao> estado;
	public static volatile SingularAttribute<Reuniao, Orgao> orgao;
	public static volatile SingularAttribute<Reuniao, Date> data;
	public static volatile SingularAttribute<Reuniao, Time> horarioFinal;
	public static volatile ListAttribute<Reuniao, Membro> membrosPresentes;
	public static volatile SingularAttribute<Reuniao, Long> id;
	public static volatile ListAttribute<Reuniao, ItemDePauta> itensDePauta;

}

