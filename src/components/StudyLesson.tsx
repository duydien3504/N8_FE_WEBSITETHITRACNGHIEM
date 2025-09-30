import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudyLessonProps {
  course: any;
  onBackToCourse: () => void;
}

export const StudyLesson: React.FC<StudyLessonProps> = ({ course, onBackToCourse }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [activeTab, setActiveTab] = useState('video');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const lessons = [
    {
      id: 1,
      title: 'Giới thiệu khóa học',
      type: 'video',
      duration: '15:30',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      transcript: `
Xin chào và chào mừng các bạn đến với khóa học ${course?.title}. 
Trong bài học đầu tiên này, chúng ta sẽ tìm hiểu tổng quan về khóa học...
      `,
      materials: [
        { name: 'Slide bài giảng', type: 'pdf', size: '2.5 MB' },
        { name: 'Source code', type: 'zip', size: '1.2 MB' }
      ],
      completed: false
    },
    {
      id: 2,
      title: 'Cài đặt môi trường phát triển',
      type: 'video',
      duration: '25:45',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      transcript: `
Trong bài học này, chúng ta sẽ học cách cài đặt và cấu hình môi trường phát triển...
      `,
      materials: [
        { name: 'Hướng dẫn cài đặt', type: 'pdf', size: '3.1 MB' },
        { name: 'Tool list', type: 'txt', size: '1 KB' }
      ],
      completed: false
    },
    {
      id: 3,
      title: 'Tài liệu tham khảo',
      type: 'document',
      content: `
# Tài liệu tham khảo

## 1. Giới thiệu

Đây là tài liệu tham khảo chi tiết cho khóa học ${course?.title}.

## 2. Kiến thức cơ bản

### 2.1 Khái niệm cơ bản
- Định nghĩa A
- Định nghĩa B
- Định nghĩa C

### 2.2 Nguyên tắc quan trọng
1. Nguyên tắc thứ nhất
2. Nguyên tắc thứ hai
3. Nguyên tắc thứ ba

## 3. Thực hành

### 3.1 Bài tập cơ bản
- Bài tập 1: Làm quen với giao diện
- Bài tập 2: Thực hiện tác vụ đơn giản
- Bài tập 3: Tích hợp với hệ thống

### 3.2 Dự án thực tế
Áp dụng kiến thức đã học vào dự án thực tế...

## 4. Tài nguyên bổ sung

- Link 1: [Tài liệu chính thức](https://example.com)
- Link 2: [Best practices](https://example.com)
- Link 3: [Community forum](https://example.com)
      `,
      materials: [
        { name: 'Tài liệu PDF đầy đủ', type: 'pdf', size: '5.2 MB' },
        { name: 'Checklist', type: 'doc', size: '500 KB' }
      ],
      completed: false
    }
  ];

  const currentLessonData = lessons[currentLesson];

  const handleLessonComplete = () => {
    lessons[currentLesson].completed = true;
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const formatDuration = (duration: string) => {
    return duration || '0:00';
  };

  const getProgress = () => {
    const completed = lessons.filter(lesson => lesson.completed).length;
    return Math.round((completed / lessons.length) * 100);
  };

  return (
    <div className="vh-100 d-flex flex-column" style={{ backgroundColor: '#000' }}>
      {/* Header */}
      <div className="bg-dark text-white p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-dark me-3"
            onClick={onBackToCourse}
          >
            ← Quay lại khóa học
          </button>
          <h5 className="mb-0">{course?.title}</h5>
        </div>
        
        <div className="d-flex align-items-center">
          <span className="me-3">Tiến độ: {getProgress()}%</span>
          <div className="progress me-3" style={{ width: '120px', height: '8px' }}>
            <div 
              className="progress-bar bg-success" 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
          <button 
            className="btn btn-dark"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="flex-grow-1 d-flex">
        {/* Main Content */}
        <div className={`flex-grow-1 d-flex flex-column ${sidebarOpen ? '' : 'w-100'}`}>
          {/* Video/Content Area */}
          <div className="flex-grow-1 position-relative">
            {currentLessonData.type === 'video' ? (
              <iframe
                src={currentLessonData.videoUrl}
                className="w-100 h-100 border-0"
                allowFullScreen
                title={currentLessonData.title}
              />
            ) : (
              <div className="h-100 bg-white p-4 overflow-auto">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: currentLessonData.content?.replace(/\n/g, '<br/>') || '' 
                        }}
                        style={{ 
                          whiteSpace: 'pre-wrap',
                          lineHeight: '1.6',
                          fontSize: '16px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="bg-dark text-white p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="mb-1">{currentLessonData.title}</h6>
                <small className="text-muted">
                  {currentLessonData.type === 'video' 
                    ? `Video • ${formatDuration(currentLessonData.duration)}`
                    : 'Tài liệu học tập'
                  }
                </small>
              </div>
              
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-light btn-sm"
                  disabled={currentLesson === 0}
                  onClick={() => setCurrentLesson(currentLesson - 1)}
                >
                  ← Bài trước
                </button>
                
                <button 
                  className="btn btn-success btn-sm"
                  onClick={handleLessonComplete}
                >
                  {currentLessonData.completed ? '✓ Đã hoàn thành' : 'Hoàn thành bài học'}
                </button>
                
                <button 
                  className="btn btn-outline-light btn-sm"
                  disabled={currentLesson === lessons.length - 1}
                  onClick={() => setCurrentLesson(currentLesson + 1)}
                >
                  Bài tiếp theo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="bg-white border-start" style={{ width: '400px', minWidth: '400px' }}>
            {/* Tabs */}
            <div className="border-bottom">
              <ul className="nav nav-tabs border-0" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'playlist' ? 'active' : ''} border-0`}
                    onClick={() => setActiveTab('playlist')}
                  >
                    Danh sách bài học
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'notes' ? 'active' : ''} border-0`}
                    onClick={() => setActiveTab('notes')}
                  >
                    Ghi chú
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'materials' ? 'active' : ''} border-0`}
                    onClick={() => setActiveTab('materials')}
                  >
                    Tài liệu
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-3 h-100 overflow-auto">
              {/* Playlist Tab */}
              {activeTab === 'playlist' && (
                <div>
                  {lessons.map((lesson, index) => (
                    <div 
                      key={lesson.id}
                      className={`p-3 border rounded mb-2 cursor-pointer ${
                        index === currentLesson ? 'bg-primary text-white' : 'bg-light'
                      }`}
                      onClick={() => setCurrentLesson(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          {lesson.completed ? '✅' : (lesson.type === 'video' ? '▶️' : '📄')}
                        </div>
                        <div className="flex-grow-1">
                          <div className="fw-medium">{lesson.title}</div>
                          <small className={index === currentLesson ? 'text-white-50' : 'text-muted'}>
                            {lesson.type === 'video' 
                              ? formatDuration(lesson.duration)
                              : 'Tài liệu'
                            }
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Notes Tab */}
              {activeTab === 'notes' && (
                <div>
                  <h6 className="mb-3">Ghi chú của bạn</h6>
                  <textarea 
                    className="form-control mb-3" 
                    rows={10}
                    placeholder="Viết ghi chú cho bài học này..."
                  />
                  <button className="btn btn-primary btn-sm w-100">
                    Lưu ghi chú
                  </button>
                  
                  <div className="mt-4">
                    <h6 className="mb-3">Transcript</h6>
                    {currentLessonData.transcript && (
                      <div className="p-3 bg-light rounded">
                        <small>{currentLessonData.transcript}</small>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Materials Tab */}
              {activeTab === 'materials' && (
                <div>
                  <h6 className="mb-3">Tài liệu bài học</h6>
                  {currentLessonData.materials?.map((material, index) => (
                    <div key={index} className="d-flex align-items-center p-3 border rounded mb-2">
                      <div className="me-3">
                        {material.type === 'pdf' ? '📄' : 
                         material.type === 'zip' ? '📦' : 
                         material.type === 'doc' ? '📝' : '📎'}
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-medium">{material.name}</div>
                        <small className="text-muted">{material.size}</small>
                      </div>
                      <button className="btn btn-outline-primary btn-sm">
                        Tải về
                      </button>
                    </div>
                  ))}
                  
                  <div className="mt-4">
                    <h6 className="mb-3">Liên kết hữu ích</h6>
                    <div className="list-group list-group-flush">
                      <a href="#" className="list-group-item list-group-item-action">
                        📚 Tài liệu tham khảo chính thức
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        🎯 Bài tập thực hành
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        💬 Diễn đàn thảo luận
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};