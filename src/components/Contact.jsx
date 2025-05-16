
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import WorkHours from '@/components/WorkHours';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="contact" className="section-padding">
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
            Entre em <span className="gradient-text">Contato</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 gradient-bg mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Tem um projeto em mente ou quer conversar? Ficarei feliz em responder suas dúvidas.
          </motion.p>
        </motion.div>
        
        <ContactInfo />
        
        <div className="grid md:grid-cols-2 gap-8 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Vamos conversar sobre seu projeto</h3>
            <p className="text-muted-foreground mb-6">
              Estou disponível para trabalhos freelance, projetos de longo prazo ou consultoria. 
              Preencha o formulário e entrarei em contato o mais breve possível.
            </p>
            <WorkHours />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
