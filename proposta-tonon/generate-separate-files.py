import os
import base64
import re
import shutil

# Caminhos
dist_public = "/home/ubuntu/proposta-tonon/dist/public"
output_dir = "/home/ubuntu/proposta-tonon/dist-standalone"

# Criar diretório de saída
os.makedirs(output_dir, exist_ok=True)
os.makedirs(os.path.join(output_dir, "images"), exist_ok=True)

# Ler arquivos originais
with open(os.path.join(dist_public, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

with open(os.path.join(dist_public, "assets/index-DaRKS6Rn.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

with open(os.path.join(dist_public, "assets/index-CA4xovas.js"), "r", encoding="utf-8") as f:
    js_content = f.read()

# Função para converter imagens para base64
def image_to_base64(image_path):
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode()

# Converter imagens
images = {
    "hero-background.png": os.path.join(dist_public, "images/hero-background.png"),
    "market-analysis-bg.png": os.path.join(dist_public, "images/market-analysis-bg.png"),
    "solutions-bg.png": os.path.join(dist_public, "images/solutions-bg.png"),
    "logo-tonon.jpg": os.path.join(dist_public, "images/logo-tonon.jpg"),
}

image_data = {}
for name, path in images.items():
    if os.path.exists(path):
        ext = name.split(".")[-1].lower()
        mime = "image/jpeg" if ext == "jpg" else f"image/{ext}"
        image_data[name] = f"data:{mime};base64,{image_to_base64(path)}"
        print(f"✓ Convertido: {name}")

# Substituir referências de imagens no CSS e JS
for name, data_url in image_data.items():
    css_content = css_content.replace(f"/images/{name}", data_url)
    js_content = js_content.replace(f"/images/{name}", data_url)

# Remover referências aos arquivos CSS e JS externos do HTML
html_content = re.sub(r'<link[^>]*href="[^"]*assets/index-[^"]*\.css"[^>]*>', '', html_content)
html_content = re.sub(r'<script[^>]*src="[^"]*assets/index-[^"]*\.js"[^>]*></script>', '', html_content)

# Adicionar referências aos novos arquivos no HTML
html_content = html_content.replace("</head>", '<link rel="stylesheet" href="style.css"></head>')
html_content = html_content.replace("</body>", '<script src="script.js"></script></body>')

# Salvar arquivos separados
html_file = os.path.join(output_dir, "index.html")
with open(html_file, "w", encoding="utf-8") as f:
    f.write(html_content)
print(f"✓ Criado: index.html ({os.path.getsize(html_file) / 1024:.2f} KB)")

css_file = os.path.join(output_dir, "style.css")
with open(css_file, "w", encoding="utf-8") as f:
    f.write(css_content)
print(f"✓ Criado: style.css ({os.path.getsize(css_file) / 1024:.2f} KB)")

js_file = os.path.join(output_dir, "script.js")
with open(js_file, "w", encoding="utf-8") as f:
    f.write(js_content)
print(f"✓ Criado: script.js ({os.path.getsize(js_file) / 1024:.2f} KB)")

# Copiar imagens também
print("\n📁 Copiando imagens...")
for name, path in images.items():
    if os.path.exists(path):
        shutil.copy(path, os.path.join(output_dir, "images", name))
        print(f"✓ Copiado: {name}")

print(f"\n✅ Arquivos separados criados em: {output_dir}")
print("\n📊 Resumo:")
print(f"  - index.html: {os.path.getsize(html_file) / 1024:.2f} KB")
print(f"  - style.css: {os.path.getsize(css_file) / 1024:.2f} KB")
print(f"  - script.js: {os.path.getsize(js_file) / 1024:.2f} KB")
