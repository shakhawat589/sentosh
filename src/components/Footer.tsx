import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
const Footer = () => {
  return <footer id="contact" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="container-custom">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for New Projects
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              Ready to build your{" "}
              <span className="font-serif italic font-normal gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                next project?
              </span>
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">Let's discuss your web or mobile app idea. 
Get a free consultation from our Malaysia-based team and discover how we can bring your vision to life.</p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-primary group text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6" asChild>
                <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-white/10 text-center space-y-4 sm:space-y-6 animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            <div className="flex justify-center">
              <img src={logoFull} alt="Sentosh" className="h-8 sm:h-10 md:h-12" />
            </div>
            <p className="text-sm text-white/60">
              Expert Web & Mobile App Development in Malaysia
            </p>
            <p className="text-sm text-white/50">
              Kuala Lumpur | Serving clients across Malaysia
            </p>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Sentosh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;