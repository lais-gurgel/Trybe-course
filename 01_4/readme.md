1.4 Unix & Bash - Parte 2

Aprendizados:
1- Utilizar o comando find;
2- Utilizar os operadores >, >> e | no terminal;
3- Alterar as permissões de arquivos e diretórios;
4- Verificar o status e enviar sinais a processos UNIX;

COMANDOS E SIGNIFICADOS
**comando > arquivo** redireciona a saída padrão para um arquivo
**comando >> arquivo** anexa saida padrão a um arquivo
**comando < arquivo** redireciona a entrada padrão de um arquivo
**comando1 | comando2** canaliza a saída do comando1 para a entrada do comando2
**cat arquivo1 arquivo2 > arquivo0** concatena arquivo1 e arquivo2 em arquivo0
**sort** ordena dados
**who** lista os usuários atualmente logados
**ls -lag** lista direitos de acesso para todos os arquivos
**chmod [options ] arquivo** altera os direito de acesso para o arquivo nomeado
**comando &** executa o comando em segundo plano
**^C** elimina o trabalho em execução em primeiro plano
**^Z** suspende o trabalho em execução em primeiro plano
**bg** retorna processos que estão suspensos
**jobs** lista processos suspensos e em segundo plano
**fg %1** reinicia o primeiro processo suspenso
**kill %1** encerra o primeiro processo suspenso
**ps** lista processos atuais
**kill 26152** encerra o processo de número 26152
