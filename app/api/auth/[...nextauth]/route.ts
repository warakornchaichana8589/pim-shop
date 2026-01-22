import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock users database - ในอนาคตเปลี่ยนเป็น database จริง
const MOCK_USERS = [
  {
    id: "1",
    email: "demo@pim-shop.com",
    password: "demo1234",
    name: "Demo User",
    image: null,
    role: "admin",
  },
  {
    id: "2",
    email: "test@test.com",
    password: "test1234",
    name: "Test Customer",
    image: null,
    role: "user",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("กรุณากรอกอีเมลและรหัสผ่าน");
        }

        // Mock user lookup - ในอนาคตใช้ database จริง
        // หมายเหตุ: ใน production ต้องมีการ hash รหัสผ่านด้วย bcrypt
        const user = MOCK_USERS.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password,
        );

        if (!user) {
          throw new Error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // เมื่อ login ครั้งแรก ข้อมูล user จะถูกส่งมาให้เก็บลงใน token (JWT)
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      // ดึงข้อมูลจาก token มาใส่ใน session เพื่อให้ client เข้าถึงได้เฉพาะที่จำเป็น
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  // ลบ default secret เพื่อความปลอดภัย บังคับให้ใช้จาก .env เท่านั้น
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
