@smokeTest
@buscarMedicos
Feature: Validar busca de medicos com as suas  especialidades da uma região desejada

  Background:
    Given Acessar "urlUnimed"

  @buscarMedicosNaRegiao
  Scenario Outline: Buscar medicos na região "<estados>"
    Given Clicar em Guia Médico
    When Digitar a sua busca "<estados>"
    And Clicar no botão pesquisar
    Then Validar a apresentação dos resultados com a Especialidade e Cidade no Estado  "<estados>"


    Examples:
      | estados        |
      | Rio de Janeiro |

  @validarBuscaDeMedicos
  Scenario Outline: Validar buscar de medicos somente na Região "<estados>"
    Given Clicar em Guia Médico
    When Digitar a sua busca "<estados>"
    And Clicar no botão pesquisar
    Then Validar estado que não contem a cidade "<cidadeNao>"


    Examples:
      | estados        | cidadeNao |
      | Rio de Janeiro | São Paulo |