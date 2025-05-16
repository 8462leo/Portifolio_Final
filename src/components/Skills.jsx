
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "JSX", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Ferramentas & Design",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Design", level: 70 },
        { name: "Performance Optimization", level: 75 },
        { name: "Canva", level: 70 }
      ]
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="skills" className="section-padding">
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
            Minhas <span className="gradient-text">Habilidades</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 gradient-bg mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Combinando conhecimento técnico com criatividade para desenvolver soluções web modernas e eficientes.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="bg-card rounded-lg p-6 shadow-sm border"
            >
              <motion.h3 
                variants={item}
                className="text-xl font-semibold mb-6 text-center gradient-text"
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={item}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full gradient-bg"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Comunicação Efetiva", "Trabalho em Equipe", "Resolução de Problemas", 
              "Pensamento Crítico", "Adaptabilidade", "Criatividade", 
              "Gerenciamento de Tempo", "Atenção aos Detalhes", "Proatividade"
            ].map((tech, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="skill-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
