import React, { useState, useEffect } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const PricingHeader = () => {
  return (
    <div className="text-center mb-6 md:mb-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="/images/mainLogo.png"
            alt="Logo"
            className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 object-contain"
          />
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
          Simple &{" "}
        </span>
        <span className="italic bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          transparent
        </span>{" "}
        <span className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pricing
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto">
        No hidden fees. Cancel anytime.
      </p>
    </div>
  );
};

const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-start space-x-3 mb-2">
      <img
        src="/images/checkcircleblue.png"
        alt="check"
        className="w-[18px] h-[18px]"
      />
      <span className="text-white text-sm">{text}</span>
    </div>
  );
};

const PricingCard = () => {
  const features = [
    "Unlimited Connected Broker Accounts",
    "Unlimited Paper Accounts",
    "Unlimited Automated Trading on Paper Accounts",
    "Unlimited ETF Strategy Creation / Backtesting",
  ];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#0a0f1f] to-[#0e1c34] rounded-2xl p-6 md:p-10 text-white mx-auto shadow-2xl flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8 max-w-6xl">
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Free Plan</h2>
        <p className="text-gray-300 text-sm mb-4">Create a Surmount account</p>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">$0</span>
          <span className="text-gray-400 ml-2">/ month</span>
        </div>
        <button className="bg-white text-blue-700 font-semibold py-3 px-16 rounded-full hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      <div className="md:w-1/2">
        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
          Surmount is an AI-powered investment platform that lets users
          automate, personalize, and execute sophisticated portfolios no coding
          required using professional-grade strategies and real-time data-driven
          intelligence.
        </p>
        <div>
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingCardReusable = ({
  planName,
  price,
  description,
  features,
  buttonText,
  bgGradient,
}) => {
  return (
    <div className="transform hover:scale-105 transition-all duration-300 w-full max-w-sm">
      <div
        className={`relative ${bgGradient} rounded-xl p-6 md:p-8 text-white h-full flex flex-col overflow-hidden shadow-xl`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white opacity-90">
              {planName}
            </h3>
            <div className="flex items-baseline mb-1">
              <span className="text-3xl md:text-4xl font-bold text-white">
                ${price}
              </span>
              <span className="text-base text-white opacity-80 ml-2">
                / month
              </span>
            </div>
          </div>

          {description && (
            <div className="mb-6">
              <p className="text-sm font-medium text-white opacity-90">
                {description}
              </p>
            </div>
          )}

          <div className="mb-8 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 mb-2.5">
                <div className="flex-shrink-0 mt-0.5">
                  <img
                    src="/images/checkcirclegreen.png"
                    alt="Check"
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-white text-sm leading-relaxed font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We're proud to be at the forefront of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                intelligent, automated investing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              trusted by both experts and everyday investors.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/images/frame.png"
                alt="Awards and Certifications"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] min-w-[280px] md:min-w-[300px] max-w-[320px] flex-shrink-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transition: "all 0.6s ease-out" }}
    >
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
          <img
            src="/images/image.png"
            alt={testimonial.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {testimonial.text}
      </p>
      <div>
        <p className="text-blue-600 text-xs font-medium mb-2">
          Favourite Strategies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {testimonial.strategies.map((strategy, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded text-xs"
            >
              {strategy}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedRow = ({ testimonials, direction = "left", speed = 20 }) => {
  return (
    <div className="overflow-hidden w-full mb-10">
      <div
        className="flex gap-6 animate-scroll"
        style={{
          animation: `scroll${
            direction === "left" ? "Left" : "Right"
          } ${speed}s linear infinite`,
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            delay={index * 100}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

const FAQHeader = () => (
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Frequently asked questions
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
      Explore our frequently asked questions to learn more about Surmount
      features, security, integration capabilities, and more.
    </p>
  </div>
);

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  hasBlueBar = false,
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 px-10">
      <button
        onClick={onToggle}
        className="w-full py-4 md:py-6 px-4 md:px-0 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 group"
      >
        <div className="flex items-center w-full">
          <div
            className={`w-1 h-4 md:h-6 ${
              hasBlueBar ? "bg-blue-500" : "bg-transparent"
            } mr-3 md:mr-4 flex-shrink-0`}
          ></div>
          <span className="text-gray-800 font-medium text-base md:text-lg flex-grow pr-4">
            {question}
          </span>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="w-4 md:w-5 h-4 md:h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            ) : (
              <ChevronDown className="w-4 md:w-5 h-4 md:h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            )}
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 md:pb-6 pl-4 md:pl-5 pr-4">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const SurmountLandingPage = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(0);

  const pricingPlans = [
    {
      planName: "Scale",
      price: "5",
      description: "Scale plan includes",
      features: [
        "Connect + automate external accounts",
        "Invest in prebuilt strategies",
        "Personalized recommendations",
      ],
      buttonText: "Get Started",
      bgGradient:
        "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800",
    },
    {
      planName: "Grow",
      price: "10",
      description: "Everything in Scale plus...",
      features: [
        "Personalized AI advisor",
        "Custom strategies",
        "+ Crypto & Options",
        "Advanced market research",
      ],
      buttonText: "Get Started",
      bgGradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800",
    },
    {
      planName: "Build",
      price: "30",
      description: "Everything in Grow plus...",
      features: [
        "Full access to strategy creation tools",
        "Full access to 20,000+ datapoints",
        "Strategy sharing",
        "All asset classes",
      ],
      buttonText: "Contact Sales",
      bgGradient: "bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800",
    },
  ];

  const topRowTestimonials = [
    {
      id: 1,
      name: "David Cohe",
      role: "Former gold trader",
      text:
        "Surmount is truly changing the game, finally easy to use. Logan and the team are doing great work to make wealth building more accessible to everyone.",
      strategies: ["Strategy 1", "Strategy 2"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Investment Advisor",
      text:
        "The product is awesome! I have only ever known buy and hold to be my strategy and Surmount has opened up an entire new world of investing for me.",
      strategies: ["Favourite Strategies", "Strategy 1", "Strategy 2"],
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Portfolio Manager",
      text:
        "Surmount is truly changing the game, finally easy to use. Logan and the team are doing great work to make wealth building more accessible to everyone.",
      strategies: ["Favourite Strategies", "Strategy 1"],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Financial Analyst",
      text:
        "As a former quant, I was skeptical but the product has grown from family offices to everyday use cases, and I found real value.",
      strategies: ["Favourite Strategies", "Strategy 2"],
    },
  ];

  const bottomRowTestimonials = [
    {
      id: 5,
      name: "Robert Kim",
      role: "Hedge Fund Manager",
      text:
        "The AI-powered recommendations have completely transformed my investment approach. Returns are up 40% since I started using Surmount.",
      strategies: ["AI Strategies", "Growth Strategy"],
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Retail Investor",
      text:
        "Finally, a platform that makes sophisticated investing accessible to everyone. The user interface is intuitive and results speak for themselves.",
      strategies: ["Basic Strategy", "Conservative"],
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Day Trader",
      text:
        "Surmount's real-time market intelligence has given me an edge I never had before. The automated trading features are game-changing.",
      strategies: ["Day Trading", "Momentum"],
    },
    {
      id: 8,
      name: "Anna Martinez",
      role: "Investment Banker",
      text:
        "The backtesting capabilities are incredibly detailed. I can now validate my strategies with confidence before deploying capital.",
      strategies: ["Backtesting", "Risk Management"],
    },
  ];

  const faqData = [
    {
      question: "What is Surmount and how is it different from a robo-advisor?",
      answer:
        "Surmount is an automation layer that connects to the brokerage accounts you already use and executes fully-tested investment strategies on your behalf. Unlike traditional robo-advisors that confine you to a single custodian and a one-size-fits-all model portfolio, Surmount lets you deploy data-driven strategies—created by our team, by professional quants, or by yourself—across any supported broker.",
    },
    {
      question: "Why does Surmount exist?",
      answer:
        "Surmount exists to democratize sophisticated investment strategies that were previously only available to institutional investors and high-net-worth individuals. We believe everyone should have access to professional-grade portfolio management tools and data-driven investment approaches.",
    },
    {
      question: "Why would someone share a profitable strategy?",
      answer:
        "Strategy creators share profitable strategies for several reasons: to build their reputation as skilled investors, to earn revenue through strategy subscriptions, to contribute to the investing community, and to diversify their own income streams.",
    },
    {
      question: "How does Surmount ensure the security of my investments?",
      answer:
        "Surmount never holds your funds directly. We connect to your existing brokerage accounts through secure, read-only APIs initially, and only execute trades you've pre-approved. Your money always stays with your chosen broker, maintaining the same SIPC protection you already have.",
    },
  ];

  const handleFAQToggle = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="w-full">
          <PricingHeader />
          <div className="flex justify-center">
            <PricingCard />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Scale your investment strategy with the right tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCardReusable
                key={index}
                planName={plan.planName}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                bgGradient={plan.bgGradient}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 overflow-hidden">
        <HeroSection />
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            What our users are saying
          </h2>
        </div>

        <AnimatedRow
          testimonials={topRowTestimonials}
          direction="left"
          speed={25}
        />

        <AnimatedRow
          testimonials={bottomRowTestimonials}
          direction="right"
          speed={30}
        />
      </section>
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQHeader />

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onToggle={() => handleFAQToggle(index)}
                hasBlueBar={openFAQIndex === index}
              />
            ))}
          </div>
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="w-12 md:w-16 h-1 bg-blue-500 rounded"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurmountLandingPage;