
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('web'); 
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.",
      image: "ecommerce-project",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "App de Finanças Pessoais",
      description: "Aplicativo para controle de finanças pessoais com gráficos e relatórios detalhados.",
      image: "finance-app",
      category: "app",
      technologies: ["React Native", "Firebase", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Site Corporativo",
      description: "Website institucional responsivo com design moderno para empresa de tecnologia.",
      image: "corporate-website",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Dashboard Analítico",
      description: "Painel administrativo com visualização de dados em tempo real e relatórios personalizados.",
      image: "dashboard",
      category: "web",
      technologies: ["React", "D3.js", "Node.js", "Socket.io"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "App de Delivery",
      description: "Aplicativo mobile para delivery de comida com rastreamento em tempo real.",
      image: "delivery-app",
      category: "app",
      technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Landing Page",
      description: "Landing page de alta conversão para produto SaaS com animações e formulário de captura.",
      image: "landing-page",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  const filteredProjects = projects.filter(project => project.category === 'web');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meus <span className="gradient-text">Projetos Web</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 gradient-bg mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Confira alguns dos meus trabalhos recentes em desenvolvimento web.
          </motion.p>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={`Projeto ${project.title}`}
                   src="https://images.unsplash.com/photo-1642132652860-471b4228023e" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-2">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-muted-foreground mt-8"
            >
                Nenhum projeto web encontrado.
            </motion.p>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Ver Mais no GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
