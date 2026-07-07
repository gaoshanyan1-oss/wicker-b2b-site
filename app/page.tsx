import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Factory from "@/components/Factory";
import AboutUs from "@/components/AboutUs";
import OEMODM from "@/components/OEMODM";
import BlogSection from "@/components/BlogSection";
import InquiryForm from "@/components/InquiryForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <WhyChooseUs />
        <ProductCategories />
        <FeaturedProducts />
        <Factory />
        <AboutUs />
        <OEMODM />
        <BlogSection />
        <InquiryForm />
        <CTA />
      </main>

      <Footer />
    </>
  );
}