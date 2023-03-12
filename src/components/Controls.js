import React from "react";

export default function Controls({ controls }) {
  const {
    distort,
    speed,
    roughness,
    scale,
    shape,
    xPosition,
    yPosition,
    zPosition,
    setDistort,
    setSpeed,
    setRoughness,
    setScale,
    setShape,
    setXPosition,
    setYPosition,
    setZPosition,
  } = controls;

  return (
    <div className="controls">
      <div className="objectTitle">
        <h2>{shape.toUpperCase()}</h2>
      </div>
      <div className="controlGroup">
        {shape === "sphere" ? (
          <>
            {" "}
            <div className="control">
              <label>Distort</label>
              <input
                value={distort}
                onChange={(e) => setDistort(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
            <div className="control">
              <label>Speed</label>
              <input
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
            <div className="control">
              <label>Roughness</label>
              <input
                value={roughness}
                onChange={(e) => setRoughness(e.target.value)}
                step={1 / 32}
                max="1"
                type="number"
              />
            </div>
            <div className="control">
              <label>Scale</label>
              <input
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
          </>
        ) : (
          <>
            <div className="control">
              <label>X Position</label>
              <input
                value={xPosition}
                onChange={(e) => setXPosition(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
            <div className="control">
              <label>Y Position</label>
              <input
                value={yPosition}
                onChange={(e) => setYPosition(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
            <div className="control">
              <label>Z Position</label>
              <input
                value={zPosition}
                onChange={(e) => setZPosition(e.target.value)}
                step={1 / 32}
                type="number"
              />
            </div>
          </>
        )}
      </div>
      <div className="control shapeControl">
        <label>Shape</label>
        <div>
          <input
            value="sphere"
            onChange={(e) => setShape(e.target.value)}
            checked={shape === "sphere"}
            id="sphere"
            type="radio"
          />
          <label htmlFor="sphere">Sphere</label>
        </div>
        <div>
          <input
            value="box"
            onChange={(e) => setShape(e.target.value)}
            checked={shape === "box"}
            id="box"
            type="radio"
          />
          <label htmlFor="box">Box</label>
        </div>
      </div>
    </div>
  );
}
