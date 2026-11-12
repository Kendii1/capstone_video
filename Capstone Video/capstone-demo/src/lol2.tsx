import React, { useState } from 'react';
import {
  AbsoluteFill,
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (t: number, a: number, b: number) => a + (b - a) * clamp01(t);

export const CryoStage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1.5px, transparent 1.5px)',
      backgroundSize: '28px 28px',
      color: '#FFFFFF',
      fontFamily: 'Inter, system-ui, sans-serif',
      overflow: 'hidden',
    }}
  >
    {children}
  </AbsoluteFill>
);

export const CryoTransition: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
}> = ({ children, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 15, stiffness: 140 } });
  const exitProgress = clamp01((frame - (durationInFrames - 12)) / 12);
  const scale = (0.9 + enter * 0.1) * (1 + exitProgress * 0.06);
  const opacity = clamp01(enter * 1.4) * (1 - exitProgress);

  return (
    <CryoStage>
      <AbsoluteFill style={{ transform: `scale(${scale})`, opacity }}>{children}</AbsoluteFill>
    </CryoStage>
  );
};

export const PersonWithPhone: React.FC<{
  scale?: number;
  hasPhone?: boolean;
  isTapping?: boolean;
}> = ({ scale = 1, hasPhone = true, isTapping = false }) => {
  const frame = useCurrentFrame();
  const breathe = Math.sin(frame * 0.14) * 3;
  const tapMove = isTapping ? Math.sin(frame * 0.85) * 6 : Math.sin(frame * 0.25) * 2;
  const glow = 0.25 + 0.2 * Math.sin(frame * 0.22);

  return (
    <div style={{ width: 110, height: 150, position: 'relative', transform: `translateY(${breathe}px) scale(${scale})` }}>
      <div style={{ position: 'absolute', top: 8, left: hasPhone ? 40 : 37, width: 34, height: 34, borderRadius: '50%', backgroundColor: '#050505', border: '3.5px solid #FFFFFF' }} />
      <div style={{ position: 'absolute', top: 42, left: 52, width: 4, height: 52, backgroundColor: '#FFFFFF', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 90, left: 44, width: 4, height: 48, backgroundColor: '#FFFFFF', transform: 'rotate(18deg)', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 90, left: 60, width: 4, height: 48, backgroundColor: '#FFFFFF', transform: 'rotate(-18deg)', borderRadius: 2 }} />
      {hasPhone ? (
        <>
          <div style={{ position: 'absolute', top: 56, left: 54, width: 32, height: 4, backgroundColor: '#FFFFFF', transform: 'rotate(-14deg)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 66, left: 54 + tapMove, width: 28, height: 3.5, backgroundColor: '#FFFFFF', transform: 'rotate(-24deg)', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 34, left: 84, width: 16, height: 28, borderRadius: 4, backgroundColor: '#FFFFFF', transform: 'rotate(10deg)', boxShadow: `0 0 24px rgba(255,255,255,${glow + 0.5})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 10, height: 18, backgroundColor: '#050505', borderRadius: 2 }} />
          </div>
        </>
      ) : (
        <>
          <div style={{ position: 'absolute', top: 52, left: 26, width: 28, height: 4, backgroundColor: '#FFFFFF', transform: 'rotate(28deg)' }} />
          <div style={{ position: 'absolute', top: 52, left: 54, width: 28, height: 4, backgroundColor: '#FFFFFF', transform: 'rotate(-28deg)' }} />
        </>
      )}
    </div>
  );
};

/* SCENE 6: IPO Conveyor Belt */
export const Scene6IPOConveyor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const steps = [
    { num: '#1', label: 'INPUT: CHILD & DOH DATA' },
    { num: '#2', label: 'PROCESS: SYNC & REMIND' },
    { num: '#3', label: 'OUTPUT: ENCRYPTED QR' },
  ];
  const inputOffset = lerp(frame / 120, 0, 140);
  const outputOffset = lerp((frame - 60) / 120, -60, 40);

  return (
    <CryoTransition durationInFrames={450}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 24, letterSpacing: 4, color: '#888888', marginBottom: 14 }}>CONCEPTUAL FRAMEWORK • IPO</div>
        <div style={{ fontSize: 54, fontWeight: 900, marginBottom: 70 }}>RAW DATA → SECURE QR</div>
        <div style={{ width: 880, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, transform: `translateX(${inputOffset}px)` }}>
            {['VACCINES', 'GROWTH'].map((label) => <div key={label} style={{ padding: '10px 20px', border: '2.5px solid #FFFFFF', borderRadius: 8, backgroundColor: '#050505', fontFamily: 'monospace', fontSize: 18 }}>{label}</div>)}
          </div>
          <div style={{ width: 300, height: 220, borderRadius: 20, border: '4px solid #FFFFFF', backgroundColor: '#050505', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 34, fontWeight: 900 }}>BABYBOOK+</div>
            <div style={{ fontFamily: 'monospace', fontSize: 18, color: '#888888', letterSpacing: 2, marginTop: 8 }}>ENCRYPTED ENGINE</div>
          </div>
          <div style={{ width: 110, height: 110, borderRadius: 14, backgroundColor: '#FFFFFF', transform: `translateX(${outputOffset}px)`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: 16 }}>
            <div style={{ backgroundColor: '#050505' }} /><div style={{ backgroundColor: '#050505' }} /><div style={{ backgroundColor: '#050505' }} /><div style={{ border: '4px solid #050505' }} />
          </div>
        </div>
        <div style={{ width: 840, height: 30, borderRadius: 999, border: '3px solid #FFFFFF', backgroundColor: '#0A0A0A', marginTop: 14, marginBottom: 55, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '120%', height: 4, backgroundImage: 'repeating-linear-gradient(90deg, #FFFFFF 0px, #FFFFFF 24px, transparent 24px, transparent 54px)', transform: `translateX(${(frame * 4) % 54}px)` }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {steps.map((st, idx) => {
            const pop = spring({ frame: frame - (40 + idx * 35), fps, config: { damping: 14 } });
            return <div key={st.num} style={{ width: 680, height: 78, borderRadius: 16, border: '2.5px solid #FFFFFF', backgroundColor: '#0A0A0A', display: 'flex', alignItems: 'center', padding: '0 22px', gap: 24, opacity: pop, transform: `translateY(${(1 - pop) * 20}px)` }}>
              <div style={{ width: 64, height: 50, borderRadius: 10, backgroundColor: '#FFFFFF', color: '#050505', fontSize: 26, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{st.num}</div>
              <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: 1 }}>{st.label}</div>
            </div>;
          })}
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

const APP_FLOW = [
  { file: 'Onboarding.jfif', step: '01 / 07', title: 'UNIFIED PROFILE', tapX: 255, tapY: 880 },
  { file: 'Login.jfif', step: '02 / 07', title: 'SECURE LOGIN', tapX: 255, tapY: 750 },
  { file: 'Health.jfif', step: '03 / 07', title: '17 DOH VACCINES', tapX: 255, tapY: 980 },
  { file: 'Growth.jfif', step: '04 / 07', title: 'GROWTH & MILESTONES', tapX: 345, tapY: 980 },
  { file: 'Nutrition.jfif', step: '05 / 07', title: 'FEEDING LOGS', tapX: 430, tapY: 980 },
  { file: 'Calendar.jfif', step: '06 / 07', title: 'SMART REMINDERS', tapX: 398, tapY: 115 },
  { file: 'QR.jfif', step: '07 / 07', title: 'SELECT & SHARE QR', tapX: 255, tapY: 570 },
];

/* SCENE 7: Seven-screen app walkthrough */
export const Scene7AppDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const framesPerScreen = 210;
  const idx = Math.min(APP_FLOW.length - 1, Math.floor(frame / framesPerScreen));
  const localFrame = frame % framesPerScreen;
  const current = APP_FLOW[idx];
  const pop = spring({ frame: localFrame, fps, config: { damping: 16 } });
  const move = clamp01((localFrame - 125) / 50);
  const isTap = localFrame >= 180 && localFrame <= 198;
  const cursorX = lerp(move, 270, current.tapX);
  const cursorY = lerp(move, 550, current.tapY);

  return (
    <CryoTransition durationInFrames={1470}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 26, letterSpacing: 4, color: '#888888', marginBottom: 12 }}>APP WALKTHROUGH • {current.step}</div>
        <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: 1, marginBottom: 28, opacity: pop }}>{current.title}</div>
        <div style={{ width: 440, height: 900, borderRadius: 54, backgroundColor: '#050505', border: '4px solid #FFFFFF', padding: 12, boxShadow: '0 0 80px rgba(255,255,255,0.12)', transform: `scale(${0.96 + pop * 0.04})` }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 42, overflow: 'hidden', position: 'relative', backgroundColor: '#111111' }}>
            {!imgError[current.file] ? (
              <Img src={staticFile(current.file)} onError={() => setImgError((prev) => ({ ...prev, [current.file]: true }))} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 24 }}>public/{current.file}</div>
            )}
            <div style={{ position: 'absolute', left: cursorX, top: cursorY, width: 56, height: 56, borderRadius: '50%', backgroundColor: isTap ? 'rgba(255,255,255,0.85)' : 'rgba(5,5,5,0.55)', border: '4px solid #FFFFFF', boxShadow: '0 0 25px rgba(0,0,0,0.9)', opacity: move > 0.05 ? 1 : 0, transform: `translate(-50%, -50%) scale(${isTap ? 0.72 : 1})` }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36, marginTop: 26 }}>
          <div style={{ display: 'flex', gap: 14 }}>
            {APP_FLOW.map((screen, i) => <div key={screen.step} style={{ width: i === idx ? 54 : 14, height: 14, borderRadius: 999, backgroundColor: i <= idx ? '#FFFFFF' : '#333333' }} />)}
          </div>
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 8: Parent and doctor roles */
export const Scene8RoleSplit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const leftPop = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const rightPop = spring({ frame: frame - 60, fps, config: { damping: 14 } });
  const pulse = 0.6 + 0.4 * Math.sin(frame * 0.25);
  return (
    <CryoTransition durationInFrames={450}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 60px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 24, letterSpacing: 4, color: '#888888', marginBottom: 14 }}>USE CASE ARCHITECTURE</div>
        <div style={{ fontSize: 54, fontWeight: 900, textAlign: 'center', marginBottom: 80 }}>DUAL-ROLE ACCESS</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, width: '100%' }}>
          <div style={{ flex: 1, minHeight: 340, padding: '40px 22px', borderRadius: 22, border: '3px solid #FFFFFF', backgroundColor: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: leftPop, transform: `scale(${0.92 + leftPop * 0.08})` }}>
            <PersonWithPhone scale={1.15} hasPhone isTapping />
            <div style={{ fontSize: 32, fontWeight: 900, marginTop: 28 }}>PARENT</div>
            <div style={{ fontFamily: 'monospace', fontSize: 18, color: '#CCCCCC', textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>FULL RECORD CONTROL<br />GENERATES QR TOKEN</div>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 34, fontWeight: 900, opacity: pulse }}>⇄</div>
          <div style={{ flex: 1, minHeight: 340, padding: '40px 22px', borderRadius: 22, border: '3px solid #FFFFFF', backgroundColor: '#FFFFFF', color: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: rightPop, transform: `scale(${0.92 + rightPop * 0.08})` }}>
            <div style={{ width: 110, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, fontWeight: 900 }}>+</div>
            <div style={{ fontSize: 32, fontWeight: 900, marginTop: 28 }}>DOCTOR</div>
            <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>NO ACCOUNT NEEDED<br />READ-ONLY VIEW</div>
          </div>
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 9: Three-layer security shield */
export const Scene9SecurityShield: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layers = [
    { title: 'GRANULAR PERMISSIONS', desc: 'Parent selects exact records to share' },
    { title: 'AUTO-EXPIRING TOKEN', desc: 'Temporary read-only consultation link' },
    { title: 'REAL-TIME AUDIT LOG', desc: 'Records every healthcare scan & timestamp' },
  ];
  return (
    <CryoTransition durationInFrames={420}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 24, letterSpacing: 4, color: '#888888', marginBottom: 14 }}>DATA PRIVACY & GOVERNANCE</div>
        <div style={{ fontSize: 54, fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>PRIVACY BY DESIGN</div>
        <div style={{ width: 180, height: 180, borderRadius: '50%', border: '4px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48, boxShadow: '0 0 50px rgba(255,255,255,0.2)' }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', backgroundColor: '#FFFFFF', color: '#050505', fontFamily: 'monospace', fontSize: 26, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LOCKED</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, width: '100%' }}>
          {layers.map((layer, idx) => {
            const pop = spring({ frame: frame - (25 + idx * 35), fps, config: { damping: 14 } });
            return <div key={layer.title} style={{ padding: '24px 30px', borderRadius: 18, border: '2.5px solid #FFFFFF', backgroundColor: '#0A0A0A', opacity: pop, transform: `translateY(${(1 - pop) * 20}px)` }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>{layer.title}</div>
              <div style={{ fontSize: 22, color: '#999999', marginTop: 6 }}>{layer.desc}</div>
            </div>;
          })}
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 10: ISO 25010 and Likert evaluation */
export const Scene10Evaluation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const score = lerp(frame / 90, 0, 4.0).toFixed(2);
  const pop = spring({ frame, fps, config: { damping: 14 } });
  return (
    <CryoTransition durationInFrames={240}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 24, letterSpacing: 4, color: '#888888', marginBottom: 14 }}>SYSTEM QUALITY EVALUATION</div>
        <div style={{ fontSize: 54, fontWeight: 900, textAlign: 'center', marginBottom: 60 }}>BUILT FOR RELIABILITY</div>
        <div style={{ width: '100%', padding: '48px 30px', borderRadius: 24, backgroundColor: '#FFFFFF', color: '#050505', textAlign: 'center', transform: `scale(${0.92 + pop * 0.08})` }}>
          <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>4-POINT LIKERT BENCHMARK</div>
          <div style={{ fontSize: 112, fontWeight: 900, lineHeight: 1.1, margin: '14px 0' }}>{score}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 800 }}>3.26 – 4.00 • HIGHLY ACCEPTABLE ✓</div>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 24, color: '#AAAAAA', textAlign: 'center', marginTop: 45, lineHeight: 1.6 }}>FUNCTIONALITY • USABILITY<br />RELIABILITY • DATA SECURITY</div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 11: Summary and doorway outro */
