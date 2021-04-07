# Introdução
Automação de testes para validar a  busca de medicos com as suas  especialidades da uma região desejada ou somente de uma região.

# Ferramenta para automação de API 
Selenium IDE, cucumber, InteliJ IDE, junit

# Pré condições para a execução do projeto

Java 1.8 ou versãos superiores
Navegador Chrome na versão 89.0.4389.114 (Versão oficial) 64 bits

Maven configurado no seu classpath

Para executar a suíte de testes, basta executar o seguinte comando:

```shell script
mvn clean test -Dcucumber.options="--tags @buscarMedicos"  -Dbrowser=chrome -Dlanguage=pt-BR
```



