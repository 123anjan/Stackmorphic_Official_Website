// Backend address. Local development uses VITE_API_URL from frontend/.env.
// The published site falls back to the live backend below.
export const API_BASE =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? "https://abconda.pythonanywhere.com" : "");
