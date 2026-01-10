import React from "react";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-full px-4 py-12 bg-gray-200 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
              We'd love to hear from you. Get in touch with us!
            </p>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden bg-white rounded-lg shadow-xl ">
                <div className="px-4 py-5 sm:p-6 ">
                  <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Technical Support">
                            Technical Support
                          </option>
                          <option value="Billing">Billing</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-5 space-y-8">
            <div className="p-6 overflow-hidden bg-white rounded-lg shadow-xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Butwal-4 Amarpath</p>
                    <p className="text-gray-600">Below Jyoti Bikas Bank</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+977 9800740019</p>
                    <p className="text-gray-600">+977 9867115832</p>
                    <p className="text-gray-600">071 537779</p>
                    <p className="text-gray-600">Opens Everyday, 8am-8pm NPT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">murarigupta28598@gmail.com</p>
                    <p className="text-gray-600">welcomeshreengar@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 mt-16 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Visit Our Office
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
                Feel free to drop by our shop
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.6534112084386!2d83.46455634733113!3d27.704455817138683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996870010eb6457%3A0x8dee9cfce50e29dd!2sButwal%20hattbazzar%20line!5e1!3m2!1sen!2sus!4v1766225505963!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MERN-Kart Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
