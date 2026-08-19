import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Music } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50">
      <header className="bg-gradient-to-r from-red-600 to-amber-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Music size={32} />
            <span>¡Música Española!</span>
            <span className="text-sm font-normal">(Spanish Music)</span>
          </Link>
          
          {!isHome && (
            <Link to="/" className="px-4 py-2 bg-white text-red-600 rounded-md hover:bg-red-100 transition-colors">
              Back Home
            </Link>
          )}
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Spanish Music Education Project</p>
      </footer>
    </div>
  );
};

export default Layout;