import { useState } from 'react'
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './style.css';
// Page 2: Time Cycle
function YugaCyclePage() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    const opt = {
      margin:       0.5,
      filename:     'affirmations.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8" ref={contentRef}>
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-800">धर्म चक्र</h1>
        </header>
        
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 500 500" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            {/* Circle border */}
            <circle cx="250" cy="250" r="230" fill="none" stroke="#333" strokeWidth="4"/>
            
            {/* Clock tick marks */}
            <line x1="250" y1="20" x2="250" y2="40" stroke="#333" strokeWidth="4"/>
            <line x1="480" y1="250" x2="460" y2="250" stroke="#333" strokeWidth="4"/>
            <line x1="250" y1="480" x2="250" y2="460" stroke="#333" strokeWidth="4"/>
            <line x1="20" y1="250" x2="40" y2="250" stroke="#333" strokeWidth="4"/>
            
            {/* Diagonal tick marks */}
            <line x1="393" y1="107" x2="379" y2="121" stroke="#333" strokeWidth="4"/>
            <line x1="393" y1="393" x2="379" y2="379" stroke="#333" strokeWidth="4"/>
            <line x1="107" y1="393" x2="121" y2="379" stroke="#333" strokeWidth="4"/>
            <line x1="107" y1="107" x2="121" y2="121" stroke="#333" strokeWidth="4"/>
            
            {/* Cross lines */}
            <line x1="250" y1="20" x2="250" y2="480" stroke="#333" strokeWidth="2"/>
            <line x1="20" y1="250" x2="480" y2="250" stroke="#333" strokeWidth="2"/>
            
            {/* Sangam line */}
            <line x1="250" y1="250" x2="230" y2="100" stroke="#333" strokeWidth="2"/>
            
            {/* Text for yugas */}
            {/* Sangam */}
            <text x="250" y="100" fontFamily="Arial" fontSize="16" textAnchor="end">संगम</text>
            <text x="250" y="120" fontFamily="Arial" fontSize="16" textAnchor="end">100 वर्ष</text>
            
            {/* Satayuga */}
            <text x="370" y="190" fontFamily="Arial" fontSize="16" textAnchor="middle">सतयुग</text>
            <text x="370" y="210" fontFamily="Arial" fontSize="16" textAnchor="middle">1250 वर्ष</text>
            
            {/* Tretayuga */}
            <text x="370" y="320" fontFamily="Arial" fontSize="16" textAnchor="middle">त्रेतायुग</text>
            <text x="370" y="340" fontFamily="Arial" fontSize="16" textAnchor="middle">1250 वर्ष</text>
            
            {/* Dwaparyuga */}
            <text x="130" y="320" fontFamily="Arial" fontSize="16" textAnchor="middle">द्वापरयुग</text>
            <text x="130" y="340" fontFamily="Arial" fontSize="16" textAnchor="middle">1250 वर्ष</text>
            
            {/* Kaliyuga */}
            <text x="130" y="190" fontFamily="Arial" fontSize="16" textAnchor="middle">कलियुग</text>
            <text x="130" y="210" fontFamily="Arial" fontSize="16" textAnchor="middle">1250 वर्ष</text>
          </svg>
        </div>

        <div className="space-y-4 text-lg">
          <p className="text-justify">धर्म के चक्र के 4 भाग हैं - सतयुग 1250 वर्ष, त्रेतायुग 1250 वर्ष, द्वापरयुग 1250 वर्ष, कलियुग 1250 वर्ष, कुल समय 5000 वर्ष है।</p>
          
          <p className="text-justify">अभी कलियुग के अंतिम समय में परमात्मा साधारण व्यक्ति (प्रजापिता ब्रह्मा) के माध्यम से ज्ञान व योग की शिक्षा देकर नर से नारायण, नारी से श्री लक्ष्मी बनाने का कार्य कर रहे हैं।</p>
          
          <p className="text-justify">यह संगम युग स्वर्ग की सृष्टि रचने वाली है, बहुत कम समय बाकी है। विनाश (तीसरा विश्वयुद्ध, प्राकृतिक आपदाएं, गृहयुद्ध) नजदीक है। अब सिर्फ परिवर्तन का कार्य बाकी है।</p>
          
          <p className="text-justify">समय बहुत कम है। विनाश से पहले परमात्मा ज्ञान, योग सीख कर अपना भाग्य बनाना है। संगम युग 100 साल का है। भगवान का अवतरण माउंट आबू में 88 साल पहले हो चुका है और अब 12 साल बाकी हैं।</p>
          
          <p className="text-justify">ज्ञान और विनाश का कार्य साथ साथ चल रहा है। 2036 में सतयुग की स्थापना हो जाएगी।</p>
          
          <p className="text-justify font-bold">हमें अपनी हर घड़ी को आखरी घड़ी समझनी चाहिए</p>
        </div>

        <footer className="mt-8 text-center text-gray-600">
          <p>© 2025 ओमशान्ति ब्रह्मकुमारी</p>
          <p className="mt-2">पृष्ठ 2 / 2</p>
        </footer>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <YugaCyclePage />
  );
}

export default App;