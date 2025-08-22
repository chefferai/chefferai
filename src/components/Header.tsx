import { Button } from "@/components/ui/button";

const Header = () => {
  const handleTryChefferClick = () => {
    const nutshellSection = document.getElementById('nutshell');
    nutshellSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
      <div className="bg-white rounded-2xl shadow-sm border border-border px-6 py-3 flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-epilogue font-extrabold text-foreground">
            Cheffer
          </h1>
        </div>
        
        <Button 
          onClick={handleTryChefferClick}
          className="btn-hero text-sm px-6 py-2"
        >
          Try Cheffer
        </Button>
      </div>
    </header>
  );
};

export default Header;