import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.jpg";
import { Sparkles, ArrowRight, Star } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative flex items-start md:items-center pt-[120px] sm:pt-44 md:pt-40 lg:pt-32 pb-12 sm:pb-16 md:pb-24 lg:pb-32 scroll-mt-[120px] sm:scroll-mt-[176px] md:scroll-mt-[160px] lg:scroll-mt-[128px]">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container-custom relative z-10 w-full">
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl mx-auto">
          {/* Rating badge */}
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">4.9</span>
            </div>
            <div className="text-sm text-white/70">Expert Development Agency</div>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-scale-in" style={{
          animationDelay: '100ms'
        }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              We Build{" "}
              <span className="font-serif italic font-normal gradient-text">Exceptional</span>
              {" "}Web & <span className="gradient-text">Mobile Apps</span>
              <Sparkles className="inline-block w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse ml-4" />
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '200ms'
        }}>From concept to launch, we create powerful web applications and mobile apps that drive results in Malaysia. Stunning designs, and cutting-edge technology based in Kuala Lumpur.</p>
          
          <div className="flex items-center justify-center gap-3 flex-wrap animate-fade-in" style={{
          animationDelay: '300ms'
        }}>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              Web Development
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              Mobile Apps
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              UI/UX Design
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              Cloud Solutions
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in" style={{
          animationDelay: '400ms'
        }}>
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-primary group text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6" asChild>
              <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6" asChild>
              <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                View Our Work
              </a>
            </Button>
          </div>

          {/* Floating mockups */}
          <div className="relative mt-12 sm:mt-16 md:mt-20 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
            <img src={heroPhone} alt="Custom mobile app development showcase by Sentosh - professional web and mobile application design Malaysia" className="relative w-full max-w-2xl mx-auto h-auto rounded-3xl shadow-2xl" />
          </div>
        </div>

        {/* Trusted brands */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 text-center animate-fade-in" style={{
        animationDelay: '500ms'
      }}>
          <p className="text-xs sm:text-sm text-white/40 mb-6 sm:mb-8 md:mb-10 uppercase tracking-widest font-medium">Trusted by 200+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-40">
            {["TechCorp", "StartupX", "InnovateNow", "DigitalHub", "CloudSync", "AppMasters", "DevForce", "CodeBase"].map(brand => <span key={brand} className="text-base font-semibold hover:opacity-100 transition-opacity duration-300 cursor-default">
                {brand}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;