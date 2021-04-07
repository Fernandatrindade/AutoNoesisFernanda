$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/noesis/CT01BuscarMedicos.feature");
formatter.feature({
  "name": "Validar busca de medicos com as suas  especialidades da uma região desejada",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@buscarMedicos"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Buscar medicos na região",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@buscarMedicosNaRegiao"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "Given "
});
formatter.step({
  "name": "Digitar a sua busca \"\u003cestados\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicar no botão pesquisar",
  "keyword": "And "
});
formatter.step({
  "name": "Validar a apresentação dos resultados com a Especialidade e Cidade no Estado  \"\u003cestados\u003e\"",
  "keyword": "Then "
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
  "name": "Buscar medicos na região",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@buscarMedicos"
    },
    {
      "name": "@buscarMedicosNaRegiao"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.clicarEmGuiaMedico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Digitar a sua busca \"Rio de Janeiro\"",
  "keyword": "When "
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
  "name": "Validar a apresentação dos resultados com a Especialidade e Cidade no Estado  \"Rio de Janeiro\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GuiaMedicoPage.txtValidarEstadoEspecialidade(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar buscar de medicos somente na Região",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validarBuscaDeMedicos"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "Given "
});
formatter.step({
  "name": "Digitar a sua busca \"\u003cestados\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicar no botão pesquisar",
  "keyword": "And "
});
formatter.step({
  "name": "Validar estado que não contem a cidade \"\u003ccidadeNao\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "estados",
        "cidadeNao"
      ]
    },
    {
      "cells": [
        "Rio de Janeiro",
        "São Paulo"
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
  "name": "Validar buscar de medicos somente na Região",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@buscarMedicos"
    },
    {
      "name": "@validarBuscaDeMedicos"
    }
  ]
});
formatter.step({
  "name": "Clicar em Guia Médico",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.clicarEmGuiaMedico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Digitar a sua busca \"Rio de Janeiro\"",
  "keyword": "When "
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
  "name": "Validar estado que não contem a cidade \"São Paulo\"",
  "keyword": "Then "
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