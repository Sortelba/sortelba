import React from 'react';

const Hero: React.FC = () => {
  return (
    <section>
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-cyber-white mb-4 animate-glitch">
                Just Skateboarding
            </h1>
            <p className="mb-6 text-cyber-gray text-lg">
                Your primary node for skate-related data streams.
            </p>
        </div>
    </section>
  );
};

export default Hero;