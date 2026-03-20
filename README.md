# BOFstudio

The tool BOF creators use to add overlays and generate captions — instantly. Built by a creator, for creators.

## What is BOFstudio?

BOFstudio helps TikTok Shop BOF (Bottom of Funnel) creators produce videos faster. Upload a product video, get a styled deal overlay and AI-generated caption — ready to post.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXTAUTH_SECRET` | Random secret for NextAuth session encryption |
| `NEXTAUTH_URL` | Your app URL (http://localhost:3000 for dev) |

## Deploy on Vercel

1. Push to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add environment variables in Vercel dashboard
4. Deploy

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS**
- **Framer Motion** (scroll animations)
- **NextAuth.js** (Google OAuth)

## Pages

- `/` — Landing page (hero, how it works, features, pricing, FAQ)
- `/signin` — Sign in with Google
- `/signup` — Sign up with Google
- `/dashboard` — Dashboard placeholder (coming soon)
- `/terms-of-service` — Terms of Service
- `/privacy-policy` — Privacy Policy

---

Built by [Toniolo AI Agency](https://x.com/katetonioloai)
