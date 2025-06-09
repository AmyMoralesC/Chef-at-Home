export default function SmokeTransition() {
  return (
    <div className="relative h-32 overflow-hidden">
      {/* Smoke SVG Effect */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="smokeFilter">
            <feTurbulence 
              baseFrequency="0.02 0.1" 
              numOctaves="3" 
              result="turbulence"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="20"
            />
          </filter>
          <linearGradient id="smokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 1}} />
            <stop offset="30%" style={{stopColor: '#222222', stopOpacity: 0.8}} />
            <stop offset="70%" style={{stopColor: '#444444', stopOpacity: 0.4}} />
            <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
          </linearGradient>
        </defs>
        
        {/* Animated smoke paths */}
        <g filter="url(#smokeFilter)">
          <path 
            d="M0,100 Q300,50 600,80 T1200,60 L1200,200 L0,200 Z" 
            fill="url(#smokeGradient)"
            className="animate-pulse"
          />
          <path 
            d="M0,120 Q400,70 800,90 T1200,80 L1200,200 L0,200 Z" 
            fill="url(#smokeGradient)"
            opacity="0.6"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
          <path 
            d="M0,140 Q200,90 600,110 T1200,100 L1200,200 L0,200 Z" 
            fill="url(#smokeGradient)"
            opacity="0.4"
            className="animate-pulse"
            style={{animationDelay: '2s'}}
          />
        </g>
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${10 + i * 12}%`,
              top: `${60 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}