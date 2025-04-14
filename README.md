# Jogo da Velha - Versão Atividade (React + TypeScript)

**Equipe:** projeto X

**Data:** 14 de abril de 2025 

## Visão Geral

Este projeto é uma **versão modificada** do Jogo da Velha (Tic-Tac-Toe), desenvolvida para atender aos requisitos específicos de uma atividade proposta (conforme imagem `01.png`). Ele utiliza React e TypeScript.

A principal diferença desta versão é que o tabuleiro inicia exibindo os números de 0 a 8, e **apenas o jogador 'X' pode jogar**, substituindo o número clicado pela marca 'X'. O objetivo principal é demonstrar a manipulação de estado e eventos no React para essa funcionalidade específica.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construir interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática opcional.
* **Vite:** Ferramenta de build e servidor de desenvolvimento rápido.
* **CSS:** Para estilização básica.
* **Node.js / npm:** Ambiente de execução e gerenciador de pacotes.

## Funcionalidades (Versão da Atividade)

* Tabuleiro 3x3 que exibe os números de 0 a 8 nas casas vazias inicialmente.
* **Permite jogadas apenas com 'X'**: Ao clicar em um número, ele é substituído pela marca 'X'.
* **Não há alternância para o jogador 'O'** nesta versão.
* Detecção de vencedor e empate (baseada na lógica padrão do Jogo da Velha, embora apenas 'X' possa vencer).
* Exibição do status atual ("Próximo Jogador: X", "Vencedor: X" ou "Empate!").
* Botão "Reiniciar Jogo" que restaura o tabuleiro para o estado inicial (com números).

## Como Começar

### Pré-requisitos

* Node.js (versão 16 ou superior recomendada)
* npm (ou yarn)

### Instalação

1.  **Clone o repositório (se aplicável):**
    ```bash
    git clone  https://github.com/Icaro-Costa/Jogo-da-velha
    cd nome-da-pasta-do-projeto
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
