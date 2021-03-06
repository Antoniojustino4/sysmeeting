CREATE TABLE campus(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
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

CREATE TABLE conta_acesso(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	email varchar(50),
	senha varchar(50),
	matricula double
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE membro(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
	titulo varchar(30),
	tipo varchar(30),
    status_membro varchar(30),
    regime varchar(30),
    id_conta_acesso BIGINT,
    foreign key (id_conta_acesso) references conta_acesso(id)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE conta_acesso ADD COLUMN id_membro BIGINT(11),
 ADD FOREIGN KEY (id_membro) REFERENCES membro (id);

CREATE TABLE orgao_membros(
	orgao_id BIGINT,
    membro_id BIGINT,
	primary key (orgao_id,membro_id),
    foreign key (orgao_id) references orgao(id),
    foreign key (membro_id) references membro(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



