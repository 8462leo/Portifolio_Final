
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfoItem = ({ icon, title, value, link, isMapLink }) => (
  <motion.a
    href={link}
    target={isMapLink ? "_blank" : "_self"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center"
  >
    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
      <span className="text-white">{icon}</span>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground break-words">{value}</p>
  </motion.a>
);

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "leonardo29benvenutti@gmail.com",
      link: "mailto:leonardo29benvenutti@gmail.com",
      isMapLink: false,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefone",
      value: "+55 (47) 99154-4113",
      link: "tel:+5547991544113",
      isMapLink: false,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localização",
      value: "Santa Catarina, Blumenau",
      link: "https://maps.google.com/?q=Santa+Catarina,Blumenau",
      isMapLink: true,
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {contactDetails.map((info, index) => (
        <ContactInfoItem 
          key={index}
          icon={info.icon}
          title={info.title}
          value={info.value}
          link={info.link}
          isMapLink={info.isMapLink}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
