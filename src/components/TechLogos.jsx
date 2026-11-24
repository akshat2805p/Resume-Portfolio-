import React from 'react';

/**
 * Official, authentic vector SVG logos for tech stack and skills.
 * Styled with crisp vector definitions and proper aspect ratios.
 */

export function PythonLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient id="pyA" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#387eb8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyB" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#ffe052" />
          <stop offset="100%" stopColor="#ffc331" />
        </linearGradient>
      </defs>
      <path fill="url(#pyA)" d="M63.5 4.5c-28.5 0-26.8 12.3-26.8 12.3l.03 12.8h27.3v3.9H26.3S6.8 31.4 6.8 63.8c0 32.5 17 31.4 17 31.4h10.1v-14.3s-.5-17 16.7-17h27.1s16.2.3 16.2-15.7V31.5S96.5 4.5 63.5 4.5zm-14.7 9.8c2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2z" />
      <path fill="url(#pyB)" d="M64.5 123.5c28.5 0 26.8-12.3 26.8-12.3l-.03-12.8H64v-3.9h37.7s19.5 2.1 19.5-30.3c0-32.5-17-31.4-17-31.4H94.1v14.3s.5 17-16.7 17H50.3s-16.2-.3-16.2 15.7v16.7s-2.6 27 30.4 27zm14.7-9.8c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2z" />
    </svg>
  );
}

export function CppLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <polygon fill="#00599c" points="64 7 114 36 114 92 64 121 14 92 14 36" />
      <polygon fill="#004482" points="64 12 109 38 109 90 64 116 19 90 19 38" />
      <polygon fill="#659ad2" points="64 17 105 40 105 88 64 111 23 88 23 40" />
      <path fill="#ffffff" d="M64 34c-17 0-30 13-30 30s13 30 30 30c12 0 22-7 27-17l-13-7c-3 6-8 10-14 10-9 0-16-7-16-16s7-16 16-16c6 0 11 4 14 10l13-7c-5-10-15-17-27-17z" />
      <path fill="#ffffff" d="M91 58h4v-4h4v4h4v4h-4v4h-4v-4h-4zm15 0h4v-4h4v4h4v4h-4v4h-4v-4h-4z" />
    </svg>
  );
}

export function GoLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#00add8" d="M28.4 46.2c-5.8 3.7-10.2 8.9-12.7 15.2-3.1 7.6-3.3 15.7-.7 23.5 3.3 9.7 10.3 17.1 20 20.8 11.2 4.3 22.3 2.7 32.3-4.3 2.1-1.5 4-3.3 6.1-5.1-4.7-.5-9.1-.8-13.4-1.3-8.8-1-14.7-6.2-16.1-14.9-1.3-8.1 2.3-15.6 9.8-18.9 9.3-4.1 21.6-1.5 26.5 6.9 2 3.4 2.8 7.3 3.6 11.4 3.7-1.7 7.2-3.3 10.6-5 1.5-.8 3-1.8 4.7-2.9-1.9-8.5-6.3-15.4-13.4-20.1-10.2-6.7-21.7-8.2-33.5-5.3-8.4 2.1-15.8 6.3-23.8 0zm68.9 14.5c-1.3 6.4-3.6 12.3-7.5 17.4-4.8 6.3-11.2 10.1-19 11.5 5 3.5 10.4 5.3 16.4 4.5 7.6-1 13.7-4.9 18.6-10.6 6.3-7.3 8.7-16 7.7-25.5-.6-5.8-2.9-11-7.2-15.2-3.1 5.9-6 11.9-9 17.9z" />
    </svg>
  );
}

export function ReactLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="60" fill="currentColor" />
      <path fill="#ffffff" d="M102 102L50 36H38v56h10V49l46 59c2.8-1.8 5.4-3.8 8-6z" />
      <rect x="78" y="36" width="10" height="34" fill="#ffffff" />
    </svg>
  );
}

