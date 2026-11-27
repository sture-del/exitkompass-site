# exitkompass-site

Built static site for www.exitkompass.se. Do not edit by hand: it is generated from the Exitkompass source and pushed here.

Every push to `main` deploys `public/` to the Cloudflare Pages project `exitkompass` (see `.github/workflows/deploy.yml`). Needs the repository secret `CLOUDFLARE_API_TOKEN` (Cloudflare token with the "Cloudflare Pages: Edit" permission).
