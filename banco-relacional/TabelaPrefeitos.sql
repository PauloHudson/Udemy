CREATE TABLE IF NOT EXISTS prefeitos(
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int UNSIGNED  UNIQUE KEY,
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
)

-- cidade id não aceita repetição