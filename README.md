# Jogo da Velha com React e TypeScript

**Equipe:** projeto X
**Data:** 14 de abril de 2025

## Visão Geral

Este projeto é uma implementação clássica do Jogo da Velha utilizando tecnologias web modernas: React para a interface de usuário componentizada e TypeScript para adicionar segurança de tipos ao JavaScript. O projeto foi desenvolvido como um exercício prático para demonstrar o uso de componentes funcionais, Hooks do React (especificamente `useState`), manipulação de eventos, lógica de jogo e estilização básica com CSS.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construir interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática opcional.
* **Vite:** Ferramenta de build e servidor de desenvolvimento rápido para projetos web modernos.
* **CSS:** Para estilização básica dos componentes.
* **Node.js / npm:** Ambiente de execução e gerenciador de pacotes.

## Funcionalidades

* Tabuleiro 3x3 clássico do Jogo da Velha.
* Jogabilidade para dois jogadores ('X' e 'O') com turnos alternados.
* Detecção automática de vencedor (linhas, colunas e diagonais).
* Detecção de empate quando o tabuleiro está cheio sem vencedor.
* Exibição do status atual do jogo (próximo jogador, vencedor ou empate).
* Botão para reiniciar o jogo a qualquer momento.

## Como Começar

Siga estas instruções para configurar e rodar o projeto localmente.

### Pré-requisitos

* Node.js (versão 16 ou superior recomendada)
* npm (geralmente vem com o Node.js) ou yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Icaro-Costa/Jogo-da-velha
    cd jogo-da-velha-react-ts
    ```
    *(Se você não estiver usando Git, apenas certifique-se de estar na pasta raiz do projeto)*

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(ou `yarn install` se preferir o Yarn)*

## Rodando o Projeto

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
