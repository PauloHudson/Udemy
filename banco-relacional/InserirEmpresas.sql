insert into empresas(nome, cnpj)
values
    ('Bradesco', 1989889898789),
    ('Vale', 19898989898356),
    ('Cielo', 19898989898123);

alter table empresas modify cnpj varchar(14);


-- descrever as tabelas....
desc empresas;
desc prefeitos;

select * from empresas
select * from cidades

insert into empresas_undidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)

desc empresas_undidades;