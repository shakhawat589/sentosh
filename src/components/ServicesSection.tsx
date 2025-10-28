import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import ecommerceMockup from "@/assets/ecommerce-mockup.jpg";
import designWorkspace from "@/assets/design-workspace.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Powerful web applications built with modern frameworks and best practices for businesses in Malaysia.",
      items: ["React & Next.js", "Node.js Backend", "RESTful APIs", "Database Design", "Cloud Deployment", "Performance Optimization"],
      image: designWorkspace,
      imageAlt: "Professional web development workspace Malaysia - custom website design and development services",
      gradient: "from-blue-50/50 to-cyan-50/50",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that users in Malaysia love.",
      items: ["iOS Development", "Android Development", "React Native", "Flutter", "App Store Deployment", "Push Notifications"],
      image: analyticsDashboard,
      imageAlt: "Mobile app analytics dashboard - iOS and Android app development services Malaysia",
      gradient: "from-pink-50/50 to-purple-50/50",
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online stores with seamless shopping experiences for Malaysian businesses.",
      items: ["Custom E-Commerce", "Shopify Development", "Payment Integration", "Inventory Management", "Shopping Cart", "Order Tracking"],
      image: ecommerceMockup,
      imageAlt: "E-commerce website mockup - custom online store development and Shopify solutions Malaysia",
      gradient: "from-orange-50/50 to-yellow-50/50",
    },
  ];

  return (
    <section className="space-y-0" id="services">
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="container-custom text-center space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Our Web Development & Mobile App{" "}
            <span className="font-serif italic font-normal gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60">End-to-end development solutions in Malaysia</p>
          <p className="text-sm sm:text-base md:text-lg text-foreground/50">We handle everything from design to deployment</p>
        </div>
      </div>

      {services.map((service, index) => (
        <div 
          key={service.title}
          className={`py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
        >
          <div className={`absolute ${index % 2 === 0 ? 'top-20 right-10' : 'bottom-20 left-10'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`}></div>
          
          <div className="container-custom relative z-10">
            <div className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`space-y-6 sm:space-y-8 animate-fade-in ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="sr-only">Sentosh Malaysia - </span>{service.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {service.items.map((item, itemIndex) => (
                    <div 
                      key={item} 
                      className="flex items-start gap-3 animate-scale-in"
                      style={{ animationDelay: `${itemIndex * 50}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-soft hover:glow-primary group text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              <div className={`relative animate-float ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`} style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative glass-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* UI/UX Design */}
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-green-50/50 to-emerald-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              UI/UX{" "}
              <span className="font-serif italic font-normal gradient-text">Design</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed">
              Beautiful, intuitive interfaces that users love. We create designs for Malaysian companies that not only look great but also drive engagement and conversions.
            </p>
            <Button 
              size="lg" 
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 glow-soft hover:glow-primary group text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-6"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
