import { AuthProvider } from '@/core/context/auth_context';
import { F_Error_Boundary } from '@/core/context/error_boundary';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased">
        <F_Error_Boundary>
          <AuthProvider>
            {children}
          </AuthProvider>
        </F_Error_Boundary>
      </body>
    </html>
  );
}