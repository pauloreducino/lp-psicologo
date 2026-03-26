# 📘 TUTORIAL COMPLETO — WordPress + Next.js Headless CMS

## Dr. Rafael Mendes · Psicólogo Clínico

> **100% Gratuito** · Tudo que você precisa está neste guia

---

## 🎯 O que você vai aprender

Configurar o WordPress como painel de administração (CMS) para publicar artigos,
e fazer o Next.js exibir esses artigos com o seu layout personalizado.

**Fluxo:**

```
Você escreve no WordPress Admin → API REST → Next.js exibe com seu layout
```

---

## 📋 Resumo das Ferramentas (todas gratuitas)

| Ferramenta            | Função                    | Link                |
| --------------------- | ------------------------- | ------------------- |
| **Local by Flywheel** | WordPress no seu PC (dev) | localwp.com         |
| **WordPress.org**     | CMS / Painel Admin        | já incluso no Local |
| **ACF**               | Campos personalizados     | plugins WP          |
| **Vercel**            | Hospedagem do Next.js     | vercel.com          |
| **InfinityFree**      | Hospedagem gratuita do WP | infinityfree.com    |

---

## ═══════════════════════════════════════

## PARTE 1 — AMBIENTE DE DESENVOLVIMENTO LOCAL

## ═══════════════════════════════════════

### PASSO 1 — Instalar o Local by Flywheel

1. Acesse: **https://localwp.com**
2. Clique em **"Free Download"**
3. Selecione seu sistema operacional (Windows/Mac/Linux)
4. Instale normalmente (next, next, finish)

---

### PASSO 2 — Criar um site WordPress local

1. Abra o **Local**
2. Clique no botão **"+"** (canto inferior esquerdo) → **"Create a new site"**
3. Preencha:
   - **Site name:** `dr-rafael-mendes`
   - Clique em **Continue**
4. Em "Choose your environment":
   - Deixe **"Preferred"** selecionado
   - Clique em **Continue**
5. Em "Setup WordPress":
   - **WordPress username:** `admin`
   - **WordPress password:** `admin123` (anote bem!)
   - **WordPress email:** seu e-mail
   - Clique em **Add Site**
6. Aguarde (leva ~1-2 minutos)

✅ Seu WordPress estará em: `http://dr-rafael-mendes.local`

---

### PASSO 3 — Acessar o painel WordPress

No Local, com o site ligado (botão verde "Start site"):

1. Clique em **"WP Admin"** (botão azul)
2. Uma aba do navegador abre em: `http://dr-rafael-mendes.local/wp-admin`
3. Login: `admin` / Senha: `admin123`

Você está no painel! 🎉

---

### PASSO 4 — Verificar se a API REST está funcionando

Abra uma nova aba e acesse:

```
http://dr-rafael-mendes.local/wp-json/wp/v2/posts
```

Se retornar `[]` (array vazio) ou uma lista de posts em JSON = ✅ API funcionando!

---

## ═══════════════════════════════════════

## PARTE 2 — INSTALAR E CONFIGURAR OS PLUGINS

## ═══════════════════════════════════════

### PASSO 5 — Instalar o plugin ACF (Advanced Custom Fields)

1. No painel WordPress, vá em: **Plugins → Adicionar novo**
2. No campo de busca, digite: `Advanced Custom Fields`
3. Clique em **"Instalar agora"** no plugin de **WP Engine**
4. Após instalar, clique em **"Ativar"**

---

### PASSO 6 — Instalar o plugin "ACF to REST API"

1. **Plugins → Adicionar novo**
2. Busque: `ACF to REST API`
3. Instale e ative o plugin de **airesvsg**

> Este plugin faz os campos ACF aparecerem na API REST do WordPress
> para que o Next.js consiga lê-los.

---

### PASSO 7 — Configurar CORS (para o Next.js acessar a API)

**Opção A — Plugin (mais fácil):**

1. **Plugins → Adicionar novo**
2. Busque: `WP CORS`
3. Instale e ative

Depois vá em **Settings → WP CORS** e adicione:

```
http://localhost:3000
https://seusite.vercel.app
```

**Opção B — No functions.php (mais técnico):**

1. No painel WordPress, vá em: **Aparência → Editor de arquivo de tema**
2. Selecione o arquivo `functions.php`
3. Adicione no FINAL do arquivo:

