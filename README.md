# Stackmorphic Official Website

The Stackmorphic portfolio website consists of a React/Vite frontend and a Django REST API. The API handles contact enquiries and the optional AI chat assistant.

## Project structure

- `frontend/` — React, Vite, and Tailwind CSS website.
- `backend/` — Django REST API, enquiry handling, and optional Oracle database support.

## Requirements

- Node.js 20 or later and npm.
- Python 3.10 or later.
- SQLite for local development (included with Python). Oracle is optional.

## Run locally

Start the backend in one terminal:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
python manage.py migrate
python manage.py runserver
```

On macOS or Linux, activate the virtual environment with `source .venv/bin/activate` and copy the example environment file with `cp .env.example .env`.

Start the frontend in a second terminal:

```powershell
cd frontend
npm ci
$env:VITE_API_URL = "http://127.0.0.1:8000"
npm run dev
```

Vite prints the local website URL (normally `http://localhost:5173`). The API origin must be set when the frontend and backend run on different local ports. For production builds with a separately hosted API, set `VITE_API_URL` to its origin (for example, `https://api.example.com`) before building.

## Configuration

Copy `backend/.env.example` to `backend/.env` and set the values needed for your environment. Important settings:

- `DJANGO_SECRET_KEY` — use a unique, random value outside local development.
- `DJANGO_DEBUG` — set to `0` in production.
- `ALLOWED_HOSTS` — comma-separated backend hostnames.
- `CORS_ORIGINS` — comma-separated, exact frontend origins, including the scheme.
- `DB_ENGINE` and `ORACLE_*` — configure these only when using Oracle; local development defaults to SQLite.
- `EMAIL_*` and `ENQUIRY_TO_EMAIL` — configure SMTP to deliver enquiry notifications. Without an SMTP host, email is written to the development console.
- `ANTHROPIC_API_KEY` — optional; keep this server-side and never add it to frontend variables.

The public site identity and links are in `frontend/src/siteConfig.js`. Review its sample contact details, social links, and CV before publishing.

## Production deployment

The frontend and Django API are separate deployable applications. Deploy the frontend from `frontend/` using `npm run build`; the generated static site is in `frontend/dist/`. `frontend/vercel.json` configures SPA route rewrites for Vercel. Deploy the Django API to a Python-capable host and configure its environment variables there; do not use Django's development server in production.

Set `VITE_API_URL` to the deployed API origin when frontend and API use different hosts, and set the API's `CORS_ORIGINS` to the deployed frontend origin. Configure production secrets and database credentials in the hosting provider's secret/environment settings, not in source files.

## Checks

From `frontend/`:

```sh
npm ci
npm run build
```

From `backend/`:

```sh
pip install -r requirements.txt
python manage.py check
python manage.py makemigrations --check --dry-run
```

GitHub Actions runs these checks on pushes and pull requests.

## Before making the repository public

- Review the website's public identity, links, and downloadable assets.
- Keep `.env` files, database files, local database scripts, and credentials out of Git.
- Rotate any credential that has ever been stored in a source or local setup script before using it in production.
- Configure deployment secrets on the hosting provider; never put server-side keys in `VITE_*` variables.

This repository does not currently include a license. Unless a license is added, normal copyright restrictions apply.
