# EFFO-TP — Design System (v1)

Direction : **Trust & Authority** appliqué au BTP / télécom local, sur l'identité existante.

## Couleurs
| Token | HEX | Usage |
|-------|-----|-------|
| `brand-blue` | `#1C89F2` | Couleur primaire, liens, accents fibre/télécom |
| `brand-blue-700` | `#0E6FD6` | Hover, dégradés |
| `brand-green` | `#30C293` | Accent secondaire, validation, IRVE/énergie |
| `brand-green-700` | `#1FA87B` | Hover vert |
| `ink` | `#0B0F14` | Fond sombre, texte fort |
| `ink-800` | `#141A21` | Cartes sombres |
| `slate` | `#5B6573` | Texte secondaire |
| `paper` | `#F6F8FB` | Fond clair |
| `white` | `#FFFFFF` | Fond / texte sur sombre |

CTA primaire = bleu. Accent énergie/nouveauté (IRVE) = vert. Sections sombres = ink (rappel du noir de marque).

## Typographie
- **Display / titres** : `Lexend` (600/700) — corporate, lisible, confiance.
- **Texte courant** : `Source Sans 3` (400/500/600).
- Échelle : hero clamp(2.5rem,6vw,4.5rem) · h2 clamp(2rem,4vw,3rem) · body 1.0625rem.

## Principes
- Beaucoup d'air, grille large (max-w 1200px), sections rythmées clair/sombre.
- Photos chantier réelles plein cadre, overlay sombre pour lisibilité.
- Preuve & autorité : chiffres clés (30 ans, depuis 2021, 5 départements), logos clients, zone d'intervention.
- Icônes : Lucide (SVG), jamais d'emoji.
- Coins arrondis 14-20px, ombres douces, transitions 150-250ms.
- Accessibilité : contraste AA min, focus visibles, `prefers-reduced-motion` respecté.
- Responsive : 375 / 768 / 1024 / 1440.

## Anti-patterns (à éviter)
Dégradés AI violet/rose · design « joueur » · masquer les preuves/credentials · texte sur photo sans overlay.
