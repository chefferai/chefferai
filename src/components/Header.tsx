import { Button } from "@/components/ui/button";

const Header = () => {
  const handleTryChefferClick = () => {
    const nutshellSection = document.getElementById('nutshell');
    nutshellSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-matcha-light shadow-sm border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-golos font-semibold text-foreground">
            Cheffer
          </h1>
        </div>
        
        <Button 
          onClick={handleTryChefferClick}
          className="btn-hero font-golos"
        >
          Try Cheffer
        </Button>
      </div>
    </header>
  );
};

export default Header;