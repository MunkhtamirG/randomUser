import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
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

const UserProvider: React.FC<ReactElement> | any = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => setUsers(res.results));
  }, []);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;