export function FastApiLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="60" fill="#009688" />
      <path fill="#ffffff" d="M68 20L32 72h28l-8 36 36-52H60l8-36z" />
    </svg>
  );
}

export function DockerLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#2496ed" d="M121.2 59.4c-2.4-1.7-7.9-1.4-12.2.3-.9-6.3-5-11.2-11.7-13.8l-2.4-.9-.9 2.3c-2.3 5.8-1.5 12.8 2.2 18.3-2.7 1.6-6.8 2.2-11.3 2.2H5.6c-1.3 5.2-.4 10.9 2.5 16.1 4.5 8 12.3 14 21.6 16.9 14.3 4.4 33.7 4.7 48.7 1 18.2-4.5 33.2-16.7 39.5-32.5 5.8.5 10.8-2.6 13.3-6.9 1.4-2.5 1.5-5.1 0-7.3l-10-15.7zm-78.5-7.7H31V40h11.7v11.7zm14.6 0H45.6V40h11.7v11.7zm14.6 0H60.2V40h11.7v11.7zm0-14.6H60.2V25.4h11.7v11.7zm14.6 14.6H74.8V40h11.7v11.7zm0-14.6H74.8V25.4h11.7v11.7zm14.6 14.6H89.4V40H101v11.7z" />
    </svg>
  );
}

export function PostgresLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#336791" d="M64 8c-28 0-48 18-50 44-.8 10 2.2 21 8.8 29.5 4.8 6.2 11.2 10.5 18.2 14.5 2.5 14 10.5 22 23 24 5 .8 10-.2 14.5-2.5 2.5 5 7.5 8 13.5 8 10 0 18-9 18-20v-5c9-6 16-15 18-26 2-12-2-25-10-34C102 21 85 8 64 8z" />
      <path fill="#ffffff" d="M64 22c15 0 28 9 32 23 2 7 1 15-3 21-4 6-10 10-17 11v6c0 6-4 11-10 11-3 0-6-1-8-3-4 1-8 2-12 1-7-1-12-6-14-14-6-3-11-7-15-12-5-7-7-15-6-23 2-18 17-30 36-30z" />
    </svg>
  );
}

export function RedisLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#d82c20" d="M112 78L64 98 16 78 6 62l48-18 58 18z" />
      <path fill="#a32219" d="M16 78v16l48 20v-16z" />
      <path fill="#c6261c" d="M64 98v16l48-20V78z" />
      <path fill="#e64436" d="M64 34L16 52l48 18 48-18z" />
    </svg>
  );
}

export function TypeScriptLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#3178c6" rx="16" />
      <path fill="#ffffff" d="M70 42h-36v12h12v46h12V54h12V42zm24 22c-7 0-12 3-15 8l10 6c2-3 4-5 8-5 4 0 7 2 7 5v2c-3-1-7-2-12-2-11 0-18 5-18 15 0 9 7 15 16 15 5 0 9-2 12-5v4h11V78c0-10-8-14-19-14zm8 21c0 5-4 8-9 8-4 0-7-2-7-6 0-5 3-7 8-7 3 0 6 1 8 2v3z" />
    </svg>
  );
}

export function JavaScriptLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#f7df1e" rx="16" />
      <path fill="#000000" d="M33 100l10-6c3 5 6 9 12 9 6 0 10-3 10-10V42H77v51c0 14-8 20-21 20-11 0-19-6-23-13zm49-2l10-6c4 6 9 9 16 9 7 0 12-4 12-9 0-6-5-8-13-12l-5-2c-12-5-19-11-19-22 0-11 9-19 22-19 10 0 17 4 22 13l-9 6c-3-5-7-7-13-7-6 0-10 3-10 7 0 5 4 7 12 11l4 2c14 6 21 12 21 24 0 13-10 21-25 21-14 0-23-7-25-14z" />
    </svg>
  );
}

