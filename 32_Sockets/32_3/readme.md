## 32_3 Sockets - Socket.io

### Aprendizados
- Conseguir desenvolver um server socket usando o socket.io
- Emitir eventos personalizados usando o socket.io

### Resumo
Sockets são um padrão de comunicação muito usado em aplicações real time. Contudo, usar o pacote NET do Node.js é muito custoso quando precisamos fazer uma aplicação de grande porte, e é nesses momentos que temos outras bibliotecas para nos ajudar.

O socket.io nos permite implementar mecanismos mais complexos do que o que fizemos e de um forma até mais simples do que a que vimos. 

> Implementações complexas: controle de salas, limite do número de users conectados ao servidos, trabalhar com eventos de forma mais customizável

Além da facilidade de sintaxe no uso do Socket.io, ele também cria um servidor para nós, assim como o Express. Porém, ao invés de rotas, nós temos uma lógica baseada em eventos. É através desses eventos que fazemos a comunicação do cliente com o servidor e do servidor com o cliente.

[Documentação Socket.io](https://socket.io/)

#### Your feedback is always welcomed and appreciated