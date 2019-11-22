package br.com.ifpb.sysmeeting.model;

import br.com.ifpb.sysmeeting.model.Enum.EstadoItemDePauta;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItemDePauta.class)
public abstract class ItemDePauta_ {

	public static volatile SingularAttribute<ItemDePauta, String> assunto;
	public static volatile ListAttribute<ItemDePauta, Reuniao> reunioes;
	public static volatile SingularAttribute<ItemDePauta, EstadoItemDePauta> estado;
	public static volatile SingularAttribute<ItemDePauta, ItemDePauta> itemDePauta;
	public static volatile SingularAttribute<ItemDePauta, Date> dataEnquadrado;
	public static volatile ListAttribute<ItemDePauta, Orgao> orgoes;
	public static volatile SingularAttribute<ItemDePauta, Long> id;
	public static volatile SingularAttribute<ItemDePauta, Date> dataSugestao;
	public static volatile SingularAttribute<ItemDePauta, String> descricao;

}

