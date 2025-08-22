import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, ChefHat } from "lucide-react";

const InANutshell = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

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
    <section 
      id="nutshell" 
      className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${
        isVisible ? 'bg-matcha text-white' : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-golos font-normal mb-8">
            In A Nutshell
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card 
                key={index}
                className={`transform transition-all duration-700 bg-white/10 backdrop-blur border-white/20 ${
                  currentCard > index 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-golos font-medium text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white/80 font-golos">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <p className="text-2xl font-golos text-white">
            It's that simple. Try Cheffer Now.
          </p>
          
          <Button 
            onClick={handleTryChefferClick}
            className="btn-hero-white text-lg font-golos"
            size="lg"
          >
            Try Cheffer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InANutshell;