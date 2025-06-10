import React from 'react';
import { Heart, Code, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
            <span>Hecho con</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>y</span>
            <Code size={16} className="text-blue-500" />
            <span>Sergio Esteban</span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Sergio Esteban. Todos los derechos reservados.
          </p>

          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-3 rounded-full shadow-lg transition-all duration-300"
              title="Volver arriba"
            >
              <ChevronUp className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Volver arriba</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};