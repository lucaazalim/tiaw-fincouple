# Informações do Projeto
`TÍTULO DO PROJETO`  

FinCouple

`CURSO` 

Engenharia de Software

## Participantes

* João Victor Salim Ribeiro Guimarães
* Luca Ferrari Azalim
* Pedro Lucas Sousa e Silva
* Sidney Soares Santos Barbosa

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

**FinCouple** é um projeto da disciplina “Trabalho Interdisciplinar: Aplicações Web“ do 1º período de Engenharia de Software da PUC Minas. O objetivo é desenvolver uma solução de gestão financeira facilitada, em formato de aplicação web front-end, para casais (ou duplas de amigos e familiares) que dividem a mesma moradia.

## Problema

Casais que residem juntos enfrentam uma dificuldade latente de gerir as finanças da casa e os gastos realizados de forma conjunta. A solução mais óbvia, que é a abertura de uma conta conjunta em um banco tradicional, é burocrática e pouco informatizada. Além disso, os bancos digitais em operação no país não oferecem a possibilidade de abertura de conta conjunta, o que impede uma gestão compartilhada das finanças do casal e obriga os indivíduos a gerirem os gastos compartilhados de maneira informal.

## Objetivos

Desenvolver uma aplicação que permita aos casais gerir as finanças da casa de forma compartilhada, intuitiva e facilitada. É importante encorajar os indivíduos do casal e conversarem sobre finanças de maneira aberta e descomplicada, transformando este assunto em apenas mais um que se conversa no dia a dia e não um que se quer evitar.

## Justificativa

Casais que residem juntos não podem continuar gerindo suas finanças de maneira artesanal e sem ajuda de uma ferramenta robusta, confiável, transparente e prática. Em muitos casos, a desorganização financeira acaba gerando brigas e discussões entre os indivíduos que residem juntos, o que afeta diretamente a qualidade do relacionamento. No mercado, há uma lacuna para uma solução que permita a gerir gastos de forma compartilhada.

## Público-Alvo

O público-alvo da solução a ser desenvolvida são casais, duplas de amigos ou duplas de familiares que residem juntos e dividem a administração das finanças da casa. Como foco, mas não como limitação, a  FinCouple tem a intenção de atingir pessoas jovens e com pouca experiência na gestão de finanças pessoais.
 
# Especificações do Projeto

O projeto será uma aplicação web front-end, desenvolvida utilizando as linguagens HTML, CSS e JavaScript. Como folha de estilo, será usado o framework Bootstrap 5.

## Personas

![image](/docs/concepcao/imagens/personas.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> * [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> * [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

1. **Landing Page:** Criação de uma página estática contendo uma breve apresentação da solução e botões de Login e Cadastro.

2. **Cadastro e Login:** O cadastro do casal na aplicação será realizado em um mesmo fluxo, em que são solicitadas tanto informações compartilhadas como informações individuais. Contudo, cada indivíduo do casal terá suas próprias informações de login e senha.

3. **Página inicial logada:** Após o login, o usuário verá a tela inicial da aplicação, que exibirá informações de cada indivíduo do casal, botões para acionamento das funcionalidades e extrato compartilhado de gastos.

4. **Minha Conta:** Criação de uma página para que o usuário possa gerir informações individuais de sua conta, realizar alteração de senha e apagar o cadastro.

5. **Categorização:** Ao registrar um gasto do casal na aplicação, o usuário deverá definir uma categoria para aquele gasto. A aplicação terá categorias pré-definidas, mas também a possibilidade de criar categorias personalizadas.

6. **Gráficos:** Criação de página estilo “summary” com as seguintes possibilidades de gráficos:
* Gasto total mensal;
* Gasto total por categoria;
* Gasto total por indivíduo do casal.

7. **Calendário:** Criação da funcionalidade Calendário, que permitirá o cadastro de gastos recorrentes e exibirá um calendário e notificações com lembretes de pagamento.

8. Lorem ipsum

### Requisitos não Funcionais

1. O layout da aplicação deverá ser responsivo e adaptado a qualquer tamanho de dispositivo;

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> * [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> * [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> * [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> * [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> * [Figma](https://www.figma.com/)
> * [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> * [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> * [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> * [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> * [Gerência de projetos * Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> * [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> * [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> * [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO * SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> * Editor de código.
> * Ferramentas de comunicação
> * Ferramentas de diagramação
> * Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis * Hospedagem**:
> * [Getting Started with Heroku](https://devcenter.heroku.com/start)
> * [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> * [GoDady](https://br.godaddy.com/how-to)
> * [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> * `master`: versão estável já testada do software
> * `unstable`: versão já testada do software, porém instável
> * `testing`: versão em testes do software
> * `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> * `bugfix`: uma funcionalidade encontra-se com problemas
> * `enhancement`: uma funcionalidade precisa ser melhorada
> * `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> * [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> * [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> * [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo * GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> * [IBM * Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> * [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> *  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> * [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> * [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> * [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> * [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)