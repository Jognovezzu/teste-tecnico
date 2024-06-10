# TESTE PRATICO - BACKEND

## 1. DESCRIÇÃO:
Projeto do Backend para uma API para um Teste Prático Online.

## 2. Tecnologias | Frameworks :

<img style="margin: 10px" src="assets/javascript.svg" alt="JavaScript" title="JavaScript" height="50" />
<img style="margin: 10px" src="assets/nestjs-icon.svg" alt="NestJS" title="NestJS" height="50" />
<img style="margin: 10px" src="assets/typescript.svg" alt="TypeScript" title="TypeScript" height="50" />
<img style="margin: 10px" src="assets/postgresql.svg" alt="Postgres" title="Postgres" height="50" />
<img style="margin: 10px" src="assets/swagger.svg" alt="Swagger" title="Swagger" height="50" />
<img style="margin: 10px" src="assets/docker.svg" alt="Docker" title="Docker" height="50" />
<img style="margin: 10px" src="assets/redis.svg" alt="Redis" title="Redis" height="50" />


## 3. EXECUTAR PROJETO:

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