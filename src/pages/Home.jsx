import BannerCarousel from '../components/BannerCarousel';
import QuoteSection from '../components/QuoteSection';
import OurAchievers from '../components/OurAchievers';
import KeyFeatures from '../components/KeyFeatures';
import StudentTestimonials from '../components/StudentTestimonials';
import InstituteInfo from '../components/InstituteInfo';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <QuoteSection />
      <OurAchievers />
      <KeyFeatures />
      <StudentTestimonials />
      <InstituteInfo />
      <ContactForm />
      <FAQ />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
