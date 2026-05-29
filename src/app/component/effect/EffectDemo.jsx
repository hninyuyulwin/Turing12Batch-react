"use client";

import React, { useEffect, useRef, useState } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log("Useeffect fire");
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  console.log("Render ", ref.current);

  return <video src={src} ref={ref} loop playsInline />;
}

function EffectDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <h4>EffectDemo</h4>
      <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

export default EffectDemo;
