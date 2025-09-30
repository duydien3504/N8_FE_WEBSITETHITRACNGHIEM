import React from 'react';

interface PreExamProps {
  exam: any;
  onStartExam: () => void;
}

export const PreExam: React.FC<PreExamProps> = ({ exam, onStartExam }) => {
  if (!exam) return null;

  const currentTime = new Date().toLocaleString('vi-VN');

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-0 d-flex align-items-center justify-content-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="me-3">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                CHUẨN BỊ THI
              </h3>
              <p className="mb-0 mt-2 opacity-90">Vui lòng đọc kỹ thông tin trước khi bắt đầu làm bài</p>
            </div>
            <div className="card-body p-5">
              {/* Exam Information */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="card bg-light h-100">
                    <div className="card-body text-center">
                      <h5 className="text-primary mb-3">📋 THÔNG TIN BÀI THI</h5>
                      <div className="mb-3">
                        <img 
                          src={exam.image} 
                          alt={exam.title}
                          className="img-fluid rounded"
                          style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <h6 className="text-dark">{exam.title}</h6>
                      <p className="text-muted small">{exam.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-light h-100">
                    <div className="card-body">
                      <h5 className="text-success mb-3 text-center">👤 THÔNG TIN THÍ SINH</h5>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Họ và tên:</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value="Nguyễn Văn A" 
                          readOnly 
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Mã thí sinh:</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value="TS001234" 
                          readOnly 
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Email:</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          value="nguyen.van.a@email.com" 
                          readOnly 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Details */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="text-center p-3 bg-primary text-white rounded">
                    <div className="h5 mb-1">{exam.duration}</div>
                    <small>Thời gian làm bài</small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-success text-white rounded">
                    <div className="h5 mb-1">{exam.questions}</div>
                    <small>Số câu hỏi</small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-warning text-white rounded">
                    <div className="h5 mb-1">{exam.passingScore}%</div>
                    <small>Điểm tối thiểu để đạt</small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-info text-white rounded">
                    <div className="h5 mb-1">{exam.difficulty}</div>
                    <small>Mức độ khó</small>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="card border-warning mb-4">
                <div className="card-header bg-warning text-dark">
                  <h5 className="mb-0 d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                      <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,19L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                    QUY ĐỊNH VÀ HƯỚNG DẪN
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-danger">Lưu ý quan trọng:</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <span className="text-danger me-2">•</span>
                          Không được thoát khỏi trình duyệt trong lúc thi
                        </li>
                        <li className="mb-2">
                          <span className="text-danger me-2">•</span>
                          Không được sử dụng tài liệu tham khảo
                        </li>
                        <li className="mb-2">
                          <span className="text-danger me-2">•</span>
                          Khi hết thời gian, bài thi sẽ tự động nộp
                        </li>
                        <li className="mb-2">
                          <span className="text-danger me-2">•</span>
                          Mỗi câu hỏi chỉ có 1 đáp án đúng
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-success">✅ Hướng dẫn làm bài:</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <span className="text-success me-2">•</span>
                          Đọc kỹ đề bài trước khi chọn đáp án
                        </li>
                        <li className="mb-2">
                          <span className="text-success me-2">•</span>
                          Có thể quay lại câu trước để kiểm tra
                        </li>
                        <li className="mb-2">
                          <span className="text-success me-2">•</span>
                          Sử dụng chức năng đánh dấu câu khó
                        </li>
                        <li className="mb-2">
                          <span className="text-success me-2">•</span>
                          Kiểm tra kỹ trước khi nộp bài
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Check */}
              <div className="card border-info mb-4">
                <div className="card-header bg-info text-white">
                  <h5 className="mb-0">🔧 KIỂM TRA HỆ THỐNG</h5>
                </div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-md-3">
                      <div className="p-2 text-center">
                        <div className="small">Kết nối mạng</div>
                        <div className="text-success small fw-bold">Tốt</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-2 text-center">
                        <div className="small">Trình duyệt</div>
                        <div className="text-success small fw-bold">Tương thích</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-2 text-center">
                        <div className="small">Camera/Mic</div>
                        <div className="text-success small fw-bold">Hoạt động</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-2 text-center">
                        <div className="small">Thời gian</div>
                        <div className="text-success small fw-bold">{currentTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div className="text-center">
                <div className="form-check d-inline-block mb-4">
                  <input className="form-check-input" type="checkbox" id="confirmRules" />
                  <label className="form-check-label fw-bold" htmlFor="confirmRules">
                    Tôi đã đọc và hiểu rõ các quy định thi, đồng ý tuân thủ các quy tắc trên
                  </label>
                </div>
                
                <div>
                  <button 
                    className="btn btn-success btn-lg px-5 py-3"
                    onClick={onStartExam}
                  >
                    BẮT ĐẦU THI
                  </button>
                </div>
                
                <div className="mt-3">
                  <small className="text-muted">
                    Nhấn "Bắt đầu thi" để tiến hành làm bài. Đồng hồ đếm ngược sẽ bắt đầu chạy.
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