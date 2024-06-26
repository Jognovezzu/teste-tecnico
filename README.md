# TESTE PRATICO - BACKEND

## 1. DESCRIÇÃO:
Projeto do Backend para uma API para um Teste Prático Online.

## 2. Tecnologias | Frameworks :

<div style="display: flex; justify-content: space-between; gap: 20px;">

  <img src="assets/javascript.svg" alt="JavaScript" title="JavaScript" height="50" />
  <img src="assets/nestjs-icon.svg" alt="NestJS" title="NestJS" height="50" />
  <img src="assets/typescript.svg" alt="TypeScript" title="TypeScript" height="50" />
  <img src="assets/postgresql.svg" alt="Postgres" title="Postgres" height="50" />
  <img src="assets/swagger.svg" alt="Swagger" title="Swagger" height="50" />
  <img src="assets/docker.svg" alt="Docker" title="Docker" height="50" />
  <img src="assets/redis.svg" alt="Redis" title="Redis" height="50" />
  <img src="assets/render.svg" alt= "Render" title="Render" height="50"/>

</div>



## 3. EXECUTAR PROJETO LOCALMENTE:

### 3.1. Executando diretamente com `docker` e `npm`:

#### 3.1.1. Instale os pacotes localmente
``` bash
# acessar pasta do nestjs code
$ cd api/
# executar a instalação dos pacotes usando o package.json local
$ npm install
```
#### 3.1.2. Subir Ambiente
O ambiente de desenvolvimento está configurado para executar em docker e ficar
monitorando atualizações nos arquivos para podr aplicar `live reload`.
``` bash
$ cd docker/
# executar ambiente de desenvolvimento
$ docker compose -f dc.yml up
```

## 4. EFETUAR MIGRAÇÕES:
Para efetuar as migrações dos registros padrões execute os comandos abaixo.
``` bash
$ cd sql/
# copiar arquivo para dentro do docker
$ docker cp migrations.sql db:./migrations.sql
# executar arquivo .sql no banco
$ docker exec db psql -U postgres -p 8432 -a -f migrations.sql
```

---

## 5. HOSPEDAGEM:
Para este projeto foi utilizado o Render para hospedagem do projeto. O projeto pode ser acessado através do link: [https://teste-tecnico-1-tv51.onrender.com/](https://teste-tecnico-1-tv51.onrender.com/), com o deploy realizado no dia 11/06/2024 ( o plano gratuito permite utilizar por 30 dias sem custos adicionais, ou seja, a API não poderá ser acessada apos esses 30 dias ).

Na hospedagem foi criada 3 instancias, sendo elas:
- API: Onde está hospedado o backend da aplicação.
- DB: Onde está hospedado o banco de dados da aplicação.
- CACHE: Onde está hospedado o Redis da aplicação.
---

## 6. OBSERVAÇÕES:
- Foi utilizado o Swagger para documentação da API, que pode ser acessado através do link: [https://teste-tecnico-1-tv51.onrender.com/swagger](https://teste-tecnico-1-tv51.onrender.com/swagger)
- Os testes dos endpoints foram realizados através do Thunder Client, uma extensão do VSCode.


## 5. COMENTÁRIOS PESSOAIS:
Achei o teste bem interessante, consegui concluir em um tempo curto justamente por ja ter uma experiencia anterior (cerca de 1 ano e meio) com a maioria das tecnologias utilizadas no teste. 

As partes mais complexas foram a parte de autenticação e a implementação do Redis, pois não tenho muita experiencia em ambas as partes, mas consegui concluir implementando de maneira simples.

Quanto a parte do Deploy, também nunca tinha realizado, o que custou boa parte da atividade. Então foi uma experiência nova e interessante.

Obs: A diversas melhorias que podem ser feitas, como adicionar filtro na pesquisa dos filmes, melhorar a documentação, melhorar a segurança, etc. Mas por questão não criar complexidade além do necessário e pelo tempo não foi possível implementar.

Agradeço a oportunidade.
