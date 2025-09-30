import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudyMaterialsProps {
  onCourseSelect: (course: any) => void;
}

export const StudyMaterials: React.FC<StudyMaterialsProps> = ({ onCourseSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const studyMaterials = [
    {
      id: 1,
      title: 'Lập Trình Full-Stack',
      subtitle: 'JavaScript, React, Node.js',
      description: 'Khóa học toàn diện về phát triển web từ cơ bản đến nâng cao',
      image: 'https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvdXJzZSUyMHR1dG9yaWFsfGVufDF8fHx8MTc1OTIyMzExMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'programming',
      lessons: 45,
      duration: '120 giờ',
      level: 'Cơ bản đến nâng cao',
      price: 1200000,
      rating: 4.8,
      students: 15420,
      instructor: 'Nguyễn Văn Tuan',
      features: ['Video HD', 'Tài liệu PDF', 'Dự án thực tế', 'Hỗ trợ 24/7']
    },
    {
      id: 2,
      title: 'Khoa Học Dữ Liệu & AI',
      subtitle: 'Python, Machine Learning, Deep Learning',
      description: 'Học Python và các thuật toán Machine Learning phổ biến',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGNvdXJzZXxlbnwxfHx8fDE3NTkyMjMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'data-science',
      lessons: 38,
      duration: '95 giờ',
      level: 'Trung cấp',
      price: 1500000,
      rating: 4.9,
      students: 8790,
      instructor: 'Dr. Trần Thị Mai',
      features: ['Lab thực hành', 'Dataset thực tế', 'Jupyter Notebooks', 'Chứng chỉ']
    },
    {
      id: 3,
      title: 'Quản Trị Kinh Doanh',
      subtitle: 'Marketing, Leadership, Strategy',
      description: 'Kỹ năng quản lý và phát triển doanh nghiệp hiện đại',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbmFnZW1lbnQlMjBjb3Vyc2V8ZW58MXx8fHwxNzU5MTI4NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'business',
      lessons: 32,
      duration: '80 giờ',
      level: 'Cơ bản',
      price: 950000,
      rating: 4.7,
      students: 12350,
      instructor: 'MBA Lê Hoàng Nam',
      features: ['Case Study', 'Template Excel', 'Networking', 'Mentoring']
    },
    {
      id: 4,
      title: 'Tiếng Anh Giao Tiếp',
      subtitle: 'Speaking, Listening, Grammar',
      description: 'Phát triển kỹ năng giao tiếp tiếng Anh hiệu quả',
      image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwY291cnNlfGVufDF8fHx8MTc1OTE5NzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'language',
      lessons: 60,
      duration: '100 giờ',
      level: 'Tất cả cấp độ',
      price: 800000,
      rating: 4.6,
      students: 25670,
      instructor: 'Sarah Johnson',
      features: ['Live Session', 'Speaking Practice', 'Grammar Guide', 'Progress Test']
    },
    {
      id: 5,
      title: 'Thiết Kế UI/UX',
      subtitle: 'Figma, Photoshop, Design Thinking',
      description: 'Thiết kế giao diện người dùng chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb3Vyc2UlMjB0dXRvcmlhbHxlbnwxfHx8fDE3NTkyMTIxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'design',
      lessons: 42,
      duration: '90 giờ',
      level: 'Cơ bản đến nâng cao',
      price: 1100000,
      rating: 4.8,
      students: 9430,
      instructor: 'Võ Minh Đức',
      features: ['Design System', 'Portfolio Review', 'Tools Training', 'Job Support']
    },
    {
      id: 6,
      title: 'Digital Marketing',
      subtitle: 'SEO, SEM, Social Media, Analytics',
      description: 'Chiến lược marketing online hiệu quả',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWR5JTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc1OTIyMzEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'marketing',
      lessons: 35,
      duration: '85 giờ',
      level: 'Trung cấp',
      price: 1050000,
      rating: 4.7,
      students: 11280,
      instructor: 'Phạm Thu Hà',
      features: ['Live Campaign', 'Analytics Tools', 'Strategy Template', 'Industry Update']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả khóa học', count: studyMaterials.length },
    { id: 'programming', name: 'Lập trình', count: 1 },
    { id: 'data-science', name: 'Khoa học dữ liệu', count: 1 },
    { id: 'business', name: 'Kinh doanh', count: 1 },
    { id: 'language', name: 'Ngoại ngữ', count: 1 },
    { id: 'design', name: 'Thiết kế', count: 1 },
    { id: 'marketing', name: 'Marketing', count: 1 }
  ];

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center text-white mb-5">
          <h1 className="display-4 mb-3">Tài Liệu Ôn Tập</h1>
          <p className="lead mb-4">
            Nâng cao kiến thức với hệ thống khóa học chất lượng cao từ các chuyên gia hàng đầu
          </p>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm khóa học..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    borderRadius: '50px 0 0 50px',
                    border: 'none',
                    paddingLeft: '24px'
                  }}
                />
                <button className="btn btn-warning" style={{ borderRadius: '0 50px 50px 0', paddingLeft: '24px', paddingRight: '24px' }}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center text-white mb-5">
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <h3 className="display-5 mb-2">{studyMaterials.length}+</h3>
              <p className="mb-0">Khóa học</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <h3 className="display-5 mb-2">50K+</h3>
              <p className="mb-0">Học viên</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <h3 className="display-5 mb-2">95%</h3>
              <p className="mb-0">Hài lòng</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <h3 className="display-5 mb-2">24/7</h3>
              <p className="mb-0">Hỗ trợ</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="row">
          {filteredMaterials.map(material => (
            <div key={material.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm study-card">
                <div className="position-relative">
                  <ImageWithFallback
                    src={material.image}
                    alt={material.title}
                    className="card-img-top"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary px-3 py-2 rounded-pill">
                      {material.level}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <div className="d-flex align-items-center text-white">
                      <div className="bg-dark bg-opacity-75 px-2 py-1 rounded">
                        <small>{material.lessons} bài học • {material.duration}</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body p-4">
                  <h5 className="card-title mb-2">{material.title}</h5>
                  <p className="text-primary small mb-2">{material.subtitle}</p>
                  <p className="card-text text-muted small mb-3">{material.description}</p>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <div className="d-flex align-items-center">
                        <span className="text-warning me-1">★</span>
                        <span className="small fw-bold">{material.rating}</span>
                      </div>
                    </div>
                    <div className="text-muted small">
                      {material.students.toLocaleString()} học viên
                    </div>
                  </div>

                  <div className="mb-3">
                    <small className="text-muted">Giảng viên: {material.instructor}</small>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {material.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="badge bg-light text-dark small">
                        {feature}
                      </span>
                    ))}
                    {material.features.length > 3 && (
                      <span className="badge bg-light text-dark small">
                        +{material.features.length - 3} khác
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 text-primary">{formatPrice(material.price)}</h5>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-primary w-100 rounded-pill study-btn"
                    onClick={() => onCourseSelect(material)}
                  >
                    Xem chi tiết khóa học
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center text-white py-5">
            <h4>Không tìm thấy khóa học phù hợp</h4>
            <p>Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác</p>
          </div>
        )}
      </div>
    </div>
  );
};