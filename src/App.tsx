import React, { useEffect } from 'react';
import { Shield, Lock, Cpu, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

// SEO component that injects metadata via JavaScript
const SEO = () => {
  useEffect(() => {
    // Create meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Get started with your Trezor device. Learn how to set up your hardware wallet, secure your crypto assets, and manage your digital currencies with Trezor.io/Start.';
    document.head.appendChild(metaDescription);

    // Create meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'trezor.io/start, trezor start, trezor setup, hardware wallet setup, crypto wallet, trezor device initialization';
    document.head.appendChild(metaKeywords);

    // Create canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://trezor.io/start';
    document.head.appendChild(canonicalLink);

    // Create Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.property = 'og:title';
    ogTitle.content = 'Trézor.io/Start® | Starting Up Your Device | Trézor®';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.property = 'og:description';
    ogDescription.content = 'Official guide to set up your Trezor device. Secure your crypto assets with the most trusted hardware wallet solution.';
    document.head.appendChild(ogDescription);

    const ogUrl = document.createElement('meta');
    ogUrl.property = 'og:url';
    ogUrl.content = 'https://trezor.io/start';
    document.head.appendChild(ogUrl);

    const ogType = document.createElement('meta');
    ogType.property = 'og:type';
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Create Twitter Card tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    document.head.appendChild(twitterCard);

    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = 'Trézor.io/Start® | Starting Up Your Device | Trézor®';
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = 'Official guide to set up your Trezor device. Secure your crypto assets with the most trusted hardware wallet solution.';
    document.head.appendChild(twitterDescription);

    // Update document title
    document.title = 'Trézor.io/Start® | Starting Up Your Device | Trézor®';

    // Structured data for rich snippets
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Set Up Your Trezor Device',
      'description': 'Step-by-step guide to initialize and set up your Trezor hardware wallet at trezor.io/start',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Connect your device',
          'text': 'Connect your Trezor device to your computer using the USB cable provided in the package.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Visit trezor.io/start',
          'text': 'Open your web browser and navigate to trezor.io/start to begin the setup process.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Follow on-screen instructions',
          'text': 'The Trezor Suite will guide you through the initialization process, including creating a new wallet.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Secure your recovery seed',
          'text': 'Write down your recovery seed phrase and store it in a safe place.'
        }
      ]
    });
    document.head.appendChild(structuredData);

    return () => {
      // Cleanup function to remove added elements if component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogUrl);
      document.head.removeChild(ogType);
      document.head.removeChild(twitterCard);
      document.head.removeChild(twitterTitle);
      document.head.removeChild(twitterDescription);
      document.head.removeChild(structuredData);
    };
  }, []);

  return null;
};

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Trézor</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Support</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Blog</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to trezor.io/start</h1>
              <p className="text-xl mb-8">Your gateway to secure cryptocurrency management. Set up your Trezor device in minutes and take control of your digital assets.</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition inline-flex items-center">
                Start Setup Process <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started with Your Trezor Device</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Connect Your Device</h3>
                <p className="text-gray-600">
                  Unbox your Trezor hardware wallet and connect it to your computer using the USB cable provided in the package. Visit trezor.io/start to begin the setup process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Create Your Wallet</h3>
                <p className="text-gray-600">
                  Follow the on-screen instructions at trezor.io/start to initialize your device. Create a new wallet and set up your PIN code for an additional layer of security.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Secure Your Recovery Seed</h3>
                <p className="text-gray-600">
                  Write down your recovery seed phrase provided during the trezor.io/start setup process. Store it in a safe place offline. This is crucial for recovering your wallet if needed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Why Choose Trezor for Your Cryptocurrency Security</h2>
              
              <p className="mb-4">
                When you visit trezor.io/start to set up your device, you're taking the first step toward truly secure cryptocurrency management. Unlike software wallets or exchange accounts, Trezor hardware wallets keep your private keys offline and protected from potential online threats.
              </p>
              
              <p className="mb-4">
                The trezor.io/start process guides you through creating a wallet that only you can access. Your recovery seed, generated during setup, ensures you can always recover your funds even if your device is lost or damaged.
              </p>
              
              <p className="mb-4">
                Trezor devices support a wide range of cryptocurrencies, allowing you to manage multiple assets from a single secure interface. The intuitive design makes it easy for both beginners and experienced users to navigate the world of digital assets with confidence.
              </p>
              
              <p>
                By following the simple steps at trezor.io/start, you're ensuring that your investments remain protected while maintaining complete control over your financial future. No third parties, no unnecessary risks—just secure, straightforward cryptocurrency management.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What is trezor.io/start?</h3>
                <p className="text-gray-600">
                  Trezor.io/start is the official starting point for setting up your Trezor hardware wallet. It provides a step-by-step guide to initialize your device, create a wallet, and secure your cryptocurrencies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Is my recovery seed generated at trezor.io/start secure?</h3>
                <p className="text-gray-600">
                  Yes, the recovery seed is generated directly on your Trezor device, not on the trezor.io/start website. This ensures that your seed remains secure and is never exposed to potential online threats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I use trezor.io/start on any operating system?</h3>
                <p className="text-gray-600">
                  Yes, the trezor.io/start setup process is compatible with Windows, macOS, and Linux operating systems. You can access it through any modern web browser to begin setting up your device.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What should I do if I lose my Trezor device after setting it up at trezor.io/start?</h3>
                <p className="text-gray-600">
                  If you lose your device, your funds remain secure as long as you have your recovery seed. You can purchase a new Trezor device and use the recovery process to restore access to your cryptocurrencies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
              <p className="text-lg mb-6">Visit trezor.io/start today and take control of your cryptocurrency security with the world's most trusted hardware wallet.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition inline-flex items-center">
                Begin Setup at trezor.io/start <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Trézor</span>
                </div>
                <p className="text-gray-400">
                  The original and most trusted hardware wallet for secure cryptocurrency storage and management.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Products</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Trezor Model T</a></li>
                  <li><a href="#" className="hover:text-white transition">Trezor Model One</a></li>
                  <li><a href="#" className="hover:text-white transition">Accessories</a></li>
                  <li><a href="#" className="hover:text-white transition">Trezor Suite</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Support Center</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">User Manual</a></li>
                  <li><a href="#" className="hover:text-white transition">trezor.io/start</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition">Reddit</a></li>
                  <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 Trezor. All rights reserved. trezor.io/start is the official setup portal for Trezor devices.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;