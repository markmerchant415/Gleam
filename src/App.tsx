import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CountUp from './components/CountUp';
import CryptoTicker from './components/CryptoTicker';
import AnimatedStats from './components/AnimatedStats';
import FeeCalculator from './components/FeeCalculator';
import TransactionDemo from './components/TransactionDemo';
import SecurityExplainer from './components/SecurityExplainer';
import DashboardPreview from './components/DashboardPreview';
import BlockchainVisualization from './components/BlockchainVisualization';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  DollarSign, 
  Globe, 
  Repeat, 
  Smartphone,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Send,
  User,
  CreditCard,
  Lock,
  ShieldCheck,
  Eye,
  FileText,
  Zap
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Initialize dark mode based on user preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Update HTML class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // FAQ data
  const faqs = [
    {
      question: "What is a stablecoin, and why use it for payments?",
      answer: "Stablecoins are cryptocurrencies designed to maintain a stable value by being pegged to a reserve asset like the US dollar. They combine the benefits of cryptocurrency (fast, borderless transfers) with the stability of traditional currencies, making them ideal for payments and remittances."
    },
    {
      question: "Is it safe to use crypto for sending money across borders?",
      answer: "Yes, when using Gleam's platform, all transactions are secured by blockchain technology with military-grade encryption. Our compliance systems ensure transactions meet regulatory requirements in both sending and receiving countries."
    },
    {
      question: "What countries does this service support?",
      answer: "Gleam supports over 180 countries worldwide. Our service is available wherever cryptocurrency transactions are legal, with specific compliance measures for each region to ensure smooth, legal operations."
    },
    {
      question: "Are transactions reversible?",
      answer: "Blockchain transactions are generally irreversible by design. However, Gleam offers a pending period for large transfers and a customer support system to help with transaction issues. We recommend double-checking all recipient details before confirming transfers."
    },
    {
      question: "How are exchange rates determined?",
      answer: "Gleam uses real-time market rates from multiple major exchanges to ensure competitive pricing. Our rates are updated every 60 seconds, and we display all fees transparently before you confirm any transaction."
    }
  ];

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Particle Background */}
      <ParticleBackground darkMode={darkMode} />
      
      {/* Hero Section with enhanced animations */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Animated background shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/30 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-purple-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 bg-gradient-radial from-pink-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          </div>
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="url(#grid)" strokeWidth="0.2" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text-gradient">
                Send Money Anywhere, Instantly & Securely
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto lg:mx-0`}>
                Use cryptocurrency and stablecoins to send and receive money across borders in seconds—with low fees and no middlemen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-indigo-500/25 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Visual Element - 3D Globe with Transaction Lines */}
            <div className="lg:w-1/2 relative">
              <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-6 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform transition-all duration-500 hover:scale-105 animate-float`}>
                <div className="relative aspect-square max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Digital Globe" 
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-slow"></div>
                  
                  {/* Animated transaction lines */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"
                      style={{
                        top: `${20 + i * 12}%`,
                        left: `${10 + i * 5}%`,
                        transform: `rotate(${30 + i * 20}deg)`,
                        animation: `pulse ${2 + i * 0.5}s infinite alternate ${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                  
                  {/* Live transaction indicators */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* Live transaction ticker */}
                <div className={`mt-6 p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'} backdrop-blur-sm`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Live Transactions</span>
                    </div>
                    <div className="text-sm font-bold">
                      <CountUp 
                        end={1250789} 
                        start={1250000} 
                        duration={10000} 
                        prefix="$" 
                        suffix=" processed today"
                        decimals={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section with CountUp */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { value: 180, label: "Countries Supported", suffix: "+" },
              { value: 99.9, label: "Uptime Percentage", suffix: "%" },
              { value: 0.5, label: "Average Fee", suffix: "%" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Ticker */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <CryptoTicker darkMode={darkMode} />
        </div>
      </section>

      {/* Features Section with enhanced visuals */}
      <section id="features" className={`py-16 md:py-24 relative ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {Array.from({ length: 10 }).map((_, i) => (
                <path 
                  key={i}
                  d={`M${Math.random() * 100} ${Math.random() * 100} Q${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                  stroke="#8b5cf6"
                  strokeWidth="0.2"
                  fill="none"
                />
              ))}
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Why Choose Our Platform?
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Gleam combines the best of blockchain technology with user-friendly design to create the most efficient cross-border payment solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap size={24} />, 
                title: "Instant Transactions", 
                description: "Crypto payments settle within minutes, not days. Send money that arrives almost immediately." 
              },
              { 
                icon: <DollarSign size={24} />, 
                title: "Lower Fees", 
                description: "No banks or intermediaries—just blockchain efficiency. Save up to 90% on transaction fees." 
              },
              { 
                icon: <Shield size={24} />, 
                title: "High Security", 
                description: "Advanced encryption and blockchain immutability ensure your funds are always protected." 
              },
              { 
                icon: <Globe size={24} />, 
                title: "Truly Global", 
                description: "Send funds anywhere, regardless of banking infrastructure. Reach over 180 countries worldwide." 
              },
              { 
                icon: <Repeat size={24} />, 
                title: "Multi-Currency Support", 
                description: "Bitcoin, Ethereum, USDT, USDC, and more. Use the cryptocurrency that works best for you." 
              },
              { 
                icon: <Smartphone size={24} />, 
                title: "User-Friendly", 
                description: "No crypto expertise required—simple interface designed for everyone, from beginners to experts." 
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 inline-block mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <TransactionDemo darkMode={darkMode} />
        </div>
      </section>

      {/* How It Works Section with enhanced animations */}
      <section id="how-it-works" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Send Money Internationally in 3 Simple Steps
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Our platform makes sending money internationally as easy as sending a text message.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line between steps */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>
            
            {[
              { 
                icon: <User size={32} />, 
                title: "Create an Account", 
                description: "Sign up in minutes with secure KYC verification that protects your identity." 
              },
              { 
                icon: <CreditCard size={32} />, 
                title: "Deposit Crypto", 
                description: "Add funds using Bitcoin, Ethereum, or stablecoins through multiple payment methods." 
              },
              { 
                icon: <Send size={32} />, 
                title: "Send Instantly", 
                description: "Choose a recipient, enter details, and confirm. Money arrives in minutes, not days." 
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg relative z-10 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="text-center pt-6">
                  <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full p-4 inline-block mb-4">
                    <div className="text-indigo-500 dark:text-indigo-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-indigo-500/25">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Fee Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FeeCalculator darkMode={darkMode} />
        </div>
      </section>

      {/* Security Explainer Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SecurityExplainer darkMode={darkMode} />
        </div>
      </section>

      {/* Blockchain Visualization Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <BlockchainVisualization darkMode={darkMode} />
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <DashboardPreview darkMode={darkMode} />
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedStats darkMode={darkMode} />
        </div>
      </section>

      {/* Trust & Security Section with enhanced visuals */}
      <section id="security" className={`py-16 md:py-24 relative ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {Array.from({ length: 5 }).map((_, i) => (
                <path 
                  key={i}
                  d={`M${Math.random() * 100} ${Math.random() * 100} Q${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                  stroke="#8b5cf6"
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Security Visual */}
            <div className="lg:w-1/2">
              <div className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl transform transition-all duration-500 hover:scale-105`}>
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="w-32 h-32 text-indigo-500 animate-pulse-slow" />
                  </div>
                  
                  {/* Animated security elements */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#securityGradient)" strokeWidth="0.5" strokeDasharray="10 5" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#securityGradient)" strokeWidth="0.5" strokeDasharray="8 4" className="animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                      <defs>
                        <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Your Money, Your Control
              </h2>
              <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                At Gleam, security isn't just a feature—it's the foundation of everything we build. Our platform combines the latest in blockchain technology with traditional security measures to keep your funds and data safe.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <Lock size={24} />, 
                    title: "Decentralized & Transparent", 
                    description: "No hidden fees or banking delays. All transactions are recorded on the blockchain for complete transparency." 
                  },
                  { 
                    icon: <FileText size={24} />, 
                    title: "Regulatory Compliance", 
                    description: "Adheres to local crypto regulations for safety. We're compliant in all 180+ countries we operate in." 
                  },
                  { 
                    icon: <Shield size={24} />, 
                    title: "Military-Grade Encryption", 
                    description: "Protects funds and user data with the same encryption standards used by leading financial institutions." 
                  },
                  { 
                    icon: <Eye size={24} />, 
                    title: "Non-Custodial Wallet Option", 
                    description: "Users can retain full control of funds with our non-custodial wallet options for maximum security." 
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-4 rounded-lg ${darkMode ? 'bg-gray-900/50 hover:bg-gray-900/80' : 'bg-white/50 hover:bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group`}
                  >
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 mr-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with enhanced visuals */}
      <section id="pricing" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Save More on Every Transaction
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Compare our fees and speeds with traditional methods and see why thousands choose Gleam for international transfers.
            </p>
          </div>
          
          {/* Pricing Tabs */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              {['Small Transfers', 'Medium Transfers', 'Large Transfers'].map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 rounded-md transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md' 
                      : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Pricing Comparison Table */}
          <div className={`overflow-hidden rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
            <div className={`${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md overflow-x-auto`}>
              <table className="w-full">
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-center">Fee</th>
                    <th className="px-6 py-4 text-center">Speed</th>
                    <th className="px-6 py-4 text-center">FX Rate</th>
                    <th className="px-6 py-4 text-center">Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className={`${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-colors duration-150`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 mr-3">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold">Gleam</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Crypto Platform</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-green-500">0.5-1%</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1 text-green-500" />
                        <span>Minutes</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">Market Rate</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className={`${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-colors duration-150`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full p-2 mr-3`}>
                          <DollarSign className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-semibold">Traditional Banks</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Wire Transfers</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-red-500">3-5%</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1 text-red-500" />
                        <span>2-5 Days</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">+2-3% Markup</td>
                    <td className="px-6 py-4 text-center">Varies by Bank</td>
                  </tr>
                  <tr className={`${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-colors duration-150`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full p-2 mr-3`}>
                          <Send className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-semibold">Money Transfer Services</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>PayPal, Western Union, etc.</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-red-500">3-7%</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                        <span>Hours - Days</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">+3-4% Markup</td>
                    <td className="px-6 py-4 text-center">$2,000-$10,000/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-indigo-500/25">
              Sign Up & Start Saving
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section with enhanced animations */}
      <section id="faq" className={`py-16 md:py-24 relative ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Got Questions? We've Got Answers
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Find answers to the most common questions about our platform and cryptocurrency payments.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`mb-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'shadow-md' : ''
                }`}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    darkMode 
                      ? activeFaq === index ? 'bg-gray-900' : 'bg-gray-900/50' 
                      : activeFaq === index ? 'bg-white' : 'bg-white/50'
                  } backdrop-blur-sm transition-colors duration-300`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  ) : (
                    <ChevronDown className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-6 py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced visuals */}
      <section id="contact" className="py-16 md:py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/30 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-purple-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-md rounded-2xl p-8 md:p-12 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Start Sending Crypto Payments Today
              </h2>
              <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Join thousands of users who are already saving time and money with Gleam's cross-border payment platform.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="w-full md:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-indigo-500/25 flex items-center justify-center">
                Create an Account <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className={`w-full md:w-auto ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center`}>
                Contact Support
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { label: "24/7 Support", value: "Always Available" },
                  { label: "Satisfaction Rate", value: "99.8%" },
                  { label: "Money-Back Guarantee", value: "30 Days" }
                ].map((item, index) => (
                  <div key={index}>
                    <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.label}</p>
                    <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;