import React, { useState } from 'react';

interface RegisterProps {
  onBackToHome: () => void;
  onOTPRequest: (type: string, contact: string) => void;
  onLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onBackToHome, onOTPRequest, onLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
    captcha: ''
  });

  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger OTP verification
    onOTPRequest(loginType, formData.emailOrPhone);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM12 8C13.66 8 15 9.34 15 11V22H9V11C9 9.34 10.34 8 12 8Z"/>
                </svg>
                ĐĂNG KÝ TÀI KHOẢN
              </h4>
            </div>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <button 
                  className="btn btn-outline-secondary me-2"
                  onClick={onBackToHome}
                >
                  ← Về trang chủ
                </button>
                <span className="text-muted">Tạo tài khoản mới để sử dụng hệ thống</span>
              </div>

              {/* Login Type Selection */}
              <div className="mb-4">
                <div className="btn-group w-100" role="group">
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="loginType" 
                    id="email" 
                    checked={loginType === 'email'} 
                    onChange={() => setLoginType('email')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="email">
                    📧 Đăng ký bằng Email
                  </label>

                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="loginType" 
                    id="phone" 
                    checked={loginType === 'phone'} 
                    onChange={() => setLoginType('phone')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="phone">
                    📱 Đăng ký bằng SĐT
                  </label>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Họ và tên *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên đầy đủ"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Tên đăng nhập *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Tên đăng nhập (6-20 ký tự)"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    {loginType === 'email' ? 'Email *' : 'Số điện thoại *'}
                  </label>
                  <input
                    type={loginType === 'email' ? 'email' : 'tel'}
                    className="form-control"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    placeholder={loginType === 'email' ? 'Nhập địa chỉ email' : 'Nhập số điện thoại'}
                    required
                  />
                  <div className="form-text">
                    {loginType === 'email' 
                      ? 'Email sẽ được sử dụng để đăng nhập và khôi phục mật khẩu' 
                      : 'Số điện thoại sẽ được sử dụng để đăng nhập và nhận mã OTP'
                    }
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mật khẩu *</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Mật khẩu (ít nhất 6 ký tự)"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Xác nhận mật khẩu *</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Nhập lại mật khẩu"
                      required
                    />
                  </div>
                </div>



                {/* Terms */}
                <div className="mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label small" htmlFor="terms">
                      Tôi đồng ý với <a href="#" className="text-primary">Điều khoản sử dụng</a> và <a href="#" className="text-primary">Chính sách bảo mật</a>
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    📝 Đăng ký tài khoản
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-google login-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" className="me-2">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Đăng ký với Google
                  </button>
                </div>

                <div className="text-center mt-3">
                  <span className="text-muted">Đã có tài khoản? </span>
                  <button 
                    type="button" 
                    className="btn btn-link p-0 text-decoration-none"
                    onClick={onLogin}
                  >
                    Đăng nhập ngay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};