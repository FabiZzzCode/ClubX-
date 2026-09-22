import { useEffect, useRef, useState } from "react";
import { Arrow, Check } from "./Icons";

// Frontend-only join flow: idle -> sending -> joined.
// TODO: replace the timeout in `join` with the real API call once the backend exists.
function JoinClub({ club }) {
  const [state, setState] = useState("idle");
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const join = () => {
    setState("sending");
    timer.current = setTimeout(() => setState("joined"), 900);
  };

  return (
    <div className="join">
      <button
        type="button"
        className={`btn btn--primary btn--lg join__btn is-${state}`}
        onClick={join}
        disabled={state !== "idle"}
        aria-live="polite"
      >
        {state === "idle" && <>Join Club <Arrow /></>}
        {state === "sending" && <><span className="spinner" aria-hidden="true" /> Sending…</>}
        {state === "joined" && <><Check /> Request sent</>}
      </button>
      {state === "joined" && (
        <p className="join__note" role="status">
          You've asked to join {club.short}.{" "}
          <button type="button" className="link-btn" onClick={() => setState("idle")}>Undo</button>
        </p>
      )}
    </div>
  );
}

export default JoinClub;
