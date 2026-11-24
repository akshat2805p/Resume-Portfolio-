import React from 'react';

/**
 * LetterRoll: Signature typography micro-interaction from Gahan Rao's portfolio.
 * Each letter is duplicated into two vertical slots; on hover, both slide up with
 * staggered spring physics.
 */
export default function LetterRoll({ text, className = '', style = {}, as: Component = 'span' }) {
  if (typeof text !== 'string') return <span>{text}</span>;

  const characters = Array.from(text);

  return (
    <Component
      className={`roll ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor: 'pointer',
        ...style
      }}
      aria-label={text}
    >
      <span className="roll-word" aria-hidden="true" style={{ display: 'inline-flex', whiteSpace: 'pre' }}>
        {characters.map((char, index) => {
          const displayChar = char === ' ' ? '\u00A0' : char;
          return (
            <span
              key={index}
              className="roll-letter"
              style={{
                position: 'relative',
                display: 'inline-block',
                overflow: 'hidden'
              }}
            >
              <span
                className="roll-a"
                style={{
                  display: 'inline-block',
                  transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: `${index * 18}ms`,
                  willChange: 'transform'
                }}
              >
                {displayChar}
              </span>
              <span
                className="roll-b"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '100%',
                  display: 'inline-block',
                  transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: `${index * 18}ms`,
                  willChange: 'transform'
                }}
              >
                {displayChar}
              </span>
            </span>
          );
        })}
      </span>
    </Component>
  );
}