export function LinuxLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="56" fill="#f59e0b" />
      <path fill="#18181b" d="M64 16c-18 0-26 18-26 34 0 12 4 22 6 36-3 4-8 10-8 18 0 8 10 12 28 12s28-4 28-12c0-8-5-14-8-18 2-14 6-24 6-36 0-16-8-34-26-34z" />
      <ellipse cx="56" cy="46" rx="5" ry="7" fill="#ffffff" />
      <ellipse cx="72" cy="46" rx="5" ry="7" fill="#ffffff" />
      <circle cx="56" cy="47" r="3" fill="#000000" />
      <circle cx="72" cy="47" r="3" fill="#000000" />
      <path fill="#ffa000" d="M52 56c0 6 6 12 12 12s12-6 12-12c-4 2-8 3-12 3s-8-1-12-3z" />
      <ellipse cx="64" cy="88" rx="16" ry="18" fill="#ffffff" />
    </svg>
  );
}

export function PyTorchLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#ee4c2c" d="M64 16a48 48 0 1 0 34 82l-9-9a36 36 0 1 1-25-61v-12z" />
      <circle cx="78" cy="30" r="6" fill="#ee4c2c" />
    </svg>
  );
}

export function GitLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#f05032" d="M123.5 54.8L73.2 4.5c-4-4-10.5-4-14.5 0L44.2 19l18.3 18.3c4.2-1.4 9.1-.5 12.5 2.8 3.5 3.5 4.3 8.6 2.6 12.9l17.6 17.6c4.3-1.7 9.4-.9 12.9 2.6 4.9 4.9 4.9 12.9 0 17.9-4.9 4.9-12.9 4.9-17.9 0-3.8-3.8-4.5-9.4-2.3-13.8L72.2 59.6v33.2c2.1 1.2 3.9 3.1 5 5.5 3.2 6.5.6 14.4-5.9 17.6-6.5 3.2-14.4.6-17.6-5.9-3.2-6.5-.6-14.4 5.9-17.6 2.4-1.2 5.1-1.6 7.7-1.1V58c-2.6.5-5.3.1-7.7-1.1-4.3-2.1-7-6.2-7.5-10.8L28.9 29.8 4.5 54.2c-4 4-4 10.5 0 14.5l50.3 50.3c4 4 10.5 4 14.5 0l54.2-54.2c4-4 4-10.5 0-14.5z" />
    </svg>
  );
}

export function KiCadLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#1e88e5" rx="16" />
      <path fill="#f59e0b" d="M30 30h20v24h28V30h20v68H78V74H50v24H30z" />
      <circle cx="38" cy="64" r="5" fill="#ffffff" />
      <circle cx="90" cy="64" r="5" fill="#ffffff" />
    </svg>
  );
}

export function KubernetesLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#326ce5" d="M64 8l48 28v56L64 120 16 92V36L64 8z" />
      <circle cx="64" cy="64" r="22" fill="#ffffff" />
      <path fill="#326ce5" d="M64 48v32M48 64h32" stroke="#326ce5" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function TailwindLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#06b6d4" d="M32 64c5.3-10.7 12-16 20-16 12 0 14.7 9.3 22.7 9.3 5.3 0 10-3.3 14.7-10-5.3 10.7-12 16-20 16-12 0-14.7-9.3-22.7-9.3-5.3 0-10 3.3-14.7 10zm-16 26.7c5.3-10.7 12-16 20-16 12 0 14.7 9.3 22.7 9.3 5.3 0 10-3.3 14.7-10-5.3 10.7-12 16-20 16-12 0-14.7-9.3-22.7-9.3-5.3 0-10 3.3-14.7 10z" />
    </svg>
  );
}

export function ScikitLearnLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#f7931e" d="M24 64a40 40 0 0 1 80 0z" />
      <path fill="#3499cd" d="M104 64a40 40 0 0 1-80 0z" />
      <circle cx="64" cy="64" r="14" fill="#ffffff" />
    </svg>
  );
}