```php
// Permite que o Next.js acesse a API REST
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        return $value;
    });
}, 15);
```

4. Clique em **"Atualizar arquivo"**

---

## ═══════════════════════════════════════

## PARTE 3 — CRIAR OS CAMPOS PERSONALIZADOS (ACF)

## ═══════════════════════════════════════

### PASSO 8 — Criar o grupo de campos ACF

1. No painel WordPress, clique em **ACF → Field Groups** (no menu lateral)
2. Clique em **"Add New"** (ou "Adicionar novo")
3. No topo, onde está escrito "Add title", escreva: `Configurações do Artigo`

---

### PASSO 9 — Adicionar os campos um por um

Clique em **"Add Field"** para cada campo abaixo:

---

**CAMPO 1: Tempo de Leitura**

```
Field Label:  Tempo de Leitura (minutos)
Field Name:   read_time
Field Type:   Number
Instructions: Ex: 7 (apenas o número, sem "min")
Required:     Não
Default Value: 5
Min: 1
Max: 60
```

Clique em **"Add Field"** novamente para o próximo.

---

**CAMPO 2: Categoria (Label)**

```
Field Label:  Categoria (nome exibido)
Field Name:   category_label
Field Type:   Text
Instructions: Ex: Ansiedade, Depressão, Relacionamentos
Required:     Sim
Default Value: (vazio)
```

---

**CAMPO 3: Categoria (Slug)**

```
Field Label:  Categoria (slug interno)
Field Name:   category_slug
Field Type:   Text
Instructions: Ex: ansiedade, depressao, relacionamentos (sem acento, minúsculo)
Required:     Sim
Default Value: (vazio)
```

> ⚠️ IMPORTANTE: O slug deve ser em minúsculo, sem acentos e sem espaços.
> Exemplos corretos: `ansiedade`, `depressao`, `relacionamentos`, `burnout`, `autoconhecimento`

---

**CAMPO 4: Resumo do Artigo**

```
Field Label:  Resumo (Excerpt)
Field Name:   excerpt
Field Type:   Textarea
Instructions: Resumo curto que aparece nos cards do blog (máx 200 caracteres)
Required:     Não
Rows:         3
```

---

**CAMPO 5: Tags**

```
Field Label:  Tags
Field Name:   tags
Field Type:   Text
Instructions: Palavras-chave separadas por vírgula. Ex: ansiedade, trabalho, mindfulness
Required:     Não
```

---

**CAMPO 6: Artigo em Destaque (Carrossel)**

```
Field Label:  Artigo em Destaque?
Field Name:   featured
Field Type:   True / False
Instructions: Marque para exibir este artigo no carrossel de destaques do blog
Message:      Exibir no carrossel de destaques
Default Value: 0 (desmarcado)
UI:           Habilitar interface bonita (toggle)
```

---

### PASSO 10 — Configurar onde os campos aparecem

Role a página para baixo até a seção **"Location Rules"** (Regras de Localização):

- Em **"Show this field group if"**:
  - Primeiro seletor: `Post Type`
  - Segundo seletor: `is equal to`
  - Terceiro seletor: `Post`

Ficará assim: _"Show this field group if Post Type is equal to Post"_

---

### PASSO 11 — Salvar o grupo de campos

Clique em **"Publish"** (lado direito da tela) para salvar. ✅

---

## ═══════════════════════════════════════

## PARTE 4 — PUBLICAR SEU PRIMEIRO ARTIGO

## ═══════════════════════════════════════

### PASSO 12 — Criar um novo artigo

1. No painel WordPress, vá em: **Posts → Adicionar novo**
2. Você verá a tela do editor Gutenberg (editor de blocos)

---

### PASSO 13 — Preencher o artigo

**TÍTULO:**
Clique em "Adicionar título" e escreva, por exemplo:

```
5 Técnicas de Respiração para Controlar a Ansiedade no Trabalho
```

**CONTEÚDO:**
Clique abaixo do título e escreva o artigo. Use os blocos do Gutenberg:

- **Parágrafo** → para texto normal
- **Título** → para criar H2 e H3 (use H2 para seções principais)
- **Lista** → para listas com marcadores
- **Imagem** → para inserir imagens

Exemplo de estrutura:

