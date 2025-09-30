import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient text-white">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3 d-flex align-items-center justify-content-center" 
                   style={{ width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <div>
                <h5 className="mb-1">HỆ THỐNG LUYỆN THI</h5>
                <small className="opacity-85">TRẮC NGHIỆM TRỰC TUYẾN</small>
              </div>
            </div>
            <p className="opacity-85 mb-3">
              Nền tảng luyện thi trắc nghiệm trực tuyến hàng đầu Việt Nam với hàng nghìn câu hỏi chất lượng cao và hệ thống chấm điểm tự động.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-white opacity-75">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.465-1.4-.635-2.274-2.611-2.274-4.208 0-3.47 2.523-6.274 7.262-6.274 3.805 0 6.762 2.718 6.762 6.35 0 3.78-2.38 6.828-5.68 6.828-1.11 0-2.157-.578-2.514-1.342l-.686 2.634c-.24.931-.888 2.097-1.321 2.81C9.537 23.812 10.747 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Thi thử</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white opacity-75">Toán học</a></li>
              <li><a href="#" className="text-white opacity-75">Tiếng Anh</a></li>
              <li><a href="#" className="text-white opacity-75">Vật lý</a></li>
              <li><a href="#" className="text-white opacity-75">Hóa học</a></li>
              <li><a href="#" className="text-white opacity-75">Sinh học</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Chứng chỉ</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white opacity-75">TOEIC</a></li>
              <li><a href="#" className="text-white opacity-75">IELTS</a></li>
              <li><a href="#" className="text-white opacity-75">AWS</a></li>
              <li><a href="#" className="text-white opacity-75">Microsoft</a></li>
              <li><a href="#" className="text-white opacity-75">Google</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Hỗ trợ</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white opacity-75">Hướng dẫn</a></li>
              <li><a href="#" className="text-white opacity-75">FAQ</a></li>
              <li><a href="#" className="text-white opacity-75">Liên hệ</a></li>
              <li><a href="#" className="text-white opacity-75">Báo lỗi</a></li>
              <li><a href="#" className="text-white opacity-75">Phản hồi</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Liên hệ</h6>
            <div className="text-white opacity-75">
              <div className="mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                support@onthitracnghiem.online
              </div>
              <div className="mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                1900 1234
              </div>
              <div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Hà Nội, Việt Nam
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-top border-white border-opacity-25">
        <div className="container-fluid py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 opacity-75">
                © 2024 OnThiTracNghiem.Online. Tất cả quyền được bảo lưu.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex justify-content-end gap-4">
                <a href="#" className="text-white opacity-75 text-decoration-none">Điều khoản</a>
                <a href="#" className="text-white opacity-75 text-decoration-none">Bảo mật</a>
                <a href="#" className="text-white opacity-75 text-decoration-none">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};