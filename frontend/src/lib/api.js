import { API_BASE as API } from "./apiBase.js";
const KEY = "client_token";

export const getToken = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};
export const setToken = (t) => {
  try {
    t ? localStorage.setItem(KEY, t) : localStorage.removeItem(KEY);
  } catch {}
};

export async function api(path, { method = "GET", body, auth = true } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (auth && token) headers.Authorization = "Token " + token;
  let res;
  try {
    res = await fetch(API + "/api" + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw { detail: "Could not reach the server." };
  }
  const data = res.status === 204 ? null : await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, ...data };
  return data;
}

export const errText = (e) =>
  e?.detail ||
  Object.entries(e || {})
    .filter(([k]) => k !== "status")
    .map(([, v]) => [].concat(v).join(" "))
    .join(" ") ||
  "Something went wrong.";
