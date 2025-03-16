export interface IUser {
  email: string;
  hasShop?: false;
  isActive?: true;
  name: string;
  role: "user" | "admin";
  userId: string;
  iat?: number;
  exp?: number;
}
