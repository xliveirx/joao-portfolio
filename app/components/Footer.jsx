import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 bg-secondary border-t border-accent">
      <div className="container mx-auto px-4 text-center text-gray-400 flex flex-col items-center gap-6">
        <p>&copy;{new Date().getFullYear()} João Oliveira. Todos os direitos reservados.</p>
        <a href="mailto:joaopedrocorsodeoliveira15@gmail.com" className="hover:text-accent hover:scale-[1.02] hover:cursor-pointer">joaopedrocorsodeoliveira15@gmail.com</a>
        <Social containerStyle="flex gap-6" iconStyles="w-12 h-12 hover:text-accent transition-colors hover:scale-[1.05]" />
      </div>
    </footer>
  );
};

export default Footer;
