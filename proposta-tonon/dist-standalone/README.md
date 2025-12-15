# 📋 Proposta de Análise Digital - Serralheria Tonon

## 📦 Estrutura de Arquivos

```
dist-standalone/
├── index.html          # HTML principal (358 KB)
├── style.css           # Estilos compilados (120 KB)
├── script.js           # JavaScript compilado (3.4 MB)
├── images/             # Imagens estáticas
│   ├── hero-background.png
│   ├── market-analysis-bg.png
│   ├── solutions-bg.png
│   └── logo-tonon.jpg
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Mais Simples)
1. Baixe todos os arquivos
2. Mantenha a estrutura de pastas (index.html, style.css, script.js, images/)
3. Clique duplo em `index.html` para abrir no navegador
4. Pronto! O site está funcionando

### Opção 2: Usar em um Servidor Web
1. Copie todos os arquivos para a raiz do seu servidor web
2. Acesse via HTTP/HTTPS
3. O site funcionará com melhor performance

### Opção 3: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Configure GitHub Pages em Settings
4. Seu site estará disponível em `https://seu-usuario.github.io/proposta-tonon/`

## 📄 Explicação dos Arquivos

### index.html (358 KB)
- Estrutura HTML da página
- Referencia os arquivos `style.css` e `script.js`
- Contém o elemento raiz para React (`<div id="root">`)

### style.css (120 KB)
- Todos os estilos da aplicação
- Tailwind CSS compilado
- Estilos customizados da proposta
- **Imagens embutidas em base64** (não precisa de arquivos separados)

### script.js (3.4 MB)
- React 19 compilado
- Todos os componentes da aplicação
- Lógica interativa
- **Imagens embutidas em base64** (não precisa de arquivos separados)

### images/ (Pasta com imagens)
- hero-background.png - Background do hero
- market-analysis-bg.png - Background da seção de mercado
- solutions-bg.png - Background da seção de soluções
- logo-tonon.jpg - Logo da empresa
- **Nota:** As imagens também estão embutidas no CSS e JS em base64

## ⚙️ Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Sem necessidade de servidor web
- Sem necessidade de instalar dependências

## 🔧 Manutenção

Se precisar fazer alterações:

1. **Editar HTML:** Abra `index.html` em um editor de texto
2. **Editar CSS:** Abra `style.css` em um editor de texto
3. **Editar JavaScript:** Abra `script.js` em um editor de texto (avançado)

**Importante:** Para mudanças complexas, é recomendável voltar ao código-fonte React e fazer o rebuild.

## 📊 Tamanhos de Arquivo

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| index.html | 358 KB | HTML compilado |
| style.css | 120 KB | Estilos compilados |
| script.js | 3.4 MB | JavaScript compilado |
| **Total** | **~3.9 MB** | Todos os arquivos |

## 🌐 Compatibilidade

- ✅ Chrome (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Mobile (iOS Safari, Chrome Android)

## 🔐 Segurança

- Código minificado e ofuscado
- Sem dados sensíveis
- Sem chamadas a APIs externas
- HTTPS recomendado para produção

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão na mesma pasta
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente em outro navegador

---

**Pronto para usar! 🎉**
