"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { signIn } from "next-auth/react";
import * as S from "@/styles/storefront/AuthModal.styles";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialTab?: "login" | "register" | "reset";
}

export default function AuthModal({ 
  isOpen, 
  onClose, 
  onSuccess,
  initialTab = "login" 
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "reset">(initialTab);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Login form
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  
  // Register form
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });
  
  // Reset password form
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: loginData.email,
        password: loginData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        onSuccess?.();
        onClose();
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      setIsLoading(false);
      return;
    }

    try {
      // Mock registration - ในอนาคตเรียก API จริง
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Auto login after register
      const result = await signIn("credentials", {
        email: registerData.email,
        password: registerData.password,
        redirect: false,
      });

      if (result?.ok) {
        onSuccess?.();
        onClose();
      } else {
        // Registration successful, show login tab
        setActiveTab("login");
        setLoginData({ email: registerData.email, password: "" });
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Mock reset password - ในอนาคตเรียก API จริง
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResetSent(true);
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setError("");
    setActiveTab("login");
    setLoginData({ email: "", password: "" });
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "" });
    setResetEmail("");
    setResetSent(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <S.OverlayContainer>
          <S.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <S.ModalContent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <S.ModalHeader>
              <S.HeaderContent>
                <S.HeaderTitle>
                  {activeTab === "login" && "เข้าสู่ระบบ"}
                  {activeTab === "register" && "สมัครสมาชิก"}
                  {activeTab === "reset" && "รีเซ็ตรหัสผ่าน"}
                </S.HeaderTitle>
                <S.HeaderSubtitle>
                  {activeTab === "login" && "ยินดีต้อนรับกลับมา"}
                  {activeTab === "register" && "สร้างบัญชีใหม่เพื่อช้อปปิ้ง"}
                  {activeTab === "reset" && "เราจะส่งลิงก์รีเซ็ตไปยังอีเมลของคุณ"}
                </S.HeaderSubtitle>
              </S.HeaderContent>
              <S.CloseButton onClick={handleClose}>
                <X size={20} />
              </S.CloseButton>
            </S.ModalHeader>

            {activeTab !== "reset" && (
              <S.TabsContainer>
                <S.Tab 
                  $active={activeTab === "login"} 
                  onClick={() => { setActiveTab("login"); setError(""); }}
                >
                  เข้าสู่ระบบ
                </S.Tab>
                <S.Tab 
                  $active={activeTab === "register"} 
                  onClick={() => { setActiveTab("register"); setError(""); }}
                >
                  สมัครสมาชิก
                </S.Tab>
              </S.TabsContainer>
            )}

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            {/* Login Form */}
            {activeTab === "login" && (
              <S.FormContainer onSubmit={handleCredentialsLogin}>
                <S.GoogleButton type="button" onClick={handleGoogleLogin} disabled={isLoading}>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  เข้าสู่ระบบด้วย Google
                </S.GoogleButton>

                <S.Divider>หรือ</S.Divider>

                <S.FieldGroup>
                  <S.Label>อีเมล</S.Label>
                  <S.Input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.FieldGroup>
                  <S.Label>รหัสผ่าน</S.Label>
                  <S.Input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.LinksRow>
                  <S.TextLink type="button" onClick={() => { setActiveTab("reset"); setError(""); }}>
                    ลืมรหัสผ่าน?
                  </S.TextLink>
                </S.LinksRow>

                <S.SubmitButton type="submit" disabled={isLoading}>
                  {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                </S.SubmitButton>
              </S.FormContainer>
            )}

            {/* Register Form */}
            {activeTab === "register" && (
              <S.FormContainer onSubmit={handleRegister}>
                <S.GoogleButton type="button" onClick={handleGoogleLogin} disabled={isLoading}>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  สมัครด้วย Google
                </S.GoogleButton>

                <S.Divider>หรือ</S.Divider>

                <S.FieldGroup>
                  <S.Label>ชื่อ-นามสกุล</S.Label>
                  <S.Input
                    type="text"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    placeholder="สมชาย ใจดี"
                    required
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.FieldGroup>
                  <S.Label>อีเมล</S.Label>
                  <S.Input
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.FieldGroup>
                  <S.Label>รหัสผ่าน</S.Label>
                  <S.Input
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    placeholder="อย่างน้อย 8 ตัวอักษร"
                    required
                    minLength={8}
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.FieldGroup>
                  <S.Label>ยืนยันรหัสผ่าน</S.Label>
                  <S.Input
                    type="password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                    placeholder="กรอกรหัสผ่านอีกครั้ง"
                    required
                    disabled={isLoading}
                  />
                </S.FieldGroup>

                <S.SubmitButton type="submit" disabled={isLoading}>
                  {isLoading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
                </S.SubmitButton>
              </S.FormContainer>
            )}

            {/* Reset Password Form */}
            {activeTab === "reset" && (
              <S.FormContainer onSubmit={handleResetPassword}>
                {!resetSent ? (
                  <>
                    <S.FieldGroup>
                      <S.Label>อีเมล</S.Label>
                      <S.Input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="example@email.com"
                        required
                        disabled={isLoading}
                      />
                    </S.FieldGroup>

                    <S.SubmitButton type="submit" disabled={isLoading}>
                      {isLoading ? "กำลังส่ง..." : "ส่งลิงก์รีเซ็ต"}
                    </S.SubmitButton>

                    <S.FooterText>
                      จำรหัสผ่านได้แล้ว?{" "}
                      <button type="button" onClick={() => { setActiveTab("login"); setError(""); }}>
                        เข้าสู่ระบบ
                      </button>
                    </S.FooterText>
                  </>
                ) : (
                  <>
                    <S.HeaderSubtitle style={{ textAlign: "center", marginBottom: "1rem" }}>
                      ✅ ส่งลิงก์รีเซ็ตรหัสผ่านไปที่ {resetEmail} แล้ว
                      <br />
                      กรุณาตรวจสอบอีเมลของคุณ
                    </S.HeaderSubtitle>
                    <S.SubmitButton type="button" onClick={() => { setActiveTab("login"); setResetSent(false); }}>
                      กลับไปเข้าสู่ระบบ
                    </S.SubmitButton>
                  </>
                )}
              </S.FormContainer>
            )}
          </S.ModalContent>
        </S.OverlayContainer>
      )}
    </AnimatePresence>
  );
}
