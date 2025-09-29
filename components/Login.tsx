
'use client';

import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  const handleSocialLogin = (provider: string) => {
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-sm mx-auto px-6 py-8">
        <div className="text-center mb-12 pt-16">
          <img 
            src="https://readdy.ai/api/search-image?query=Coffee%20brand%20logo%20with%20text%2C%20Hali%C3%A7%20Kahve%20typography%2C%20elegant%20coffee%20cup%20icon%2C%20golden%20brown%20colors%2C%20premium%20branding%20design%2C%20clean%20professional%20style%2C%20isolated%20background&width=200&height=80&seq=logowithtext&orientation=landscape"
            alt="Haliç Kahve" 
            className="h-16 mx-auto mb-6 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Hoş Geldiniz' : 'Hesap Oluşturun'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          {!isLogin && (
            <Input
              type="text"
              placeholder="Ad Soyad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          
          <Input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <Input
              type="password"
              placeholder="Şifre Tekrar"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <Button type="submit" className="w-full" size="lg">
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </Button>
        </form>

        {isLogin && (
          <div className="text-center mb-6">
            <button className="text-amber-600 text-sm font-medium">
              Şifremi Unuttum
            </button>
          </div>
        )}

        <div className="space-y-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">veya</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full mb-3"
            onClick={() => handleSocialLogin('google')}
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <i className="ri-google-fill text-lg"></i>
            </div>
            Google ile {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>

          <Button 
            variant="outline" 
            className="w-full mb-3"
            onClick={() => handleSocialLogin('apple')}
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <i className="ri-apple-fill text-lg"></i>
            </div>
            Apple ile {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => handleSocialLogin('facebook')}
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <i className="ri-facebook-fill text-lg"></i>
            </div>
            Facebook ile {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-amber-600 font-medium ml-1"
            >
              {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
