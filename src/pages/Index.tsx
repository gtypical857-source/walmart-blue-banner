import { Check, Gift, DollarSign, Share, MessageCircle, Lock, CheckCircle2, Zap } from "lucide-react";

import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  const ctaLink = "https://trksy.org/aff_c?offer_id=1157&aff_id=31368";
  const pageUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Claim Your $750 Walmart Gift Card Today! 🎁");

  const handleCta = (e: React.PointerEvent<HTMLAnchorElement>) => {
    // Navigate immediately on pointer-down for instant response
    if (e.button !== 0) return;
    e.preventDefault();
    window.location.href = ctaLink;
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${pageUrl}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
  };

  const shareToInstagram = () => {
    // Instagram doesn't have direct web share, copy link instead
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied! Share it on Instagram.");
  };

  return (
    <div className="min-h-screen bg-background">
      <SocialProofNotification />
      {/* Hero Section */}
      <section className="container py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-[1.05] mb-6 tracking-tight">
          Claim Your <span className="text-[#0071CE]">$750</span><br />Walmart Gift Card Today
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Join thousands of Americans who have already claimed their $750 Walmart shopping credit
        </p>

        <a
          href={ctaLink}
          onPointerDown={handleCta}
          rel="noopener"
          className="inline-block w-full max-w-sm py-6 px-8 bg-[#0071CE] hover:bg-[#005fae] active:bg-[#004f92] text-white font-bold text-2xl rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,113,206,0.6)] hover:shadow-[0_15px_40px_-5px_rgba(0,113,206,0.7)] cursor-pointer select-none touch-manipulation animate-pulse-soft"
        >
          Continue
        </a>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mt-6">
          <div className="flex flex-col items-center text-center gap-1">
            <Lock className="w-6 h-6 text-green-600" />
            <span className="text-xs font-medium text-muted-foreground">100% Secure</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <span className="text-xs font-medium text-muted-foreground">No Credit Card Required</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <Zap className="w-6 h-6 text-green-600" />
            <span className="text-xs font-medium text-muted-foreground">Takes Less Than 5 Minutes</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-6">
          Open to US, CA, UK, AU residents, 18+
        </p>

      </section>

      {/* How It Works Section */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-2">
          Claim Your $750
        </h2>
        <p className="text-center text-primary font-semibold mb-8">
          Gift Card in &lt;5 Minutes!
        </p>

        {/* Step Cards */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="step-icon">
              <Check className="w-8 h-8" />
            </div>
            <div className="step-number">1</div>
            <h3 className="font-bold text-lg text-card-foreground mb-2">
              Take the Survey
            </h3>
            <p className="text-muted-foreground text-sm">
              Answer a quick survey about your shopping preferences.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="step-icon">
              <Gift className="w-8 h-8" />
            </div>
            <div className="step-number">2</div>
            <h3 className="font-bold text-lg text-card-foreground mb-2">
              Complete 4-5 Deals
            </h3>
            <p className="text-muted-foreground text-sm">
              Sign up for 4-5 offers from our partners.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="step-icon">
              <DollarSign className="w-8 h-8" />
            </div>
            <div className="step-number">3</div>
            <h3 className="font-bold text-lg text-card-foreground mb-2">
              Get Rewarded
            </h3>
            <p className="text-muted-foreground text-sm">
              Receive your $750 Walmart gift card!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={ctaLink}
          onPointerDown={handleCta}
          rel="noopener"
          className="block w-full max-w-sm mx-auto mt-8 py-6 px-8 bg-[#0071CE] hover:bg-[#005fae] active:bg-[#004f92] text-white font-bold text-2xl rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,113,206,0.6)] hover:shadow-[0_15px_40px_-5px_rgba(0,113,206,0.7)] cursor-pointer select-none touch-manipulation text-center"
        >
          Continue
        </a>
      </section>

      {/* Social Sharing Section */}
      <section className="container py-8">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="inline-flex items-center gap-1">
            <Check className="w-4 h-4" /> Secure Entry
          </span>
          <span>•</span>
          <span className="text-primary font-semibold">Walmart</span>
        </div>

        <h3 className="text-2xl font-bold text-center text-foreground mb-2">
          Boost Your Chances!
        </h3>
        <p className="text-center text-muted-foreground mb-6">
          Share for bonus entries!
        </p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <button onClick={shareToTwitter} className="social-btn">
            <Share className="w-5 h-5" />
            X (Twitter)
          </button>
          <button onClick={shareToInstagram} className="social-btn">
            <MessageCircle className="w-5 h-5" />
            Instagram
          </button>
        </div>
        <button onClick={shareToFacebook} className="social-btn w-full">
          <span className="font-bold">f</span>
          Facebook
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-10 mt-8">
        <div className="container text-center">
          <p className="text-sm leading-relaxed mb-6 opacity-90">
            US, CA, UK, AU residents, 18+. Ends July 31, 2026. No purchase needed.
            Void where prohibited. Odds of winning depend on number of eligible entries received. 
            One grand prize winner will be selected.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm font-medium mb-4">
            <a href="#" className="hover:opacity-80 transition-opacity">Official Rules</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact Us</a>
          </div>

          <p className="text-primary font-bold mb-4">
            Powered by Walmart
          </p>

          <p className="text-sm opacity-70">
            © 2025 Walmart Sweepstakes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
