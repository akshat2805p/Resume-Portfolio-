import React from 'react';

/**
 * High-tech graphic thumbnails for flagship engineering projects.
 * Crafted with pure SVG and high-contrast monochrome silver / platinum palette.
 */

// 1. eSim KiCad Health Analyzer: PCB Circuit Board with Silver Traces & IC Chips
export function KicadThumbnail() {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.9)'
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.5" />
          </linearGradient>
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Grid Background */}
        <rect width="100%" height="100%" fill="url(#gridPattern)" />

        {/* Copper Traces */}
        <path d="M 30 150 L 110 150 L 140 110 L 220 110 L 250 80 L 340 80 L 370 50 L 450 50" fill="none" stroke="url(#traceGrad)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 50 30 L 120 30 L 160 70 L 240 70 L 270 100 L 350 100 L 380 140 L 440 140" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 180 160 L 210 130 L 300 130 L 330 100 L 410 100" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.6" strokeLinecap="round" />

        {/* Solder Points */}
        {[
          [30, 150], [110, 150], [140, 110], [220, 110], [250, 80], [340, 80], [370, 50], [450, 50],
          [50, 30], [120, 30], [160, 70], [240, 70], [270, 100], [350, 100], [380, 140], [440, 140]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3.5" fill="#09090b" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx={cx} cy={cy} r="1.5" fill="#e4e4e7" />
          </g>
        ))}

        {/* Center Main MCU Chip */}
        <rect x="180" y="35" width="120" height="80" rx="8" fill="#18181b" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
        <rect x="195" y="48" width="90" height="54" rx="4" fill="#09090b" />
        <text x="240" y="72" fill="#ffffff" fontSize="11" fontFamily="var(--mono)" fontWeight="700" textAnchor="middle">eSim &bull; KiCad</text>
        <text x="240" y="90" fill="#a1a1aa" fontSize="9" fontFamily="var(--mono)" textAnchor="middle">EDA HEALTH V2</text>

        {/* MCU Pins */}
        {[0, 1, 2, 3].map((idx) => (
          <g key={idx}>
            <rect x="172" y={48 + idx * 14} width="8" height="4" fill="#71717a" rx="1" />
            <rect x="300" y={48 + idx * 14} width="8" height="4" fill="#71717a" rx="1" />
          </g>
        ))}

        {/* Health Audit Tag Overlay */}
        <g transform="translate(20, 14)">
          <rect width="145" height="24" rx="5" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
          <text x="24" y="16" fill="#ffffff" fontSize="9.5" fontFamily="var(--mono)" fontWeight="700">DRC 100% &bull; KiCad 6–10</text>
        </g>

        <g transform="translate(325, 14)">
          <rect width="135" height="24" rx="5" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
          <text x="67" y="16" fill="#e4e4e7" fontSize="9.5" fontFamily="var(--mono)" fontWeight="600" textAnchor="middle">IIT BOMBAY FOSSEE</text>
        </g>
      </svg>
    </div>
  );
}

// 2. AIOps Sentinel: Dark Telemetry Operations Dashboard with Waveform & Anomaly Spikes
export function AiOpsThumbnail() {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.9)'
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Telemetry Gridlines */}
        {[35, 70, 105, 140].map((y) => (
          <line key={y} x1="30" y1={y} x2="450" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* Normal Waveform Shaded Area */}
        <path
          d="M 30 120 Q 60 95 90 115 T 150 110 T 210 125 T 250 40 T 290 120 T 350 105 T 410 115 L 450 120 L 450 160 L 30 160 Z"
          fill="url(#waveGrad)"
        />

        {/* Active Telemetry Stream Line */}
        <path
          d="M 30 120 Q 60 95 90 115 T 150 110 T 210 125 T 250 40 T 290 120 T 350 105 T 410 115 L 450 120"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Anomaly Detection Spike Highlight */}
        <circle cx="250" cy="40" r="7" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="2" />
        <circle cx="250" cy="40" r="3" fill="#ef4444" />
        <line x1="250" y1="47" x2="250" y2="160" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Anomaly Callout Box */}
        <g transform="translate(205, 8)">
          <rect width="90" height="22" rx="4" fill="#ef4444" />
          <text x="45" y="15" fill="#ffffff" fontSize="9.5" fontFamily="var(--mono)" fontWeight="700" textAnchor="middle">ANOMALY SPIKE</text>
        </g>

        {/* Metrics Badges */}
        <g transform="translate(30, 14)">
          <rect width="115" height="36" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="10" y="14" fill="#71717a" fontSize="8.5" fontFamily="var(--mono)">PRECISION</text>
          <text x="10" y="30" fill="#ffffff" fontSize="14" fontFamily="var(--mono)" fontWeight="800">83.96%</text>
        </g>

        <g transform="translate(330, 14)">
          <rect width="120" height="36" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="10" y="14" fill="#71717a" fontSize="8.5" fontFamily="var(--mono)">EVALUATED</text>
          <text x="10" y="30" fill="#e4e4e7" fontSize="14" fontFamily="var(--mono)" fontWeight="800">10,368</text>
        </g>
      </svg>
    </div>
  );
}

