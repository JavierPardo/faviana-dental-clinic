"use client"
import React, { useState, useEffect } from 'react';

// --- Static Data (could be in a separate data.js file) ---
const serviceData = {
  armonizacion: [
    {
      id: 'hialuronico',
      title: 'Relleno con Ácido Hialurónico',
      description: 'Atenúa arrugas y mejora el volumen facial de forma natural.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Acido+Hialuronico',
    },
    {
      id: 'botulinica',
      title: 'Toxina Botulínica (Botox)',
      description: 'Relaja los músculos para suavizar líneas de expresión y arrugas.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Botox',
    },
    {
      id: 'prp',
      title: 'Plasma Rico en Plaquetas (PRP)',
      description: 'Bioestimulación para regenerar tejidos y mejorar la calidad de la piel.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=PRP',
    },
    {
      id: 'hilos-tensores',
      title: 'Hilos Tensores',
      description: 'Efecto lifting no quirúrgico para reposicionar tejidos faciales.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Hilos+Tensores',
    },
    {
      id: 'aumento-labios',
      title: 'Aumento de Labios',
      description: 'Volumen y definición para unos labios más atractivos y simétricos.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Aumento+Labios',
    },
  ],
  dental: [
    {
      id: 'general',
      title: 'Odontología General',
      description: 'Revisiones, limpiezas, empastes y tratamientos preventivos.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Odontologia+General',
    },
    {
      id: 'estetica',
      title: 'Estética Dental',
      description: 'Blanqueamiento, carillas y diseño de sonrisa para una sonrisa perfecta.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Estetica+Dental',
    },
    {
      id: 'ortodoncia',
      title: 'Ortodoncia',
      description: 'Brackets tradicionales e invisibles para alinear tus dientes.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Ortodoncia',
    },
    {
      id: 'implantes',
      title: 'Implantes Dentales',
      description: 'Soluciones permanentes para reemplazar dientes perdidos.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Implantes+Dentales',
    },
    {
      id: 'endodoncia',
      title: 'Endodoncia',
      description: 'Tratamiento de conducto para salvar dientes dañados.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Endodoncia',
    },
    {
      id: 'periodoncia',
      title: 'Periodoncia',
      description: 'Tratamiento de enfermedades de las encías y soporte dental.',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/0C2C84?text=Periodoncia',
    },
  ],
};

const testimonials = [
  {
    quote: "Mi cara luce más joven y natural, ¡estoy encantada con los resultados de armonización!",
    author: "María G.",
    image: "https://placehold.co/80x80/0C2C84/F0F9FF?text=MG",
  },
  {
    quote: "Siempre temí al dentista, pero aquí me sentí segura y el tratamiento fue excelente. ¡Mi sonrisa es otra!",
    author: "Carlos R.",
    image: "https://placehold.co/80x80/0C2C84/F0F9FF?text=CR",
  },
  {
    quote: "Profesionalismo y calidez, hicieron que mi experiencia dental fuera muy agradable.",
    author: "Ana S.",
    image: "https://placehold.co/80x80/0C2C84/F0F9FF?text=AS",
  },
];

