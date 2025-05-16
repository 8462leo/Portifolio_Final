
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/8462leo", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/leonardo-benvenutti/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:leonardo29benvenutti@gmail.com", label: "Email" }
  ];
  
  return (
    <footer className="bg-secondary/50 py-8 border-t">
      <div className="container-custom text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Leonardo Benvenutti. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
