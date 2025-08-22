const Footer = () => {
  return (
    <footer className="py-8 mx-4 mb-4">
      <div className="bg-white rounded-3xl shadow-lg border border-border px-4 py-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center">
            <h2 className="text-xl font-epilogue font-extrabold text-foreground">
              Cheffer
            </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground font-inter transition-colors text-sm"
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="text-muted-foreground hover:text-foreground font-inter transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-muted-foreground hover:text-foreground font-inter transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#feedback" 
              className="text-muted-foreground hover:text-foreground font-inter transition-colors text-sm"
            >
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;