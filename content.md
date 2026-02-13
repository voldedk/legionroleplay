# Legion Roleplay - FiveM Server Hjemmeside

En moderne og interaktiv hjemmeside til Legion Roleplay FiveM server, bygget med HTML, CSS og JavaScript til hosting på GitHub Pages.

**🇩🇰 Komplet dansk hjemmeside til dansk roleplay server med dansk tale/voice.**

## 📁 Projektstruktur

```
legion-roleplay/
│
├── index.html              # Forside
├── regler.html            # Regler side
├── om-serveren.html       # Om serveren side
├── faq.html               # FAQ side
├── ansog-stillinger.html  # Ansøg til stillinger side
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Søgemaskine crawler instruktioner
│
├── css/
│   └── style.css          # Hovedstil
│
├── js/
│   └── script.js          # JavaScript funktionalitet
│
└── images/
    └── logo.png           # Legion Roleplay logo
```

## 🎨 Design Features

- **Farvetema**: Inspireret af logo med orange, rød og mørke toner
- **Responsivt design**: Fungerer på alle enheder
- **Sprog**: Komplet dansk hjemmeside til dansk roleplay server
- **SEO Optimeret**: Meta tags, struktureret data og søgemaskinevenlighed for bedre Google ranking
- **Animationer**: 
  - Logo rotation og glow effekt
  - Smooth scroll
  - Hover effekter på knapper
  - Fade-in animationer ved scroll
  - Gradient baggrunde

## 📄 Sider

### 1. Forside (index.html)
- Velkommen sektion med hero banner
- Om serveren kort beskrivelse
- Discord community sektion
- Ansøgningssektion
- Social media links i footer
- **Dansk sprog gennem hele siden**

### 2. Regler (regler.html)
- Server regler opdelt i kategorier
- Tydelig strukturering
- **På dansk**

### 3. Om Serveren (om-serveren.html)
- Detaljeret information om serveren
- Features og muligheder
- Community fokus
- **Fremhæver dansk tale/voice**

### 4. FAQ (faq.html)
- Ofte stillede spørgsmål
- Interaktivt accordion design
- **Danske spørgsmål og svar**

### 5. Ansøg til Stillinger (ansog-stillinger.html)
- Politi ansøgning
- Brændvæsen ansøgning
- Udvidelsesmuligheder for flere stillinger
- **Dansk ansøgningsformular**

## 🔧 Installation

1. Klon repository eller download filerne
2. Placer dit logo i `images/logo.png`
3. Opdater Discord invite link i `index.html` (søg efter `DIT_DISCORD_INVITE_LINK`)
4. Opdater social media links i footer
5. Upload til GitHub Pages

## 🚀 GitHub Pages Deployment

1. Gå til repository Settings
2. Scroll ned til "Pages" sektionen
3. Vælg "main" branch som kilde
4. Klik "Save"
5. Din hjemmeside vil være tilgængelig på: `https://[dit-brugernavn].github.io/[repository-navn]/`

### SEO & Google Indexering
Efter deployment:
1. **Google Search Console**: Tilmeld din side på [search.google.com/search-console](https://search.google.com/search-console)
2. **Submit Sitemap**: Tilføj din sitemap (sitemap.xml) i Search Console
3. **robots.txt**: Sørg for at din robots.txt er korrekt konfigureret
4. **Bing Webmaster Tools**: Tilmeld også på Bing for bredere synlighed
5. **Google My Business**: Opret en profil hvis relevant

## ⚙️ Tilpasning

### Farver
Rediger CSS variabler i `css/style.css`:
```css
:root {
    --primary-orange: #ff8c00;
    --primary-red: #ff4444;
    --dark-bg: #1a1a1a;
    /* ... flere farver */
}
```

### Links
Opdater følgende i relevante HTML filer:
- Discord invite link
- Social media links (Discord, TikTok, YouTube)
- Ansøgningsformular links

## 📱 Social Media Integration

Footer inkluderer links til:
- Discord (med ikon)
- TikTok (med ikon)
- YouTube (med ikon)

Ikoner bruger Font Awesome CDN.

## ✨ Funktioner

- **Smooth Navigation**: Smooth scroll mellem sektioner
- **Responsive Menu**: Mobile-venlig hamburger menu
- **Animerede Elementer**: Fade-in effekter ved scroll
- **Logo Animation**: Roterende glow effekt
- **Interactive FAQ**: Klikbare spørgsmål/svar
- **Moderne Design**: Gradient effekter og glassmorphism
- **SEO Optimering**: 
  - Semantisk HTML struktur
  - Meta descriptions og keywords
  - Open Graph tags til social media
  - Alt tags på alle billeder
  - Struktureret data (Schema.org)
  - Optimerede page titles
  - Sitemap.xml klar struktur

## 🔒 Sikkerhed

Da dette er en statisk side (front-end only):
- Ingen server-side processing
- Formularer sender til eksterne services (skal konfigureres)
- Ingen database forbindelser

## 📝 Licens

Dette projekt er lavet til Legion Roleplay FiveM server.

## 🤝 Support

Har du spørgsmål eller brug for hjælp? Kontakt server administratorerne via Discord!

---

**Note**: Husk at erstatte placeholder links og tekst med din faktiske server information før deployment!