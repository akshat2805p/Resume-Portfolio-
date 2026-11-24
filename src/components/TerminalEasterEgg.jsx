import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { personalInfo, experiences } from '../data/portfolioData';

export default function TerminalEasterEgg({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '╔══════════════════════════════════════════════════════════════╗' },
    { type: 'system', text: '║     AKSHAT PANDEY // DEVELOPER TELEMETRY CLI v2.4            ║' },
    { type: 'system', text: '║  Type "help" to explore available commands.                  ║' },
    { type: 'system', text: '╚══════════════════════════════════════════════════════════════╝' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');

    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  about        - View engineering narrative & education' },
          { type: 'output', text: '  projects     - List primary production systems' },
          { type: 'output', text: '  skills       - View full technology stack matrix' },
          { type: 'output', text: '  fellowship   - IIT Bombay FOSSEE fellowship details' },
          { type: 'output', text: '  leetcode     - Competitive programming statistics' },
          { type: 'output', text: '  contact      - Direct email and network links' },
          { type: 'output', text: '  clear        - Clear console window' },
          { type: 'output', text: '  exit         - Close CLI interface' }
        );
        break;

      case 'about':
        newHistory.push(
          { type: 'output', text: `Name: ${personalInfo.name}` },
          { type: 'output', text: `Degree: ${personalInfo.education.degree}` },
          { type: 'output', text: `College: ${personalInfo.education.institution} (${personalInfo.education.period})` },
          { type: 'output', text: `Focus: AI Systems, Developer Tools, Distributed Systems in Go.` }
        );
        break;

      case 'projects':
        newHistory.push(
          { type: 'output', text: '1. eSim KiCad Health Analyzer (Python/wxPython, KiCad 6-10)' },
          { type: 'output', text: '2. AIOps Sentinel (C++20, FastAPI, Isolation Forest: 83.96% precision on 10,368 samples)' },
          { type: 'output', text: '3. Mini-Dynamo (Go 1.25, 5-node cluster, consistent hashing, WAL, vector clocks)' },
          { type: 'output', text: '4. Aura AI (Chrome Manifest V3, Gemini Flash in-browser assistant)' },
          { type: 'output', text: '5. SelfUI (Next.js, prompt to React/Tailwind code generator)' }
        );
        break;

      case 'skills':
        newHistory.push(
          { type: 'output', text: 'LANGUAGES: C++, Python, Go (Golang), JavaScript, TypeScript, HTML/CSS' },
          { type: 'output', text: 'FRAMEWORKS: React 19, Next.js, Node.js, Express, FastAPI, wxPython' },
          { type: 'output', text: 'DATABASES: PostgreSQL, MySQL, MongoDB, SQLite, Redis' },
          { type: 'output', text: 'INFRASTRUCTURE: Docker, Kubernetes, Git, GitHub Actions, Linux/Bash, Nginx' }
        );
        break;

      case 'fellowship':
        newHistory.push(
          { type: 'output', text: 'FOSSEE Summer Fellowship @ IIT Bombay (May–July 2026):' },
          { type: 'output', text: '• Built 6 native Python/wxPython plugins for eSim EDA suite.' },
          { type: 'output', text: '• API abstraction bridging KiCad 6.0 through 10.0 nightly.' },
          { type: 'output', text: '• 3-stage AI reporting pipeline with NetworkX bipartite dependency graphs.' }
        );
        break;

      case 'leetcode':
        newHistory.push(
          { type: 'output', text: `Title: ${personalInfo.competitiveProgramming.title}` },
          { type: 'output', text: `Rating: ${personalInfo.competitiveProgramming.rating}` },
          { type: 'output', text: `Solved: ${personalInfo.competitiveProgramming.solved}` },
          { type: 'output', text: 'Contests: Regular competitor with 50+ Hard-rated algorithmic solutions.' }
        );
        break;

      case 'contact':
        newHistory.push(
          { type: 'output', text: `Email: ${personalInfo.email}` },
          { type: 'output', text: 'GitHub: https://github.com/akshat2805p' },
          { type: 'output', text: 'LinkedIn: https://linkedin.com/in/akshatpandey28' }
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: 'min(640px, calc(100vw - 32px))',
        height: '420px',
        zIndex: 300,
        backgroundColor: '#0a0d14',
        border: '1px solid var(--accent-mint)',
        borderRadius: '12px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)'
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          backgroundColor: '#121722',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-mint)' }}>
          <TerminalIcon size={14} />
          <span style={{ fontSize: '12px', fontWeight: 600 }}>guest@akshat-pandey:~</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close terminal window"
          style={{
            padding: '4px',
            color: 'var(--text-muted)',
            display: 'flex'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <X size={16} />
        </button>
      </div>

      {/* Terminal Content Area */}
      <div
        style={{
          flex: 1,
          padding: '16px',
          overflowY: 'auto',
          fontSize: '12.5px',
          lineHeight: 1.6,
          color: '#e2e8f0'
        }}
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            style={{
              color:
                line.type === 'user'
                  ? 'var(--accent-mint)'
                  : line.type === 'error'
                  ? '#f87171'
                  : line.type === 'system'
                  ? '#64748b'
                  : '#cbd5e1',
              whiteSpace: 'pre-wrap'
            }}
          >
            {line.text}
          </div>
        ))}

        {/* Input Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <span style={{ color: 'var(--accent-mint)' }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help'..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px'
            }}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
