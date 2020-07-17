# Bem-vindo ao Boardfy!

Seguem, aqui, alguns padrões adotados para este projeto.<br>
Novos padrões podem ser adicionados, caso haja necessidade.


## Desenvolvimento

### Pastas:
<ul>
  <li>letras minúsculas;</li>
  <li>se mais de uma palavra, separa por '-'.</li>
</ul>


### Objetos e variáveis:
<ul>
  <li>
    nomes em camelCase.

```
const primeiroExemplo = {};
```
  </li>
</ul>


### Funções:
<ul>
  <li>nomes em PascalCase.</li>

```
function SegundoExemplo() {
  console.log('oi');
};
```
</ul>


### Componentes:
<ul>
  <li>nomes em PascalCase;</li>
  <li>uma pasta para cada componente (componente, style, etc).</li>
</ul>


### Strings:
<ul>
  <li>aspas simples.</li>
</ul>


### Imports:
<ul>
  <li>primeiro os externos (ex: materialUI);</li>
  <li>segundo os internos (componentes);</li>
  <li>por último o arquivo style;</li>
</ul>



## Contribuição e Compartilhamento

Quer ajudar? vamos ver o que fazer:
<ol>
  <li>rode o comando <code>git clone</code> + o link deste projeto (botão verde no topo da página);</li>
  <li>crie uma nova branch <code>git checkout -b BOARD-(nº da issue) nome da issue</code>;</li>
  <ul><li>Exemplo: "BOARD-1 create react app"</li></ul>
</ol>

Mas é super importante que você registre suas atividades, então vamos ver como:
<ol>
  <li>vá ao board do time, no Azure e marque sua issue como "Doing";</li>
  <li>faça suas contribuições, seguindo os padrões acima;</li>
  <li>crie commits para suas alterações:
    <ul>
        <li><code>git add .</code></li>
        <li><code>git commit -m “BOARD-(nº da issue) + ação + descrição”</code></li>
        <li>Exemplo: "BOARD-1 create react app"</li>
    </ul>
  </li>
</ol>

Algumas ações são mais comuns e definem boa parte das ações executadas no projeto. São elas:

<ul>
  <li>create - adicionar novas funcionalidades ao projeto; </li>
  <li>delete - remover trechos de código ou funcionalidades; </li>
  <li>fix - consertar bugs ou fazer alterações de estilo; </li>
  <li>merge - unir branchs; </li>
  <li>edit - alterações simples durante o desenvolvimento. </li>
</ul>

Tem outro ponto a ser observado... sabia que imprevistos acontecem? <br>
Que tal mandar seu código para o repositorio online e garantir que ele esteja a salvo? Vamos lá!
Depois de fazer seus commits, execute esse passo:

<code>git push origin BOARD-(nº da issue) nome da issue</code>

Se você finalizou sua tarefa, parabéns!
Vamos mandá-la para code review.

<ol>
  <li><code>git push origin homolog</code> (aqui alguem vai corrigir seu codigo)</li>
  <li>vá ao GitHub e faça uma solicitação de Merge Request; </li>
  <li>avise o time que você fez a solicitação;</li>
  <li>veja se há outra tarefa disponível no Azure e comece tudo de novo =)</li>
</ol>

### Obrigada!