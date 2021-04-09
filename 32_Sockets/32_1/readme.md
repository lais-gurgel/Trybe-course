## 32_1 Arquitetura de Software - Camada de View

### Aprendizados
- Estender a arquitetura MSC criando novas camadas
- Estruturar um modelo em camadas sem a camada de serviço (service).

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
