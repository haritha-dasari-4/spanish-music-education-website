import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const promptTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 800);

    const optionsTimer = setTimeout(() => {
      setShowOptions(true);
    }, 2000);

    return () => {
      clearTimeout(promptTimer);
      clearTimeout(optionsTimer);
    };
  }, []);

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden mb-12"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2097/desk-music-instrument-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-8 py-16 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            ¡Música Española!
            <span className="block text-2xl mt-2">(Spanish Music)</span>
          </h1>
          <p className="text-xl">A journey through rhythm, culture & tradition</p>
        </div>
      </div>

      {showPrompt && (
        <div 
          className="bg-red-600 text-white p-6 rounded-lg shadow-lg mb-10 transform transition-all duration-500 max-w-2xl text-center"
          style={{opacity: showPrompt ? 1 : 0, transform: showPrompt ? 'translateY(0)' : 'translateY(20px)'}}
        >
          <h2 className="text-2xl font-bold mb-2">¿Qué quieres saber sobre la música española hoy?</h2>
          <p className="text-lg">(Hey, what do you want to know about Spanish music today?)</p>
        </div>
      )}

      {showOptions && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <button
            onClick={() => handleOptionClick('/evolution')}
            className="bg-white hover:bg-amber-50 transition-colors duration-300 rounded-lg shadow-md overflow-hidden flex flex-col h-80 group"
          >
            <div 
              className="h-3/5 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
              }}
            ></div>
            <div className="p-6 flex flex-col items-center justify-center flex-grow">
              <BookOpen className="mb-3 w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-800">Evolución de la Música</h3>
              <p className="text-gray-600">(Evolution of Music)</p>
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('/genres')}
            className="bg-white hover:bg-amber-50 transition-colors duration-300 rounded-lg shadow-md overflow-hidden flex flex-col h-80 group"
          >
            <div 
              className="h-3/5 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&w=1260&h=750')"
              }}
            ></div>
            <div className="p-6 flex flex-col items-center justify-center flex-grow">
              <Music className="mb-3 w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-800">Géneros</h3>
              <p className="text-gray-600">(Genres)</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;