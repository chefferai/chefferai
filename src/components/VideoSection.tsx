import { useState, useEffect } from "react";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('video-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="video-section" 
      className="py-8 bg-background flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <div 
          className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cheffer Demo Video"
              className="w-full h-full rounded-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;