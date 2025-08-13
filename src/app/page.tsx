import Layout from "@/components/Layout";
import { Hero, ServicesGrid } from "@/components/sections";
import { SERVICES } from "@/constants/services";
import { Button, Container } from "@/components/ui";

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Build Your Digital Future"
        subtitle="We create stunning, high-performance websites that help your business grow"
        primaryButtonText="Get Started"
        secondaryButtonText="View Our Work"
      />

      <ServicesGrid 
        services={SERVICES.slice(0, 3)} 
        title="Our Services"
        subtitle="From concept to launch, we provide comprehensive web solutions"
      />

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and bring your vision to life
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