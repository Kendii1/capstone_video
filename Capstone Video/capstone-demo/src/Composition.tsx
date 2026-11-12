import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

import {
  CryoTransition,
  PersonWithPhone,
  Scene6IPOConveyor,
  Scene7AppDemo,
  Scene8RoleSplit,
  Scene9SecurityShield,
  Scene10Evaluation,
  Scene11DoorOutro,
} from './lol2';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (t: number, a: number, b: number) => a + (b - a) * clamp01(t);

/* SCENE 1 (0:00-0:14 | 420f): Dual Pedestals + Overhead Spotlight */
const Scene1Pedestals: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 14 } });
  const recordsCount = Math.floor(lerp(frame / 180, 0, 17));
  const lostCount = Math.floor(lerp(frame / 180, 0, 5));
  const paperFloat = Math.sin(frame * 0.1) * 8;

  return (
    <CryoTransition durationInFrames={420}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 4,
            color: '#888888',
            marginBottom: 240,
          }}
        >
          BABYBOOK+ CAPSTONE STUDY
        </div>

        <div style={{ display: 'flex', gap: 90, alignItems: 'flex-end' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 0.45 * pop,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -20 + paperFloat,
                left: 10,
                width: 34,
                height: 44,
                border: '2px solid #FFFFFF',
                transform: 'rotate(-16deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 10 - paperFloat,
                right: 10,
                width: 34,
                height: 44,
                border: '2px solid #FFFFFF',
                transform: 'rotate(20deg)',
              }}
            />
            <PersonWithPhone scale={1.5} hasPhone={false} />
            <div
              style={{
                marginTop: 26,
                width: 260,
                height: 46,
                borderRadius: '50%',
                border: '3px solid #FFFFFF',
                backgroundColor: '#050505',
              }}
            />
            <div
              style={{
                marginTop: 28,
                fontFamily: 'monospace',
                fontSize: 25,
                letterSpacing: 3,
                color: '#888888',
              }}
            >
              LOST CARDS: {lostCount}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: pop,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -390,
                width: 340,
                height: 580,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0) 100%)',
                clipPath: 'polygon(32% 0%, 68% 0%, 100% 100%, 0% 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: -390,
                width: 112,
                height: 5,
                backgroundColor: '#FFFFFF',
              }}
            />

            <div
              style={{
                fontSize: 84,
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {recordsCount}/17
            </div>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 20,
                letterSpacing: 3,
                color: '#CCCCCC',
                marginBottom: 55,
              }}
            >
              VACCINES SYNCED
            </div>

            <PersonWithPhone scale={1.5} hasPhone isTapping />
            <div
              style={{
                marginTop: 26,
                width: 280,
                height: 50,
                borderRadius: '50%',
                border: '3px solid #FFFFFF',
                backgroundColor: '#111111',
                boxShadow: '0 0 35px rgba(255,255,255,0.2)',
              }}
            />
            <div
              style={{
                marginTop: 28,
                fontFamily: 'monospace',
                fontSize: 25,
                letterSpacing: 3,
                color: '#FFFFFF',
              }}
            >
              MISSED: 0
            </div>
          </div>
        </div>

        <div style={{ marginTop: 140, textAlign: 'center', padding: '0 60px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: 1 }}>
            THE FIRST 6 YEARS MOVE FAST.
          </div>
          <div style={{ fontSize: 32, color: '#888888', marginTop: 14 }}>
            Paper baby books get lost, torn, or left at home.
          </div>
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 2 (0:14-0:28 | 420f): Ascending 6-Year Staircase + Climbing Counter */
const Scene2Staircase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { yr: 'YR 0', label: 'BIRTH', h: 110 },
    { yr: 'YR 1', label: 'VACCINES', h: 175 },
    { yr: 'YR 2', label: 'ALLERGIES', h: 240 },
    { yr: 'YR 3', label: 'GROWTH', h: 305 },
    { yr: 'YR 4', label: 'NUTRITION', h: 370 },
    { yr: 'YR 6', label: 'MILESTONES', h: 435 },
  ];

  const activeStep = Math.min(5, Math.floor(frame / 55));

  return (
    <CryoTransition durationInFrames={420}>
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 50px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 4,
            color: '#888888',
            marginBottom: 16,
          }}
        >
          FORMATIVE DEVELOPMENT • AGES 0–6
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: 90,
          }}
        >
          6 CRITICAL YEARS
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 14,
            height: 560,
            paddingBottom: 20,
            borderBottom: '3px solid #FFFFFF',
          }}
        >
          {steps.map((st, idx) => {
            const pop = spring({
              frame: frame - idx * 25,
              fps,
              config: { damping: 14 },
            });
            const isCurrent = idx === activeStep;

            return (
              <div
                key={st.yr}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {isCurrent && (
                  <div style={{ marginBottom: 14 }}>
                    <PersonWithPhone scale={0.85} hasPhone isTapping />
                  </div>
                )}

                <div
                  style={{
                    width: 146,
                    height: st.h * pop,
                    backgroundColor: isCurrent ? '#FFFFFF' : '#0B0B0B',
                    border: '3px solid #FFFFFF',
                    borderRadius: '14px 14px 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: pop,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 18,
                      fontWeight: 700,
                      color: isCurrent ? '#050505' : '#888888',
                    }}
                  >
                    {st.yr}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      color: isCurrent ? '#050505' : '#FFFFFF',
                      marginTop: 6,
                    }}
                  >
                    {st.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontSize: 34,
            color: '#CCCCCC',
            textAlign: 'center',
            marginTop: 70,
          }}
        >
          Every checkup, vaccine, and milestone depends on complete records.
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 3 (0:28-0:42 | 420f): Scoreboard Flip + Animated Person Tapping Phone */
const Scene3ScoreboardFlip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isFlipped = frame >= 200;
  const flipScale = spring({
    frame: isFlipped ? frame - 200 : frame,
    fps,
    config: { damping: 13 },
  });
  const personIsTapping = frame >= 175 && frame <= 230;

  return (
    <CryoTransition durationInFrames={420}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            padding: '12px 34px',
            borderRadius: 999,
            border: '2px solid #FFFFFF',
            fontFamily: 'monospace',
            fontSize: 22,
            letterSpacing: 4,
            marginBottom: 55,
          }}
        >
          {isFlipped ? 'CLINIC CHECKUP MODE' : 'TRADITIONAL PAPER'}
        </div>

        <div
          style={{
            width: 800,
            height: 390,
            borderRadius: 20,
            backgroundColor: isFlipped ? '#FFFFFF' : '#050505',
            border: '4px solid #FFFFFF',
            transform: `scale(${0.92 + flipScale * 0.08})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
          }}
        >
          <div
            style={{
              fontSize: isFlipped ? 84 : 74,
              fontWeight: 900,
              color: isFlipped ? '#050505' : '#FFFFFF',
            }}
          >
            {isFlipped ? '1 QR CODE' : '5+ FOLDERS'}
          </div>

          <div
            style={{
              width: '80%',
              height: 2,
              backgroundColor: isFlipped ? '#CCCCCC' : '#333333',
              margin: '28px 0',
            }}
          />

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 3,
              color: isFlipped ? '#050505' : '#888888',
            }}
          >
            {isFlipped ? 'PARENT-CONTROLLED ✓' : 'MISSING VACCINE CARDS ✕'}
          </div>
        </div>

        <div style={{ marginTop: 65 }}>
          <PersonWithPhone
            scale={1.1}
            hasPhone
            isTapping={personIsTapping}
          />
        </div>

        <div style={{ fontSize: 42, fontWeight: 800, marginTop: 45 }}>
          {isFlipped
            ? 'ONE TAP REVERSES THE CHAOS.'
            : 'DOCTORS NEED INSTANT HISTORY.'}
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 4 (0:42-0:57 | 450f): UN SDG 3 & Philippine DOH Digital Transformation */
const Scene4SDGContext: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const card1 = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const card2 = spring({ frame: frame - 65, fps, config: { damping: 14 } });
  const card3 = spring({ frame: frame - 115, fps, config: { damping: 14 } });

  return (
    <CryoTransition durationInFrames={450}>
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 70px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 4,
            color: '#888888',
            marginBottom: 14,
          }}
        >
          RESEARCH CONTEXT • PHILIPPINES
        </div>

        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: 70,
          }}
        >
          DIGITAL + KEEPSAKE
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            width: '100%',
          }}
        >
          <div
            style={{
              padding: 38,
              borderRadius: 20,
              border: '3px solid #FFFFFF',
              backgroundColor: '#FFFFFF',
              color: '#050505',
              opacity: card1,
              transform: `translateY(${(1 - card1) * 24}px)`,
            }}
          >
            <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700 }}>
              GLOBAL ALIGNMENT
            </div>
            <div style={{ fontSize: 38, fontWeight: 900, marginTop: 8 }}>
              UN SDG 3: GOOD HEALTH &amp; WELL-BEING
            </div>
          </div>

          <div
            style={{
              padding: 38,
              borderRadius: 20,
              border: '3px solid #FFFFFF',
              backgroundColor: '#0A0A0A',
              opacity: card2,
              transform: `translateY(${(1 - card2) * 24}px)`,
            }}
          >
            <div style={{ fontFamily: 'monospace', fontSize: 20, color: '#888888' }}>
              LOCAL STANDARD
            </div>
            <div style={{ fontSize: 36, fontWeight: 800, marginTop: 8 }}>
              DOH Child Immunization Schedule
            </div>
          </div>

          <div
            style={{
              padding: 38,
              borderRadius: 20,
              border: '3px solid #FFFFFF',
              backgroundColor: '#0A0A0A',
              opacity: card3,
              transform: `translateY(${(1 - card3) * 24}px)`,
            }}
          >
            <div style={{ fontFamily: 'monospace', fontSize: 20, color: '#888888' }}>
              CULTURAL DESIGN
            </div>
            <div style={{ fontSize: 36, fontWeight: 800, marginTop: 8 }}>
              Keeps physical baby books safe as mementos
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/* SCENE 5 (0:57-1:12 | 450f): 8 Core Modules Matrix */
const Scene5ModulesMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const modules = [
    { num: '01', title: 'USER AUTH', sub: 'Secure Parent Login' },
    { num: '02', title: 'CHILD PROFILE', sub: 'Birth & OB-GYNE Data' },
    { num: '03', title: 'HEALTH RECORDS', sub: '17 DOH Vaccines & Meds' },
    { num: '04', title: 'GROWTH TRACKER', sub: 'Height, Weight & Head' },
    { num: '05', title: 'NUTRITION LOGS', sub: 'Milk & Solid Food' },
    { num: '06', title: 'SMART ALERTS', sub: 'Checkup Reminders' },
    { num: '07', title: 'MEMORY VAULT', sub: 'Milestone Photos' },
    { num: '08', title: 'QR ACCESS', sub: 'Doctor Consultation' },
  ];

  return (
    <CryoTransition durationInFrames={450}>
      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 60px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 4,
            color: '#888888',
            marginBottom: 14,
          }}
        >
          SYSTEM ARCHITECTURE
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          8 INTEGRATED MODULES
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            width: '100%',
          }}
        >
          {modules.map((m, i) => {
            const pop = spring({
              frame: frame - i * 16,
              fps,
              config: { damping: 14 },
            });
            const isQR = i === 7;

            return (
              <div
                key={m.num}
                style={{
                  padding: '24px 22px',
                  borderRadius: 16,
                  border: '3px solid #FFFFFF',
                  backgroundColor: isQR ? '#FFFFFF' : '#0A0A0A',
                  color: isQR ? '#050505' : '#FFFFFF',
                  opacity: pop,
                  transform: `scale(${0.92 + pop * 0.08})`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 18,
                    fontWeight: 700,
                    color: isQR ? '#050505' : '#888888',
                  }}
                >
                  MODULE {m.num}
                </div>

                <div style={{ fontSize: 26, fontWeight: 900, marginTop: 4 }}>
                  {m.title}
                </div>

                <div
                  style={{
                    fontSize: 18,
                    color: isQR ? '#222222' : '#AAAAAA',
                    marginTop: 4,
                  }}
                >
                  {m.sub}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </CryoTransition>
  );
};

/*
 * SCENES 6–11 are imported from ScenesPart2.tsx.
 * The durations below are retained from the supplied composition.
 */
export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#050505', color: '#FFFFFF' }}>
      {/* Background music from the MP3 stored in the public folder. */}
      <Audio
        src={staticFile(
          'Meaningful love - Silo (Slowed & Reverb Instrumental) - (320 Kbps).mp3'
        )}
        volume={0.25}
        loop
      />
      <Series>
        <Series.Sequence durationInFrames={420}>
          <Scene1Pedestals />
        </Series.Sequence>

        <Series.Sequence durationInFrames={420}>
          <Scene2Staircase />
        </Series.Sequence>

        <Series.Sequence durationInFrames={420}>
          <Scene3ScoreboardFlip />
        </Series.Sequence>

        <Series.Sequence durationInFrames={450}>
          <Scene4SDGContext />
        </Series.Sequence>

        <Series.Sequence durationInFrames={450}>
          <Scene5ModulesMatrix />
        </Series.Sequence>

        <Series.Sequence durationInFrames={450}>
          <Scene6IPOConveyor />
        </Series.Sequence>

        <Series.Sequence durationInFrames={1470}>
          <Scene7AppDemo />
        </Series.Sequence>

        <Series.Sequence durationInFrames={450}>
          <Scene8RoleSplit />
        </Series.Sequence>

        <Series.Sequence durationInFrames={420}>
          <Scene9SecurityShield />
        </Series.Sequence>

        <Series.Sequence durationInFrames={240}>
          <Scene10Evaluation />
        </Series.Sequence>

        <Series.Sequence durationInFrames={210}>
          <Scene11DoorOutro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
