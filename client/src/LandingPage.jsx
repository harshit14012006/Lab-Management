import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import labPic from './images/labpic.webp';
import { ChatAlt2Icon, UserIcon, StarIcon } from '@heroicons/react/outline';
import Footer from './components/Footer';

const LandingPage = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex h-full flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <section 
          className="relative bg-cover bg-center h-[80vh] md:h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${labPic})`, backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>
          <motion.div
            className="relative z-10 text-center px-6 md:px-12 max-w-screen-lg mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Optimize Your Lab Operations
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Streamline your lab processes with our advanced, user-friendly management tools.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="flex-shrink-0"
              >
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition ease-in-out duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
              
              <motion.div 
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }} 
  className="relative inline-block"
>
  <button className="relative px-7 py-3 text-lg font-normal text-white bg-transparent rounded-md overflow-hidden cursor-pointer transition duration-500 ease-in-out transform focus:outline-none">
    <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-400 opacity-70"></span>
    <span className="relative z-10">Login</span>
  </button>
</motion.div>

            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
              data-aos="fade-up"
            >
              Key Features of Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: 'Advanced Data Analytics', icon: '📊', description: 'Gain comprehensive insights into lab performance with real-time analytics and reporting.' },
                { title: 'Real-Time Inventory Tracking', icon: '🔬', description: 'Monitor and manage lab supplies with live updates and automated notifications.' },
                { title: 'Scheduled Maintenance Management', icon: '🛠️', description: 'Plan and track equipment maintenance to ensure seamless lab operations.' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
              data-aos="fade-up"
            >
              Why Our Platform Stands Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Intuitive User Experience', icon: '👍', description: 'Designed with user experience in mind, ensuring a seamless and efficient interface.' },
                { title: '24/7 Customer Support', icon: '📞', description: 'Our dedicated support team is available around the clock to resolve any issues.' },
                { title: 'Robust Data Security', icon: '🔒', description: 'Your data is protected with advanced encryption and regular security updates.' },
                { title: 'Flexible Pricing Options', icon: '💲', description: 'Choose from various pricing plans to suit your lab’s needs and budget.' },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="text-blue-600 text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
              data-aos="fade-up"
            >
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Basic Plan',
                  price: '$19/month',
                  features: ['Essential features', 'Email support', '1GB storage'],
                },
                {
                  title: 'Professional Plan',
                  price: '$49/month',
                  features: ['Full feature access', 'Priority support', '10GB storage', 'Advanced reporting'],
                },
                {
                  title: 'Enterprise Plan',
                  price: 'Contact us',
                  features: ['Customizable features', 'Dedicated support', 'Unlimited storage', 'On-site training'],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                  <p className="text-gray-800 text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex justify-center items-center">
                        <span className="text-blue-600 mr-2">✔️</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition ease-in-out duration-300">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Testimonials Section */}
<section className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          data-aos="fade-up"
        >
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: 'Dr. Sarah Johnson', 
              role: 'Lab Director', 
              testimonial: 'This platform has significantly improved our lab operations with its intuitive design and robust efficiency. It’s an invaluable asset to our workflow.', 
              icon: <UserIcon className="h-10 w-10 text-gray-500 mx-auto mb-4" /> 
            },
            { 
              name: 'John Smith', 
              role: 'Lab Technician', 
              testimonial: 'An exceptional tool for managing lab supplies and organizing tasks seamlessly. Its user-friendly interface has simplified our daily operations.', 
              icon: <ChatAlt2Icon className="h-10 w-10 text-gray-500 mx-auto mb-4" /> 
            },
            { 
              name: 'Emma Brown', 
              role: 'Research Scientist', 
              testimonial: 'The advanced data analytics features have greatly enhanced our research processes. It’s streamlined and made data management much more effective.', 
              icon: <StarIcon className="h-10 w-10 text-gray-500 mx-auto mb-4" /> 
            },
          ].map((testimony, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {testimony.icon}
              <blockquote className="italic text-gray-700 mb-6">
                "{testimony.testimonial}"
              </blockquote>
              <p className="font-semibold text-gray-900 text-lg">{testimony.name}</p>
              <p className="text-gray-600 text-sm">{testimony.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Lab Management to the Next Level?
            </h2>
            <p className="text-lg mb-8">
              Join us today and experience the future of laboratory management.
            </p>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition ease-in-out duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
