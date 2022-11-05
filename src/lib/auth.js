import { hash } from "bcryptjs";

export async function hashPassword(password) {
  const hp = await hash(password, 12);
  return hp;
}
