// 예시 코드입니다. 전부 수정하셔도 좋습니다.
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem("accessToken");
      },
    }),
    { name: "AuthStore" }
  )
);
