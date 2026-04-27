# Landing Page · Colégio CPPEM

Landing page de alta performance para a campanha **Bolsa de Acolhimento 2026** do Colégio CPPEM. Construída com HTML5 semântico, Tailwind CSS (via CDN) e JavaScript modular — tudo estático, sem build step, pronta para publicação em qualquer hospedagem (GitHub Pages, Netlify, Vercel, Hostinger, S3, cPanel).

---

## 📁 Estrutura do projeto

```
cppem-lp/
├── index.html                 # Marcação principal
│
├── css/
│   ├── variables.css          # Design tokens (cores, fontes do brandbook)
│   ├── base.css               # Reset, tipografia, scrollbar
│   ├── components.css         # Botões, glass, navbar, brasão
│   ├── sections.css           # Hero, preços, diferenciais, stats, footer
│   └── animations.css         # Keyframes, scroll-reveal, orbs flutuantes
│
├── js/
│   ├── tailwind-config.js     # Configuração do Tailwind (cores/fontes)
│   ├── config.js              # ⭐ Configuração central editável
│   ├── whatsapp.js            # Aplica links wa.me em todos os CTAs
│   ├── countdown.js           # Cronômetro regressivo
│   ├── scroll-effects.js      # Navbar, parallax, sticky CTA, reveal
│   ├── counters.js            # Animação de números (stats)
│   └── main.js                # Atualização das vagas restantes
│
├── assets/
│   └── logo-cppem.png         # Brasão oficial
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🚀 Como publicar

### Opção 1 — Hospedagem tradicional (cPanel, Hostinger)
1. Compacte a pasta inteira em ZIP.
2. No painel da hospedagem, vá em **Gerenciador de Arquivos** → `public_html`.
3. Faça o upload e descompacte.
4. Pronto. Acesse o domínio.

### Opção 2 — GitHub Pages (grátis)
```bash
git init
git add .
git commit -m "feat: landing page bolsa de acolhimento 2026"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/cppem-lp.git
git push -u origin main
```
Depois, em **Settings → Pages**, selecione branch `main` / pasta `/ (root)` → Save.

### Opção 3 — Netlify / Vercel (drag-and-drop)
Arraste a pasta inteira para [app.netlify.com/drop](https://app.netlify.com/drop) ou conecte o repositório GitHub na Vercel. Deploy em segundos.

---

## ⚙️ Como editar dados da campanha

**Tudo que muda com frequência está em um único arquivo:** `js/config.js`.

```js
window.CPPEM_CONFIG = {
  WHATSAPP_NUMBER: '5581994086174',          // Número do WhatsApp (sem +)
  WHATSAPP_MSG:    'Olá! Sou pai/mãe...',    // Mensagem pré-preenchida
  DEADLINE:        '2026-07-31T23:59:59-03:00', // Fim da campanha
  TOTAL_VAGAS:     15,                        // Vagas disponíveis
};
```

Alterar valores ali sincroniza automaticamente:
- Todos os botões CTA (hero, oferta, sticky, footer)
- O cronômetro regressivo
- A contagem de vagas no hero e no CTA final

---

## 🎨 Identidade visual

Tokens baseados no Brandbook oficial do Colégio CPPEM (2026), centralizados em `css/variables.css`:

| Token             | Valor       | Uso                                  |
| ----------------- | ----------- | ------------------------------------ |
| `--navy`          | `#0D1B3E`   | Fundo principal                      |
| `--navy-mid`      | `#162247`   | Fundo alternativo de seções          |
| `--gold`          | `#C9A227`   | Destaques, CTAs, headlines           |
| `--gold-light`    | `#E8C350`   | Gradientes e brilhos                 |
| `--gold-pale`     | `#F5E4A8`   | Texto institucional itálico          |
| Fonte display     | `Cinzel`    | Títulos, headlines, badges           |
| Fonte serif       | `Libre Baskerville` | Citações e itálicos          |
| Fonte body        | `DM Sans`   | Texto corrido                        |

---

## 🧩 Estrutura de seções da página

1. **Navbar fixa** — brasão + menu + CTA secundário
2. **Hero** — headline, brasão, subheadline, vagas restantes, countdown
3. **Vida no CPPEM** — placeholder visual de 4 cards (substituir por fotos reais)
4. **A Oferta** — comparativo de preço (sem bolsa vs com bolsa) + economia destacada
5. **Diferenciais** — 6 cards com Sistema RJ, Plano de Combate, AgendaEdu, Mentoria, Disciplina, Disciplinas do Século XXI
6. **A Transição** — 6 razões para acolher a transferência
7. **Resultados Reais** — stats animados + carreiras-foco + citação institucional
8. **CTA Final** — bloco dramático de reserva via WhatsApp
9. **Footer** — endereço, contato, redes sociais, dados oficiais

---

## ⚡ Performance e SEO

- ✅ Mobile-first, totalmente responsivo
- ✅ Tags Open Graph para compartilhamento em redes sociais
- ✅ `prefers-reduced-motion` respeitado (acessibilidade)
- ✅ Nenhum framework JS pesado — apenas vanilla
- ✅ IntersectionObserver para animações eficientes
- ✅ Preconnect para Google Fonts

**Observação:** o Tailwind está via CDN para simplicidade. Para produção em escala, considere o build local com PurgeCSS/Tailwind CLI.

---

## 📝 Licença

Uso interno do Colégio CPPEM. Veja [LICENSE](./LICENSE).

---

## 📞 Contato institucional

**Colégio CPPEM**
Praça Presidente Getúlio Vargas, 119 — Caruaru/PE
📧 colegiocppem@gmail.com
📱 +55 (81) 99408-6174
