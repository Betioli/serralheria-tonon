# Proposta de Análise Digital - Serralheria Tonon
## Versão HTML/CSS/JavaScript Vanilla

### 📦 Estrutura de Arquivos

```
vanilla-html/
├── index.html              # Página HTML principal
├── style.css               # Estilos CSS
├── script.js               # JavaScript vanilla
├── images/                 # Imagens estáticas
│   ├── hero-background.png
│   ├── market-analysis-bg.png
│   ├── solutions-bg.png
│   └── logo-tonon.jpg
└── README.md              # Este arquivo
```

### 🚀 Como Usar

#### Opção 1: Abrir Localmente (Mais Simples)
1. Baixe todos os arquivos
2. Mantenha a estrutura de pastas
3. Clique duplo em `index.html`
4. Pronto! O site abre no navegador

#### Opção 2: Usar um Servidor Local
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

#### Opção 3: GitHub Pages
1. Crie um repositório público no GitHub
2. Faça upload de todos os arquivos
3. Configure GitHub Pages em Settings
4. Site disponível em `https://seu-usuario.github.io/proposta-tonon/`

### 📝 Editando o Projeto

#### Editar Conteúdo
Abra `index.html` em um editor de texto (VS Code, Sublime, etc.) e modifique o conteúdo HTML.

#### Editar Estilos
Abra `style.css` para modificar cores, fontes, espaçamento, etc.

#### Editar Funcionalidades
Abra `script.js` para adicionar ou modificar comportamentos JavaScript.

### 🎨 Cores Principais

- **Azul Primário:** `#3E3E94`
- **Amarelo Destaque:** `#FFF111`
- **Texto Escuro:** `#1a1a1a`
- **Fundo Claro:** `#f8f8f8`

### 🔤 Tipografia

- **Fonte:** Montserrat (Google Fonts)
- **Pesos:** 400, 500, 600, 700, 800

### 📱 Responsividade

O site é totalmente responsivo:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

### 🔧 Funcionalidades Incluídas

✅ Menu responsivo com toggle mobile
✅ Navegação suave com scroll automático
✅ Animações ao scroll
✅ Links âncora funcionais
✅ Botões CTA com hover effects
✅ Tabelas comparativas
✅ Cards com sombras e transições
✅ Footer com links
✅ Suporte a temas (light/dark)
✅ Analytics ready
✅ Lazy loading de imagens

### 💡 Personalizações Comuns

#### Mudar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-blue: #3E3E94;
    --primary-yellow: #FFF111;
    /* ... */
}
```

#### Adicionar Nova Seção
1. Copie uma seção existente em `index.html`
2. Modifique o conteúdo
3. Adicione um link no menu de navegação
4. Crie estilos CSS se necessário

#### Mudar Imagens
1. Substitua os arquivos em `images/`
2. Mantenha os mesmos nomes de arquivo
3. Ou atualize os `src` em `index.html`

#### Adicionar Formulário
```html
<form id="meuFormulario" onsubmit="return submitForm('meuFormulario', '/api/submit')">
    <input type="text" name="nome" required>
    <textarea name="mensagem" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

### 📊 Tamanhos de Arquivo

| Arquivo | Tamanho |
|---------|---------|
| index.html | ~45 KB |
| style.css | ~35 KB |
| script.js | ~12 KB |
| images/ | ~6.3 MB |
| **Total** | **~6.4 MB** |

### 🌐 Compatibilidade

- ✅ Chrome (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Mobile (iOS Safari, Chrome Android)

### 🔐 Segurança

- Código minificado (opcional)
- Sem dependências externas
- Sem dados sensíveis
- HTTPS recomendado para produção

### 📚 Estrutura HTML

```html
<header>          <!-- Navbar com logo e navegação -->
<section.hero>    <!-- Seção inicial -->
<section#empresa> <!-- Análise da empresa -->
<section#mercado> <!-- Pesquisa de mercado -->
<section#concorrentes> <!-- Análise de concorrentes -->
<section#solucoes>    <!-- Soluções e fases -->
<section.cta>     <!-- Call-to-action -->
<footer>          <!-- Rodapé -->
```

### 🎯 Otimizações

Para melhorar performance:

1. **Minificar CSS/JS:**
   - Use ferramentas online ou locais
   - Reduz tamanho em ~40%

2. **Otimizar Imagens:**
   - Comprima com TinyPNG ou similar
   - Use WebP quando possível

3. **Lazy Loading:**
   - Adicione `data-src` em imagens
   - Script já suporta isso

4. **Cache:**
   - Configure headers HTTP
   - Use service workers para offline

### 🚀 Deploy

#### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/proposta-tonon.git
git push -u origin main
```

#### Netlify
1. Conecte seu repositório GitHub
2. Configure build (não necessário)
3. Deploy automático

#### Vercel
1. Importe o repositório
2. Deploy com um clique
3. Domínio customizado automático

### 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão na mesma pasta
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente em outro navegador
4. Verifique o console do navegador (F12) para erros

### 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar e modificar.

---

**Pronto para usar! 🎉**

Qualquer dúvida, consulte a documentação HTML, CSS e JavaScript padrão.
