package br.com.ifpb.sysmeeting.model;

import br.com.ifpb.sysmeeting.model.Enum.RegimeTraballho;
import br.com.ifpb.sysmeeting.model.Enum.StatusMembro;
import br.com.ifpb.sysmeeting.model.Enum.TipoDeMembro;
import br.com.ifpb.sysmeeting.model.Enum.Titulacao;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Membro.class)
public abstract class Membro_ {

	public static volatile SingularAttribute<Membro, String> senha;
	public static volatile ListAttribute<Membro, Reuniao> reunioes;
	public static volatile SingularAttribute<Membro, TipoDeMembro> tipo;
	public static volatile SingularAttribute<Membro, RegimeTraballho> regime;
	public static volatile SingularAttribute<Membro, Double> matricula;
	public static volatile SingularAttribute<Membro, Titulacao> titulo;
	public static volatile ListAttribute<Membro, Orgao> orgoes;
	public static volatile SingularAttribute<Membro, String> nome;
	public static volatile SingularAttribute<Membro, Long> id;
	public static volatile SingularAttribute<Membro, Ata> ataIndicacao;
	public static volatile SingularAttribute<Membro, String> email;
	public static volatile SingularAttribute<Membro, StatusMembro> statusMembro;
}

