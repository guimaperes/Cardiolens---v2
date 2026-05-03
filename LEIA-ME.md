# CardioLens PWA — Guia de Deploy
## Diagnosis Tech · Hospital Dante Pazanezze

---

## O que está neste pacote

```
cardiolens-pwa/
├── index.html       ← App principal (mobile-first, PWA-ready)
├── manifest.json    ← Configura nome, ícone, cor, modo standalone
├── sw.js            ← Service Worker (cache offline)
└── icons/
    ├── icon-72.png  ← Android launcher (ldpi)
    ├── icon-96.png  ← Android launcher (mdpi)
    ├── icon-128.png ← Chrome Web Store
    ├── icon-144.png ← Windows tile
    ├── icon-152.png ← iOS / iPad
    ├── icon-192.png ← Android (recomendado)
    ├── icon-384.png ← Android (alta resolução)
    └── icon-512.png ← Splash screen / Play Store
```

---

## Como publicar (escolha uma opção)

### Opção 1 — Vercel (recomendado, gratuito)
```bash
npm i -g vercel
cd cardiolens-pwa
vercel --prod
```
Em 30 segundos você tem uma URL HTTPS como `cardiolens.vercel.app`.

### Opção 2 — Netlify (arraste e solte)
1. Acesse https://app.netlify.com
2. Arraste a pasta `cardiolens-pwa/` para a área de deploy
3. Pronto — URL HTTPS gerada automaticamente

### Opção 3 — GitHub Pages
```bash
git init && git add . && git commit -m "CardioLens PWA"
# Crie um repositório no GitHub, faça push
# Ative Pages em Settings → Pages → Deploy from /root
```

---

## Como instalar no smartphone após publicar

### Android (Chrome / Edge)
1. Abra a URL no Chrome
2. Toque no banner "Instalar CardioLens" que aparece automaticamente
   OU toque no menu ⋮ → "Adicionar à tela inicial"
3. O app aparece na tela inicial como qualquer app nativo

### iPhone / iPad (Safari)
1. Abra a URL no Safari
2. Toque no ícone de compartilhar ⬆️
3. Role e toque em "Adicionar à Tela de Início"
4. Confirme tocando em "Adicionar"

> ⚠️ HTTPS obrigatório para PWA funcionar. Localhost também funciona para desenvolvimento.

---

## Funcionalidades PWA incluídas

| Recurso | Status |
|---|---|
| Instalável na tela inicial | ✅ |
| Funciona offline (cache) | ✅ |
| Banner de instalação automático | ✅ |
| Ícones para Android e iOS | ✅ |
| Splash screen | ✅ |
| Fullscreen (sem barra do navegador) | ✅ |
| Safe area (notch, ilha dinâmica) | ✅ |
| Vibração háptica ao interagir | ✅ |
| Inputs sem zoom automático (iOS) | ✅ |
| Detecção offline com toast | ✅ |
| Fonte mínima 15px em inputs | ✅ |
| IA real via API Anthropic | ✅ |

---

## Próximos passos para produto

1. **Autenticação** — Adicionar login com CRM para assinar laudos
2. **Backend** — Node/FastAPI para persistir atendimentos
3. **Câmera nativa** — Integração com Capacitor para acesso direto
4. **Notificações push** — Alertar médico quando laudo ficou pronto
5. **App Store / Play Store** — Empacotar com Capacitor + Xcode/Android Studio

---

Diagnosis Tech · CardioLens v2.0
