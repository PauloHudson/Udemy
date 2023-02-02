

-- insert into cidades(nome, area, estado_id)
-- values ('Campinas', 795, 21)


-- insert into cidades(nome, area, estado_id)
-- values ('Caruaru', 920.5, (select id from estados where sigla = 'PE'))

-- selecionamos dentro da tabela estados o lugar onde a sigla fosse pe e colocamos dentro dela o caruaru

-- insert into cidades(nome, area, estado_id)
-- values ('JuazeiroDoNorte', 430, (select id from estados where sigla='CE'))

select * from cidades