import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExamDetailProps {
  exam: any;
  onBackToList: () => void;
  onRegister: () => void;
}

export const ExamDetail: React.FC<ExamDetailProps> = ({ exam, onBackToList, onRegister }) => {
  const [showPromoModal, setShowPromoModal] = useState(false);

  useEffect(() => {
    // Show promo modal after 2 seconds
    const timer = setTimeout(() => {
      setShowPromoModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!exam) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'info';
      case 'Expert': return 'danger';
      default: return 'secondary';
    }
  };

  const examSections = [
    { name: 'Lý thuyết cơ bản', questions: Math.floor(exam.questions * 0.3), time: '30 phút' },
    { name: 'Thực hành ứng dụng', questions: Math.floor(exam.questions * 0.4), time: '45 phút' },
    { name: 'Tình huống thực tế', questions: Math.floor(exam.questions * 0.3), time: '35 phút' }
  ];

  const requirements = [
    'Có kinh nghiệm cơ bản trong lĩnh vực',
    'Đã hoàn thành khóa học cơ bản (khuyến nghị)',
    'Máy tính có kết nối internet ổn định',
    'Trình duyệt web hiện đại (Chrome, Firefox, Safari)',
    'Thời gian tập trung ít nhất 2-3 giờ'
  ];

  const benefits = [
    'Chứng chỉ được công nhận toàn cầu',
    'Tăng cơ hội nghề nghiệp',
    'Xác nhận kiến thức chuyên môn',
    'Mạng lưới cộng đồng chuyên gia',
    'Cập nhật xu hướng công nghệ mới'
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button className="btn btn-outline-primary" onClick={onBackToList}>
              ← Quay lại danh sách
            </button>
            <span className="badge bg-primary fs-6">{exam.category}</span>
          </div>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <ImageWithFallback
                  src={exam.image}
                  alt={exam.title}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h2 className="card-title">{exam.title}</h2>
                    <span className={`badge bg-${getDifficultyColor(exam.difficulty)} fs-6`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  
                  <p className="card-text text-muted mb-4">{exam.description}</p>

                  {/* Exam Stats */}
                  <div className="row text-center mb-4">
                    <div className="col-md-3">
                      <div className="p-3 bg-light rounded">
                        <div className="fw-bold">{exam.duration}</div>
                        <small className="text-muted">Thời gian</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-3 bg-light rounded">
                        <div className="fw-bold">{exam.questions}</div>
                        <small className="text-muted">Câu hỏi</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-3 bg-light rounded">
                        <div className="fw-bold">{exam.passingScore}%</div>
                        <small className="text-muted">Điểm đạt</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-3 bg-light rounded">
                        <div className="fw-bold">{exam.price.toLocaleString('vi-VN')}đ</div>
                        <small className="text-muted">Phí thi</small>
                      </div>
                    </div>
                  </div>

                  {/* Exam Structure */}
                  <div className="mb-4">
                    <h5>📋 Cấu trúc bài thi</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="table-light">
                          <tr>
                            <th>Phần thi</th>
                            <th>Số câu hỏi</th>
                            <th>Thời gian</th>
                          </tr>
                        </thead>
                        <tbody>
                          {examSections.map((section, index) => (
                            <tr key={index}>
                              <td>{section.name}</td>
                              <td>{section.questions}</td>
                              <td>{section.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-4">
                    <h5>✅ Yêu cầu tham gia</h5>
                    <ul className="list-unstyled">
                      {requirements.map((req, index) => (
                        <li key={index} className="mb-2">
                          <span className="text-success me-2">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h5>🎖️ Lợi ích sau khi đạt chứng chỉ</h5>
                    <ul className="list-unstyled">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="mb-2">
                          <span className="text-primary me-2">★</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-header bg-primary text-white text-center">
                  <h5 className="mb-0">ĐĂNG KÝ THI NGAY</h5>
                </div>
                <div className="card-body">
                  <div className="text-center mb-4">
                    <div className="h2 text-primary">{exam.price.toLocaleString('vi-VN')}đ</div>
                    <small className="text-muted">Phí thi một lần</small>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>Thời gian thi:</small>
                      <small className="fw-bold">{exam.duration}</small>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <small>Số câu hỏi:</small>
                      <small className="fw-bold">{exam.questions}</small>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <small>Điểm đạt:</small>
                      <small className="fw-bold">{exam.passingScore}%</small>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small>Độ khó:</small>
                      <span className={`badge bg-${getDifficultyColor(exam.difficulty)} small`}>
                        {exam.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-lg" onClick={onRegister}>
                      Đăng ký thi ngay
                    </button>
                    <button className="btn btn-outline-info">
                      Tư vấn miễn phí
                    </button>
                  </div>

                  <div className="mt-3 p-3 bg-light rounded">
                    <div className="small text-center">
                      <div className="text-success fw-bold mb-1">🎁 Ưu đãi đặc biệt</div>
                      <div>Miễn phí thi lại nếu không đạt lần đầu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Modal */}
      {showPromoModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-warning text-dark border-0">
                <h5 className="modal-title d-flex align-items-center">
                  <span className="me-2">🎯</span>
                  ÔN TẬP HIỆU QUẢ - TĂNG TỶ LỆ ĐẬU
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowPromoModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4 text-center">
                <div className="mb-4">
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWR5JTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzU5MTQ0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Ôn tập VIP"
                      className="img-fluid rounded"
                      style={{ height: '120px', width: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <h4>Gói ôn tập VIP</h4>
                  <p className="text-muted">Tăng 85% cơ hội đạt chứng chỉ ngay lần đầu</p>
                </div>

                <div className="row text-center mb-4">
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <div className="fw-bold">500+</div>
                      <small>Câu hỏi thực tế</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <div className="fw-bold">20h</div>
                      <small>Video giảng dạy</small>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <div className="h4 text-danger">
                    <del>2,000,000đ</del>
                    <span className="ms-2 text-success">990,000đ</span>
                  </div>
                  <div className="text-success fw-bold">Tiết kiệm 50%!</div>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-warning btn-lg">
                    Mua gói ôn tập ngay
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPromoModal(false)}
                  >
                    Để sau
                  </button>
                </div>

                <div className="mt-3">
                  <small className="text-muted">
                    Ưu đãi có hạn - Chỉ còn 3 ngày
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};