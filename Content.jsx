import React from 'react';

const Content = () => {
  return (
    <main className="content">
      <section className="introduction">
        <h2>Introduction to Quantum Computing</h2>
        <img src="quantum-computing.jpg" alt="Quantum Computing" className='intro-image'/>
        <p>
          Quantum computing represents a revolutionary shift in computational power, aiming to harness the unique properties of quantum mechanics to solve problems that are beyond the reach of classical computers. Unlike traditional computers that use binary bits, quantum computers use quantum bits (qubits) which can exist in multiple states simultaneously, thanks to phenomena like superposition and entanglement. This ability allows quantum computers to perform complex calculations at unprecedented speeds.
        </p>
      </section>
      <section className="key-concepts">
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Superposition:</strong> The principle that a quantum system can be in a combination of multiple states at the same time, vastly increasing its computational capacity.</li>
          <li><strong>Entanglement:</strong> A quantum phenomenon where particles become interlinked in such a way that the state of one can instantly influence the state of another, regardless of distance.</li>
          <li><strong>Quantum Gates:</strong> Fundamental operations in quantum computing that manipulate qubits, analogous to logic gates in classical computing but operating on quantum states.</li>
        </ul>
      </section>
      <section className="applications">
        <h2>Applications</h2>
        <p>
          The potential applications of quantum computing are extensive and transformative. These include advancements in cryptography, where quantum computers could break traditional encryption methods; optimization problems in logistics and supply chains; breakthroughs in drug discovery by simulating molecular structures; and improvements in machine learning algorithms that could enhance artificial intelligence capabilities.
        </p>
      </section>
      <section className="future">
        <h2>The Future of Quantum Computing</h2>
        <p>
          As quantum computing technology continues to evolve, it holds the promise of solving problems that are currently intractable for classical computers. Researchers are working on making quantum computers more stable and scalable, with the aim of integrating them into practical applications that could revolutionize industries and scientific research. The future of quantum computing is poised to unlock new frontiers in technology and knowledge.
        </p>
      </section>
    </main>
  );
};

export default Content;
