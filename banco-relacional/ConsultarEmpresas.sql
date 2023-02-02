-- consultar
select e.nome Empresa, c.nome as cidade
from empresas e, empresas_undidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede 

-- ou seja pegamos o nome de empresa e colocamos em E
-- o nome das cidades em C
-- id de empresas igual ao id de undidades
--  o id de cidade igual ao id de unidade e cidade
-- e por fim retornamos a sede
-- porém temo de executar isso no workbentch 

-- fizemos um innerJOY somente aquilo que está relacionado entre as tabelaS>S>>S>S>>S>