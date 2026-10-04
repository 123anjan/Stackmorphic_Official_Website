# Freelance developer site
- `frontend/` React (Vite) + Tailwind. Edit all identity text in `src/siteConfig.js`.
- `backend/` Django REST. Saves enquiries to the database, then emails you.
Run: `cd frontend && npm i && npm run dev`; `cd backend && pip install -r requirements.txt && cp .env.example .env && python manage.py migrate && python manage.py runserver`
Hosting: frontend on Vercel/Netlify; Django needs a Python host. Set VITE_API_URL to the Django URL.
