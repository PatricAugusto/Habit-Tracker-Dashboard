# Painel de Hábitos e Metas Cyberpunk 🚀

Este é um painel **interativo** e **visualmente atraente** para rastrear seus hábitos diários e metas de longo prazo, com uma estética inspirada no universo cyberpunk. Ele te ajuda a construir consistência e a alcançar seus objetivos, tudo em uma interface com tema de ficção científica.

---

## Recursos Principais ✨

* **Registro de Hábitos:** Cadastre hábitos diários como "Beber água" ou "Ler 30 min".
* **Rastreamento de Hábitos:** Marque os dias em que você cumpre um hábito.
* **Contador de Sequência (Streak):** Acompanhe sua sequência de dias consecutivos para cada hábito.
* **Calendário de Hábitos:** Visualize o histórico detalhado de dias cumpridos para cada hábito em uma grade de calendário.
* **Análise de Frequência:** Gráficos de barras simples que mostram a frequência com que você tem cumprido seus hábitos.
* **Definição e Acompanhamento de Metas:** Crie metas com valores alvo (ex: "Economizar R$1000", "Correr 5km").
* **Barra de Progresso:** Visualize o progresso de suas metas com barras indicadoras.
* **Persistência de Dados:** Todos os seus hábitos e metas são salvos automaticamente no navegador (usando **Local Storage**), então seus dados permanecem mesmo se você fechar a aba.
* **Design Cyberpunk:** Uma interface escura com toques de **neon** (ciano, verde, magenta) e um background **3D futurista** para uma experiência imersiva.

---

## Tecnologias Utilizadas 🛠️

Este projeto foi construído utilizando as seguintes tecnologias modernas:

* **React:** Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.
* **Vite:** Ferramenta de build frontend extremamente rápida, usada para configurar o ambiente de desenvolvimento e otimizar a build para produção.
* **Styled Components:** Biblioteca para estilização de componentes React utilizando CSS-in-JS, permitindo a escrita de CSS real dentro do JavaScript.
* **Chart.js / React Chart.js 2:** Para a criação de gráficos interativos e visualmente atraentes que exibem a frequência dos hábitos.
* **JavaScript (ES6+):** A linguagem de programação principal do projeto.
* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Para estilização, incluindo os efeitos de tema cyberpunk e responsividade.
* **Local Storage:** Para persistir os dados dos hábitos e metas diretamente no navegador do usuário.

---

## Como Rodar o Projeto (Passo a Passo) ▶️

Siga estas instruções para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

### Instalação

1.  **Clone o repositório:**
    Se este projeto estiver em um repositório Git, clone-o para sua máquina local usando o comando:

    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [nome-da-pasta-do-projeto]
    ```

    (Se você tem apenas os arquivos, navegue até a pasta raiz do projeto no seu terminal.)

2.  **Instale as dependências:**
    No terminal, dentro da pasta raiz do projeto, execute:

    ```bash
    npm install
    ```

    Este comando instalará todas as bibliotecas e dependências necessárias listadas no `package.json`.

### Executando o Servidor de Desenvolvimento

Após a instalação, você pode iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Este comando iniciará o servidor de desenvolvimento do Vite. Você geralmente verá uma mensagem no terminal indicando em qual endereço a aplicação está rodando (normalmente http://localhost:5173/).

Abrir no Navegador

Abra seu navegador web e navegue até o endereço fornecido (ex: http://localhost:5173/). O painel de hábitos e metas será carregado e pronto para uso!

---

### Pontos de Valor e Diferenciais ✨

* **Experiência do Usuário Imersiva:** O design cyberpunk não é apenas estético, mas também funcional, criando um ambiente único e motivador para o usuário interagir com seus objetivos.

* **Foco na Consistência:** A combinação do contador de streak e a visualização em calendário por hábito incentiva diretamente a consistência diária, um pilar fundamental para a formação de hábitos.

* **Visualização Clara de Progresso:** As barras de progresso para as metas e os gráficos de frequência de hábitos oferecem feedback visual imediato, o que é crucial para manter a motivação.

* **Persistência Simples e Eficaz:** A utilização do Local Storage permite que os usuários salvem seus dados sem a necessidade de um backend complexo ou contas de usuário, tornando o aplicativo leve e fácil de usar.

* **Código Limpo e Modular:** A arquitetura baseada em componentes React e o uso de Styled Components promovem um código organizado, reutilizável e fácil de manter e escalar.
