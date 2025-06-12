import React from "react";

const certificates = [
    {
        name: "The Complete Full-Stack Web Development Bootcamp",
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'API Rest', 'PostgreSQL', 'Express'],
        language: 'English',
        link: 'https://www.udemy.com/certificate/UC-6bb3738e-1288-4f08-bfc0-fbb998592212/',
        date: new Date("2025-03-02")
    },
    {
        name: "Formação Explore React com JavaScript",
        tags: ['React', 'JavaScript'],
        language: 'Portuguese',
        link: 'https://cursos.alura.com.br/degree/certificate/d21b1779-421c-445c-a46a-7a197c010067?lang=pt_BR',
        date: new Date("2025-05-16")
    },
    {
        name: "Formação Aprenda a programar em Java com Orientação a Objetos ",
        tags: ['Java', 'POO'],
        language: 'Portuguese',
        link: 'https://cursos.alura.com.br/degree/certificate/7cfaccc4-8646-49aa-92f1-05675a4dbfd2?lang=pt_BR',
        date: new Date("2025-05-27")
    },
    {
        name: "Formação Java Web: crie aplicações usando Spring Boot",
        tags: ['Java', 'Spring Boot'],
        language: 'Portuguese',
        link: 'https://cursos.alura.com.br/degree/certificate/c3f50d1d-4a3b-4610-8d66-f21b382e5170?lang=pt_BR',
        date: new Date("2025-06-02")
    },
    {
        name: "Formação Java e Spring Boot ",
        tags: ['Java', 'Spring Boot'],
        language: 'Portuguese',
        link: 'https://cursos.alura.com.br/degree/certificate/7860d060-fb77-4b71-9a59-5724d3802d84?lang=pt_BR',
        date: new Date("2025-06-09")
    }
]

const Certificates = () => {
    const sortedCertificates = certificates.sort((a, b) => b.date - a.date);

    return (
        <section id="certificates" className="container mx-auto px-4 py-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 dark:text-white">
                Certificates<span className="text-accent">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {sortedCertificates.map((certificate) => (
                    <div 
                        key={certificate.link}
                        className="flex flex-col rounded-2xl shadow-lg overflow-hidden border border-accent"
                    >
                        <div className="p-6 bg-tertiary border-b border-accent">
                            <h3 className="text-xl font-bold text-white dark:text-white">
                                {certificate.name}
                            </h3>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <p className="text-sm text-[#9ca3af] mb-4">
                                    Concluído em: {certificate.date.toLocaleDateString('pt-BR', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                    <br />Language: {certificate.language}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {certificate.tags.map((tag) => (
                                        <span key={tag} className="text-accent border border-accent px-3 py-1 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center items-center ">
                                <a 
                                    href={certificate.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="border border-accent hover:bg-accent-hover hover:text-white hover:scale-[1.05] text-accent font-bold py-2 px-5 rounded-full transition-colors duration-300"
                                >
                                    Certificate Link
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;
