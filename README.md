# 🗺️ Gerador de Roteiros Personalizados com Google Cloud Gemini

Este é um projeto de **API REST** desenvolvido em **Node.js** com **Express** que utiliza a API do **Google Cloud Gemini** para gerar roteiros personalizados de viagem com base nas preferências do usuário.

## 🚀 Funcionalidades

- ✈️ **Geração de roteiros de viagem** personalizados.
- 🎯 **Entrada personalizada** com destino, atividades e preferências.
- 📝 **Download do roteiro** em formato Markdown (`.md`).
- 🌐 **Suporte a CORS** para integração com front-end.
- 🏗️ **Uso de body-parser** para receber requisições JSON.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Google Generative AI](https://ai.google.dev/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [CORS](https://www.npmjs.com/package/cors)

## 📦 Instalação

1. **Clone este repositório**  
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**  
   ```sh
   npm install
   ```

3. **Configure a chave da API do Google Cloud Gemini**  
   No arquivo `index.js`, substitua `"SUA_CHAVE_API_AQUI"` pela sua chave de API do Google Cloud.

4. **Inicie o servidor**  
   ```sh
   node index.js
   ```
   O servidor será executado em `http://localhost:3000`.

## 🔥 Como Usar

### **1️⃣ Endpoint: Criar Roteiro de Viagem**
**Rota:** `POST /generate-itinerary`  
**Descrição:** Gera um roteiro de viagem com base nos dados fornecidos.  
**Entrada JSON (Exemplo):**
```json
{
  "destination": "Nova York",
  "activities": ["Natureza", "Museus", "Compras"],
  "preferences": "Viagem relaxante"
}
```
**Resposta:** Download do arquivo `roteiro_viagem.md`.

## 📜 Estrutura do Arquivo Gerado (`.md`)
O roteiro gerado será salvo no formato Markdown (`.md`) e incluirá:

```markdown
# Roteiro de Viagem para Nova York

## 📍 Destino
Nova York

## 🎯 Atividades
Natureza, Museus, Compras

## 🏖️ Preferências do Viajante
Viagem relaxante

---

[Conteúdo gerado pela IA com horários, transporte, locais e pontos turísticos.]
```

## ⚠️ Observações
- **Limite de Tokens:** O uso da API do Google Cloud pode consumir **tokens pagos**, então monitore seu uso no Google Cloud Console.
- **Período Gratuito:** O Google Cloud oferece um crédito inicial de **US$300**, mas não ultrapasse seu orçamento.

## 📝 Contribuição
Este é um projeto privado. O código não está disponível para contribuições externas.

## 🧑‍💻 Autores

- **Hemanoel Carvalho** - [GitHub](https://github.com/emanoelCarvalho)
- **Cleiton Lucas** - [GitHub](https://github.com/CleitonLucas)

## 🔒 Licença Privada
Este software é de propriedade exclusiva dos autores e **não pode ser copiado, distribuído ou utilizado sem permissão explícita**. Qualquer uso indevido será passível de medidas legais.

---
✨ Desenvolvido por **Hemanoel Carvalho** e **Cleiton Lucas** 🚀
```