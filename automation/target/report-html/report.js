$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/noesis/CT01BuscarMedicos.feature");
formatter.feature({
  "name": "Buscar Medicos",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@buscarMedicos"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Buscar medicos no Rio de Janeiro",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@buscar"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "And "
});
formatter.step({
  "name": "Digitar a sua busca \"\u003cestados\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicar no botão pesquisar",
  "keyword": "And "
});
formatter.step({
  "name": "Validar a especialidade",
  "keyword": "And "
});
formatter.step({
  "name": "Validar estados \"\u003cestados\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "estados"
      ]
    },
    {
      "cells": [
        "Rio de Janeiro"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Acessar \"urlUnimed\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.acessarUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar medicos no Rio de Janeiro",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@buscarMedicos"
    },
    {
      "name": "@buscar"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clicarEmGuiaMedico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Digitar a sua busca \"Rio de Janeiro\"",
  "keyword": "And "
});
formatter.match({
  "location": "GuiaMedicoPage.procurarEstados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicar no botão pesquisar",
  "keyword": "And "
});
formatter.match({
  "location": "GuiaMedicoPage.btnPesquisar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validar a especialidade",
  "keyword": "And "
});
formatter.match({
  "location": "GuiaMedicoPage.txtValidarEspecialidade()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validar estados \"Rio de Janeiro\"",
  "keyword": "And "
});
formatter.match({
  "location": "GuiaMedicoPage.txtValidar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});