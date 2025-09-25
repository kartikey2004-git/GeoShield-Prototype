import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Manu Arora",
      handle: "@mannupaaji",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      text: "great UX, love it",
      date: "AUGUST 18, 2025",
      verified: true,
    },
    {
      id: 2,
      name: "Gruz",
      handle: "@GruzGruz",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      text: "damn the UI",
      date: "JULY 18, 2025",
      verified: true,
    },
    {
      id: 3,
      name: "Divy",
      handle: "@11_darv",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      text: "Looks good brother. Surely gonna use it! Loved the ui 🔥",
      date: "JULY 18, 2025",
      verified: false,
    },
    {
      id: 4,
      name: "BEEJ",
      handle: "@oodanny",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      text: "well built",
      date: "JULY 18, 2025",
      verified: true,
    },
    {
      id: 8,
      name: "Aditya A.",
      handle: "@iamAdityaAriana",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop&crop=face",
      text: "It's so freakin cool",
      date: "JULY 18, 2025",
      verified: true,
    },
    {
      id: 9,
      name: "disha",
      handle: "@madishaahoon",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      text: "Very clean very helpful !!! Thank youuu",
      date: "JULY 19, 2025",
      verified: true,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-3xl mb-2 text-gray-900">
            What People are Saying
          </h1>
          <p className="text-gray-700 font-medium text-base md:text-xs leading-tight">
            Real feedback from real developers
            <br />
            see what the community is saying about GeoShield.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm transition-colors duration-200 hover:shadow-md"
            >
              {/* Header with avatar and user info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-gray-900">
                        {testimonial.name}
                      </span>
                      {testimonial.verified && (
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {testimonial.handle}
                    </span>
                  </div>
                </div>

                {/* Three dots menu */}
                <button className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-900 text-base leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Date */}
              <p className="text-gray-500 text-xs font-medium">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-8 text-lg">
            Join hundreds of tourists already using GeoShield
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
