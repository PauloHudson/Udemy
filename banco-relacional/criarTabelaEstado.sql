-- Criando a tabela sstado
create table estados(
    -- valor inteiro sem sinal e n'ao null o useja ele tera algo
    -- auto incrementado
    -- tipo colocou 1 id 1, colocou outro id 2
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY(sigla)
)