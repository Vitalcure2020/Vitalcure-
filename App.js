const { useState, useEffect } = React;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    { name: 'Barber', location: 'Coimbatore', description: 'Book skilled barbers for haircuts and grooming.' },
    { name: 'Doctor', location: 'Coimbatore', description: 'Schedule in-person or virtual doctor consultations.' },
    { name: 'Lawyer', location: 'Coimbatore', description: 'Find trusted legal professionals for your needs.' },
    { name: 'Plumber', location: 'Coimbatore', description: 'Fix leaks and plumbing issues with ease.' },
    { name: 'Carpenter', location: 'Coimbatore', description: 'Hire carpenters for furniture and repairs.' },
    { name: 'Mechanic', location: 'Coimbatore', description: 'Get your vehicle serviced by top mechanics.' },
    { name: 'Engineer', location: 'Coimbatore', description: 'Access civil, electrical, and other engineers.' },
    { name: 'Electrician', location: 'Coimbatore', description: 'Solve electrical issues with certified experts.' },
  ];

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = services.filter(
      (service) =>
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.location.toLowerCase().includes(lowerQuery)
    );
    setSuggestions(filtered.slice(0, 5));
  };

  useEffect(() => {
    const debounce = setTimeout(() => handleSearch(searchQuery), 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleSuggestionClick = (service) => {
    setSearchQuery(service.name);
    setSuggestions([]);
    alert(`Redirecting to book ${service.name} in ${service.location}`);
  };

  return React.createElement(
    'nav',
    { className: 'bg-white shadow-md p-4 sticky' },
    React.createElement(
      'div',
      { className: 'container mx-auto flex justify-between items-center' },
      React.createElement('h1', { className: 'text-3xl font-bold logo' }, 'OneApp'),
      React.createElement(
        'div',
        { className: 'flex items-center space-x-4' },
        React.createElement(
          'div',
          { className: 'search-container' },
          React.createElement('input', {
            type: 'text',
            placeholder: 'Search services (e.g., Plumber in Coimbatore)',
            className: 'px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-teal-500 w-64',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
          }),
          suggestions.length > 0 &&
            React.createElement(
              'div',
              { className: 'search-suggestions' },
              suggestions.map((service, index) =>
                React.createElement(
                  'div',
                  {
                    key: index,
                    className: 'search-suggestion',
                    onClick: () => handleSuggestionClick(service),
                  },
                  React.createElement('strong', null, service.name),
                  ` in ${service.location}`
                )
              )
            )
        ),
        React.createElement(
          'div',
          { className: 'relative' },
          React.createElement(
            'div',
            { className: `hamburger ${isMenuOpen ? 'menu-open' : ''}`, onClick: toggleMenu },
            React.createElement('span', { className: 'hamburger-line' }),
            React.createElement('span', { className: 'hamburger-line' }),
            React.createElement('span', { className: 'hamburger-line' })
          ),
          React.createElement(
            'div',
            { className: `dropdown-menu absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}` },
            ['home', 'services', 'about', 'contact'].map((item) =>
              React.createElement(
                'a',
                {
                  key: item,
                  href: `#${item}`,
                  className: 'block px-4 py-2 text-blue-700 hover:bg-teal-500 hover:text-white',
                  onClick: toggleMenu,
                },
                item.charAt(0).toUpperCase() + item.slice(1)
              )
            )
          )
        )
      )
    )
  );
}

function Hero() {
  return React.createElement(
    'section',
    { id: 'home', className: 'hero-bg text-white py-24 text-center' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement('h2', { className: 'text-4xl md:text-5xl font-bold mb-6' }, 'Book Any Service, Anywhere with OneApp'),
      React.createElement('p', { className: 'text-lg md:text-xl mb-8 max-w-2xl mx-auto' }, 'Powered by Grok AI, find trusted professionals in Coimbatore and beyond with a single search.'),
      React.createElement(
        'div',
        { className: 'flex justify-center gap-4' },
        React.createElement('button', { className: 'bg-white text-blue-900 px-8 py-3 rounded-full font-semibold cta-button hover:bg-teal-500 hover:text-white' }, 'Book Now'),
        React.createElement('button', { className: 'border-2 border-white text-white px-8 py-3 rounded-full font-semibold cta-button hover:bg-white hover:text-blue-900' }, 'Join as a Provider')
      )
    )
  );
}

function Services() {
  const services = [
    { name: 'Barber', icon: '✂️', description: 'Book skilled barbers for haircuts and grooming.' },
    { name: 'Doctor', icon: '🩺', description: 'Schedule in-person or virtual doctor consultations.' },
    { name: 'Lawyer', icon: '⚖️', description: 'Find trusted legal professionals for your needs.' },
    { name: 'Plumber', icon: '🔧', description: 'Fix leaks and plumbing issues with ease.' },
    { name: 'Carpenter', icon: '🪚', description: 'Hire carpenters for furniture and repairs.' },
    { name: 'Mechanic', icon: '🚗', description: 'Get your vehicle serviced by top mechanics.' },
    { name: 'Engineer', icon: '🏗️', description: 'Access civil, electrical, and other engineers.' },
    { name: 'Electrician', icon: '⚡️', description: 'Solve electrical issues with certified experts.' },
  ];

  return React.createElement(
    'section',
    { id: 'services', className: 'py-20 bg-white' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 text-center' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-blue-900 mb-10' }, 'Explore Our Services'),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6' },
        services.map((service) =>
          React.createElement(
            'div',
            { key: service.name, className: 'service-card bg-gray-50 p-6 rounded-xl shadow-md' },
            React.createElement('span', { className: 'text-5xl mb-4 block' }, service.icon),
            React.createElement('h3', { className: 'text-xl font-semibold text-blue-700 mb-2' }, service.name),
            React.createElement('p', { className: 'text-gray-600 text-sm' }, service.description)
          )
        )
      )
    )
  );
}

