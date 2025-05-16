import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleDownloadCV = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Leonardo Benvenutti", 20, 20);
    doc.setFontSize(16);
    doc.text("Desenvolvedor Web", 20, 30);

    doc.setFontSize(14);
    doc.text("Sobre Mim", 20, 45);
    doc.setFontSize(10);
    doc.text(
      "Olá! Sou um desenvolvedor web apaixonado por criar interfaces modernas e funcionais.",
      20,
      53
    );
    doc.text(
      "Estudante de Engenharia de Software com mais de 50 cursos na área de tecnologia,",
      20,
      58
    );
    doc.text(
      "combino habilidades técnicas com um olhar atento para design e experiência do usuário.",
      20,
      63
    );

    doc.setFontSize(14);
    doc.text("Habilidades", 20, 75);
    doc.setFontSize(10);
    doc.text("- HTML5, CSS3, JavaScript, React, JSX, TypeScript", 20, 83);
    doc.text(
      "- Git/GitHub, Figma, Responsive Design, UI/UX Design, Canva",
      20,
      88
    );

    doc.save("Curriculo_Leonardo_Benvenutti.pdf");
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
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
            Sobre <span className="gradient-text">Mim</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 gradient-bg mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-auto"
                alt="Foto profissional trabalhando"
                src="src/assets/Gemini_Generated_Image_c9wa1nc9wa1nc9wa.png"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 gradient-bg opacity-10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Desenvolvedor Web com paixão por criar experiências digitais
              incríveis
            </h3>

            <p className="text-muted-foreground mb-6">
              Olá! Sou um desenvolvedor web apaixonado por criar interfaces
              modernas e funcionais. Estudante de Engenharia de Software com
              mais de 50 cursos na área de tecnologia, combino habilidades
              técnicas com um olhar atento para design e experiência do usuário.
            </p>

            <p className="text-muted-foreground mb-6">
              Minha jornada na área de tecnologia começou com curiosidade sobre
              como as coisas funcionam na web, e desde então venho aprimorando
              minhas habilidades para entregar soluções que não apenas atendem
              às necessidades dos clientes, mas também encantam os usuários
              finais.
            </p>

            <Button className="gradient-bg" onClick={handleDownloadCV}>
              <Download className="mr-2 h-4 w-4" /> Baixar Currículo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
