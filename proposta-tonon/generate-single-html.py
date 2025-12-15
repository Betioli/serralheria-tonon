import os
import base64
import re

# Caminhos
dist_public = "/home/ubuntu/proposta-tonon/dist/public"
output_file = "/home/ubuntu/proposta-tonon/proposta-tonon.html"

# Ler HTML base
with open(f"{dist_public}/index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# Ler CSS
with open(f"{dist_public}/assets/index-DaRKS6Rn.css", "r", encoding="utf-8") as f:
    css_content = f.read()

# Ler JavaScript
with open(f"{dist_public}/assets/index-CA4xovas.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Função para converter imagens para base64
def image_to_base64(image_path):
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode()

# Converter imagens
images = {
    "hero-background.png": f"{dist_public}/images/hero-background.png",
    "market-analysis-bg.png": f"{dist_public}/images/market-analysis-bg.png",
    "solutions-bg.png": f"{dist_public}/images/solutions-bg.png",
    "logo-tonon.jpg": f"{dist_public}/images/logo-tonon.jpg",
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
    # Substituir em CSS
    css_content = css_content.replace(f"/images/{name}", data_url)
    # Substituir em JS
    js_content = js_content.replace(f"/images/{name}", data_url)

# Remover referências aos arquivos CSS e JS externos
html_content = re.sub(r'<link[^>]*href="[^"]*assets/index-[^"]*\.css"[^>]*>', '', html_content)
html_content = re.sub(r'<script[^>]*src="[^"]*assets/index-[^"]*\.js"[^>]*></script>', '', html_content)

# Injetar CSS e JS no HTML
# Adicionar CSS na tag <head>
html_content = html_content.replace("</head>", f"<style>{css_content}</style></head>")

# Adicionar JS antes de </body>
html_content = html_content.replace("</body>", f"<script>{js_content}</script></body>")

# Salvar arquivo único
with open(output_file, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"\n✅ Arquivo único criado: {output_file}")
print(f"Tamanho: {os.path.getsize(output_file) / 1024 / 1024:.2f} MB")
