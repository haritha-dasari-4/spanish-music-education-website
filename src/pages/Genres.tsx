import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { genresData } from '../data/genresData';

const Genres: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectGenre = (id: string) => {
    navigate(`/genres/${id}`);
  };

  // Group genres by traditional and modern
  const traditionalGenres = genresData.filter(genre => genre.type === 'traditional');
  const modernGenres = genresData.filter(genre => genre.type === 'modern');

  return (
    <div 
      className={`max-w-5xl mx-auto py-8 transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-red-700">
        Géneros de Música Española
        <span className="block text-xl font-normal text-gray-600">(Spanish Music Genres)</span>
      </h1>

      <p className="text-lg text-center mb-8 text-gray-700">
        Explore the rich diversity of Spanish music through its various genres.
        Click on any genre to learn more and listen to examples.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-amber-800 border-b-2 border-amber-200 pb-2">
          Géneros Tradicionales
          <span className="ml-2 text-gray-600 font-normal">(Traditional Genres)</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traditionalGenres.map((genre) => (
            <div 
              key={genre.id}
              onClick={() => handleSelectGenre(genre.id)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${genre.imageUrl}')` }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{genre.name}</h3>
                <p className="text-gray-600 italic mb-3">{genre.spanishName}</p>
                <p className="text-gray-700 line-clamp-2">{genre.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-red-700 border-b-2 border-red-200 pb-2">
          Géneros Modernos
          <span className="ml-2 text-gray-600 font-normal">(Modern Genres)</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modernGenres.map((genre) => (
            <div 
              key={genre.id}
              onClick={() => handleSelectGenre(genre.id)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${genre.imageUrl}')` }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{genre.name}</h3>
                <p className="text-gray-600 italic mb-3">{genre.spanishName}</p>
                <p className="text-gray-700 line-clamp-2">{genre.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Genres;