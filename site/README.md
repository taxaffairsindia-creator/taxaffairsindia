# Tax Affairs — Website

A Jekyll site built for free hosting on GitHub Pages. The design is
deliberately restrained and editorial — a quiet numbered list for
practice areas, hairline rules, and a single red accent used only as
a section marker, rather than a boxed "template" look. Palette: navy
(#032058), red (#CA090A), true black (#0B0C10) for the footer, and
white throughout. GitHub Pages builds Jekyll sites automatically —
you don't need to run any build step yourself; you just push files
and turn a setting on.

The site is framed as a consultancy (Advisory · Compliance ·
Litigation) rather than a personal CA practice — there's no ICAI
membership number or "Chartered Accountant practice" language
anywhere on it. It now covers 25 towns across Andhra Pradesh, grouped
by region (Rayalaseema / Coastal Andhra) on the homepage.

## 1. Before you push anything — check `_config.yml`

Your real phone (`+91 91774 06648`), WhatsApp, and email
(`taxaffairsindia@gmail.com`) are already filled in. Every page pulls
these from `_config.yml` automatically — edit them there once if they
ever change, rather than hunting through individual pages.

## 2. Set `baseurl` to match where the site will live — this is the one setting that breaks everything if wrong

GitHub Pages serves a site two different ways, and Jekyll needs to
know which one you're using:

- **Default GitHub URL** (`https://yourusername.github.io/reponame/`) —
  the site lives in a *subfolder* named after your repo. Every internal
  link and every asset (CSS, images, JS) needs that subfolder name
  in front of it, or the browser looks in the wrong place entirely —
  which shows up as a totally unstyled page and every link 404ing.
  Set `baseurl: "/reponame"` (matching your actual repository name,
  case-sensitive) in `_config.yml` for this case.
- **Custom domain** (`https://taxaffairsindia.in`) — the site is
  served from the root, with no subfolder. Set `baseurl: ""` (empty)
  for this case.

Right now this is set to `baseurl: "/taxaffairsindia"`, matching a
repo named `taxaffairsindia`. **If you name your repository something
else, change this line to match** — it must be `/` followed by your
exact repository name. Once you switch to the custom domain (step 4
below), come back and change it to `baseurl: ""`, or the site will
break again in the opposite direction.

## 3. Put it on GitHub

1. Create a new **public** repository on GitHub — note the exact name
   you give it, since it goes into `baseurl` above.
2. Upload every file in this folder to that repository (drag-and-drop on
   github.com works fine for a first pass, or `git push` if you're
   comfortable with git).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will build the site (takes 1–2 minutes) and give you a URL like
   `https://yourusername.github.io/reponame/`. Open it to confirm the
   site looks right (styled, links working) before moving to your own domain.

## 4. Point taxaffairsindia.in at it

Since you already own the domain:

1. **First, change `baseurl: "/taxaffairsindia"` to `baseurl: ""`** in
   `_config.yml` and push that change — a custom domain serves from
   the root, not a subfolder, so the old setting will break every
   link and asset again if you skip this.
2. Still in **Settings → Pages**, under "Custom domain", type
   `taxaffairsindia.in` and save. GitHub will create a `CNAME` file in
   your repo automatically.
3. Go to wherever you bought the domain (GoDaddy, Namecheap, etc.) and
   open its DNS settings. Add:
   - Four **A records** for the root domain (`@`), pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME record** for `www`, pointing to `yourusername.github.io`
4. DNS changes can take anywhere from a few minutes to a few hours to
   take effect. Once they do, tick "Enforce HTTPS" back in the GitHub
   Pages settings for a free SSL certificate.

## 5. Make the contact form actually send you enquiries

`contact.html` has a form, but GitHub Pages only serves static files —
it can't process form submissions on its own. The quickest fix:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form there; it gives you an endpoint like
   `https://formspree.io/f/abc12345`.
3. In `contact.html`, replace `action="#"` with that endpoint.

Until you do this, use the phone/WhatsApp/email details next to the form.

## 6. Editing content later

- **Prices, service descriptions**: edit the relevant file directly —
  `index.html` for the homepage summary, or the matching file in
  `services/`. Each price row is one `<div class="pcard">` block.
- **Add a new town/district page**: copy any file in `locations/`,
  rename it `best-tax-consultant-<town>.html`, and update the front
  matter (`title`, `description`, `keywords`, `geo_lat`, `geo_lng`,
  `geo_name`) and the visible town name in the body. Then add the town
  to `_data/towns.yml` so it shows up in the homepage grid and footer
  automatically.
- **Header/footer/contact details**: edit `_includes/header.html`,
  `_includes/footer.html`, or `_config.yml` — these changes apply to
  every page at once.
- **Colours/fonts**: all in `assets/css/style.css`, under the
  `:root { ... }` block at the top for colours.

## 7. A note on the prices shown

The starting prices on the site (₹999 for a salaried ITR, ₹1,999 for
GST registration, and so on) are illustrative placeholders in the
tax2profit.com style you asked for — **not** your actual fee schedule.
Check every price against what you actually want to charge before the
site goes live; accounting & bookkeeping is deliberately left as
"reasonable charges — contact us" rather than a fixed number, as you
asked.

## 8. Getting found on Google — what the site handles vs. what you still need to do

The site itself now carries everything on-page SEO can offer:
- Unique title/description/keywords per page, geo-coordinates per town, a canonical URL on every page, and a sitemap.xml generated automatically by the `jekyll-sitemap` plugin
- `ProfessionalService` and `FAQPage` structured data (JSON-LD) so Google can understand what the business is and surface FAQ answers directly in search results
- A logo, Open Graph and Twitter Card tags for clean previews when the site is shared

None of that guarantees ranking on its own — visibility mostly comes from things outside the site's code:
1. **Google Business Profile** — create one (free, at business.google.com) for "Tax Affairs" with your Proddatur address. This is what actually gets you into Google's local map pack for "tax consultant near me" searches — arguably the single highest-impact thing you can do.
2. **Google Search Console** — verify the domain and submit `https://taxaffairsindia.in/sitemap.xml` so Google knows to crawl every page, including the town pages.
3. **Backlinks** — get listed on local business directories (Justdial, Sulekha, IndiaMART), and if you're a member of any local trade/chamber body, ask for a website link there.
4. **Genuine client reviews** on your Google Business Profile — these matter more for local ranking than almost anything on the site itself. Never fabricate these.
5. **Ongoing content** — a simple blog/updates page (e.g. "GST due dates this month," "New ITR forms for AY 2027-28") gives Google fresh content to re-crawl and gives you more long-tail keyword pages over time.

## File structure

```
_config.yml          site-wide settings (firm name, contact details)
_data/towns.yml       list of AP towns/districts shown across the site
_layouts/default.html the shared page shell (head, header, footer)
_includes/            header.html, footer.html
assets/css/style.css  all styling
index.html             homepage
about.html, contact.html
services/              one page per service line
locations/             one SEO landing page per AP town
robots.txt, 404.html, Gemfile
```
