import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

const SeltzerFlavorGenerator = () => {
  const adjectives = [
    'Funky', 'Wacky', 'Zippy', 'Delicious', 'Refreshing',
    'Tropical', 'Sparkling', 'Citrusy', 'Bubbly', 'Exotic'
  ];

  const flavors = [
    'Raspberry', 'Strawberry', 'Pineapple', 'Mango', 'Whipped Cream',
    'Coconut', 'Watermelon', 'Blueberry', 'Passion Fruit', 'Lemon'
  ];

  const generateRandomFlavor = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomFlavor1, randomFlavor2;
    do {
      randomFlavor1 = flavors[Math.floor(Math.random() * flavors.length)];
      randomFlavor2 = flavors[Math.floor(Math.random() * flavors.length)];
    } while (randomFlavor1 === randomFlavor2);
    return `${randomAdjective} ${randomFlavor1} ${randomFlavor2}`;
  };

  const [generatedFlavor, setGeneratedFlavor] = useState('');
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#FFE152');

  // Function to update the flavor and background color on hover
  const handleHover = () => {
    const newFlavor = generateRandomFlavor();
    setGeneratedFlavor(newFlavor);

    // Generate a random background color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomBackgroundColor(randomColor);
  };

  // Attach hover event listener on component mount
  useEffect(() => {
    const container = document.querySelector('.tropical-container');
    container.addEventListener('mouseenter', handleHover);
    return () => {
      container.removeEventListener('mouseenter', handleHover);
    };
  }, []);

  return (
    <div className="tropical-container" style={{ backgroundColor: randomBackgroundColor }}>
      <h1 className="tropical-heading">Seltzer Flavor Generator</h1>
      <p className="generated-flavor tropical-font" style={{ fontSize: '18px' }}>Generated Flavor: {generatedFlavor}</p>
      <button className="generate-button" onClick={handleHover}>Generate Flavor</button>
    </div>
  );
};

export default SeltzerFlavorGenerator;