// --- Reusable Components ---
// Defined outside the App component
const Navbar = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-sky-400 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => setCurrentPage('home')} className="text-white text-2xl font-bold font-inter tracking-wider">
          <span className="text-pink-200">Sonríe</span>Salud
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => setCurrentPage('armonizacionOrofacial')} className="text-white hover:text-pink-200 transition duration-300 font-medium">Armonización Orofacial</button>
          <button onClick={() => setCurrentPage('serviciosDentales')} className="text-white hover:text-pink-200 transition duration-300 font-medium">Servicios Dentales</button>
          <button onClick={() => setCurrentPage('sobreNosotros')} className="text-white hover:text-pink-200 transition duration-300 font-medium">Sobre Nosotros</button>
          <button onClick={() => setCurrentPage('contacto')} className="text-white hover:text-pink-200 transition duration-300 font-medium">Contacto</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-blue-700 p-4 rounded-b-lg shadow-inner">
          <button onClick={() => { setCurrentPage('armonizacionOrofacial'); setIsOpen(false); }} className="block text-white hover:text-pink-200 transition duration-300 w-full text-left py-2">Armonización Orofacial</button>
          <button onClick={() => { setCurrentPage('serviciosDentales'); setIsOpen(false); }} className="block text-white hover:text-pink-200 transition duration-300 w-full text-left py-2">Servicios Dentales</button>
          <button onClick={() => { setCurrentPage('sobreNosotros'); setIsOpen(false); }} className="block text-white hover:text-pink-200 transition duration-300 w-full text-left py-2">Sobre Nosotros</button>
          <button onClick={() => { setCurrentPage('contacto'); setIsOpen(false); }} className="block text-white hover:text-pink-200 transition duration-300 w-full text-left py-2">Contacto</button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10 mt-12">
    <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
      {/* Contact Info */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
        <p className="text-sm">Teléfono: +591 7XXXXXXX</p>
        <p className="text-sm">Email: info@sonriesalud.com</p>
        <p className="text-sm">Dirección: Av. Principal #123, Cochabamba, Bolivia</p>
      </div>

      {/* Social Media (Icons via Font Awesome or inline SVG would be here) */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-2">Síguenos</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.779 1.624 4.938 4.851.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.624 4.779-4.851 4.938-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.779-1.624-4.938-4.851-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.624-4.779 4.851-4.938 1.265-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/></svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1c.609 0 1.1.493 1.1 1.1s-.492 1.1-1.1 1.1zm7 6.891h-2v-3.473c0-.848-.017-1.944-1.188-1.944-1.187 0-1.363.926-1.363 1.886v3.531h-2v-6h1.996v.868h.027c.271-.527.994-1.188 2.003-1.188 2.148 0 2.542 1.411 2.542 3.256v3.832h-.001z"/></svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-sm">&copy; {new Date().getFullYear()} SonríeSalud. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Aviso Legal | Política de Privacidad</p>
      </div>
    </div>
  </footer>
);

const HeroSection = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <section
    className="relative bg-cover bg-center h-[500px] md:h-[650px] flex items-center justify-center text-center shadow-inner"
    style={{ backgroundImage: "url('https://placehold.co/1920x800/E0F2F7/0C2C84?text=Tu+Sonrisa,+Nuestra+Pasion')" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para contraste */}
    <div className="relative z-10 text-white p-6 rounded-lg max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight font-inter">
        Tu Sonrisa, Nuestra Pasión: <br className="hidden md:block"/> Armonización Orofacial y Odontología de Vanguardia.
      </h1>
      <p className="text-lg md:text-xl mb-8 font-light">
        Expertos en salud y estética dental para una confianza plena.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <button
          onClick={() => setCurrentPage('armonizacionOrofacial')}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Descubre Armonización
        </button>
        <button
          onClick={() => setCurrentPage('serviciosDentales')}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Nuestros Servicios Dentales
        </button>
      </div>
    </div>
  </section>
);

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  onClick: () => void;
};

const ServiceCard = ({ title, description, imageUrl, linkText, onClick }: ServiceCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center text-center p-6 border border-gray-100">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-2xl font-semibold text-blue-800 mb-2 font-inter">{title}</h3>
    <p className="text-gray-600 text-base mb-4 flex-grow">{description}</p>
    <button
      onClick={onClick}
      className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md"
    >
      {linkText}
    </button>
  </div>
);

type TestimonialCardProps = {
  quote: string;
  author: string;
  image: string;
};

