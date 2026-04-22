# Marques App - Guia de Implantação na Vercel

Este projeto está pronto para ser implantado na Vercel. Siga os passos abaixo para colocar o site no ar:

## 1. Preparação
Certifique-se de ter uma conta na [Vercel](https://vercel.com) e o código enviado para um repositório no GitHub.

## 2. Configuração na Vercel
Ao importar o projeto na Vercel:
- **Framework Preset:** Selecione `Vite`.
- **Build Command:** `npm run build`.
- **Output Directory:** `dist`.
- **Root Directory:** `./`.

## 3. Variáveis de Ambiente
Você **precisa** configurar as seguintes variáveis no painel da Vercel (aba "Environment Variables"):

### Firebase
- `VITE_FIREBASE_API_KEY`: Sua chave do Firebase.
- `VITE_FIREBASE_AUTH_DOMAIN`: Domínio de autenticação.
- `VITE_FIREBASE_PROJECT_ID`: ID do projeto.
- `VITE_FIREBASE_STORAGE_BUCKET`: Bucket de storage.
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: ID do remetente.
- `VITE_FIREBASE_APP_ID`: ID do App.
- `VITE_FIREBASE_DATABASE_ID`: (Opcional se usar o padrão).

### Stripe
- `STRIPE_SECRET_KEY`: Sua chave secreta (começa com `sk_`). **MUITO IMPORTANTE: Nunca coloque esta chave no código.**
- `VITE_STRIPE_PUBLISHABLE_KEY`: Sua chave pública (começa com `pk_`).

### Pix
- `VITE_PIX_KEY`: Sua chave PIX.
- `VITE_PIX_NAME`: Nome do favorecido.
- `VITE_PIX_CITY`: Cidade do favorecido.

## 4. Notas Técnicas
- O projeto usa **Hash Routing** (`/#/checkout`), o que evita erros de 404 em servidores estáticos.
- A API está em `api/index.ts` e será executada como uma **Vercel Serverless Function**.
- O arquivo `vercel.json` já configura os redirecionamentos necessários para que a API e o SPA funcionem em harmonia.

---
Desenvolvido por Marques Manutenção & Engenharia.
