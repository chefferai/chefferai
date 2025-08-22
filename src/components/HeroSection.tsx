import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleTryForFreeClick = () => {
    const nutshellSection = document.getElementById('nutshell');
    nutshellSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-matcha-light pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-golos font-normal text-foreground mb-6 leading-tight">
              Meet Cheffer
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-golos text-foreground mb-6 text-balance">
              Turn Your Ingredients Into Your Next Favorite Recipe
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl text-balance">
              Meet Cheffer, an AI-powered app that crafts instant, delicious, and unique recipes from what you have so you don't have to fuss over what to cook tonight
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleTryForFreeClick}
                className="btn-hero text-lg font-golos"
                size="lg"
              >
                Try It For Free
              </Button>
              
              <p className="text-sm text-muted-foreground">
                No sign-up required
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroImage} 
              alt="Fresh ingredients and cooking utensils arranged beautifully"
              className="rounded-2xl shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;