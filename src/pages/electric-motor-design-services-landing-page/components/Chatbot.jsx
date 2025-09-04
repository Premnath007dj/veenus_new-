import React, { useState, useEffect, useRef } from 'react';

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-2">
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
  </div>
);

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTopics, setShowTopics] = useState(true);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Initial message from the bot
    setIsTyping(true);
    setTimeout(() => {
      setMessages([
        { text: 'Hello! I am Nova, your virtual assistant. You can ask me a question below, or choose from some common topics.', sender: 'bot' }
      ]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const knowledgeBase = [
    {
      question: 'What are your services?',
      keywords: ['services', 'offer', 'develop'],
      answer: 'We offer a range of Engineering Services and Software Solutions. Our engineering services include Product Benchmarking, Electromagnetic Simulation, Product Design & Development, and Technical Documentation. For software, we provide custom Web & App Development.'
    },
    {
      question: 'What motor types do you specialize in?',
      keywords: ['motor', 'types', 'pmsm', 'bldc', 'synrm', 'pmdc'],
      answer: 'We specialize in a variety of motor technologies, including Permanent Magnet Synchronous Motors (PMSM), Brushless DC Motors (BLDC), Synchronous Reluctance Motors (SynRM), and Permanent Magnet DC Motors (PMDC).'
    },
    {
      question: 'What is your experience?',
      keywords: ['experience', 'founded', 'history'],
      answer: 'We have over 6 years of experience, have delivered more than 50 projects, and have a 98% client satisfaction rate. We were founded in 2018 with a vision to bridge the gap between theoretical motor design and practical implementation.'
    },
    {
        question: 'Who is on your team?',
        keywords: ['team', 'people', 'engineer'],
        answer: 'Our team includes experts ).'
    },
    {
      question: 'Why should I choose you?',
      keywords: ['why', 'choose', 'advantage', 'benefit'],
      answer: 'We offer Precision Engineering with a 99.8% accuracy rate, Performance Excellence leading to a 25% performance boost, and an Expert Team with decades of combined experience. We provide end-to-end support from concept to prototype.'
    },
    {
      question: 'How can I get a quote?',
      keywords: ['quote', 'price', 'cost', 'pricing'],
      answer: 'You can get a quote by filling out the contact form on our website, or by sending us an email at hello@veenusnova.com.'
    },
    {
        question: 'How can I contact you?',
        keywords: ['contact', 'email', 'phone', 'address'],
        answer: 'You can reach us via email at hello@veenusnova.com or find us at our office in Coimbatore, TN, India. You can also use the contact form on our website.'
    }
  ];

  // Levenshtein distance function
  const levenshtein = (s1, s2) => {
    if (s1.length < s2.length) {
      return levenshtein(s2, s1);
    }
    if (s2.length === 0) {
      return s1.length;
    }
    let previousRow = Array.from({ length: s2.length + 1 }, (_, i) => i);
    for (let i = 0; i < s1.length; i++) {
      let currentRow = [i + 1];
      for (let j = 0; j < s2.length; j++) {
        let insertions = previousRow[j + 1] + 1;
        let deletions = currentRow[j] + 1;
        let substitutions = previousRow[j] + (s1[i] !== s2[j] ? 1 : 0);
        currentRow.push(Math.min(insertions, deletions, substitutions));
      }
      previousRow = currentRow;
    }
    return previousRow[previousRow.length - 1];
  };

  const handleQuestionClick = (question, answer) => {
    const newMessages = [
      ...messages,
      { text: question, sender: 'user' }
    ];
    setMessages(newMessages);
    setIsTyping(true);
    setShowTopics(false);

    setTimeout(() => {
      setMessages(prev => [...prev, { text: answer, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    const lowerCaseInput = inputValue.toLowerCase();
    const inputWords = lowerCaseInput.split(' ');
    setInputValue('');
    setShowTopics(false);
    setIsTyping(true);

    setTimeout(() => {
        let botResponse = null;
        let bestMatch = { score: Infinity, answer: null };

        for (const word of inputWords) {
            for (const item of knowledgeBase) {
                for (const keyword of item.keywords) {
                    const distance = levenshtein(word, keyword);
                    if (distance < bestMatch.score) {
                        bestMatch = { score: distance, answer: item.answer };
                    }
                }
            }
        }

        // Threshold for a "good enough" match
        if (bestMatch.score <= 2) {
             botResponse = { text: bestMatch.answer, sender: 'bot' };
        } else {
            botResponse = { text: "I'm sorry, I don't have the answer to that right now. I am still under development. For more specific questions, I recommend reaching out to our expert team via the contact form or at hello@veenusnova.com.", sender: 'bot' };
        }

      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-28 sm:right-8 w-full h-full sm:w-96 sm:h-[500px] bg-white rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-50 border-primary-200/50">
      <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-t-none sm:rounded-t-2xl flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707m12.728 0l.707.707M12 21v-1" /></svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Nova Assistant</h3>
            <p className="text-xs text-white/80">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto bg-primary-50/20">
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-3 animate-fade-in ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-xs shadow-md ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-white text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      
      <div className="p-2 border-t border-gray-200 bg-white rounded-b-none sm:rounded-b-2xl">
        {showTopics && (
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-600">Choose a topic:</p>
                    <button onClick={() => setShowTopics(false)} className="text-xs text-gray-400 hover:text-gray-600">Hide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                {knowledgeBase.map((q, index) => (
                    <button
                        key={index}
                        onClick={() => handleQuestionClick(q.question, q.answer)}
                        className="px-3 py-1 bg-primary-100/50 hover:bg-primary-100 border border-primary-200/70 rounded-full text-sm transition-colors shadow-sm text-primary-800 font-medium"
                    >
                        {q.question}
                    </button>
                ))}
                </div>
            </div>
        )}
        {!showTopics && (
            <button onClick={() => setShowTopics(true)} className="text-sm text-primary-600 hover:underline mb-2">Show topics</button>
        )}
        <div className="relative bg-primary-100/50 rounded-full p-2 flex items-center">
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your question..."
            className="flex-1 w-full bg-transparent px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-opacity flex items-center justify-center"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
