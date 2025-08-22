import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, ChefHat } from "lucide-react";

const InANutshell = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [backgroundMatcha, setBackgroundMatcha] = useState(false);
  const [sectionOpacity, setSectionOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.getElementById('next-recipe');
      const nutshellSection = document.getElementById('nutshell');
      
      if (nextSection && nutshellSection) {
        const nextRect = nextSection.getBoundingClientRect();
        const nutshellRect = nutshellSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Change background only when "Your Next Favorite Recipe" section comes into view
        if (nextRect.top <= windowHeight * 0.8) {
          setBackgroundMatcha(true);
        } else {
          setBackgroundMatcha(false);
        }
        
        // Fade in nutshell section when it comes into view
        if (nutshellRect.top <= windowHeight * 0.8 && nutshellRect.bottom >= 0) {
          const fadeProgress = Math.max(0, Math.min(1, (windowHeight * 0.8 - nutshellRect.top) / (windowHeight * 0.3)));
          setSectionOpacity(fadeProgress);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards sequentially  
          setTimeout(() => setCurrentCard(1), 300);
          setTimeout(() => setCurrentCard(2), 600);
          setTimeout(() => setCurrentCard(3), 900);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('nutshell');
    if (section) observer.observe(section);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply background change to body
  useEffect(() => {
    const body = document.body;
    if (backgroundMatcha) {
      body.style.backgroundColor = 'hsl(136, 25%, 41%)';
      body.style.transition = 'background-color 0.8s ease-in-out';
    } else {
      body.style.backgroundColor = 'hsl(187, 100%, 94%)';
      body.style.transition = 'background-color 0.8s ease-in-out';
    }
    
    return () => {
      body.style.backgroundColor = '';
      body.style.transition = '';
    };
  }, [backgroundMatcha]);

  const cards = [
    {
      icon: Search,
      title: "Select your ingredients",
      description: "from our database of 300+ ingredients."
    },
    {
      icon: Sparkles,
      title: "Cheffer creates unique, delicious recipes",
      description: "tailored to your ingredients."
    },
    {
      icon: ChefHat,
      title: "Chef up the recipe",
      description: "and we're sure you'll go 'yummmm'"
    }
  ];

  const handleTryChefferClick = () => {
    // This will eventually navigate to onboarding
    console.log("Starting Cheffer onboarding...");
  };

  return (
    <>
      <section 
        id="nutshell" 
        className="min-h-screen flex items-center justify-center py-4 relative z-10"
        style={{ 
          opacity: sectionOpacity,
          transform: `translateY(${(1 - sectionOpacity) * 20}px)`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-epilogue font-extrabold text-foreground">
              In A Nutshell
            </h2>
          </div>

          <div className="flex justify-center items-center mb-4 relative">
            <div className="flex items-center space-x-4">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card 
                    key={index}
                    className={`transform transition-all duration-700 bg-white border shadow-lg ${
                      currentCard > index 
                        ? `translate-x-${index * 80} z-${30 - index * 10} scale-100 opacity-100` 
                        : index === 0 
                          ? 'translate-x-0 z-30 scale-100 opacity-100'
                          : index === 1
                            ? 'translate-x-6 z-20 scale-95 opacity-70'
                            : 'translate-x-12 z-10 scale-90 opacity-50'
                    } w-80`}
                    style={{ 
                      transitionDelay: `${index * 200}ms` 
                    }}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="bg-button/20 p-4 rounded-full">
                          <Icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-inter font-semibold text-foreground mb-4">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="next-recipe"
        className="min-h-screen flex items-center justify-center text-white py-4 relative z-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-epilogue font-extrabold mb-8">
            Your Next Favorite Recipe
          </h2>
          
          <Button 
            onClick={handleTryChefferClick}
            className="btn-hero-white text-lg"
            size="lg"
          >
            Try Cheffer Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default InANutshell;