function About() {
  return React.createElement(
    'section',
    { id: 'about', className: 'py-20 bg-gray-100' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 text-center' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-blue-900 mb-10' }, 'About OneApp'),
      React.createElement(
        'p',
        { className: 'text-lg text-gray-700 mb-8 max-w-3xl mx-auto' },
        'OneApp is revolutionizing service bookings in India, starting from Coimbatore. Our Grok-powered platform connects users with trusted professionals—from barbers to engineers—with seamless AI-driven search and booking. With low 10-15% commissions, we empower small businesses to grow while making life easier for customers.'
      ),
      React.createElement(
        'div',
        { className: 'mt-8' },
        React.createElement('h3', { className: 'text-xl font-semibold text-blue-900' }, 'Meet Our Founder'),
        React.createElement(
          'p',
          { className: 'text-gray-700 max-w-xl mx-auto' },
          'Yogesh Suthar, BHMS, is the visionary behind OneApp. With a background in healthcare and a passion for technology, Yogesh is committed to simplifying access to essential services across India.'
        )
      )
    )
  );
}

function Contact() {
  return React.createElement(
    'section',
    { id: 'contact', className: 'py-20 bg-white' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 text-center' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-blue-900 mb-10' }, 'Get in Touch'),
      React.createElement('p', { className: 'text-lg text-gray-700 mb-8 max-w-2xl mx-auto' }, 'Have questions or want to join as a service provider? Reach out to us!'),
      React.createElement(
        'div',
        { className: 'flex justify-center gap-4' },
        React.createElement('a', { href: 'mailto:support@oneapp.in', className: 'bg-teal-500 text-white px-6 py-3 rounded-full font-semibold cta-button hover:bg-teal-600' }, 'Email Us'),
        React.createElement('a', { href: 'tel:+919876543210', className: 'border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-full font-semibold cta-button hover:bg-teal-500 hover:text-white' }, 'Call Us')
      ),
      React.createElement('p', { className: 'mt-6 text-gray-600' }, 'Coimbatore, Tamil Nadu, India')
    )
  );
}

function Footer() {
  return React.createElement(
    'footer',
    { className: 'bg-blue-900 text-white py-8' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 text-center' },
      React.createElement('p', { className: 'mb-4' }, '© 2025 OneApp. All rights reserved.'),
      React.createElement(
        'div',
        { className: 'flex justify-center gap-6' },
        React.createElement('a', { href: '#', className: 'hover:text-teal-500' }, 'Privacy Policy'),
        React.createElement('a', { href: '#', className: 'hover:text-teal-500' }, 'Terms of Service'),
        React.createElement('a', { href: '#', className: 'hover:text-teal-500' }, 'FAQ')
      )
    )
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(Services),
    React.createElement(About),
    React.createElement(Contact),
    React.createElement(Footer)
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
    }
