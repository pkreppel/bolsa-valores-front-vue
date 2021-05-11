# bolsa-valores-front-vue

Aplicação em VUE que consome uma api que retorna os tickers da b3. Existe um repositório com uma aplicação java que faz a requisição na api da B3 e retorna dados do ticker requisitado.

- Esta aplicação contêm um Dockefile. 
- Para criar a imagem e o container, segue um exemplo:
  - Executar npm run build
  - Ainda no terminal, executar:
    - docker build -t 8081:8081 bolsa-valores-front-vue .
    - docker run -dp 8081:8081 bolsa-valores-front-vue
    - No browser, utilizar a url http://localhost:8081
   
## Backend
A aplicação backend em java está aqui: [bolsa-valores-back-java](https://github.com/pkreppel/bolsa-valores-back-java)

## Frontend Nextjs
Existe também uma aplicação em React com Nextjs que consome a mesma api:  [bolsa-valores-front-nextjs](https://github.com/pkreppel/bolsa-valores-front-nextjs)
