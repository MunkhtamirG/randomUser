import { type } from "os";
import React from "react";

export interface User {
  name: { title: string; first: string; last: string };
  age: number;
  gender: string;
  email: string;
  phone: number;
  birthday: Date;
  dob: number | any;
  picture: { large: string };
}

export interface Fetchhook {
  data: User;
  loading: Boolean;
  error: string;
}

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export type Method = "GET" | "POST" | "DELETE" | "UPDATE";
