import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">WebAgency</h3>
            <p className="text-gray-300 mb-4">
              Professional web development services for businesses of all sizes.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">hello@webagency.com</li>
              <li className="text-gray-300">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 WebAgency. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}