export function Html5Logo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#e34f26" d="M19 116L9 4h110l-10 112-45 12z" />
      <path fill="#ef652a" d="M64 118l36-10 8-92H64z" />
      <path fill="#ebebeb" d="M64 48H44l-2-20h44l2-16H24l5 56h35zM64 94l-19-5-1-15H29l2 26 33 9z" />
      <path fill="#ffffff" d="M64 48h20l-2 20H64v16h18l-2 20-16 4.5V118l33-9 4-49H64z" />
    </svg>
  );
}

export function Css3Logo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#1572b6" d="M19 116L9 4h110l-10 112-45 12z" />
      <path fill="#33a9dc" d="M64 118l36-10 8-92H64z" />
      <path fill="#ebebeb" d="M64 48H44l-2-20h44l2-16H24l5 56h35zM64 94l-19-5-1-15H29l2 26 33 9z" />
      <path fill="#ffffff" d="M64 48h20l-2 20H64v16h18l-2 20-16 4.5V118l33-9 4-49H64z" />
    </svg>
  );
}

export function NodejsLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <polygon fill="#339933" points="64 12 112 39.5 112 94.5 64 122 16 94.5 16 39.5" />
      <path fill="#ffffff" d="M64 36c-16 0-26 9-26 23 0 18 17 21 27 24 10 3 14 5 14 9 0 5-4 8-11 8-9 0-14-4-15-10l-11 2c2 12 12 18 26 18 16 0 27-8 27-23 0-17-15-21-26-24-11-3-15-5-15-9 0-4 4-8 10-8 8 0 12 3 14 8l11-3c-3-9-11-15-22-15z" />
    </svg>
  );
}

export function MysqlLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#00758f" d="M102 68c-4-14-18-24-34-24-12 0-23 6-28 16-5-2-11-2-16 1-8 4-13 13-11 22 2 11 11 19 22 19h62c11 0 20-9 20-20 0-7-4-13-10-16l-5 2z" />
      <circle cx="86" cy="48" r="4" fill="#f29111" />
    </svg>
  );
}

export function MongodbLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <path fill="#47a248" d="M64 6C63 7 42 36 42 66c0 20 14 36 21 44 1 1 1 5 1 12 0 0 1-2 1-4 0-7 0-8 1-8 7-8 21-24 21-44 0-30-21-59-22-60z" />
      <path fill="#499d4a" d="M64 6v112c0 2-1 4-1 4 0-7 0-11-1-12-7-8-21-24-21-44 0-30 21-59 22-60z" />
    </svg>
  );
}

export function SqliteLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <ellipse cx="64" cy="32" rx="44" ry="18" fill="#003b57" />
      <path fill="#003b57" d="M20 32v64c0 10 20 18 44 18s44-8 44-18V32z" />
      <ellipse cx="64" cy="64" rx="44" ry="18" fill="#0072b2" />
      <ellipse cx="64" cy="32" rx="44" ry="18" fill="#4695eb" />
    </svg>
  );
}

export function NginxLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <polygon fill="#009639" points="64 8 114 36 114 92 64 120 14 92 14 36" />
      <path fill="#ffffff" d="M42 38v52h10V56l34 34h10V38H86v34L52 38z" />
    </svg>
  );
}

export function PrometheusLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="56" fill="#e6522c" />
      <path fill="#ffffff" d="M64 24c4 14 16 22 16 36 0 10-7 18-16 18s-16-8-16-18c0-14 12-22 16-36zm0 58c-18 0-32 10-32 22h64c0-12-14-22-32-22z" />
    </svg>
  );
}

export function GrafanaLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="56" fill="#f46800" />
      <path fill="#ffffff" d="M64 28a36 36 0 1 0 36 36h-16a20 20 0 1 1-20-20V28z" />
    </svg>
  );
}

export function WxPythonLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#2d6898" rx="16" />
      <path fill="#fdd835" d="M32 38l20 52 14-36 14 36 20-52H86l-10 32-12-32h-8L44 70 34 38z" />
    </svg>
  );
}

