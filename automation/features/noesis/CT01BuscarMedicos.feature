@buscarMedicos
Feature: Buscar Medicos

  Background:
    Given Acessar "urlUnimed"

  @buscar
  Scenario Outline: Buscar medicos no Rio de Janeiro
    And Clicar em Guia Médico
    And Digitar a sua busca "<estados>"
    And Clicar no botão pesquisar
    And Validar a especiolidade e estado




    Examples:
      | estados        |
      | Rio de Janeiro |