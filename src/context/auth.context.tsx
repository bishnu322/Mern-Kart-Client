/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type IUser } from "../types/global.types";
import { profileApi } from "../api/auth.api";

interface IContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  logout: () => void;
}

const initial_value: IContext = {
  user: null,
  setUser: () => {},
  isLoading: true,
  logout: () => {},
};

const AuthContext = createContext<IContext>(initial_value);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await profileApi();
        console.log(data);
        if (data && typeof data === "object" && "data" in data) {
          setUser((data as { data: IUser }).data);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  const logout = (cb = () => {}) => {
    localStorage.removeItem("user");
    setUser(null);
    cb();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  if (!AuthContext) {
    console.log("useAuth hook must used inside auth provide");
  }

  return useContext(AuthContext);
};

export default AuthProvider;
