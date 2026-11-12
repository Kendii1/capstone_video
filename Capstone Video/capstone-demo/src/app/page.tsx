import { Player } from "@remotion/player";
import { MyComposition } from "./Composition";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#ffffff",
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 16 }}>
        BabyBook+
      </h1>
      <p style={{ fontSize: 20, color: "#888888", marginBottom: 32 }}>
        Unified Digital Baby Book • UN SDG 3 Aligned
      </p>

      <div
        style={{
          width: "100%",
          maxWidth: 480,
          aspectRatio: "9/16",
          backgroundColor: "#000000",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        <Player
          style={{ width: "100%", height: "100%" }}
          durationInFrames={1755}
          compositionWidth={1080}
          compositionHeight={1920}
          fps={30}
          autoPlay
          loop
          muted
          controls
          component={<MyComposition />}
        />
      </div>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <p style={{ color: "#666666", fontSize: 14 }}>
          Render the video locally: <br />
          <code style={{ color: "#38BDF8" }}>
            npx remotion render
          </code>
        </p>
      </div>
    </div>
  );
}