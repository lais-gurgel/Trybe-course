## 35_4 Testes e exceções

### Aprendizados
- Escrever testes automatizados utilizando a linguagem Python ;
- Verificar a ocorrência de erros esperados utilizando testes automatizados;
- Criar contextos para execução de testes automatizados;
- Modificar componentes do software para evitar a utilização de recursos externos.

### Resumo
Testes são importantes na automação da verificação do funcionamento correto de um algoritmo, com o propósito de evitar que erros se propaguem até a pessoa usuária final. É importante ressaltar que testes automatizados não evitam bugs , porém ajudam a preveni-los.
> Um código sem testes é um código ruim. Não importa quão bem ele foi escrito - Michael Feathers

#### Testes Automatizados
Foi utilizada a biblioteca [pytest](https://docs.pytest.org/en/latest/), um framework que facilita a escrita de testes simples, mas capazes de testar funcionalidades complexas em aplicações e bibliotecas
⚠️ AVISO: Instale a biblioteca somente no ambiente virtual do seu projeto.
Instalação
~~~
python3 -m pip install pytest
~~~
Versão
~~~
python3 -m pytest --version
~~~
Execução
~~~
python3 -m pytest
~~~
Ele reconhece como testes apenas as funções com nome começando com test_ em arquivos com nome começando com test_

#### Testando falhas
Podemos escrever testes que verificam que um erro deve ocorrer a partir de uma determinada entrada através das exceções. Utilizamos a função raises da pytest , que verifica se a exceção ocorreu. Caso contrário, ela lança um AssertionError , indicando que o teste não passou. Podemos verificar também se o texto retornado na exceção é o esperado, através do parâmetro match.
~~~
import pytest
from codigo import is_odd, divide

# ...

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
~~~

#### Contexto
Podemos pensar em cenários distintos para a realização dos testes, as precondições ou estados necessários para a execução de um teste, damos o nome de test fixture ou apenas fixture.

#### Dublês de teste
Em testes automatizados (de unidade), é desejado que cada teste não interfira no estado manipulado por outro teste, e também que recursos externos (arquivos, internet, banco de dados) não atrapalhem a sua execução. Por isso, é muito comum a utilização de dublês de testes para simular estes recursos externos. Estes componentes simulados de software são chamados, de forma genérica, de mock , mas existem diversas técnicas específicas de simulações que nos ajudam a escrever os testes. Podemos substituir componentes para que retornem um determinado valor simulado ou podemos substituir os componentes por objetos falsos que registram as informações sobre sua invocação como o número de vezes em que foram chamados ou os parâmetros com o qual foram chamados.
- fakes: objetos que possuem implementações funcionais, porém normalmente simplificadas;
- mocks: são pré programados para verificarem as chamadas das funções que receberem;
- stubs: proveem respostas predefinidas;
- spies: são como stubs, mas também armazenam informações de como foram chamados.

#### Your feedback is always welcomed and appreciated