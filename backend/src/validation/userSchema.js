import { z } from "zod";

export const divisi = z.enum(["Web Development", "ITNSA", "Cyber Security"], {
  errorMap: () => ({ message: "Divisi tidak valid, pilih yang tersedia!" }),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Username harus diisi").max(255, "Username terlalu panjang"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password Minimal 6 karakter").max(255, "Password terlalu panjang"),
  divisi: divisi
})

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password Minimal 6 karakter").max(255, "Password terlalu panjang")
})