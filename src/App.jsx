import { useState, useEffect, useCallback } from "react";
import { Check } from "lucide-react";
import captchaRounds from "./data/captchaRounds.js";

function getRandomRound() {
  return captchaRounds[Math.floor(Math.random() * captchaRounds.length)];
}

const DOG_FAILURE_MESSAGE =
  "Incorrect. That is a biological dependence, not sustained happiness. Please try again.";
const GENERIC_FAILURE_MESSAGE =
  "Incorrect. That is merely a temporary dopamine spike. Please try again.";
const SUCCESS_MESSAGE =
  "Correct. Happiness is an illusion. You are verified human.";

export default function App() {
  const [round, setRound] = useState(null);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [status, setStatus] = useState("challenge"); // 'challenge' | 'success'
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setRound(getRandomRound());
  }, []);

  useEffect(() => {
    if (!errorMessage) return;
    const t = setTimeout(() => {
      setSelectedIds(new Set());
      setErrorMessage(null);
    }, 8000);
    return () => clearTimeout(t);
  }, [errorMessage]);

  const toggleTile = useCallback((id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleVerify = useCallback(() => {
    if (!round) return;
    const selected = Array.from(selectedIds);
    if (selected.length === 0) {
      setStatus("success");
      return;
    }
    const selectedTypes = selected.map(
      (id) => round.images.find((img) => img.id === id)?.type
    );
    const hasDog = selectedTypes.includes("dog");
    setErrorMessage(hasDog ? DOG_FAILURE_MESSAGE : GENERIC_FAILURE_MESSAGE);
  }, [round, selectedIds]);

  if (!round) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
        <div className="text-gray-500">Loading challenge…</div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
          </div>
          <p className="text-gray-800 text-lg leading-snug mb-6">{SUCCESS_MESSAGE}</p>
          <button
            type="button"
            onClick={() => {
              setRound(getRandomRound());
              setSelectedIds(new Set());
              setStatus("challenge");
              setErrorMessage(null);
            }}
            className="px-5 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] transition-colors"
          >
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-[400px] overflow-hidden">
        {/* Dark blue header — reCAPTCHA style */}
        <div className="bg-[#1a73e8] px-4 py-3">
          <p className="text-white text-sm font-medium leading-tight">
            {round.headerText}
          </p>
        </div>

        {/* Grid + verify area */}
        <div className="p-3">
          <div className="grid grid-cols-3 gap-1 mb-4">
            {round.images.map((img) => (
              <button
                key={img.id}
                type="button"
                onClick={() => toggleTile(img.id)}
                className={`
                  relative aspect-square rounded-sm overflow-hidden border border-gray-300
                  transition-transform duration-150 ease-out
                  focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-offset-1
                  noise-overlay
                  ${selectedIds.has(img.id) ? "scale-95" : "scale-100"}
                `}
              >
                <img
                  src={img.placeholderUrl}
                  alt={img.altText}
                  className="w-full h-full object-cover pointer-events-none"
                  style={{
                    filter:
                      "contrast(1.2) sepia(0.5) grayscale(0.6) brightness(0.88)",
                  }}
                />
                {selectedIds.has(img.id) && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-[#1a73e8] rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                )}
              </button>
            ))}
          </div>

          {errorMessage && (
            <p className="text-red-600 text-base font-bold mb-2">{errorMessage}</p>
          )}

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={handleVerify}
              className="px-4 py-2 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] transition-colors"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
