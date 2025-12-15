# 📋 Guia de Deploy no GitHub Pages

## Passo 1: Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New"** para criar um novo repositório
3. Nomeie como **`proposta-tonon`** (ou o nome que preferir)
4. Deixe como **Public** (necessário para GitHub Pages)
5. Clique em **"Create repository"**

## Passo 2: Preparar o Projeto Localmente

### 2.1 Inicializar Git no seu computador

```bash
cd proposta-tonon
git init
git add .
git commit -m "Initial commit: Proposta de Análise Digital - Serralheria Tonon"
```

### 2.2 Adicionar o repositório remoto

```bash
git remote add origin https://github.com/seu-usuario/proposta-tonon.git
git branch -M main
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

1. Vá para **Settings** do seu repositório no GitHub
2. Clique em **"Pages"** (no menu esquerdo)
3. Em **"Build and deployment"**, selecione:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
4. Clique em **"Save"**

## Passo 4: Compilar e Fazer Deploy

### 4.1 Compilar o projeto

```bash
pnpm build
```

Isso vai gerar os arquivos em `dist/public/`

### 4.2 Fazer commit dos arquivos compilados

```bash
git add .
git commit -m "Build: Compilar projeto para produção"
git push
```

## Passo 5: Acessar o Site

Seu site estará disponível em:
```
https://seu-usuario.github.io/proposta-tonon/
```

**Nota:** Pode levar alguns minutos para o GitHub Pages processar e publicar o site.

---

## ⚙️ Estrutura de Arquivos

```
proposta-tonon/
├── client/                 # Código-fonte React
│   ├── src/               # Componentes e páginas
│   ├── public/            # Imagens e assets estáticos
│   └── index.html         # HTML principal
├── dist/                  # Arquivos compilados (gerado pelo build)
│   ├── public/
│   │   ├── index.html     # HTML compilado
│   │   ├── assets/        # CSS e JS minificados
│   │   └── images/        # Imagens
│   └── index.js           # Server (não usado no GitHub Pages)
├── package.json           # Dependências do projeto
└── vite.config.ts         # Configuração do build
```

---

## 📝 Explicação dos Arquivos

### HTML (`dist/public/index.html`)
- Arquivo HTML principal compilado
- Contém referências aos arquivos CSS e JS
- Estrutura básica da página

### CSS (`dist/public/assets/index-*.css`)
- Estilos compilados e minificados
- Inclui Tailwind CSS e estilos customizados
- Nome com hash para cache busting

### JavaScript (`dist/public/assets/index-*.js`)
- Código React compilado e minificado
- Contém toda a lógica da aplicação
- Nome com hash para cache busting

### Imagens (`dist/public/images/`)
- Imagens otimizadas do projeto
- Logo, backgrounds, etc.

---

## 🔄 Atualizar o Site

Sempre que fizer mudanças:

```bash
# 1. Compilar
pnpm build

# 2. Fazer commit
git add .
git commit -m "Update: Descrição das mudanças"

# 3. Enviar para GitHub
git push
```

O GitHub Pages vai atualizar automaticamente em alguns minutos.

---

## ❓ Dúvidas Comuns

**P: O site não aparece após o push?**
R: Pode levar 5-10 minutos. Verifique em Settings > Pages se o deploy foi bem-sucedido.

**P: Como mudo o domínio?**
R: Em Settings > Pages, você pode adicionar um domínio customizado (requer configuração de DNS).

**P: Posso usar um domínio próprio?**
R: Sim! Em Settings > Pages, adicione seu domínio customizado e configure os registros DNS.

**P: Como faço para que o site seja privado?**
R: GitHub Pages só funciona com repositórios públicos (plano gratuito).

---

## 📞 Suporte

Se tiver dúvidas sobre GitHub Pages, consulte a [documentação oficial](https://docs.github.com/en/pages).
