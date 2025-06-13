"use client"
import React from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "./components/ui/button";
import Social from "./components/Social";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { TypingEffect } from "./components/ui/motion";
import Certificates from "./components/Certificates";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <section className="h-full">
      <Toaster
        position="top-right"
        toastOptions={{
          style: { 
            color: '#fff',
          },
          success: {
            style: {
              backgroundColor: "#22c55e"
            },
            iconTheme: {
              primary: '#15803d', 
              secondary: '#fff',
            },
          },
          error: {
            style: {
              backgroundColor: "red"
            },
            iconTheme: {
              primary: '#b91c1c', 
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /><TypingEffect text="João Oliveira" className="text-accent"></TypingEffect>
            </h1>
            <p className="max-w-[500px] pt-5 mb-9 text-white/80">Hello, my name is João Oliveira. I'm 20 years old and from Brazil. I am currently studying Software Engineering with a strong passion for development and actively seeking an opportunity to start my career as a software developer.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/curriculo_atualizado.pdf" download="Joao_Oliveira_CV_2025.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="uppercase flex items-center gap-2"
                  size="lg"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyles="w-9 h-9 border border-accent
                  rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Technologies />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </section>
  );
}

export default Home;