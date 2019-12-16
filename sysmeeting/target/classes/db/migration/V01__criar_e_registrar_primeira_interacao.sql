CREATE TABLE campus(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cnpj varchar(50),
	nome varchar(90),
    cidade varchar(30)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE curso(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome varchar(90),
    turno varchar(30),
    modalidade varchar(30),
    formacao varchar(30),
    id_campus BIGINT,
    
	foreign key (id_campus) references campus(id)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE orgao(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    inicio_de_mandato date,
    vencimento_de_mandato date,
	quorum int,
	vigencia_Mandato_Meses int,
    vigencia_Reconducao_Meses int,
    docente_Qntd_Min int,
    docente_Qntd_Max int,
    id_curso BIGINT,
	
    foreign key (id_curso) references curso(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE colegiado(
	id BIGINT PRIMARY KEY,
	tec_Adm_Qntd_Min int,
	tec_Adm_Qntd_Max int,
	discente_Qntd_Max int,
	discente_Qntd_Min int,
	docente_Externo_Qntd_Min int,
	docente_Externo_Qntd_Max int,
    
    foreign key (id) references orgao(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE nde(
	id BIGINT PRIMARY KEY,
    foreign key (id) references orgao(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE membro(
	id BIGINT(11) PRIMARY KEY AUTO_INCREMENT,
    email varchar(50) not null,
	senha varchar(150) not null,
	matricula double,
    nome varchar(50),
	titulo varchar(30),
	tipo varchar(30),
    status_membro varchar(30),
    regime varchar(30)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE orgao_membros(
	orgao_id BIGINT,
    membro_id BIGINT,
	primary key (orgao_id,membro_id),
    foreign key (orgao_id) references orgao(id),
    foreign key (membro_id) references membro(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
