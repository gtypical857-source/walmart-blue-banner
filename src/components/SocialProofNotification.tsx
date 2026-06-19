import { useState, useEffect, useCallback } from "react";
import { X, ShoppingBasket } from "lucide-react";

const names = [
  "Jessica", "Michael", "Sarah", "James", "Emily",
  "Tyler", "Ashley", "Brandon", "Madison", "Chris",
  "Kayla", "Jordan", "Taylor", "Ryan", "Brittany",
  "Kevin", "Amber", "Justin", "Stephanie", "Daniel",
];

const states = [
  "Texas", "Florida", "California", "New York", "Georgia",
  "Ohio", "Illinois", "Arizona", "Pennsylvania", "Michigan",
];

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const SocialProofNotification = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [dismissed, setDismissed] = useState(false);

  const showNotification = useCallback(() => {
    setName(getRandomItem(names));
    setState(getRandomItem(states));
    setDismissed(false);
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 5000);

    const loopInterval = setInterval(() => {
      showNotification();
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopInterval);
    };
  }, [showNotification]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (dismissed && !visible) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 max-w-xs transition-all duration-500 ease-out ${
        visible && !dismissed
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-walmart-blue rounded-xl px-4 py-3 shadow-lg relative pr-9">
        <div className="flex-shrink-0 bg-white/20 rounded-lg p-2">
          <ShoppingBasket className="w-5 h-5 text-white" />
        </div>
        <p className="text-white text-sm font-bold leading-snug">
          {name} from {state} just claimed their reward
        </p>
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofNotification;
