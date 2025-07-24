import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Automation Setup",
    desc: "We build systems that run your business 24/7.",
  },
  {
    title: "Chatbot Integration",
    desc: "Engage your visitors with smart AI chatbots.",
  },
  {
    title: "AI Marketing Campaigns",
    desc: "Drive traffic and leads through AI-powered ads.",
  },
  {
    title: "Predictive Analytics",
    desc: "Use data-driven forecasts to make smarter decisions.",
  },
  {
    title: "Workflow Automation",
    desc: "Streamline your internal operations with AI workflows.",
  },
  {
    title: "AI Content Generation",
    desc: "Generate blogs, emails, and social media posts with AI.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white text-black">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 cursor-pointer border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-500 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
