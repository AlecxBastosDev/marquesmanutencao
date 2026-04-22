
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { CartProvider } from './context/cartProvider';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/home'));
const Catalog = lazy(() => import('./pages/catalog'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Checkout = lazy(() => import('./pages/checkout'));
const Admin = lazy(() => import('./pages/admin'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center">
    <Loader2 className="h-10 w-10 text-yellow-500 animate-spin mb-4" />
    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Carregando Experiência Marques...</span>
  </div>
);

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = "555192043597"; 
  const message = encodeURIComponent("Olá! Seja bem-vindo à Marques Manutenção. Gostaria de tirar uma dúvida.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ 
          delay: 1, 
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/20 mb-1 relative group preserve-3d"
      >
        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white/80 rotate-45 border-r border-b border-white/20 backdrop-blur-md"></div>
        <div className="flex items-center px-2 py-1">
          <span className="text-[11px] font-black text-zinc-900 uppercase tracking-tight">Posso ajudar?</span>
        </div>
      </motion.div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center justify-center border-4 border-[#25D366] bg-white overflow-hidden"
        aria-label="Contato via WhatsApp"
      >
        <img 
          src="/fotos/mascote.png" 
          alt="WhatsApp Marques" 
          className="w-full h-full object-cover object-center scale-[1.8] translate-y-2"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  // Simple hash routing handling
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '').split('?')[0];
      // Normalize to always start with /
      if (hash && !hash.startsWith('/')) {
        hash = '/' + hash;
      }
      setCurrentPath(hash || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/catalog':
        return <Catalog />;
      case '/services':
        return <Services />;
      case '/contact':
        return <Contact />;
      case '/checkout':
        return <Checkout onNavigate={navigate} />;
      case '/admin':
        return <Admin />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar currentPath={currentPath} onNavigate={navigate} />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
};

export default App;
