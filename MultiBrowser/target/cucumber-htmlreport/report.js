$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "Busca",
  "description": "",
  "id": "busca",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Racesso o site do Google no \u003cbrowser\u003e e digito \u003ctermo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "RPressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "RExibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "busca;busca-positiva;",
  "rows": [
    {
      "cells": [
        "browser",
        "termo"
      ],
      "line": 7,
      "id": "busca;busca-positiva;;1"
    },
    {
      "cells": [
        "\"ie\"",
        "\"dia da toalha\""
      ],
      "line": 8,
      "id": "busca;busca-positiva;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 9,
      "id": "busca;busca-positiva;;3"
    },
    {
      "cells": [
        "\"firefox\"",
        "\"dia da toalha\""
      ],
      "line": 10,
      "id": "busca;busca-positiva;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Racesso o site do Google no \"ie\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "RPressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "RExibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 29
    },
    {
      "val": "dia da toalha",
      "offset": 43
    }
  ],
  "location": "BuscaGoogle.racesso_o_site_do_Googleno_e_digito(String,String)"
});
formatter.result({
  "duration": 4729638700,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 3525577400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 30
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 548192600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Racesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "RPressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "RExibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 29
    },
    {
      "val": "dia da toalha",
      "offset": 47
    }
  ],
  "location": "BuscaGoogle.racesso_o_site_do_Googleno_e_digito(String,String)"
});
formatter.result({
  "duration": 6374788600,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4121751600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 30
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 747801600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Busca positiva",
  "description": "",
  "id": "busca;busca-positiva;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Racesso o site do Google no \"firefox\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "RPressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "RExibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 29
    },
    {
      "val": "dia da toalha",
      "offset": 48
    }
  ],
  "location": "BuscaGoogle.racesso_o_site_do_Googleno_e_digito(String,String)"
});
formatter.result({
  "duration": 9370171800,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 3040467900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 30
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 3349687000,
  "status": "passed"
});
});