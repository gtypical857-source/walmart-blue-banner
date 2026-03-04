import { Check, Gift, DollarSign, Share, MessageCircle } from "lucide-react";
import walmartProducts from "@/assets/walmart-products.png";
import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  const ctaLink = "https://trkio.org/aff_c?offer_id=1913&aff_id=31368";
  const pageUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Win a $750 Walmart Gift Card! 🎁");

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
          Win a $750<br />Walmart Gift Card!
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Shop your favorite items with a $750 Walmart credit!
        </p>

        <a
          href={ctaLink}
          className="inline-block w-full max-w-sm py-5 px-8 bg-cta-gold text-accent-foreground font-bold text-xl rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 animate-pulse-soft"
        >
          Start Now
        </a>

        <p className="text-muted-foreground text-sm mt-6">
          Open to US, CA, UK, AU residents, 18+
        </p>

        {/* Product Image */}
        <div className="mt-8 relative">
          <div className="bg-primary/10 rounded-2xl overflow-hidden shadow-card">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm z-10">
              $750 Sweepstakes
            </div>
            <img
              src={walmartProducts}
              alt="Walmart shopping products including groceries and household items"
              className="w-full h-auto"
            />
          </div>
        </div>
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
          className="block w-full max-w-sm mx-auto mt-8 py-5 px-8 bg-cta-gold text-accent-foreground font-bold text-xl rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 text-center"
        >
          Start Now
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
            US, CA, UK, AU residents, 18+. Ends December 31, 2025. No purchase needed. 
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
