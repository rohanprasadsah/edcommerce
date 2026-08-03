const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + or spaces)
    const phoneNumber = '1234567890';
    const message = 'Hello! I would like to know more about your courses.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 transition-all transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-14 h-14 drop-shadow-2xl"
      />
    </button>
  );
};

export default WhatsAppButton;
