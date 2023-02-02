CREATE TABLE IF NOT EXISTS empresas(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    PRIMARY KEY (id),
    unique key (cnpj)
);

-- tabela empresas
CREATE TABLE IF NOT EXISTS empresas_undidades(
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede TYNYINT(1) not null,
    primary key(empresa_id, cidade_id)
);