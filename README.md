<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Cabdifataax Maxamuud — Portfolio</h1>

Personal portfolio showcasing AI/ML engineering projects and technical experience. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). Deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Install & run

Requires Node.js `19.9.0` or higher and npm `9.6.3` or higher.

```bash
npm install
npm run dev
```

## Deployment

Deployed automatically via Cloudflare Pages on every push to `main`. To deploy manually from the command line:

```bash
npm run deploy
```

## Contact form setup

To enable the contact form, create an AWS account and set up SES (Simple Email Service). Add your credentials to `.dev.vars` (copy from `.dev.vars.example`). Add the same values as environment variables in the Cloudflare Pages dashboard for production.
