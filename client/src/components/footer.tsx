import { Link } from 'wouter';

export function Footer() {
  const fontCategories = [
    { name: 'Fancy Fonts', href: '/fancy-fonts' },
    { name: 'Versatile Fonts', href: '/versatile-fonts' },
    { name: 'Cool Fonts', href: '/cool-fonts' },
    { name: 'Lined Fonts', href: '/lined-fonts' },
    { name: 'Gaming Fonts', href: '/gaming-fonts' },
    { name: 'Decorated Fonts', href: '/decorated-fonts' },
    { name: 'Mixed Random Styles', href: '/mixed-random-styles' },
    { name: 'Cute Fonts', href: '/cute-fonts' },
    { name: 'Bold Fonts', href: '/bold-fonts' },
    { name: 'Italic Fonts', href: '/italic-fonts' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Random Font', href: '/random-font' },
    { name: 'Compare Fonts', href: '/compare-fonts' },
    { name: 'Fancy Fonts', href: '/fancy-fonts' },
    { name: 'Cool Fonts', href: '/cool-fonts' },
    { name: 'Cute Fonts', href: '/cute-fonts' },
    { name: 'About', href: '/about' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Font Generator</h3>
            <p className="text-gray-300 text-sm">
              Transform your text into 200+ fancy fonts. Perfect for social media, gaming, and creative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Font Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Font Categories</h4>
            <ul className="space-y-2">
              {fontCategories.slice(0, 4).map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Font Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
