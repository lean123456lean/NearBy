# Documentação do Aplicativo Nearby

## Visão Geral
O **Nearby** é um aplicativo desenvolvido utilizando a plataforma **Expo** e focado na utilização de recursos de localização e navegação. Este aplicativo combina diferentes bibliotecas e ferramentas para oferecer uma experiência fluida e responsiva aos usuários.

## Estrutura do Projeto
### Nome do Aplicativo
`name`: **nearby**

### Ponto de Entrada Principal
`main`: **expo-router/entry**

### Versão
`version`: **1.0.0**

## Scripts Disponíveis
Os seguintes comandos podem ser usados para iniciar e testar o aplicativo:

- **`start`**: Inicia o servidor de desenvolvimento do Expo.
  ```bash
  expo start
  ```
- **`android`**: Inicia o aplicativo no emulador ou dispositivo Android.
  ```bash
  expo start --android
  ```
- **`ios`**: Inicia o aplicativo no emulador ou dispositivo iOS.
  ```bash
  expo start --ios
  ```
- **`web`**: Inicia o aplicativo no navegador.
  ```bash
  expo start --web
  ```
- **`test`**: Executa os testes com o Jest.
  ```bash
  jest --watchAll
  ```

## Dependências
### Dependências Principais
As bibliotecas principais utilizadas no projeto incluem:

- **@expo-google-fonts/rubik**: Fontes do Google para uso no app.
- **@expo/vector-icons**: Ícones vetoriais para React Native.
- **@gorhom/bottom-sheet**: Componente para exibição de "bottom sheets".
- **@react-navigation/native**: Navegação no app.
- **@tabler/icons-react-native**: Ícones adicionais para React Native.
- **axios**: Para requisições HTTP.
- **expo**: Framework base do projeto.
- **expo-location**: Biblioteca para acesso à localização do usuário.
- **expo-camera**: Biblioteca para uso da câmera.
- **react-native-maps**: Exibição de mapas interativos.

### Dependências de Desenvolvimento
As ferramentas utilizadas para desenvolvimento incluem:

- **@babel/core**: Transformação de código para compatibilidade.
- **jest**: Biblioteca para testes automatizados.
- **jest-expo**: Preset do Jest para apps Expo.
- **typescript**: Superset do JavaScript para tipagem.

## Configuração de Testes
A configuração de testes utiliza o Jest com o preset **jest-expo** para facilitar a execução de testes específicos para o ambiente Expo.

Exemplo de configuração no `package.json`:
```json
"jest": {
  "preset": "jest-expo"
}
```

## Como Iniciar o Projeto
1. Certifique-se de que o Node.js e o Expo CLI estejam instalados em sua máquina.
2. Clone o repositório do projeto.
3. Instale as dependências com o comando:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Utilize os comandos `npm run android`, `npm run ios` ou `npm run web` para abrir o aplicativo na plataforma desejada.

## Funcionalidades Principais
- **Localização**: Utiliza o `expo-location` para acessar a localização do usuário em tempo real.
- **Mapas**: Integração com `react-native-maps` para exibir mapas interativos.
- **Interface Moderna**: Fontes do Google, ícones personalizados e "bottom sheets" fornecem uma experiência moderna.
- **Acesso à Câmera**: Utilização da câmera com `expo-camera`.

## Estrutura de Navegação
A navegação do aplicativo é gerenciada pelo **React Navigation**, utilizando o roteador do **Expo Router** para organizar as telas e rotas.

## Conclusão
O **Nearby** é um aplicativo bem estruturado, combinando recursos modernos para atender às necessidades dos usuários de forma eficiente. Utilize esta documentação como guia para configuração, desenvolvimento e manutenção do projeto.