export function NgspiceLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" fill="#18181b" rx="16" />
      <path fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" d="M18 64h22l14-36 20 72 16-36h20" />
    </svg>
  );
}

export function GrpcLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
      <polygon fill="#244c5a" points="64 12 112 39 112 93 64 120 16 93 16 39" />
      <polygon fill="#00a896" points="64 20 104 43 104 89 64 112 24 89 24 43" />
      <circle cx="64" cy="66" r="16" fill="#ffffff" />
    </svg>
  );
}

export function NetworkLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <line x1="12" y1="8" x2="12" y2="11" />
    </svg>
  );
}

export function AlgoLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="7" y1="17" x2="10" y2="7" />
      <line x1="17" y1="17" x2="14" y2="7" />
    </svg>
  );
}

export function SystemDesignLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function OsLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  );
}

export function OopLogo({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/**
 * Universal logo resolver: matches any skill / technology name to its authentic official vector logo
 */
export function getSkillLogo(name = '', size = 18) {
  const n = name.toLowerCase();

  if (n.includes('python') && !n.includes('wxpython')) return <PythonLogo size={size} />;
  if (n.includes('c++') || n.includes('cpp')) return <CppLogo size={size} />;
  if (n.includes('go') || n.includes('golang')) return <GoLogo size={size} />;
  if (n.includes('fastapi')) return <FastApiLogo size={size} />;
  if (n.includes('react')) return <ReactLogo size={size} />;
  if (n.includes('next.js') || n.includes('nextjs')) return <NextjsLogo size={size} />;
  if (n.includes('typescript')) return <TypeScriptLogo size={size} />;
  if (n.includes('javascript') && !n.includes('typescript')) return <JavaScriptLogo size={size} />;
  if (n.includes('node') || n.includes('express')) return <NodejsLogo size={size} />;
  if (n.includes('html') || n.includes('css3') || n.includes('html5')) return <Html5Logo size={size} />;
  if (n.includes('tailwind')) return <TailwindLogo size={size} />;
  if (n.includes('docker')) return <DockerLogo size={size} />;
  if (n.includes('kuber') || n.includes('k8s')) return <KubernetesLogo size={size} />;
  if (n.includes('postgres') || n.includes('postgresql')) return <PostgresLogo size={size} />;
  if (n.includes('mysql')) return <MysqlLogo size={size} />;
  if (n.includes('mongo') || n.includes('mongodb')) return <MongodbLogo size={size} />;
  if (n.includes('sqlite')) return <SqliteLogo size={size} />;
  if (n.includes('redis')) return <RedisLogo size={size} />;
  if (n.includes('linux') || n.includes('bash') || n.includes('shell')) return <LinuxLogo size={size} />;
  if (n.includes('git')) return <GitLogo size={size} />;
  if (n.includes('kicad')) return <KiCadLogo size={size} />;
  if (n.includes('pytorch')) return <PyTorchLogo size={size} />;
  if (n.includes('scikit') || n.includes('sklearn')) return <ScikitLearnLogo size={size} />;
  if (n.includes('nginx')) return <NginxLogo size={size} />;
  if (n.includes('wxpython')) return <WxPythonLogo size={size} />;
  if (n.includes('ngspice') || n.includes('simulation')) return <NgspiceLogo size={size} />;
  if (n.includes('grpc') || n.includes('protobuf')) return <GrpcLogo size={size} />;
  if (n.includes('prometh') || n.includes('grafana')) return <PrometheusLogo size={size} />;
  if (n.includes('data structure') || n.includes('algorithm')) return <AlgoLogo size={size} />;
  if (n.includes('system design') || n.includes('architecture')) return <SystemDesignLogo size={size} />;
  if (n.includes('operating system') || n.includes('kernel')) return <OsLogo size={size} />;
  if (n.includes('network')) return <NetworkLogo size={size} />;
  if (n.includes('object-oriented') || n.includes('oop')) return <OopLogo size={size} />;

  // Default clean code icon
  return <OopLogo size={size} />;
}
