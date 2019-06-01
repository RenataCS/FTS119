Feature: Busca 
  Scenario Outline: Busca positiva
    Given Racesso o site do Google no <browser> e digito <termo>
    And RPressiona Enter
    Then RExibe a pagina com o titulo "dia da toalha - Pesquisa Google"
  Examples:
  |browser|termo|
  |"ie"|"dia da toalha"|
  |"chrome"|"dia da toalha"|
  |"firefox"|"dia da toalha"|
  