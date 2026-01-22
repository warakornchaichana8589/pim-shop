# 🔐 Authentication System

> เอกสารระบบ Authentication ของ PIM Shop

**อัปเดตล่าสุด:** 2026-01-22

---

## 📋 สารบัญ

- [Overview](#overview)
- [Setup](#setup)
- [Providers](#providers)
- [Components](#components)
- [Usage](#usage)
- [API Reference](#api-reference)

---

## Overview

ระบบ Authentication ใช้ **NextAuth.js** (v4) ที่รองรับ:

- ✅ **Google OAuth** - เข้าสู่ระบบด้วย Google
- ✅ **Credentials** - เข้าสู่ระบบด้วย Email/Password
- ✅ **Session Management** - JWT-based sessions (30 วัน)
- ✅ **Login Modal** - Modal สำหรับ Login/Register/Reset Password
- ✅ **Protected Actions** - ต้อง login ก่อนสั่งซื้อ

---

## Setup

### 1. Install Dependencies

```bash
npm install next-auth
```

### 2. Environment Variables

สร้างไฟล์ `.env.local`:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Get Google OAuth Credentials

1. ไปที่ [Google Cloud Console](https://console.cloud.google.com/)
2. สร้าง Project ใหม่หรือเลือก Project ที่มีอยู่
3. ไปที่ **APIs & Services > Credentials**
4. สร้าง **OAuth 2.0 Client ID** (Web application)
5. เพิ่ม **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy Client ID และ Client Secret ไปใส่ในไฟล์ `.env.local`

---

## Providers

### Google Provider

```typescript
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
})
```

### Credentials Provider

```typescript
CredentialsProvider({
  name: "credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    // Mock user lookup - ในอนาคตใช้ database จริง
    const user = MOCK_USERS.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (!user) throw new Error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    return user;
  },
})
```

### Mock Users (Development)

| Email | Password | Name |
|-------|----------|------|
| `demo@pim-shop.com` | `demo1234` | Demo User |
| `test@test.com` | `test1234` | Test Customer |

---

## Components

### AuthModal

Modal component สำหรับ Login, Register และ Reset Password

**File:** `components/storefront/AuthModal.tsx`

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | แสดง/ซ่อน modal |
| `onClose` | `() => void` | callback เมื่อปิด modal |
| `onSuccess` | `() => void` | callback เมื่อ login สำเร็จ |
| `initialTab` | `"login" \| "register" \| "reset"` | tab เริ่มต้น |

**Usage:**

```tsx
import AuthModal from "@/components/storefront/AuthModal";

function MyComponent() {
  const [showAuth, setShowAuth] = useState(false);
  
  return (
    <AuthModal
      isOpen={showAuth}
      onClose={() => setShowAuth(false)}
      onSuccess={() => {
        setShowAuth(false);
        // do something after login
      }}
      initialTab="login"
    />
  );
}
```

### User Menu (Navbar)

แสดง User icon และ dropdown menu สำหรับ login/logout

- **Not logged in:** แสดง User icon → กดแล้วเปิด AuthModal
- **Logged in:** แสดง Avatar พร้อม initials → กดแล้วเปิด dropdown menu

---

## Usage

### Check Session

```tsx
import { useSession } from "next-auth/react";

function MyComponent() {
  const { data: session, status } = useSession();
  
  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Please login</p>;
  
  return <p>Welcome {session?.user?.name}!</p>;
}
```

### Sign In

```tsx
import { signIn } from "next-auth/react";

// Google login
signIn("google", { callbackUrl: "/" });

// Credentials login
signIn("credentials", {
  email: "demo@pim-shop.com",
  password: "demo1234",
  redirect: false,
});
```

### Sign Out

```tsx
import { signOut } from "next-auth/react";

signOut({ callbackUrl: "/" });
```

### Protected Actions (e.g., Checkout)

```tsx
function OrderModal({ isOpen, onClose }) {
  const { status } = useSession();
  
  // If not logged in, show auth modal instead
  if (isOpen && status === "unauthenticated") {
    return <AuthModal isOpen={true} onClose={onClose} />;
  }
  
  // Show order form for logged in users
  return <OrderForm />;
}
```

---

## API Reference

### NextAuth Route

**Endpoint:** `/api/auth/[...nextauth]`

Handles all NextAuth.js routes:

- `GET /api/auth/signin` - Sign in page
- `POST /api/auth/signin/:provider` - Sign in with provider
- `GET /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get session
- `GET /api/auth/csrf` - Get CSRF token
- `GET /api/auth/providers` - List providers
- `GET /api/auth/callback/:provider` - OAuth callback

### Session Object

```typescript
interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    image?: string | null;
  };
  expires: string; // ISO date string
}
```

---

## Security Notes

1. **NEXTAUTH_SECRET**: ต้องเปลี่ยนเป็น random string ที่แข็งแกร่งใน production
2. **Credentials Provider**: ใน production ต้องใช้ database จริงและ hash passwords
3. **HTTPS**: ใน production ต้องใช้ HTTPS
4. **Rate Limiting**: ควรเพิ่ม rate limiting สำหรับ login attempts

---

## File Structure

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts    # NextAuth configuration
│   └── providers.tsx           # SessionProvider wrapper
├── components/
│   └── storefront/
│       ├── AuthModal.tsx       # Login/Register/Reset modal
│       └── Navbar.tsx          # User icon & dropdown
├── styles/
│   └── storefront/
│       └── AuthModal.styles.ts # Auth component styles
├── types/
│   └── next-auth.d.ts          # NextAuth type extensions
└── .env.example                # Environment template
```

---

*Document Version: 1.0.0*
