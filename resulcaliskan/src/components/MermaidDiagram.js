// components/MermaidDiagram.js
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  fontFamily: 'inherit',
});

const MermaidDiagram = ({ chart }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && chart) {
      const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 11)}`;
      mermaid.render(uniqueId, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error("Mermaid render error:", error);
      });
    }
  }, [chart]);

  return (
    <div 
      className="mermaid-wrapper" 
      style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        overflowX: 'auto',
        margin: '1.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      ref={containerRef} 
    />
  );
};

export default MermaidDiagram;