export const Scene11DoorOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const openProgress = clamp01((frame - 15) / 70);
  const doorPct = lerp(openProgress, 10, 88);
  const walkX = lerp(frame / 110, -180, -60);
  const badgePop = spring({ frame: frame - 75, fps, config: { damping: 12 } });
  return (
    <CryoTransition durationInFrames={210}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 30, marginBottom: 50 }}>
          <div style={{ width: 330, height: 150, borderRadius: 18, backgroundColor: '#FFFFFF', color: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 900 }}>8 MODULES</div><div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, marginTop: 8 }}>BABYBOOK+ READY ✓</div>
          </div>
          <div style={{ width: 330, height: 150, borderRadius: 18, backgroundColor: '#050505', border: '2px solid #444444', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#777777' }}>0 BACKUPS</div><div style={{ fontFamily: 'monospace', fontSize: 20, color: '#666666', marginTop: 8 }}>PAPER BOOKLET ✕</div>
          </div>
        </div>
        <div style={{ width: 620, height: 300, borderBottom: '3px solid #FFFFFF', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <div style={{ width: 220, height: 290, border: '4px solid #FFFFFF', borderBottom: 'none', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: `${doorPct}%`, height: '100%', backgroundColor: '#FFFFFF', opacity: 0.2 + openProgress * 0.78, boxShadow: '0 0 80px rgba(255,255,255,0.65)' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 12, transform: `translateX(${walkX}px)` }}><PersonWithPhone scale={0.8} hasPhone /></div>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 22, letterSpacing: 4, color: '#888888', marginTop: 26, marginBottom: 30 }}>YOUR BABY'S STORY • ALL IN ONE PLACE</div>
        <div style={{ padding: '20px 56px', borderRadius: 999, backgroundColor: '#FFFFFF', color: '#050505', fontSize: 38, fontWeight: 900, letterSpacing: 2, transform: `scale(${badgePop})`, boxShadow: '0 0 55px rgba(255,255,255,0.35)' }}>BABYBOOK+ • SECURED</div>
      </AbsoluteFill>
    </CryoTransition>
  );
};
