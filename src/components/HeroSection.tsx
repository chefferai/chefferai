import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleTryForFreeClick = () => {
    const nutshellSection = document.getElementById('nutshell');
    nutshellSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-inter text-muted-foreground mb-4">
            the recipe app that gives you delicious recipes from what you have
          </p>
          
          <h1 className="text-6xl lg:text-7xl font-epilogue font-extrabold text-foreground mb-8 leading-tight">
            Recipes Crafted For You
          </h1>
          
          <div className="space-y-2">
            <Button 
              onClick={handleTryForFreeClick}
              className="btn-hero text-lg"
              size="lg"
            >
              Try Cheffer
            </Button>
            
            <p className="text-sm font-inter text-muted-foreground">
              No sign-up required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;