# Sovereign Sage Personal Brand Website

Eine hochprofessionelle Personal-Brand-Website mit dem Sovereign Sage Design System, optimiert für C-Level/Banking-IT.

## Design-System

### Farbwelt
- **Vapor** (#F8F9FA) - Background
- **Midnight** (#0F172A) - Primary Text & Elements
- **Stone** (#D6D3CD) - Secondary & Accents
- **Cyan** (#3B8EA5) - Technical Highlights

### Typografie
- **Playfair Display** - Serif Headlines
- **Inter** - Sans-Serif Body Text
- **JetBrains Mono** - Technical Metadata

### Archetyp
Sovereign Sage - Kognitive Entlastung durch extreme White Space, Ruhe und geometrische Klarheit.

## Sektionen

1. **Navigation** - Minimalistisch mit Structured Enso Logo
2. **Hero** - Vollbild mit Foto-Overlay und typografischem Fokus
3. **Portfolio** - Grid-System für Research & Tools
4. **Insights** - Blog-Sektion mit Card-Layout
5. **Kontakt** - Call-to-Action Sektion
6. **Footer** - Rechtssichere Links (Impressum, Datenschutz)

## Technische Anforderungen

- Tailwind CSS JIT Engine (via CDN)
- Responsive Design (Mobile-first)
- Semantic HTML5
- Accessibility (WCAG AA)
- Kein Build-Step erforderlich

## Deployment auf GitHub Pages

### Option 1: Manual Deployment

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sovereign Sage Personal Brand Website"
   ```

2. **Create gh-pages Branch**
   ```bash
   git checkout -b gh-pages
   ```

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin gh-pages
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Save settings

### Option 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./