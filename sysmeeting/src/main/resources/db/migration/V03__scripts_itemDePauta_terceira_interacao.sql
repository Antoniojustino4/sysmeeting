CREATE TABLE item_de_pauta(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	descricao varchar(255),
    assunto varchar(255),
	data_sugestao date,
    data_enquadrado date,
    id_item_de_pauta BIGINT,
	
    foreign key (id_item_de_pauta) references item_de_pauta(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE reuniao(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_reuniao date,
    horario_inicio time,
    horario_final time,
    tipo_de_reuniao varchar(30),
    estado_da_reuniao varchar(30),
    id_orgao BIGINT,
    
	foreign key (id_orgao) references orgao(id)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE reuniao_itens_de_pauta(
	id_item_de_pauta BIGINT,
    id_reuniao BIGINT,
	primary key (id_item_de_pauta, id_reuniao),
    foreign key (id_item_de_pauta) references item_de_pauta(id),
    foreign key (id_reuniao) references reuniao(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE reuniao_membros_presentes(
	id_membro_presente BIGINT,
    id_reuniao BIGINT,
	primary key (id_membro_presente, id_reuniao),
    foreign key (id_membro_presente) references membro(id),
    foreign key (id_reuniao) references reuniao(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;