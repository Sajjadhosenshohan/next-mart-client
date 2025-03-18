import { getCurrentUser } from "@/services/auth";
import { IUser } from "@/types/user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type TUserContextProps = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export const UserContext = createContext<TUserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = async () => {
    setUser(await getCurrentUser());
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, []);

  const contextInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  
  return (
    <UserContext.Provider value={contextInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};