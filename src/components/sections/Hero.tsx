import { Button, Container } from "@/components/ui";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onPrimaryClick} className="bg-white text-blue-600 hover:bg-gray-100">
              {primaryButtonText}
            </Button>
            <Button variant="outline" onClick={onSecondaryClick} className="border-white text-white hover:bg-white hover:text-blue-600">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}