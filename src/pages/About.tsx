import React from "react";
import Header from "../components/header";
import Footer from "../components/footer/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              About MERN-Kart
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Your trusted e-commerce destination built with the MERN stack
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <img
                  alt="Team"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Our Story
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Founded in 2023, MERN-Kart began as a small project to
                      demonstrate the power of the MERN stack (MongoDB, Express,
                      React, Node.js) in building modern e-commerce solutions.
                      Today, we've grown into a full-fledged platform serving
                      thousands of customers worldwide.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Our Mission
                    </h2>
                    <p className="mt-4 text-gray-600">
                      We're committed to providing a seamless shopping
                      experience with cutting-edge technology, competitive
                      prices, and exceptional customer service. Our platform is
                      constantly evolving to incorporate the latest web
                      technologies and best practices.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      The Technology
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Built entirely with JavaScript technologies, MERN-Kart
                      showcases how modern web applications can deliver
                      performance, scalability, and great user experiences. We
                      use TypeScript for type safety and Tailwind CSS for rapid,
                      responsive UI development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                },
                {
                  name: "Sarah Williams",
                  role: "Lead Developer",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                },
                {
                  name: "Michael Chen",
                  role: "UX Designer",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                },
              ].map((person) => (
                <div key={person.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-100 px-6 pb-8">
                    <div className="-mt-6">
                      <div className="relative h-24 w-24 mx-auto">
                        <img
                          className="absolute inset-0 h-full w-full rounded-full object-cover shadow-lg"
                          src={person.image}
                          alt={person.name}
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-base text-gray-600 text-center">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose MERN-Kart?
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Here's what makes us different
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Modern Technology",
                  description:
                    "Built with the latest web technologies for a fast, reliable shopping experience.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Secure Payments",
                  description:
                    "Your transactions are protected with industry-leading security measures.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Customer Focus",
                  description:
                    "We prioritize your satisfaction with responsive support and easy returns.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
