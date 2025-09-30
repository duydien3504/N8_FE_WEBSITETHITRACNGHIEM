import React from 'react';

interface ExamResultProps {
  exam: any;
  result: any;
  onBackToHome: () => void;
}

export const ExamResult: React.FC<ExamResultProps> = ({ exam, result, onBackToHome }) => {
  if (!exam || !result) return null;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Result Header */}
          <div className="text-center mb-5">
            <div className="mb-4">
              {result.passed ? (
                <div className="display-1 text-success">🎉</div>
              ) : (
                <div className="display-1 text-danger">😢</div>
              )}
            </div>
            <h2 className={`mb-3 ${result.passed ? 'text-success' : 'text-danger'}`}>
              {result.passed ? 'CHÚC MỪNG! BẠN ĐÃ ĐẠT' : 'RẤT TIẾC! BẠN CHƯA ĐẠT'}
            </h2>
            <h4 className="text-muted">{exam.title}</h4>
          </div>

          <div className="row">
            {/* Score Card */}
            <div className="col-lg-8 mb-4">
              <div className="card shadow-lg border-0">
                <div className={`card-header ${result.passed ? 'bg-success' : 'bg-danger'} text-white text-center py-4`}>
                  <h3 className="mb-0">KẾT QUẢ BÀI THI</h3>
                </div>
                <div className="card-body p-5">
                  {/* Score Display */}
                  <div className="text-center mb-5">
                    <div className={`display-2 fw-bold ${result.passed ? 'text-success' : 'text-danger'} mb-3`}>
                      {result.score}%
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="progress mb-3" style={{ height: '20px' }}>
                          <div 
                            className={`progress-bar ${result.passed ? 'bg-success' : 'bg-danger'}`}
                            style={{ width: `${result.score}%` }}
                          ></div>
                        </div>
                        <p className="text-muted">
                          Điểm tối thiểu để đạt: {exam.passingScore}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Results */}
                  <div className="row text-center mb-4">
                    <div className="col-md-3">
                      <div className="p-4 bg-light rounded">
                        <div className="h3 text-success mb-2">✅</div>
                        <div className="h4 text-success">{result.correctAnswers}</div>
                        <div className="text-muted">Câu đúng</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-4 bg-light rounded">
                        <div className="h3 text-danger mb-2">❌</div>
                        <div className="h4 text-danger">{result.totalQuestions - result.correctAnswers}</div>
                        <div className="text-muted">Câu sai</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-4 bg-light rounded">
                        <div className="h3 text-info mb-2">📝</div>
                        <div className="h4 text-info">{result.totalQuestions}</div>
                        <div className="text-muted">Tổng câu</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-4 bg-light rounded">
                        <div className="h3 text-warning mb-2">⏱️</div>
                        <div className="h4 text-warning">{formatTime(result.timeSpent)}</div>
                        <div className="text-muted">Thời gian</div>
                      </div>
                    </div>
                  </div>



                  {/* Action Buttons */}
                  <div className="text-center">
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="d-grid gap-3">
                          {result.passed && (
                            <button 
                              className="btn btn-success btn-lg"
                              onClick={handlePrintCertificate}
                            >
                              IN CHỨNG CHỈ
                            </button>
                          )}
                          <button 
                            className="btn btn-primary"
                            onClick={onBackToHome}
                          >
                            Về trang chủ
                          </button>
                          {!result.passed && (
                            <button className="btn btn-warning">
                              Thi lại miễn phí
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="col-lg-4">
              {/* Certificate Preview */}
              {result.passed && (
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-warning text-dark text-center">
                    <h6 className="mb-0">🏆 XEM TRƯỚC CHỨNG CHỈ</h6>
                  </div>
                  <div className="card-body text-center">
                    <div className="certificate-preview p-4 border rounded bg-light">
                      <div className="mb-3">
                        <img 
                          src={exam.image} 
                          alt="Certificate"
                          className="img-fluid rounded"
                          style={{ height: '80px', objectFit: 'cover' }}
                        />
                      </div>
                      <h6 className="text-primary">CERTIFICATE OF ACHIEVEMENT</h6>
                      <hr />
                      <p className="small mb-2">This certifies that</p>
                      <p className="fw-bold">Nguyễn Văn A</p>
                      <p className="small mb-2">has successfully completed</p>
                      <p className="fw-bold small">{exam.title}</p>
                      <p className="small text-muted">Score: {result.score}%</p>
                      <p className="small text-muted">{new Date().toLocaleDateString('vi-VN')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Exam Info */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-info text-white text-center">
                  <h6 className="mb-0">📋 THÔNG TIN BÀI THI</h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <img 
                      src={exam.image} 
                      alt={exam.title}
                      className="img-fluid rounded"
                      style={{ height: '100px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h6>{exam.title}</h6>
                  <div className="small text-muted mb-2">
                    <div className="d-flex justify-content-between">
                      <span>Danh mục:</span>
                      <span>{exam.category}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Độ khó:</span>
                      <span>{exam.difficulty}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Thời gian:</span>
                      <span>{exam.duration}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Điểm đạt:</span>
                      <span>{exam.passingScore}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="card shadow-sm">
                <div className="card-header bg-secondary text-white text-center">
                  <h6 className="mb-0">🎯 BƯỚC TIẾP THEO</h6>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary btn-sm">
                      📚 Xem các khóa học khác
                    </button>
                    <button className="btn btn-outline-success btn-sm">
                      🔍 Tìm chứng chỉ liên quan
                    </button>
                    <button className="btn btn-outline-info btn-sm">
                      💬 Chia sẻ kết quả
                    </button>
                    <button className="btn btn-outline-warning btn-sm">
                      📊 Xem thống kê chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="alert alert-info">
                <div className="row">
                  <div className="col-md-6">
                    <h6>📧 Email xác nhận</h6>
                    <p className="mb-0 small">Kết quả chi tiết sẽ được gửi về email trong vòng 15 phút.</p>
                  </div>
                  <div className="col-md-6">
                    <h6>🏆 Chứng chỉ điện tử</h6>
                    <p className="mb-0 small">{result.passed ? 'Chứng chỉ sẽ được gửi trong 24h.' : 'Thi đạt để nhận chứng chỉ.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};