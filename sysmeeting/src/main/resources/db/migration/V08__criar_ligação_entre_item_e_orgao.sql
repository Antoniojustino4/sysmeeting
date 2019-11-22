CREATE TABLE orgao_itens_de_pauta(
	id_item_de_pauta BIGINT,
    id_orgao BIGINT,
    
	primary key (id_item_de_pauta, id_orgao),
    foreign key (id_item_de_pauta) references item_de_pauta(id),
    foreign key (id_orgao) references orgao(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


