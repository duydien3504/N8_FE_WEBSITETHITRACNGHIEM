import React, { useState, useEffect } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ExamTakingProps {
  exam: any;
  onSubmitExam: (result: any) => void;
}

export const ExamTaking: React.FC<ExamTakingProps> = ({ exam, onSubmitExam }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(exam?.duration === '60 phút' ? 3600 : exam?.duration === '90 phút' ? 5400 : 7200); // Convert to seconds
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [reportData, setReportData] = useState({
    description: '',
    attachments: null as FileList | null
  });

  // Mock questions data
  const questions: Question[] = Array.from({ length: exam?.questions || 50 }, (_, i) => ({
    id: i + 1,
    question: `Câu hỏi ${i + 1}: Đây là nội dung câu hỏi số ${i + 1} trong bài thi ${exam?.title}. Hãy chọn đáp án đúng nhất từ các phương án dưới đây?`,
    options: [
      `Đáp án A cho câu ${i + 1}`,
      `Đáp án B cho câu ${i + 1}`,
      `Đáp án C cho câu ${i + 1}`,
      `Đáp án D cho câu ${i + 1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4)
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleQuestionNavigation = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const toggleQuestionFlag = (questionIndex: number) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionIndex)) {
        newSet.delete(questionIndex);
      } else {
        newSet.add(questionIndex);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter((q, index) => answers[index] === q.correctAnswer).length;
    const totalQuestions = questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= exam.passingScore;

    const result = {
      score,
      correctAnswers,
      totalQuestions,
      passed,
      answers,
      timeSpent: (exam?.duration === '60 phút' ? 3600 : exam?.duration === '90 phút' ? 5400 : 7200) - timeRemaining
    };

    onSubmitExam(result);
  };

  const handleReport = () => {
    console.log('Report submitted:', reportData);
    setShowReportModal(false);
  };

  const getQuestionStatus = (index: number) => {
    if (answers[index] !== undefined) return 'answered';
    if (flaggedQuestions.has(index)) return 'flagged';
    return 'unanswered';
  };

  const getQuestionStatusColor = (status: string) => {
    switch (status) {
      case 'answered': return 'success';
      case 'flagged': return 'warning';
      default: return 'outline-secondary';
    }
  };

  if (!exam) return null;

  return (
    <div className="exam-taking-container d-flex vh-100">
      {/* Sidebar */}
      <div className="exam-sidebar bg-light border-end" style={{ width: '300px', overflow: 'auto' }}>
        <div className="p-3 border-bottom">
          <h6 className="mb-0 text-center">THÔNG TIN BÀI THI</h6>
        </div>
        
        {/* Timer */}
        <div className="p-3 text-center border-bottom">
          <div className="mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#dc3545">
              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
            </svg>
          </div>
          <div className="h5 text-danger mb-0">{formatTime(timeRemaining)}</div>
          <small className="text-muted">Thời gian còn lại</small>
        </div>

        {/* Progress */}
        <div className="p-3 border-bottom">
          <div className="d-flex justify-content-between mb-2">
            <small>Tiến độ:</small>
            <small>{Object.keys(answers).length}/{questions.length}</small>
          </div>
          <div className="progress" style={{ height: '6px' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Grid */}
        <div className="p-3">
          <h6 className="mb-3">DANH SÁCH CÂU HỎI</h6>
          <div className="row g-2">
            {questions.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <div key={index} className="col-3">
                  <button
                    className={`btn btn-sm w-100 btn-${getQuestionStatusColor(status)} ${
                      currentQuestion === index ? 'border-primary border-2' : ''
                    }`}
                    onClick={() => handleQuestionNavigation(index)}
                  >
                    {index + 1}
                    {flaggedQuestions.has(index) && (
                      <span className="text-warning ms-1">🚩</span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="p-3 border-top mt-auto">
          <div className="d-grid gap-2">
            <button 
              className="btn btn-danger"
              onClick={() => setShowReportModal(true)}
            >
              Báo cáo sự cố
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => setShowSubmitConfirm(true)}
            >
              Nộp bài
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="exam-content flex-grow-1 d-flex flex-column">
        <div className="p-4 border-bottom bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">{exam.title}</h5>
            <div className="d-flex align-items-center gap-3">
              <span className="badge bg-info">
                Câu {currentQuestion + 1}/{questions.length}
              </span>
              <button
                className={`btn btn-sm btn-outline-warning ${flaggedQuestions.has(currentQuestion) ? 'active' : ''}`}
                onClick={() => toggleQuestionFlag(currentQuestion)}
              >
                Đánh dấu
              </button>
            </div>
          </div>
        </div>

        <div className="flex-grow-1 p-4 bg-light overflow-auto">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              {/* Question */}
              <div className="mb-4">
                <div className="p-4 bg-white border rounded">
                  <h5 className="mb-3">
                    Câu {currentQuestion + 1}: 
                  </h5>
                  <p className="mb-0 lead">{questions[currentQuestion]?.question}</p>
                </div>
              </div>

              {/* Options */}
              <div className="flex-grow-1">
                <div className="row">
                  {questions[currentQuestion]?.options.map((option, index) => (
                    <div key={index} className="col-12 mb-3">
                      <div 
                        className={`card option-card ${answers[currentQuestion] === index ? 'border-primary bg-primary bg-opacity-10' : 'border-secondary'}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`question-${currentQuestion}`}
                              id={`option-${index}`}
                              checked={answers[currentQuestion] === index}
                              onChange={() => handleAnswerSelect(index)}
                            />
                            <label className="form-check-label w-100" htmlFor={`option-${index}`}>
                              <span className="fw-bold me-2">{String.fromCharCode(65 + index)}.</span>
                              {option}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-outline-secondary"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  style={{ minWidth: '120px' }}
                >
                  Câu trước
                </button>
                <button
                  className="btn btn-outline-secondary"
                  disabled={currentQuestion === questions.length - 1}
                  onClick={() => setCurrentQuestion(prev => prev + 1)}
                  style={{ minWidth: '120px' }}
                >
                  Câu tiếp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">🚨 BÁO CÁO SỰ CỐ</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowReportModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Mô tả sự cố *</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Vui lòng mô tả chi tiết sự cố bạn gặp phải..."
                    value={reportData.description}
                    onChange={(e) => setReportData({...reportData, description: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Đính kèm ảnh/video (tùy chọn)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => setReportData({...reportData, attachments: e.target.files})}
                  />
                  <div className="form-text">Chỉ chấp nhận file ảnh (.jpg, .png) hoặc video (.mp4, .mov)</div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowReportModal(false)}
                >
                  Hủy bỏ
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={handleReport}
                >
                  📤 Gửi báo cáo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-warning text-dark">
                <h5 className="modal-title">⚠️ XÁC NHẬN NỘP BÀI</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowSubmitConfirm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc chắn muốn nộp bài thi không?</p>
                <div className="row text-center mb-3">
                  <div className="col-4">
                    <div className="p-3 bg-light rounded">
                      <div className="fw-bold text-success">{Object.keys(answers).length}</div>
                      <small>Đã trả lời</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 bg-light rounded">
                      <div className="fw-bold text-warning">{flaggedQuestions.size}</div>
                      <small>Đánh dấu</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 bg-light rounded">
                      <div className="fw-bold text-danger">{questions.length - Object.keys(answers).length}</div>
                      <small>Chưa trả lời</small>
                    </div>
                  </div>
                </div>
                <p className="text-muted">
                  <strong>Lưu ý:</strong> Sau khi nộp bài, bạn sẽ không thể thay đổi câu trả lời.
                </p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowSubmitConfirm(false)}
                >
                  Tiếp tục làm bài
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  📤 Nộp bài ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};