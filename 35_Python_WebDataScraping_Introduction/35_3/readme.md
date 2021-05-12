## 35_3 Raspagem de Dados

### Aprendizados
- Realizar requisições web;
- Analisar conteúdos HTML afim de extrair dados;
- Aplicar técnicas de raspagem para evitar problemas como bloqueio de acesso;
- Armazenar os dados obtidos em um banco de dados.

### Resumo

#### Módulo
Todo arquivo que é escrito com a linguagem Python e com a extensão .py é considerado um módulo

#### Pacote
Pacotes são módulos Python que contêm outros módulos e/ou pacotes , comumente separados por responsabilidades similares. Na prática, um pacote é um diretório que pode conter vários módulos (arquivos de extensão .py ) e/ou outros pacotes .
Exemplo de tipos diferentes de imports de pacotes :
~~~
import http  # importa o pacote http como um módulo

from http import client  # importa o módulo client do pacote http

from http.client import HTTP_PORT  # importa a constante HTTP_POST do módulo client do pacote http
~~~

### Ambiente virtual
Cada ambiente virtual possui seu próprio binário Python (que corresponde à versão do binário usado para criar esse ambiente) e pode ter seu próprio conjunto independente de pacotes Python instalados nos diretórios do site. O módulo [venv](https://docs.python.org/pt-br/dev/library/venv.html#module-venv) fornece suporte para a criação desses “ambientes virtuais”.

[Python - site oficial](https://www.python.org/)

#### Your feedback is always welcomed and appreciated