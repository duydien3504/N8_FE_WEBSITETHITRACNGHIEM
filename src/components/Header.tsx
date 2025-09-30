import React from 'react';

interface HeaderProps {
  onCertificationClick: () => void;
  onStudyClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCertificationClick, onStudyClick, onHomeClick, onLoginClick, onRegisterClick }) => {
  return (
    <header className="header-gradient">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-4">
            <button 
              className="d-flex align-items-center bg-transparent border-0 text-white text-start"
              onClick={onHomeClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="me-3 d-flex align-items-center justify-content-center" 
                   style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <div>
                <h1 className="h4 mb-0 fw-bold">HỆ THỐNG LUYỆN THI</h1>
                <small className="opacity-85">TRẮC NGHIỆM TRỰC TUYẾN</small>
              </div>
            </button>
          </div>
          <div className="col-md-4">
            <div className="search-container-header">
              <div className="position-relative">
                <input 
                  type="search" 
                  className="form-control search-input-header" 
                  placeholder="Tìm kiếm bài thi..."
                />
                <button className="search-btn-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-end">
            <div className="d-flex align-items-center justify-content-end gap-2">
              <button 
                className="btn btn-outline-light btn-sm auth-btn"
                onClick={onLoginClick}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-1">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                ĐĂNG NHẬP
              </button>
              <button 
                className="btn btn-light btn-sm auth-btn"
                onClick={onRegisterClick}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-1">
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="modern-navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <ul className="nav-menu d-flex mb-0 list-unstyled navbar-nav-custom">
              <li className="nav-menu-item">
                <button 
                  className="nav-menu-link border-0 bg-transparent"
                  onClick={onHomeClick}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  TRANG CHỦ
                </button>
              </li>
              <li className="nav-menu-item">
                <button 
                  className="nav-menu-link border-0 bg-transparent"
                  onClick={onStudyClick}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  ÔN TẬP
                </button>
              </li>
              <li className="nav-menu-item">
                <button 
                  className="nav-menu-link border-0 bg-transparent"
                  onClick={onCertificationClick}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 4.24L10.2 9.13l-3.22.47 2.33 2.27-.55 3.21L12 13.77l3.24 1.31-.55-3.21 2.33-2.27-3.22-.47L12 6.24z"/>
                  </svg>
                  THI CHỨNG CHỈ
                </button>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  ÔN TẬP
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  VÍ TIỀN
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                  TÍNH ĐIỂM
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};