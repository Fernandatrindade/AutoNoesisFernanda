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
  "error_message": "exceptions.ElementException: Ocorreu um erro ao executar uma acao no elemento: xpath //*[@id\u003d\u0027react-tabs-1\u0027]//button[text() \u003d \u0027Pesquisar\u0027]\nelement click intercepted: Element \u003cbutton class\u003d\"Button Button--block Button--featured Button--secondary\" type\u003d\"submit\"\u003e...\u003c/button\u003e is not clickable at point (631, 562). Other element would receive the click: \u003cdiv class\u003d\"AutoSuggest__group-heading css-1bv77oq-group\" id\u003d\"react-select-2-group-3-heading\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-4NTM1BC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\sankhya\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55564}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f238e95c302354a6208b73b5dc2c75c5\r\n\tat core.Element.click(Element.java:87)\r\n\tat pages.BasePage.clicar(BasePage.java:30)\r\n\tat pages.GuiaMedicoPage.btnPesquisar(GuiaMedicoPage.java:38)\r\n\tat ✽.Clicar no botão pesquisar(features/noesis/CT01BuscarMedicos.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});