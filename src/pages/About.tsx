import React from "react";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-full px-4 py-12 bg-gray-200 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              About Welcome Shringar
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
              From Classic to Contemporary - Bangles for Every You
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <img
                  alt="Team"
                  src="https://banglesking.com/wp-content/uploads/2024/12/IMG_20241220_144118_982.webp"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>

              <div className="lg:py-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Our Story
                    </h2>
                    <p className="mt-4 text-gray-600">
                      At Welcome Shringar, we believe every wrist tells a story.
                      What started as a passion for timeless elegance has grown
                      into a curated collection of bangles that celebrate
                      tradition, style, and self-expression. Each piece is
                      crafted to add a sparkle to your everyday moments and make
                      special occasions unforgettable. From classic designs to
                      modern trends, we're here to help you shine one bangle at
                      a time.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Our Mission
                    </h2>
                    <p className="mt-4 text-gray-600">
                      To bring beauty, tradition, and style to every wrist by
                      offering exquisite bangles that blend timeless
                      craftsmanship with modern design, making every wearer feel
                      confident and celebrated.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      The Technology
                    </h2>
                    <p className="mt-4 text-gray-600">
                      We combine the art of handcrafted jewelry with advanced
                      e-commerce technology featuring secure payments,
                      personalized recommendations, and real time inventory
                      updates to give you a seamless shopping experience from
                      selection to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
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
                  <div className="px-6 pb-8 bg-gray-100 rounded-lg flow-root">
                    <div className="-mt-6">
                      <div className="relative w-24 h-24 mx-auto">
                        <img
                          className="absolute inset-0 object-cover w-full h-full rounded-full shadow-lg"
                          src={person.image}
                          alt={person.name}
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-center text-gray-900">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-base text-center text-gray-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="p-8 mt-24 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Welcome Shringar?
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
                Here's what makes us different
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Wide Range of Variety",
                  description:
                    "We have various kinds of Bangles made from materials such as Glass, Metal, Plastic etc",
                  icon: (
                    <svg
                      className="w-8 h-8 text-indigo-600"
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
                  title: "Top-notch Quality",
                  description:
                    "Our product arrives only from trusted manufacturing partners",
                  icon: (
                    <svg
                      className="w-8 h-8 text-indigo-600"
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
                  title: "20 years of operation",
                  description:
                    "We have served tens of thousands of customers over 20 years of running our business.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-indigo-600"
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
                  <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md bg-indigo-50">
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
    </>
  );
};

export default AboutUs;
