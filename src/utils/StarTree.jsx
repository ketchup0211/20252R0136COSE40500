import React from "react";

export default function StarTree({
  height = 12,
  startStars = 1,
  step = 2,
  center = true,
}) {
  const lines = Array.from({ length: height }, (_, i) => startStars + i * step);
  const maxStars = lines[lines.length - 1];

  return (
    <div style={{ fontFamily: "monospace", lineHeight: 1.2 }}>
      {lines.map((starCount, idx) => {
        const pad = center ? " ".repeat((maxStars - starCount) / 2) : "";
        const text = pad + "*".repeat(starCount);

        return (
          <React.Fragment key={idx}>
            {text}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}
