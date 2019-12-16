CREATE TABLE ata(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_da_publicacao date
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE reuniao ADD COLUMN id_ata BIGINT(11),
 ADD FOREIGN KEY (id_ata) REFERENCES ata(id);
 
ALTER TABLE membro ADD COLUMN id_ata BIGINT(11),
 ADD FOREIGN KEY (id_ata) REFERENCES ata(id);



CREATE TABLE registro_textual(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	texto varchar(255),
    id_ata BIGINT,
    
	foreign key (id_ata) references ata(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE registro_textual_itens_de_pauta(
	id_item_de_pauta BIGINT,
    id_registo_textual BIGINT,
    
	primary key (id_item_de_pauta, id_registo_textual),
    foreign key (id_item_de_pauta) references item_de_pauta(id),
    foreign key (id_registo_textual) references registro_textual(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


