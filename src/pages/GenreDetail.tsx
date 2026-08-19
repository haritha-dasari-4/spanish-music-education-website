import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { genresData } from '../data/genresData';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const GenreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState('fade-in');
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  
  const genre = genresData.find(g => g.id === id);
  
  if (!genre) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-600">Genre not found</h2>
        <button 
          onClick={() => navigate('/genres')}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Back to Genres
        </button>
      </div>
    );
  }

  const content = [
    {
      title: "Introduction",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-2">{genre.name}</h2>
          <p className="text-gray-600 italic mb-4">{genre.spanishName}</p>
          <p className="text-lg">{genre.description}</p>
        </div>
      )
    },
    {
      title: "Region & Origin",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Origin & Region</h2>
          <p className="text-lg mb-4">{genre.originDescription}</p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">Region:</h3>
            <p>{genre.region}</p>
          </div>
        </div>
      )
    },
    {
      title: "Characteristics",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Style & Characteristics</h2>
          <p className="text-lg mb-4">{genre.styleDescription}</p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-bold text-red-800 mb-2">Key Elements:</h3>
            <ul className="list-disc pl-5">
              {genre.characteristics.map((char, index) => (
                <li key={index} className="mb-1">{char}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Instruments",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Instruments</h2>
          <p className="text-lg mb-4">{genre.instrumentsDescription}</p>
          <div className="grid grid-cols-2 gap-4">
            {genre.instruments.map((instrument, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                {instrument}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Listen",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Listen to {genre.name}</h2>
          <p className="text-lg mb-4">Experience this music style by watching and listening to this example:</p>
          
          <div className="relative">
            <video 
              ref={setVideoRef}
              src={genre.videoUrl} 
              className="w-full max-h-80 object-cover rounded-lg" 
              poster={genre.imageUrl}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => {
                  if (videoRef) {
                    if (isPlaying) {
                      videoRef.pause();
                    } else {
                      videoRef.play();
                    }
                  }
                }}
                className="flex items-center space-x-2 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span>{isPlaying ? 'Pause' : 'Play Example'}</span>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Artists",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Famous Artists</h2>
          <p className="text-lg mb-4">These artists are known for their contributions to {genre.name}:</p>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <ul className="space-y-3">
              {genre.famousArtists.map((artist, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center mr-2 mt-1">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </span>
                  <div>
                    <span className="font-bold">{artist.name}</span>
                    {artist.description && <p className="text-gray-600 text-sm">{artist.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (step < content.length - 1) {
      setAnimation('fade-out');
      setTimeout(() => {
        setStep(prevStep => prevStep + 1);
        setAnimation('fade-in');
      }, 300);
    } else {
      // Show completion message
      setAnimation('fade-out');
      setTimeout(() => {
        setStep(content.length);
        setAnimation('fade-in');
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setAnimation('fade-out');
      setTimeout(() => {
        setStep(prevStep => prevStep - 1);
        setAnimation('fade-in');
      }, 300);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <button 
        onClick={() => navigate('/genres')}
        className="mb-6 flex items-center text-red-600 hover:text-red-800 transition-colors"
      >
        <ChevronLeft size={20} />
        <span>Back to all genres</span>
      </button>

      <div 
        className="h-48 bg-cover bg-center rounded-t-lg relative"
        style={{ backgroundImage: `url('${genre.imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-lg"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h1 className="text-3xl font-bold mb-1">{genre.name}</h1>
          <p className="text-xl">{genre.spanishName}</p>
        </div>
      </div>

      {step < content.length ? (
        <div className={`bg-white rounded-b-lg shadow-lg p-6 ${animation}`}>
          {content[step].content}
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrevious}
              disabled={step === 0}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                step === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              <ChevronLeft className="mr-1" size={20} />
              Previous
            </button>
            
            <button 
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Next
              <ChevronRight className="ml-1" size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className={`bg-white rounded-b-lg shadow-lg p-8 text-center ${animation}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¡Esperamos que hayas aprendido algo nuevo hoy!</h2>
          <p className="text-lg text-gray-700 mb-6">(Hope you learned something new today!)</p>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                setAnimation('fade-out');
                setTimeout(() => {
                  setStep(0);
                  setAnimation('fade-in');
                }, 300);
              }}
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              Learn Again
            </button>
            
            <button 
              onClick={() => navigate('/genres')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Explore More Genres
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          {content.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === step ? 'bg-red-600' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreDetail;