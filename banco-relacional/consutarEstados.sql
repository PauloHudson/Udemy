-- selecionar tudo
-- select * from estados

-- select nome, populacao, regiao from estados
-- where regiao = 'sul'

select nome, regiao from estados
where populacao > 10
order by populacao desc