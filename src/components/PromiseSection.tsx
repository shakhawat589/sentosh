import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";
const PromiseSection = () => {
  const features = [{
    icon: <Code2 className="w-10 h-10" />,
    title: "Web Development",
    description: "Custom websites and web applications for Malaysian businesses built with modern frameworks like React, Next.js, and Node.js for optimal performance.",
    gradient: "from-blue-500/10 to-cyan-500/10"
  }, {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences across Malaysia.",
    gradient: "from-purple-500/10 to-pink-500/10"
  }, {
    icon: <Palette className="w-10 h-10" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to engage Malaysian users and drive conversions with proven design principles.",
    gradient: "from-orange-500/10 to-yellow-500/10"
  }, {
    icon: <Zap className="w-10 h-10" />,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick turnaround times without compromising on quality or functionality.",
    gradient: "from-green-500/10 to-emerald-500/10"
  }];
  return <section id="promise" className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 mx-0 my-0">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-fade-in">
          
          
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: '200ms'
      }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Full-stack{" "}
            <span className="font-serif italic font-normal gradient-text">development</span>{" "}
            expertise
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed">
            We specialize in creating scalable web applications and mobile apps using cutting-edge technologies for companies in Malaysia. 
            From startups to enterprises in Kuala Lumpur and beyond, we deliver solutions that grow with your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => <div key={index} className={`group p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card hover-lift cursor-default animate-scale-in bg-gradient-to-br ${feature.gradient}`} style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="mb-4 sm:mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>)}
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20 animate-fade-in" style={{
        animationDelay: '400ms'
      }}>
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-soft hover:glow-primary text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6" asChild>
            <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
              Discuss Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default PromiseSection;