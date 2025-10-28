import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=601168233798&text=Hi%20Sentosh%20Team%2C%20%20I%20need%20some%20help%20with%20my%20business.%20I%E2%80%99m%20looking%20to%20streamline%20a%20few%20things%20and%20would%20appreciate%20your%20support%20in%20figuring%20out%20the%20best%20approach.%20Let%20me%20know%20when%20we%20can%20discuss%20further.%20%20%20%20Thanks"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] animate-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
};

export default WhatsAppButton;
