# Movieflix

## Sobre o projeto

### https://movieflix-robson.netlify.app/movies

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados
pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas
usuários membros podem inserir avaliações no sistema.
Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar
nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os
filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes
por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver
todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele
pode ainda registrar uma avaliação nessa tela.

## Login
Você pode fazer login usando usuário e senha abaixo:  
*usuário:* bob@gmail.com  
*senha:* 1123456  

## Layout web
![Login](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Login.JPG)

![Listagem](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Listagem.JPG)

![Detalhes filme](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Detalhes-filme.JPG)

## Layout web responsivo
![Login1](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/telas/Login-responsivo.JPG)


![Listagem1](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Login-responsivo-01.JPG)

![Listagem2](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Login-responsivo-02.JPG)

![Detalhes filme1](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Detalhes-filme-responsivo-01.JPG)

![Detalhes filme2](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Detalhes-filme-responsivo-02.JPG)

## Modelo conceitual
![Modelo Conceitual](https://github.com/JRobsonGomes/movieflix/blob/main/front-web/public/Modelo-conceitual.JPG)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- Spring Data
- OAuth 2.0
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- Sass
- Bootstrap 5

## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/JRobsonGomes/movieflix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/JRobsonGomes/movieflix.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

José Robson Gomes dos Reis

https://www.linkedin.com/in/robson-gomes-616b1287