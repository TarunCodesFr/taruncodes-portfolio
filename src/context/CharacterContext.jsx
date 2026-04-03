import { createContext, useContext, useState, useCallback, useRef } from 'react';

const CharacterContext = createContext();

export const useCharacter = () => useContext(CharacterContext);

const DEFAULT_MESSAGE = "WELC0ME TO MY PORTF0LIO! [STATUS: ONLINE]";

export const CharacterProvider = ({ children }) => {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  const say = useCallback((text, duration = 3000) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setMessage(text);
    setIsTyping(true);
    
    // Simple "isTyping" flag for UI effects if needed
    setTimeout(() => setIsTyping(false), 500);

    if (duration !== Infinity) {
      timeoutRef.current = setTimeout(() => {
        setMessage(DEFAULT_MESSAGE);
      }, duration);
    }
  }, []);

  return (
    <CharacterContext.Provider value={{ message, say, isTyping }}>
      {children}
    </CharacterContext.Provider>
  );
};