```
## Introdução
[parágrafo de introdução]

## Por que a respiração funciona?
[texto explicativo]

## 1. Técnica 4-7-8
[descrição da técnica]
```

---

### PASSO 14 — Adicionar a Imagem Destacada

1. No painel direito, clique em **"Imagem destacada"**
2. Clique em **"Definir imagem destacada"**
3. Clique em **"Fazer upload de arquivos"**
4. Selecione uma imagem do seu computador (JPG ou PNG, min 800px de largura)
5. Preencha o campo **"Texto alternativo"** com uma descrição da imagem
6. Clique em **"Definir imagem destacada"**

---

### PASSO 15 — Preencher os campos ACF

Role a página para BAIXO, abaixo do editor de conteúdo.
Você verá a caixa **"Configurações do Artigo"** com os campos que criamos:

```
┌─────────────────────────────────────────────────────┐
│  CONFIGURAÇÕES DO ARTIGO                            │
├─────────────────────────────────────────────────────┤
│  Tempo de Leitura (minutos):  [ 7 ]                 │
│  Categoria (nome exibido):    [ Ansiedade ]          │
│  Categoria (slug interno):    [ ansiedade ]          │
│  Resumo (Excerpt):            [ Aprenda estratégias  │
│                                 simples para... ]    │
│  Tags:                        [ ansiedade, trabalho, │
│                                 respiração ]         │
│  Artigo em Destaque?:         [✓] (toggle ativado)  │
└─────────────────────────────────────────────────────┘
```

**Preenchimento de exemplo:**

- Tempo de leitura: `7`
- Categoria (nome): `Ansiedade`
- Categoria (slug): `ansiedade`
- Resumo: `Aprenda estratégias simples e eficazes para controlar a ansiedade no ambiente de trabalho.`
- Tags: `ansiedade, trabalho, respiração, mindfulness`
- Destaque: ativado ✓ (para aparecer no carrossel)

---

### PASSO 16 — Publicar o artigo

1. No topo direito, clique em **"Publicar"**
2. Confirme clicando em **"Publicar"** novamente
3. Aguarde a mensagem de confirmação ✅

---

### PASSO 17 — Verificar na API

Acesse no navegador:

```
http://dr-rafael-mendes.local/wp-json/wp/v2/posts?_embed
```

Você verá seu artigo em formato JSON, incluindo o campo `acf` com seus dados. ✅

---

## ═══════════════════════════════════════

## PARTE 5 — CONFIGURAR O NEXT.JS

## ═══════════════════════════════════════

### PASSO 18 — Criar o arquivo .env.local

Na pasta raiz do projeto Next.js (`dr-rafael-mendes/`), crie um arquivo chamado `.env.local`:

**Windows (no terminal):**

```bash
copy .env.local.example .env.local
```

**Mac/Linux:**

```bash
cp .env.local.example .env.local
```

Abra o arquivo `.env.local` em qualquer editor de texto e configure:

```env
# URL da API do WordPress (desenvolvimento local)
WORDPRESS_API_URL=http://dr-rafael-mendes.local/wp-json/wp/v2

# Chave secreta para revalidação (pode ser qualquer texto forte)
REVALIDATE_SECRET=minha_chave_secreta_super_forte_2024

# URL do seu site Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> ⚠️ IMPORTANTE: O arquivo `.env.local` NUNCA deve ser enviado ao GitHub.
> Ele já está no `.gitignore`.

---

### PASSO 19 — Rodar o Next.js

```bash
npm install
npm run dev
```

Acesse: **http://localhost:3000**

🎉 O blog estará exibindo os artigos do WordPress com o seu layout!

---

## ═══════════════════════════════════════

## PARTE 6 — COLOCAR EM PRODUÇÃO (GRÁTIS)

## ═══════════════════════════════════════

Para produção, você precisará de:

1. **WordPress hospedado** → InfinityFree (gratuito) ou Hostinger (~R$12/mês)
2. **Next.js hospedado** → Vercel (gratuito)

---

### PASSO 20 — Hospedar o WordPress gratuitamente no InfinityFree

1. Acesse: **https://infinityfree.com**
2. Clique em **"Register"** e crie uma conta gratuita
3. Faça login e clique em **"Create Account"** (novo site)
4. Escolha um subdomínio gratuito, ex: `drrafaelmendes.infinityfreeapp.com`
5. Clique em **"Create Account"**
6. Anote as informações de:
   - FTP Host
   - FTP Username
   - FTP Password
   - MySQL Host, Database, Username, Password

**Instalar WordPress no InfinityFree:**

1. No painel da InfinityFree, clique em **"Softaculous Apps Installer"**
2. Clique em **WordPress**
3. Clique em **"Install"**
4. Preencha:
   - Site Name: `Dr. Rafael Mendes`
   - Admin Username: `admin`
   - Admin Password: (senha forte)
   - Admin Email: seu e-mail
5. Clique em **"Install"**
6. Aguarde ~2 minutos
7. Acesse o painel: `http://seusubdominio.infinityfreeapp.com/wp-admin`

