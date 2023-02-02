select e.nome as Estado from estados e, cidades c
where e.id = c.estado_id;