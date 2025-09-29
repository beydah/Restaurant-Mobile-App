
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TopNav from '../../components/TopNav';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('E-posta adresi gerekli');
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Geçerli bir e-posta girin');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setMessage('Sıfırlama bağlantısı gönderildi. E-postanı kontrol et.');
    }, 2000);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <TopNav 
        title="" 
        showBack={true} 
        onBack={handleBack}
        rightElement={
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="https://readdy.ai/api/search-image?query=coffee%20cup%20icon%2C%20minimalist%20brown%20coffee%20logo%2C%20simple%20cafe%20emblem%2C%20warm%20amber%20tones%2C%20clean%20design%2C%20isolated%20on%20transparent%20background%2C%20centered%20composition&width=32&height=32&seq=logo_icon&orientation=squarish"
              alt="Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
        }
      />

      <div className="pt-20 pb-8 px-4 max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Şifremi mi unuttun?
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kayıtlı e-posta adresini gir, sana sıfırlama bağlantısı gönderelim.
          </p>
        </div>

        <Card className="p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-mail-line text-gray-400"></i>
              </div>
              <Input
                type="email"
                placeholder="E-posta adresi"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11"
                required
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                isSuccess 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className={`${isSuccess ? 'ri-check-line' : 'ri-error-warning-line'} text-sm`}></i>
                  </div>
                  {message}
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                  </div>
                  Gönderiliyor...
                </div>
              ) : (
                'Sıfırlama bağlantısı gönder'
              )}
            </Button>
          </form>
        </Card>

        <div className="text-center">
          <Link 
            href="/"
            className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
          >
            Giriş ekranına dön
          </Link>
        </div>

        {isSuccess && (
          <Card className="mt-6 p-4 bg-amber-50 border-amber-200">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-amber-100 rounded-full">
                <i className="ri-mail-check-line text-amber-600 text-xl"></i>
              </div>
              <p className="text-sm text-amber-800">
                E-postanda gelen bağlantıya tıklayarak yeni şifreni oluşturabilirsin.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
