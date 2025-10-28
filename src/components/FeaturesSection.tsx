import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import socialMedia from "@/assets/social-media.jpg";
import mobileApp from "@/assets/mobile-app.jpg";

const FeaturesSection = () => {
  return (
    <section id="features" className="space-y-0">
      {/* Our Process */}
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold animate-fade-in leading-tight">
            Our{" "}
            <span className="font-serif italic font-normal gradient-text">Development</span>{" "}
            Process
          </h2>
        </div>
      </div>

      {/* Discovery & Planning */}
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discovery &{" "}
                <span className="font-serif italic font-normal">Planning</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/60">We start by understanding your vision and requirements for your Malaysia-based business.</p>
              <ul className="space-y-4">
                {[
                  "Requirements gathering and analysis",
                  "Technical architecture planning",
                  "UI/UX wireframing and prototyping",
                  "Technology stack selection"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative glass-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
                <img
                  src={socialMedia}
                  alt="Web development planning and strategy dashboard - project management for custom website development"
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development & Launch */}
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-purple-50/50 to-pink-50/50 relative overflow-hidden">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
                <img
                  src={mobileApp}
                  alt="Mobile app development process - iOS and Android application development Malaysia"
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Development &{" "}
                <span className="font-serif italic font-normal gradient-text">Launch</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/60">Agile development with continuous feedback and testing, serving clients across Malaysia.</p>
              <div className="space-y-4">
                {[
                  "Sprint-based development",
                  "Regular progress updates",
                  "Quality assurance testing",
                  "Deployment and monitoring",
                  "Post-launch support",
                  "Ongoing maintenance"
                ].map((item, index) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-3 animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-soft hover:glow-primary text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6"
                asChild
              >
                <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                  Start Building
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