---

### PASSO 21 — Hospedar o Next.js na Vercel (100% gratuito)

**Criar conta na Vercel:**

1. Acesse: **https://vercel.com**
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (cria conta gratuita vinculada ao GitHub)

**Enviar o projeto para o GitHub:**

1. Acesse: **https://github.com/new**
2. Crie um repositório chamado `dr-rafael-mendes`
3. Marque como **"Private"** (para proteger seu código)
4. Clique em **"Create repository"**

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/dr-rafael-mendes.git
git push -u origin main
```

**Deploy na Vercel:**

1. No painel da Vercel, clique em **"Add New Project"**
2. Clique em **"Import"** ao lado do repositório `dr-rafael-mendes`
3. Na seção **"Environment Variables"**, adicione:

```
WORDPRESS_API_URL = https://seusubdominio.infinityfreeapp.com/wp-json/wp/v2
REVALIDATE_SECRET = minha_chave_secreta_super_forte_2024
NEXT_PUBLIC_SITE_URL = https://dr-rafael-mendes.vercel.app
```

4. Clique em **"Deploy"**
5. Aguarde ~2 minutos
6. Seu site estará em: `https://dr-rafael-mendes.vercel.app` 🎉

---

## ═══════════════════════════════════════

## PARTE 7 — REVALIDAÇÃO AUTOMÁTICA (WEBHOOK)

## ═══════════════════════════════════════

Isso faz com que quando você publicar um artigo no WordPress, o site Next.js
atualize automaticamente em segundos.

### PASSO 22 — Instalar o plugin WP Webhooks

1. No painel WordPress: **Plugins → Adicionar novo**
2. Busque: `WP Webhooks`
3. Instale e ative o plugin de **ironikus**

---

### PASSO 23 — Configurar o Webhook

1. No painel WordPress, vá em: **WP Webhooks → Send Data**
2. Clique na aba **"Post Created"**
3. Clique em **"Add Webhook URL"**
4. Em **"Webhook URL"** coloque:

```
https://dr-rafael-mendes.vercel.app/api/revalidate?secret=minha_chave_secreta_super_forte_2024
```

> ⚠️ Substitua `minha_chave_secreta_super_forte_2024` pelo valor exato
> que você colocou em `REVALIDATE_SECRET` na Vercel.

5. Clique em **"Save Webhook URL"**

Repita o processo para **"Post Updated"** e **"Post Deleted"** também.

---

### PASSO 24 — Testar o Webhook

1. No WordPress, publique ou atualize qualquer artigo
2. Aguarde ~3-5 segundos
3. Acesse seu site na Vercel
4. O novo artigo já estará lá! ✅

Você também pode testar manualmente acessando no navegador:

```
https://dr-rafael-mendes.vercel.app/api/revalidate?secret=minha_chave_secreta_super_forte_2024
```

Deve retornar: `{"revalidated":true,"message":"Todas as páginas foram revalidadas.",...}`

---

## ═══════════════════════════════════════

## PARTE 8 — FLUXO COMPLETO DO DIA A DIA

## ═══════════════════════════════════════

Após tudo configurado, seu fluxo de publicação será:

