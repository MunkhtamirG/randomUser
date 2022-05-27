import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  useEffect,
} from "react";
import { User, UserContextType } from "../types/type";

const initial = {
  users: [],
  setUsers: () => {},
};

const UserContext: any = createContext<UserContextType>(initial);

export const useUser: () => UserContextType = () => {
  return useContext(UserContext);
};

const UserProvider: React.FC<ReactElement | any> = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