const TestimonialCard = ({ quote, author, image }: TestimonialCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300 border border-blue-100">
    <img src={image} alt={author} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-300" />
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <p className="font-semibold text-blue-700">- {author}</p>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // En un entorno real, aquí enviarías los datos a un backend o servicio como Formspree.
    // Para esta demo estática, simplemente mostramos un mensaje.
    setMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-6 font-inter">Envíanos un Mensaje</h3>
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono (opcional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Tu Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md shadow-md transition-colors duration-300 transform hover:scale-105"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};


// --- Page Components ---
// Defined outside the App component
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <main className="font-inter">
    <HeroSection setCurrentPage={setCurrentPage} />

    {/* Section: Nuestros Servicios */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 font-inter">Nuestros Servicios</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          En <span className="font-semibold text-pink-500">SonríeSalud</span>, combinamos la estética y la funcionalidad para ofrecerte una gama completa de tratamientos que transformarán tu sonrisa y armonizarán tu rostro.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ServiceCard
            title="Armonización Orofacial"
            description="Descubre cómo los tratamientos de armonización orofacial pueden realzar tu belleza natural, suavizar líneas y mejorar la simetría facial sin cirugía."
            imageUrl="https://placehold.co/600x400/E0F7FA/0C2C84?text=Armonizacion+Orofacial"
            linkText="Explorar Armonización"
            onClick={() => setCurrentPage('armonizacionOrofacial')}
          />
          <ServiceCard
            title="Servicios Dentales Integrales"
            description="Desde la prevención hasta tratamientos avanzados y estética dental, cuidamos de tu salud bucal con la más alta tecnología y un equipo de expertos."
            imageUrl="https://placehold.co/600x400/E0F7FA/0C2C84?text=Servicios+Dentales"
            linkText="Explorar Servicios Dentales"
            onClick={() => setCurrentPage('serviciosDentales')}
          />
        </div>
      </div>
    </section>

    {/* Section: Por Qué Elegirnos */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 font-inter">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md border border-sky-100 bg-sky-50">
            <div className="text-5xl text-sky-600 mb-4">💡</div> {/* Placeholder for icon */}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Equipo de Especialistas</h3>
            <p className="text-gray-600">Profesionales altamente cualificados y en constante formación.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md border border-pink-100 bg-pink-50">
            <div className="text-5xl text-pink-600 mb-4">🔬</div> {/* Placeholder for icon */}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Tecnología Avanzada</h3>
            <p className="text-gray-600">Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md border border-blue-100 bg-blue-50">
            <div className="text-5xl text-blue-600 mb-4">💖</div> {/* Placeholder for icon */}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Tratamiento Personalizado</h3>
            <p className="text-gray-600">Planes adaptados a tus necesidades y objetivos estéticos y de salud.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md border border-teal-100 bg-teal-50">
            <div className="text-5xl text-teal-600 mb-4">🛋️</div> {/* Placeholder for icon */}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Ambiente Confortable</h3>
            <p className="text-gray-600">Un espacio diseñado para tu comodidad y relajación durante tu visita.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Section: Testimonios */}
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 font-inter">Lo que dicen nuestros pacientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="bg-gradient-to-r from-blue-600 to-sky-500 py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">¿Listo para transformar tu sonrisa?</h2>
        <p className="text-lg md:text-xl mb-8">
          Agenda tu consulta hoy mismo y da el primer paso hacia la sonrisa de tus sueños.
        </p>
        <button
          onClick={() => alert("Función de agendamiento para Armonización")} // Replace with actual navigation to Contact page
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-lg"
        >
          Agenda tu Consulta
        </button>
      </div>
    </section>
  </main>
);

const ArmonizacionOrofacialPage = () => (
  <main className="py-16 bg-gray-50 font-inter">
    <div className="container mx-auto px-4">
      {/* Banner */}
      <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg flex items-center justify-center mb-12"
           style={{ backgroundImage: "url('https://placehold.co/1200x400/E0F2F7/0C2C84?text=Armonizacion+Orofacial')" }}>
        <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold text-center">Armonización Orofacial</h1>
      </div>

      <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
        La armonización orofacial es un conjunto de procedimientos estéticos y funcionales que buscan equilibrar las proporciones del rostro, realzar la belleza natural y mejorar la calidad de vida, siempre de la mano de un experto en salud.
      </p>

      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Nuestros Tratamientos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.armonizacion.map(service => (
          <div key={service.id} className="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 flex flex-col justify-between">
            <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
            {/* Ideally, "Saber más" would link to a dynamic page for each service */}
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md">
              Saber más
            </button>
          </div>
        ))}
      </div>

      {/* Section: Preguntas Frecuentes */}
      <section className="mt-16 py-10 bg-white rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {/* FAQ Item 1 */}
          <details className="p-4 rounded-lg bg-gray-50 cursor-pointer shadow-sm">
            <summary className="font-semibold text-blue-700 text-lg">¿Es doloroso el tratamiento?</summary>
            <p className="text-gray-600 mt-2">La mayoría de los procedimientos se realizan con anestesia local o tópica, minimizando cualquier molestia.</p>
          </details>
          {/* FAQ Item 2 */}
          <details className="p-4 rounded-lg bg-gray-50 cursor-pointer shadow-sm">
            <summary className="font-semibold text-blue-700 text-lg">¿Cuánto duran los resultados?</summary>
            <p className="text-gray-600 mt-2">Depende del tratamiento y del paciente, pero los resultados suelen durar de 6 meses a 2 años.</p>
          </details>
          {/* FAQ Item 3 */}
          <details className="p-4 rounded-lg bg-gray-50 cursor-pointer shadow-sm">
            <summary className="font-semibold text-blue-700 text-lg">¿Quién puede realizarse estos tratamientos?</summary>
            <p className="text-gray-600 mt-2">Son adecuados para adultos que buscan mejorar la estética facial. Una consulta previa determinará la idoneidad.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          onClick={() => alert("Función de agendamiento para Armonización")} // Replace with actual navigation to Contact page
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
        >
          Agenda tu Valoración de Armonización
        </button>
      </div>
    </div>
  </main>
);

const ServiciosDentalesPage = () => (
  <main className="py-16 bg-gray-50 font-inter">
    <div className="container mx-auto px-4">
      {/* Banner */}
      <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg flex items-center justify-center mb-12"
           style={{ backgroundImage: "url('https://placehold.co/1200x400/E0F2F7/0C2C84?text=Servicios+Dentales')" }}>
        <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold text-center">Servicios Dentales Integrales</h1>
      </div>

      <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
        Ofrecemos una atención odontológica completa y personalizada, utilizando las técnicas más avanzadas para asegurar la salud y belleza de tu sonrisa en todas las etapas de tu vida.
      </p>

      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Nuestras Especialidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.dental.map(service => (
          <div key={service.id} className="bg-white rounded-xl shadow-md p-6 text-center border border-sky-100 flex flex-col justify-between">
            <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
            {/* Ideally, "Saber más" would link to a dynamic page for each service */}
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md">
              Saber más
            </button>
          </div>
        ))}
      </div>

      {/* Section: Tecnología */}
      <section className="mt-16 py-10 bg-white rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Tecnología de Vanguardia</h2>
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img src="https://placehold.co/400x250/E0F7FA/0C2C84?text=Tecnologia+Dental" alt="Tecnología Dental" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="text-gray-700 text-lg">
            <p className="mb-4">
              En <span className="font-semibold text-sky-500">SonríeSalud</span>, nos comprometemos con la excelencia utilizando tecnología de última generación para garantizar tratamientos más precisos, cómodos y eficientes.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Radiografía digital de baja radiación</li>
              <li>Escáner intraoral 3D</li>
              <li>Láser dental para procedimientos menos invasivos</li>
              <li>Software de diseño de sonrisa avanzado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          onClick={() => alert("Función de agendamiento para Servicios Dentales")} // Replace with actual navigation to Contact page
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
        >
          Encuentra el Tratamiento Dental Perfecto
        </button>
      </div>
    </div>
  </main>
);

