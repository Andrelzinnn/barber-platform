# Barber Platform

Uma plataforma para agendamento de serviços em barbearias, construída com tecnologias web modernas.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de CSS utility-first para estilização.
- **React Router**: Para gerenciamento de rotas na aplicação.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **Zod & React Hook Form**: Para validação de formulários.
- **Bun**: Toolkit JavaScript, usado aqui como gerenciador de pacotes.

## 🏁 Como Começar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- É necessário ter o [Bun](https://bun.sh/) instalado em sua máquina.

### Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd barber-platform
   ```
3. Instale as dependências:
   ```sh
   bun install
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o comando:

```sh
bun run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada pelo Vite).

## 📜 Scripts Disponíveis

No `package.json`, você encontrará os seguintes scripts:

- `bun run dev`: Inicia a aplicação em modo de desenvolvimento.
- `bun run build`: Compila e otimiza a aplicação para produção.
- `bun run lint`: Executa o linter para análise de código.
- `bun run preview`: Inicia um servidor local para visualizar a build de produção.