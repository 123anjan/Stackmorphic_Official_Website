import { createContext, useContext, useEffect, useState } from "react";
import { api, getToken, setToken } from "./api.js";

const Ctx = createContext(null);
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!getToken());

  useEffect(() => {
    if (!getToken()) return;
    api("/auth/me/")
      .then(setUser)
      .catch((e) => {
        if (e.status === 401) setToken(null);
      })
      .finally(() => setLoading(false));
  }, []);

  async function enter(path, body) {
    const data = await api(path, { method: "POST", body, auth: false });
    setToken(data.token);
    setUser(data.user);
  }
  const login = (email, password) => enter("/auth/login/", { email, password });
  const register = (name, email, password) =>
    enter("/auth/register/", { name, email, password });
  async function logout() {
    try {
      await api("/auth/logout/", { method: "POST" });
    } catch {}
    setToken(null);
    setUser(null);
  }

  return (
    <Ctx.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </Ctx.Provider>
  );
}
