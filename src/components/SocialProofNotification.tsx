import { useState, useEffect, useCallback } from "react";
import { X, ShoppingBasket } from "lucide-react";
import { faker } from "@faker-js/faker";

const SocialProofNotification = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [dismissed, setDismissed] = useState(false);

  const showNotification = useCallback(() => {
    setName(faker.person.firstName());
    setDismissed(false);
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5500);

    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 2500);

    const loopInterval = setInterval(() => {
      showNotification();
    }, 10000);

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
          {name} just claimed their $750 Walmart voucher!
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
