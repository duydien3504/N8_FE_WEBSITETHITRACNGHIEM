import React, { useState } from 'react';

interface PaymentProps {
  exam: any;
  onPaymentSuccess: () => void;
  onCancel: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ exam, onPaymentSuccess, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    // Simulate payment process
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  if (!exam) return null;

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            {/* Payment Form */}
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0 d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                    THANH TOÁN PHÍ THI
                  </h5>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <button className="btn btn-outline-secondary me-2" onClick={onCancel}>
                      ← Quay lại
                    </button>
                    <span className="text-muted">Hoàn tất thanh toán để bắt đầu thi</span>
                  </div>

                  {/* Customer Information */}
                  <div className="mb-4">
                    <h6 className="mb-3">Thông tin thí sinh</h6>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Họ và tên *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={customerInfo.fullName}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên đầy đủ"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          placeholder="Nhập địa chỉ email"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Số điện thoại *</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          placeholder="Nhập số điện thoại"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">CMND/CCCD *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="idNumber"
                          value={customerInfo.idNumber}
                          onChange={handleInputChange}
                          placeholder="Nhập số CMND/CCCD"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-4">
                    <h6 className="mb-3">Phương thức thanh toán</h6>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="momo"
                            value="momo"
                            checked={paymentMethod === 'momo'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label d-flex align-items-center w-100" htmlFor="momo">
                            <div className="p-3 border rounded me-3 bg-light">
                              <div className="text-center">
                                <div style={{ color: '#d82d8b', fontSize: '24px', fontWeight: 'bold' }}>MoMo</div>
                                <small>Ví điện tử</small>
                              </div>
                            </div>
                            <div>
                              <div className="fw-bold">MoMo Wallet</div>
                              <small className="text-muted">Thanh toán nhanh chóng, bảo mật cao</small>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label small" htmlFor="terms">
                        Tôi đồng ý với <a href="#" className="text-primary">Điều khoản sử dụng</a> và 
                        <a href="#" className="text-primary"> Chính sách thanh toán</a>
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button 
                      className="btn btn-primary btn-lg"
                      onClick={handlePayment}
                    >
                      Thanh toán {exam.price.toLocaleString('vi-VN')}đ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h6 className="mb-0">Thông tin đơn hàng</h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <img 
                      src={exam.image} 
                      alt={exam.title}
                      className="img-fluid rounded"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <h6 className="mb-3">{exam.title}</h6>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Phí thi:</span>
                      <span className="fw-bold">{exam.price.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Phí xử lý:</span>
                      <span>0đ</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">Tổng cộng:</span>
                      <span className="fw-bold text-primary">{exam.price.toLocaleString('vi-VN')}đ</span>
                    </div>
                  </div>

                  <div className="bg-light p-3 rounded">
                    <div className="small">
                      <div className="fw-bold mb-2">Chi tiết bài thi:</div>
                      <div>Thời gian: {exam.duration}</div>
                      <div>Số câu: {exam.questions}</div>
                      <div>Điểm đạt: {exam.passingScore}%</div>
                      <div>Danh mục: {exam.category}</div>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-success text-white rounded text-center">
                    <div className="small">
                      <div className="fw-bold">🎁 Khuyến mãi</div>
                      <div>Miễn phí thi lại nếu không đạt</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="card shadow-sm mt-3">
                <div className="card-body text-center">
                  <div className="mb-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#28a745">
                      <path d="M18,8A6,6 0 0,0 12,2A6,6 0 0,0 6,8H4C3.45,8 3,8.45 3,9V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9C21,8.45 20.55,8 20,8H18M12,4A4,4 0 0,1 16,8H8A4,4 0 0,1 12,4Z"/>
                    </svg>
                  </div>
                  <h6 className="text-success">Thanh toán bảo mật</h6>
                  <small className="text-muted">
                    Thông tin thanh toán được mã hóa 256-bit SSL
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};