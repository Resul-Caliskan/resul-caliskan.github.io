// components/MermaidDiagram.js
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    darkMode: true,
    background: '#131b2e',
    primaryColor: '#2563eb',
    primaryTextColor: '#f8fafc',
    primaryBorderColor: '#3b82f6',
    lineColor: '#64748b',
    secondaryColor: '#7c3aed',
    tertiaryColor: '#0f172a'
  },
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
        backgroundColor: '#131b2e',
        padding: '1.75rem',
        borderRadius: '20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflowX: 'auto',
        margin: '1.75rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      ref={containerRef} 
    />
  );
};

export default MermaidDiagram;
