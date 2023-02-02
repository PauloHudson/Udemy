-- select
--     regiao as 'Região',
--     sum(populacao) as Total
-- from estados 
-- group by regiao
-- order by Total desc

-- vai selecionar a região, mudar para região com acentro
-- vai somar a população e vai criar a tabela total e colocar lá...
-- e vai ordenar por região 

-- poderiamos simplesmente somar tudo tmb
-- select sum(populacao) as Total
-- from estados

-- poderiamos simplesmente pegar a média
select avg(populacao) as Media
from estados