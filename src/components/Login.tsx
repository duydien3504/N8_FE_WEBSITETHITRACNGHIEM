import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginProps {
  onBackToHome: () => void;
  onOTPRequest: (type: string, contact: string) => void;
  onForgotPassword: () => void;
  onRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ 
  onBackToHome, 
  onOTPRequest, 
  onForgotPassword,
  onRegister 
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send OTP for verification
    onOTPRequest('email', formData.email);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">ĐĂNG NHẬP TÀI KHOẢN</h4>
            </div>
            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập địa chỉ email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Nhập mật khẩu"
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label small" htmlFor="rememberMe">
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-link p-0 small text-decoration-none"
                    onClick={onForgotPassword}
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary login-main-btn">
                    Đăng nhập
                  </button>
                </div>

                <div className="text-center mb-3">
                  <span className="text-muted small">hoặc</span>
                </div>

                <div className="d-grid mb-4">
                  <button type="button" className="btn btn-google login-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" className="me-2">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Đăng nhập với Google
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-muted">
                    Chưa có tài khoản? 
                    <button 
                      type="button" 
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={onRegister}
                    >
                      Đăng ký ngay
                    </button>
                  </span>
                </div>
              </form>

              <div className="text-center mt-3">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={onBackToHome}
                >
                  Về trang chủ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};