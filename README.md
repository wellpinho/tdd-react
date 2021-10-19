# TDD com React
Testes automatizados com Jest e React

## Iniciando o projeto
 1. npm init -y
 2. npm i jest -D
 3. npx jest --init
    1. yes
    2. no
    3. node
    4. no
    5. v8
    6. no
 4. Editar o jest.config.js
    1. coveragePathIgnorePatterns: [
        "/node_modules/"
      ],
    2.  testMatch: [
          "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
      ],

  5. npm i -D babel-jest babel-core regenerator-runtme @babel/preset-env
  6. crair arquivo de configuração do babel .babelrc
     1. {
          "presets": [
            "@babel/preset-env"
          ]
        }