const SobreNosotrosPage = () => (
  <main className="py-16 bg-gray-50 font-inter">
    <div className="container mx-auto px-4">
      {/* Banner */}
      <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg flex items-center justify-center mb-12"
           style={{ backgroundImage: "url('https://placehold.co/1200x400/E0F2F7/0C2C84?text=Sobre+Nosotros')" }}>
        <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold text-center">Sobre Nosotros</h1>
      </div>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Nuestra Historia y Filosofía</h2>
        <div className="text-lg text-gray-700 space-y-4 max-w-3xl mx-auto">
          <p>
            En <span className="font-semibold text-pink-500">SonríeSalud</span>, nacimos con la visión de fusionar la excelencia en odontología con los avances más innovadores en armonización orofacial. Nuestra misión es simple: brindarte una experiencia de atención integral, donde la salud bucal y la estética facial se complementan para realzar tu confianza y bienestar.
          </p>
          <p>
            Creemos en un enfoque personalizado, escuchando tus necesidades y diseñando planes de tratamiento que no solo mejoren tu apariencia, sino que también optimicen tu salud y calidad de vida. Tu sonrisa es nuestra pasión y nuestro compromiso es contigo.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 border border-sky-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Conoce a Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Professional 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100">
            <img src="https://placehold.co/150x150/0C2C84/F0F9FF?text=Dra.+Ana" alt="Dra. Ana López" className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-300" />
            <h3 className="text-2xl font-semibold text-blue-800">Dra. Ana López</h3>
            <p className="text-blue-600 font-medium mb-2">Odontóloga General y Estética</p>
            <p className="text-gray-600">Especialista en blanqueamiento dental y diseño de sonrisa, con un enfoque en la atención integral y la comodidad del paciente.</p>
          </div>
          {/* Professional 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md border border-pink-100">
            <img src="https://placehold.co/150x150/0C2C84/F0F9FF?text=Dr.+Juan" alt="Dr. Juan Pérez" className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-pink-300" />
            <h3 className="text-2xl font-semibold text-blue-800">Dr. Juan Pérez</h3>
            <p className="text-blue-600 font-medium mb-2">Especialista en Armonización Orofacial</p>
            <p className="text-gray-600">Experto en aplicación de ácido hialurónico y toxina botulínica, con un profundo conocimiento de la anatomía facial.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg border border-teal-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Nuestras Instalaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <img src="https://placehold.co/600x400/E0F7FA/0C2C84?text=Recepcion" alt="Recepción de la clínica" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src="https://placehold.co/600x400/E0F7FA/0C2C84?text=Consultorio" alt="Consultorio dental" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src="https://placehold.co/600x400/E0F7FA/0C2C84?text=Sala+Espera" alt="Sala de espera" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src="https://placehold.co/600x400/E0F7FA/0C2C84?text=Equipamiento" alt="Equipamiento moderno" className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>
        <p className="text-center text-gray-600 mt-8 text-lg">
          Un espacio moderno y acogedor, diseñado para tu confort y seguridad.
        </p>
      </section>
    </div>
  </main>
);

const ContactoPage = () => (
  <main className="py-16 bg-gray-50 font-inter">
    <div className="container mx-auto px-4">
      {/* Banner */}
      <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg flex items-center justify-center mb-12"
           style={{ backgroundImage: "url('https://placehold.co/1200x400/E0F2F7/0C2C84?text=Contactanos')" }}>
        <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold text-center">Contáctanos</h1>
      </div>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Estamos aquí para resolver tus dudas y ayudarte a agendar tu cita. Ponte en contacto con nosotros hoy mismo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info and Map */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6 font-inter text-center">Información de Contacto</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center">
                <span className="text-blue-500 mr-3 text-2xl">📞</span> Teléfono: <a href="tel:+5917XXXXXXX" className="text-blue-600 hover:underline ml-2">+591 7XXXXXXX</a>
              </p>
              <p className="flex items-center">
                <span className="text-blue-500 mr-3 text-2xl">📧</span> Email: <a href="mailto:info@sonriesalud.com" className="text-blue-600 hover:underline ml-2">info@sonriesalud.com</a>
              </p>
              <p className="flex items-center">
                <span className="text-blue-500 mr-3 text-2xl">📍</span> Dirección: Av. Principal #123, Cochabamba, Bolivia
              </p>
              <p className="flex items-center">
                <span className="text-blue-500 mr-3 text-2xl">⏰</span> Horarios: Lun - Vie: 9:00 AM - 6:00 PM
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.779 1.624 4.938 4.851.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.624 4.779-4.851 4.938-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.779-1.624-4.938-4.851-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.624-4.779 4.851-4.938 1.265-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/></svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1c.609 0 1.1.493 1.1 1.1s-.492 1.1-1.1 1.1zm7 6.891h-2v-3.473c0-.848-.017-1.944-1.188-1.944-1.187 0-1.363.926-1.363 1.886v3.531h-2v-6h1.996v.868h.027c.271-.527.994-1.188 2.003-1.188 2.148 0 2.542 1.411 2.542 3.256v3.832h-.001z"/></svg>
              </a>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="w-full h-96 rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.1481198656114!2d-66.1558237851214!3d-17.39343718104445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373f2c5d12345%3A0x6789abcdef12345!2sCochabamba%2C%20Bolivia!5e0!3m2!1sen!2sbo!4v1678912345678!5m2!1sen!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la clínica en Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </main>
);


// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <style>{`
        /* Import Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          background-color: #f8fafc; /* Tailwind gray-50 */
        }
      `}</style>
      <div className="min-h-screen flex flex-col">
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="flex-grow">
          {/* Conditional rendering based on currentPage */}
          {(() => {
            switch (currentPage) {
              case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
              case 'armonizacionOrofacial':
                return <ArmonizacionOrofacialPage />;
              case 'serviciosDentales':
                return <ServiciosDentalesPage />;
              case 'sobreNosotros':
                return <SobreNosotrosPage />;
              case 'contacto':
                return <ContactoPage />;
              default:
                return <HomePage setCurrentPage={setCurrentPage} />; // Fallback to home
            }
          })()}
        </div>
        <Footer />
      </div>
    </>
  );
}
