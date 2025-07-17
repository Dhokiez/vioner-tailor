// File: app/(auth)/layout.jsx - Versi yang Benar

export default function AuthLayout({ children }) {
  // Kita hanya membuat div pembungkus. Bukan html/body baru.
  return (
    <div className="auth-container">
      {children}
    </div>
  );
}