import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 text-center">
      <motion.h2 
        className="text-4xl font-bold text-green-500 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="space-y-4 text-lg">
        <p className="flex justify-center gap-3"><FaEnvelope /> adireddymythri@gmail.com</p>
        <p className="flex justify-center gap-3"><FaPhone /> +91 91103 27793</p>

        <div className="flex justify-center gap-10 text-3xl mt-6">
          <a href="https://github.com/adireddymythri" target="_blank" className="hover:text-red-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mythri-adireddy-14b75631b" target="_blank" className="hover:text-red-400"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
