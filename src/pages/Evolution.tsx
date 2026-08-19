import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Evolution: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState('fade-in');

  const content = [
    {
      title: "Origins of Spanish Music",
      text: "Spanish music has roots dating back centuries, influenced by various cultures including Roman, Visigothic, Moorish, and Sephardic Jewish traditions.",
      image: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Medieval Period (500-1400)",
      text: "During this time, Spanish music was primarily religious, with the Catholic Church being the main patron. Gregorian chants and early polyphonic music were prominent.",
      image: "https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Renaissance Period (1400-1600)",
      text: "Spanish composers like Tomás Luis de Victoria gained prominence. The vihuela (an early guitar) became popular, and secular music flourished alongside religious compositions.",
      image: "https://images.pexels.com/photos/7095054/pexels-photo-7095054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Baroque Period (1600-1750)",
      text: "Spanish baroque featured unique characteristics, with the zarzuela (Spanish opera/musical theater) developing during this time. The guitar evolved into its modern form.",
      image: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "18th-19th Centuries",
      text: "Traditional folk music styles like flamenco began to formalize. Regional styles developed distinctive characteristics while classical composers incorporated Spanish themes.",
      image: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "20th Century",
      text: "The early 20th century saw composers like Manuel de Falla and Isaac Albéniz bring Spanish music to international audiences. Flamenco evolved with artists like Paco de Lucía.",
      image: "https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Modern Era",
      text: "Spanish music diversified with pop, rock, electronic, and fusion genres. Artists incorporated traditional elements into contemporary styles, creating unique Spanish sounds.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Today's Spanish Music",
      text: "Spanish artists are globally recognized with genres like Latin pop, reggaeton, and electronic music. Traditional forms continue to evolve while maintaining cultural importance.",
      image: "https://images.pexels.com/photos/9006375/pexels-photo-9006375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
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
      <h1 className="text-3xl font-bold text-center mb-8 text-red-700">
        Evolución de la Música Española
        <span className="block text-xl font-normal text-gray-600">(Evolution of Spanish Music)</span>
      </h1>

      {step < content.length ? (
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${animation}`}>
          <div 
            className="h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url('${content[step].image}')` }}
          ></div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{content[step].title}</h2>
            <p className="text-lg text-gray-700 mb-6">{content[step].text}</p>
            
            <div className="flex justify-between">
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
        </div>
      ) : (
        <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${animation}`}>
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
              Start Over
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Return Home
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

export default Evolution;