```
┌─────────────────────────────────────────────────────────┐
│  COMO PUBLICAR UM ARTIGO (dia a dia)                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Acesse: seusubdominio.infinityfreeapp.com/wp-admin  │
│                                                         │
│  2. Posts → Adicionar novo                              │
│                                                         │
│  3. Escreva o título e o conteúdo (editor Gutenberg)    │
│                                                         │
│  4. Adicione a imagem destacada                         │
│                                                         │
│  5. Preencha os campos ACF:                             │
│     • Tempo de leitura: 8                               │
│     • Categoria (nome): Ansiedade                       │
│     • Categoria (slug): ansiedade                       │
│     • Resumo: Descrição curta do artigo...              │
│     • Tags: ansiedade, terapia, dicas                   │
│     • Destaque: ✓ (se quiser no carrossel)              │
│                                                         │
│  6. Clique em "Publicar"                                │
│                                                         │
│  7. Em ~5 segundos, o artigo aparece no seu site! 🎉   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ═══════════════════════════════════════

## PARTE 9 — SLUGS DE CATEGORIA DISPONÍVEIS

## ═══════════════════════════════════════

Use exatamente estes slugs no campo "Categoria (slug interno)":

| Categoria (nome exibido) | Slug interno       |
| ------------------------ | ------------------ |
| Ansiedade                | `ansiedade`        |
| Depressão                | `depressao`        |
| Relacionamentos          | `relacionamentos`  |
| Autoconhecimento         | `autoconhecimento` |
| Burnout & Carreira       | `burnout`          |
| Geral                    | `geral`            |

> Você pode criar novas categorias! Basta usar qualquer slug em minúsculo
> sem acentos. O sistema vai reconhecer e criar automaticamente.

---

## ═══════════════════════════════════════

## PARTE 10 — PERGUNTAS FREQUENTES

## ═══════════════════════════════════════

**P: O site ainda funciona se o WordPress estiver offline?**
R: Sim! O projeto tem artigos de fallback em `src/data/articles.ts`.
Se a API do WordPress falhar, esses artigos são exibidos.

**P: Posso usar o Wordpress.com (gratuito) em vez do .org?**
R: Não. O WordPress.com gratuito não permite instalar plugins como o ACF.
Use sempre o WordPress.org auto-hospedado.

**P: As imagens do WordPress aparecem no Next.js?**
R: Sim! As imagens são carregadas diretamente da URL do WordPress.
O Next.js já está configurado para aceitar imagens externas.

**P: Quantos artigos posso ter?**
R: Ilimitado. A API busca até 100 artigos por página.

**P: Posso usar domínio próprio?**
R: Sim! Na Vercel, vá em Settings → Domains e adicione seu domínio.
É gratuito com SSL automático.

**P: E se eu quiser um servidor melhor para o WordPress?**
R: A Hostinger tem planos a partir de R$9,99/mês com instalação
WordPress automática e é bem mais confiável para produção.

---

## ═══════════════════════════════════════

## RESUMO RÁPIDO — CHECKLIST COMPLETO

## ═══════════════════════════════════════

### Desenvolvimento (local):

- [ ] Instalar Local by Flywheel
- [ ] Criar site WordPress local
- [ ] Instalar plugin ACF
- [ ] Instalar plugin ACF to REST API
- [ ] Configurar CORS (plugin WP CORS)
- [ ] Criar grupo de campos ACF com 6 campos
- [ ] Publicar artigo de teste no WordPress
- [ ] Criar `.env.local` na pasta do Next.js
- [ ] Rodar `npm install && npm run dev`
- [ ] Verificar se artigos aparecem em localhost:3000

### Produção:

- [ ] Criar conta no InfinityFree (WordPress gratuito)
- [ ] Instalar WordPress no InfinityFree
- [ ] Reconfigurar os plugins (ACF, ACF to REST, CORS)
- [ ] Recriar os campos ACF
- [ ] Criar conta na Vercel
- [ ] Enviar projeto para o GitHub
- [ ] Fazer deploy na Vercel com as variáveis de ambiente
- [ ] Instalar e configurar WP Webhooks
- [ ] Testar publicação de artigo → site atualiza automaticamente

---

## 🆘 Suporte

Se tiver dúvidas, verifique:

1. Se a URL da API está correta: `WORDPRESS_API_URL` no `.env.local`
2. Se o plugin ACF to REST API está ativo
3. Se o CORS está configurado no WordPress
4. No terminal do Next.js, veja se há erros com `[WordPress]` no início

---

_Tutorial criado para Dr. Rafael Mendes · Psicólogo Clínico_
_Stack: Next.js 14 + TypeScript + Tailwind CSS + WordPress Headless_
