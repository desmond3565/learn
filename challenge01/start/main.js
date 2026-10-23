/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [circleSize, setCircleSize] = React.useState("150");
  const [circleRotate, setCircleRotate] = React.useState("0");
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");
  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          checked={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(e) => setCircleSize(e.target.value)}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={circleRotate}
          onChange={(e) => setCircleRotate(e.target.value)}
        />
      </label>
      <div
        className={`circle ${isPurple ? "purple" : ""} ${textColor}`}
        style={{
          height: `${circleSize}px`,
          width: `${circleSize}px`,
          lineHeight: `${circleSize}px`,
          transform: `rotate(${circleRotate}deg)`,
        }}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
