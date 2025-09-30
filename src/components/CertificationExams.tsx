import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Exam {
  id: string;
  title: string;
  provider: string;
  category: string;
  level: string;
  duration: string;
  questions: number;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  image: string;
  description: string;
  features: string[];
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  passingScore: number;
  validPeriod: string;
}

interface CertificationExamsProps {
  onExamSelect: (exam: Exam) => void;
}

export const CertificationExams: React.FC<CertificationExamsProps> = ({ onExamSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showStudyModal, setShowStudyModal] = useState(false);
  const itemsPerPage = 6;

  // Auto show study modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStudyModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const exams: Exam[] = [
    {
      id: 'aws-cloud-practitioner',
      title: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      category: 'Cloud Computing',
      level: 'Entry',
      duration: '90 phút',
      questions: 65,
      price: 1200000,
      originalPrice: 1500000,
      rating: 4.8,
      students: 15420,
      image: 'https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTIyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Chứng chỉ nền tảng về dịch vụ đám mây AWS dành cho người mới bắt đầu',
      features: ['Tài liệu học tập', 'Video giảng dạy', 'Đề thi thử', 'Hỗ trợ 24/7'],
      difficulty: 'Cơ bản',
      passingScore: 70,
      validPeriod: '3 năm'
    },
    {
      id: 'aws-solutions-architect',
      title: 'AWS Certified Solutions Architect - Associate',
      provider: 'Amazon Web Services',
      category: 'Cloud Computing',
      level: 'Associate',
      duration: '130 phút',
      questions: 65,
      price: 1800000,
      originalPrice: 2200000,
      rating: 4.9,
      students: 12300,
      image: 'https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTIyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Thiết kế và triển khai hệ thống phân tán có khả năng mở rộng trên AWS',
      features: ['Lab thực hành', 'Case study thực tế', 'Mentor hỗ trợ', 'Cộng đồng học tập'],
      difficulty: 'Trung bình',
      passingScore: 72,
      validPeriod: '3 năm'
    },
    {
      id: 'microsoft-azure-fundamentals',
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      provider: 'Microsoft',
      category: 'Cloud Computing',
      level: 'Fundamentals',
      duration: '85 phút',
      questions: 40,
      price: 990000,
      originalPrice: 1200000,
      rating: 4.7,
      students: 18950,
      image: 'https://images.unsplash.com/photo-1717444308866-dcfc964bab23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBjZXJ0aWZpY2F0aW9uJTIwYXp1cmV8ZW58MXx8fHwxNzU5MjIyMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Kiến thức cơ bản về điện toán đám mây và dịch vụ Microsoft Azure',
      features: ['Tài liệu chính thức', 'Bài tập thực hành', 'Đề thi mô phỏng', 'Chứng nhận hoàn thành'],
      difficulty: 'Cơ bản',
      passingScore: 70,
      validPeriod: 'Vĩnh viễn'
    },
    {
      id: 'ielts-academic',
      title: 'IELTS Academic Test Preparation',
      provider: 'British Council',
      category: 'English Language',
      level: 'Academic',
      duration: '165 phút',
      questions: 40,
      price: 2500000,
      originalPrice: 3000000,
      rating: 4.8,
      students: 25600,
      image: 'https://images.unsplash.com/photo-1705573383706-b8b1e5db637a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZWx0cyUyMGVuZ2xpc2glMjB0ZXN0JTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzU5MjIyMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Luyện thi IELTS Academic với phương pháp học hiện đại và hiệu quả',
      features: ['4 kỹ năng hoàn chỉnh', 'Giáo viên bản ngữ', 'Mock test hàng tuần', 'Feedback chi tiết'],
      difficulty: 'Nâng cao',
      passingScore: 65,
      validPeriod: '2 năm'
    },
    {
      id: 'toeic-listening-reading',
      title: 'TOEIC Listening and Reading',
      provider: 'ETS',
      category: 'English Language',
      level: 'Professional',
      duration: '120 phút',
      questions: 200,
      price: 1800000,
      originalPrice: 2100000,
      rating: 4.6,
      students: 32100,
      image: 'https://images.unsplash.com/photo-1705573383706-b8b1e5db637a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZWx0cyUyMGVuZ2xpc2glMjB0ZXN0JTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzU5MjIyMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Chứng chỉ tiếng Anh trong môi trường công sở quốc tế',
      features: ['Ngân hàng 2000+ câu hỏi', 'Phân tích chi tiết', 'Lộ trình cá nhân', 'Bảo đảm điểm số'],
      difficulty: 'Trung bình',
      passingScore: 60,
      validPeriod: '2 năm'
    },
    {
      id: 'google-cloud-associate',
      title: 'Google Cloud Associate Cloud Engineer',
      provider: 'Google Cloud',
      category: 'Cloud Computing',
      level: 'Associate',
      duration: '120 phút',
      questions: 50,
      price: 1600000,
      originalPrice: 1900000,
      rating: 4.7,
      students: 8900,
      image: 'https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTIyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Triển khai và quản lý giải pháp trên nền tảng Google Cloud',
      features: ['Hands-on labs', 'Project thực tế', 'Expert mentoring', 'Career support'],
      difficulty: 'Trung bình',
      passingScore: 75,
      validPeriod: '2 năm'
    },
    {
      id: 'comptia-security',
      title: 'CompTIA Security+ (SY0-601)',
      provider: 'CompTIA',
      category: 'Cybersecurity',
      level: 'Intermediate',
      duration: '90 phút',
      questions: 90,
      price: 2200000,
      originalPrice: 2600000,
      rating: 4.8,
      students: 11200,
      image: 'https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTIyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Chứng chỉ bảo mật thông tin được công nhận toàn cầu',
      features: ['Simulation labs', 'Real-world scenarios', 'Industry tools', 'Job placement'],
      difficulty: 'Nâng cao',
      passingScore: 75,
      validPeriod: '3 năm'
    },
    {
      id: 'cisco-ccna',
      title: 'Cisco Certified Network Associate (CCNA)',
      provider: 'Cisco',
      category: 'Networking',
      level: 'Associate',
      duration: '120 phút',
      questions: 100,
      price: 2800000,
      originalPrice: 3200000,
      rating: 4.9,
      students: 9500,
      image: 'https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTIyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Kiến thức nền tảng về mạng máy tính và thiết bị Cisco',
      features: ['Virtual labs', 'Network simulators', 'Expert instruction', 'Certification guarantee'],
      difficulty: 'Trung bình',
      passingScore: 80,
      validPeriod: '3 năm'
    }
  ];

  const categories = [
    { value: 'all', label: 'Tất cả danh mục' },
    { value: 'Cloud Computing', label: 'Điện toán đám mây' },
    { value: 'English Language', label: 'Tiếng Anh' },
    { value: 'Cybersecurity', label: 'An ninh mạng' },
    { value: 'Networking', label: 'Mạng máy tính' }
  ];

  const levels = [
    { value: 'all', label: 'Tất cả cấp độ' },
    { value: 'Entry', label: 'Cơ bản' },
    { value: 'Associate', label: 'Trung cấp' },
    { value: 'Professional', label: 'Chuyên nghiệp' }
  ];

  const filteredExams = exams.filter(exam => {
    const categoryMatch = selectedCategory === 'all' || exam.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || exam.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const totalPages = Math.ceil(filteredExams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentExams = filteredExams.slice(startIndex, startIndex + itemsPerPage);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản': return 'success';
      case 'Trung bình': return 'warning';
      case 'Nâng cao': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="certification-exams-page">
      <div className="container-fluid py-5">
        {/* Enhanced Header Section */}
        <div className="page-header-modern mb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="header-content">
                  <h1 className="display-4 fw-bold mb-3 text-dark">
                    Thi Chứng Chỉ Quốc Tế
                  </h1>
                  <p className="lead text-muted mb-4">
                    Nâng cao kỹ năng chuyên môn với các chứng chỉ được công nhận toàn cầu. 
                    Hơn <span className="fw-bold text-primary">50,000+</span> học viên đã tin tưởng và thành công.
                  </p>
                  <div className="d-flex gap-4 mb-3">
                    <div className="stats-item">
                      <h3 className="fw-bold mb-1 text-primary">20+</h3>
                      <p className="small text-muted mb-0">Chứng chỉ</p>
                    </div>
                    <div className="stats-item">
                      <h3 className="fw-bold mb-1 text-success">98%</h3>
                      <p className="small text-muted mb-0">Tỷ lệ đỗ</p>
                    </div>
                    <div className="stats-item">
                      <h3 className="fw-bold mb-1 text-info">24/7</h3>
                      <p className="small text-muted mb-0">Hỗ trợ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="header-illustration">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMG1hdGVyaWFscyUyMGJvb2tzJTIwbGFwdG9wfGVufDF8fHx8MTc1OTIyMjI5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Study materials"
                    className="img-fluid rounded-3 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="filters-section-modern mb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="d-flex gap-3 flex-wrap">
                  <select 
                    className="form-select modern-select" 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  <select 
                    className="form-select modern-select"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end">
                <span className="results-count-modern">
                  Hiển thị <strong>{currentExams.length}</strong> trong tổng số <strong>{filteredExams.length}</strong> chứng chỉ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Exam Cards Grid */}
        <div className="container">
          <div className="row g-4">
            {currentExams.map((exam) => (
              <div key={exam.id} className="col-lg-4 col-md-6">
                <div className="exam-card-enhanced">
                  <div className="card-image-wrapper">
                    <ImageWithFallback
                      src={exam.image}
                      alt={exam.title}
                      className="card-image"
                    />
                    <div className="card-overlay">
                      <div className="provider-badge">{exam.provider}</div>
                      <div className="rating-info">
                        <div className="stars">★★★★★</div>
                        <span className="rating-text">{exam.rating} ({exam.students.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header-info">
                      <h3 className="card-title">{exam.title}</h3>
                      <span className={`difficulty-pill pill-${getDifficultyColor(exam.difficulty)}`}>
                        {exam.difficulty}
                      </span>
                    </div>
                    
                    <p className="card-description">{exam.description}</p>
                    
                    <div className="exam-specs">
                      <div className="spec-row">
                        <span className="spec-label">Thời gian:</span>
                        <span className="spec-value">{exam.duration}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">Câu hỏi:</span>
                        <span className="spec-value">{exam.questions} câu</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">Điểm đạt:</span>
                        <span className="spec-value">{exam.passingScore}%</span>
                      </div>
                    </div>
                    
                    <div className="features-list">
                      {exam.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="feature-pill">{feature}</span>
                      ))}
                    </div>
                    
                    <div className="card-footer-info">
                      <div className="pricing">
                        {exam.originalPrice && (
                          <span className="old-price">{exam.originalPrice.toLocaleString()}đ</span>
                        )}
                        <span className="current-price">{exam.price.toLocaleString()}đ</span>
                      </div>
                      <button 
                        className="btn btn-primary modern-btn"
                        onClick={() => onExamSelect(exam)}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="pagination-modern mt-5">
            <div className="container">
              <nav>
                <ul className="pagination justify-content-center mb-0">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                      className="page-link modern-page-link"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Trước
                    </button>
                  </li>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button 
                        className="page-link modern-page-link"
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button 
                      className="page-link modern-page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Sau
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Enhanced Study Package Modal */}
        {showStudyModal && (
          <div className="modal fade show d-block modern-modal-backdrop">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content modern-modal">
                <div className="modal-header modern-modal-header">
                  <h4 className="modal-title fw-bold">Gói Ôn Tập Đặc Biệt</h4>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white"
                    onClick={() => setShowStudyModal(false)}
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="study-image-wrapper">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMG1hdGVyaWFscyUyMGJvb2tzJTIwbGFwdG9wfGVufDF8fHx8MTc1OTIyMjI5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Study Package"
                          className="img-fluid rounded-3"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="study-title fw-bold mb-3">All-in-One Study Package</h5>
                      <div className="benefits-list mb-4">
                        <div className="benefit-item">Video HD chất lượng cao</div>
                        <div className="benefit-item">500+ câu hỏi thực tế</div>
                        <div className="benefit-item">Lab thực hành</div>
                        <div className="benefit-item">Mentor 1-1 support</div>
                        <div className="benefit-item">Bảo đảm 100% đỗ</div>
                      </div>
                      <div className="pricing-special mb-4">
                        <span className="old-price-special">2,500,000đ</span>
                        <span className="new-price-special">1,299,000đ</span>
                        <span className="discount-badge">-48%</span>
                      </div>
                      <button className="btn btn-success btn-lg w-100 fw-bold">
                        Mua Ngay - Tiết Kiệm 1.2 Triệu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};