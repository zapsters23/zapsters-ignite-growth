"use client";
import React from "react";
import { motion } from "motion/react";
import {
  IconCode,
  IconPalette,
  IconShield,
  IconTrophy,
  IconSchool,
  IconPresentation,
} from "@tabler/icons-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Build lightning-fast, scalable web applications with modern technologies",
    icon: <IconCode className="w-8 h-8" />,
    features: ["React & Next.js", "TypeScript", "Full-Stack Solutions", "API Integration"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    description: "Create stunning, user-friendly interfaces that convert and delight",
    icon: <IconPalette className="w-8 h-8" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments",
    icon: <IconShield className="w-8 h-8" />,
    features: ["Penetration Testing", "Security Audits", "Vulnerability Assessment", "Compliance"],
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "CTF Hosting",
    description: "Organize engaging Capture The Flag events for teams and communities",
    icon: <IconTrophy className="w-8 h-8" />,
    features: ["Custom Challenges", "Platform Setup", "Scoring System", "Live Support"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Internship Program",
    description: "Launch your tech career with hands-on experience and mentorship",
    icon: <IconSchool className="w-8 h-8" />,
    features: ["Real Projects", "Industry Mentors", "Skill Development", "Certification"],
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    title: "Workshops & Training",
    description: "Level up your team with expert-led technical workshops",
    icon: <IconPresentation className="w-8 h-8" />,
    features: ["Custom Curriculum", "Hands-on Labs", "Expert Instructors", "Certificates"],
    gradient: "from-indigo-500 to-purple-500",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
        {/* Icon with gradient background */}
        <div className="relative mb-6">
          <div
            className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
          />
          <div
            className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white`}
          >
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Hover effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} transition-opacity duration-300 pointer-events-none`}
        />

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        />
      </div>
    </motion.div>
  );
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
             className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/20"
           >
             <span className="text-sm font-semibold text-white">
               WHAT WE DO
             </span>
           </motion.div>

           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
             Empowering Innovation Through Technology
           </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            At Zapsters, we deliver comprehensive technology solutions - from cutting-edge web development
            and stunning UI/UX design to advanced cybersecurity, competitive CTF events, professional
            internships, and expert-led workshops.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
