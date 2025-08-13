import Layout from "@/components/Layout";
import { Hero, ServicesGrid } from "@/components/sections";
import { SERVICES } from "@/constants/services";
import { Button, Container } from "@/components/ui";

export default function ServicesPage() {
  return (
    <Layout>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive web solutions tailored to your business needs"
        primaryButtonText="Get Quote"
        secondaryButtonText="View Portfolio"
      />
      
      <ServicesGrid services={SERVICES} />
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life with our expert web development services.
            </p>
            <Button size="lg">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}