## 32_2 Sockets - TCP/UDP & NET

### Aprendizados
- Usar o pacote NET do Node.js para criar aplicações que trafeguem mensagens através de sockets .

### Resumo
A arquitetura MVC (Model-View-Controller) permite que as regras de negócio fiquem longe da camada de apresentação, facilitando a reutilização do código. 

![arquitetura-MVC](./architecture.png)

- MODEL
Acesso e manipulação dos dados da aplicação, contem as regras de negócio, por exemplo o acesso ao banco de dados e api
> A camada de model fica desacoplada, não tendo conhecimento das demais

- VIEW
Responsavel pela interface apresentada ao usuario, contem por exemplo arquivos HTML e CSS

- CONTROLLER
Recebe as requisições do usuario (INPUT), utiliza a camada MODEL para obter os dados e utiliza as VIEWS para renderizar a saida das informações (OUTPUT)

- ROUTER
Elemento responsavel por criar as rotas, liga o endereço ao metodo do controller

#### Your feedback is always welcomed and appreciated