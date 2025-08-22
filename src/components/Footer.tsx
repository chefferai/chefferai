const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <a 
            href="#contact" 
            className="font-inter text-foreground hover:text-button transition-colors"
          >
            Contact
          </a>
          <a 
            href="#privacy" 
            className="font-inter text-foreground hover:text-button transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="#terms" 
            className="font-inter text-foreground hover:text-button transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="#feedback" 
            className="font-inter text-foreground hover:text-button transition-colors"
          >
            Feedback
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;