// 3. Mini-Dynamo: 5-Node Consistent Hashing Ring Topology with Vector Clock Sync
export function DynamoThumbnail() {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.9)'
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#a1a1aa" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>
        </defs>

        {/* Central Hash Ring */}
        <circle cx="240" cy="90" r="58" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="10" />
        <circle cx="240" cy="90" r="58" fill="none" stroke="url(#ringGrad)" strokeWidth="2.5" strokeDasharray="8 4" />

        {/* 5 Distributed Nodes on the Ring */}
        {[
          { angle: -90, label: 'Node-1 (Leader)', quorum: true },
          { angle: -18, label: 'Node-2 (Quorum)', quorum: true },
          { angle: 54, label: 'Node-3 (Quorum)', quorum: true },
          { angle: 126, label: 'Node-4 (Replica)', quorum: false },
          { angle: 198, label: 'Node-5 (Replica)', quorum: false }
        ].map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = 240 + Math.cos(rad) * 58;
          const ny = 90 + Math.sin(rad) * 58;
          return (
            <g key={i}>
              <circle cx={nx} cy={ny} r="11" fill="#18181b" stroke={node.quorum ? '#ffffff' : '#71717a'} strokeWidth="1.8" />
              <circle cx={nx} cy={ny} r="4" fill={node.quorum ? '#ffffff' : '#71717a'} />
            </g>
          );
        })}

        {/* Center Cluster Text */}
        <text x="240" y="86" fill="#ffffff" fontSize="12" fontFamily="var(--mono)" fontWeight="700" textAnchor="middle">Mini-Dynamo</text>
        <text x="240" y="102" fill="#a1a1aa" fontSize="9" fontFamily="var(--mono)" fontWeight="600" textAnchor="middle">QUORUM: R=2, W=2, N=5</text>

        {/* Gossip Protocol Arcs */}
        <path d="M 180 90 Q 240 60 300 90" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 180 90 Q 240 120 300 90" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Go gRPC Badges */}
        <g transform="translate(25, 14)">
          <rect width="115" height="24" rx="5" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
          <text x="57" y="16" fill="#e4e4e7" fontSize="9.5" fontFamily="var(--mono)" fontWeight="600" textAnchor="middle">Go 1.25 &bull; gRPC</text>
        </g>

        <g transform="translate(340, 14)">
          <rect width="115" height="24" rx="5" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
          <text x="57" y="16" fill="#e4e4e7" fontSize="9.5" fontFamily="var(--mono)" fontWeight="600" textAnchor="middle">Vector Clocks</text>
        </g>
      </svg>
    </div>
  );
}

// 4. Aura AI Thumbnail (if needed for fallback)
export function AuraAiThumbnail() {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>Aura AI System</span>
    </div>
  );
}

export const AuraThumbnail = AuraAiThumbnail;

// 5. Generic Repository Thumbnail with Code Terminal
export function GenericRepoThumbnail({ title, tech = [] }) {
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f131a 0%, #07090f 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '14px 16px',
        marginBottom: '16px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)' }}>github // repo</span>
      </div>

      <div>
        <div style={{ fontFamily: 'var(--display)', fontSize: '18px', color: 'var(--fg)', fontWeight: 600 }}>
          {title}
        </div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
          {tech.slice(0, 3).map((t) => (
            <span key={t} style={{ fontSize: '9.5px', fontFamily: 'var(--mono)', color: 'var(--muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
