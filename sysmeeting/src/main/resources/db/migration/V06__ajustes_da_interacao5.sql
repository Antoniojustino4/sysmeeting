CREATE TABLE ata(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	numero int(11),
    data_da_publicacao date
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE reuniao ADD COLUMN id_ata BIGINT(11),
 ADD FOREIGN KEY (id_ata) REFERENCES ata (id);
 
ALTER TABLE membro ADD COLUMN id_ata BIGINT(11),
 ADD FOREIGN KEY (id_ata) REFERENCES ata (id);



CREATE TABLE registro_textual_ata(
	id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	texto varchar(255),
    id_ata BIGINT,
    
	foreign key (id_ata) references ata(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE resgistro_textual_itens_de_pauta(
	id_item_de_pauta BIGINT,
    id_resgisto_textual BIGINT,
    
	primary key (id_item_de_pauta, id_resgisto_textual),
    foreign key (id_item_de_pauta) references item_de_pauta(id),
    foreign key (id_resgisto_textual) references registro_textual_ata(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


