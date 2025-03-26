import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, Check, Clock } from 'lucide-react';

interface TransactionDemoProps {
  darkMode: boolean;
}

const TransactionDemo: React.FC<TransactionDemoProps> = ({ darkMode }) => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState('1000');
  const [currency, setCurrency] = useState('USD');
  const [recipient, setRecipient] = useState('Japan');
  const [isPlaying, setIsPlaying] = useState(false);

  // Calculate fees and exchange rates
  const fee = parseFloat(amount) * 0.005; // 0.5% fee
  const exchangeRate = currency === 'USD' ? 150.25 : currency === 'EUR' ? 165.75 : 120.50; // JPY exchange rates
  const recipientAmount = (parseFloat(amount) - fee) * exchangeRate;

  // Auto-play animation
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % 5);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setStep(0);
    }
  };

  // Step descriptions
  const steps = [
    { title: "Initiate Transfer", description: "User deposits funds and specifies recipient" },
    { title: "Convert to Stablecoin", description: "Funds are converted to USDC on the blockchain" },
    { title: "Blockchain Transfer", description: "USDC travels across the blockchain network" },
    { title: "Local Conversion", description: "USDC is converted to local currency" },
    { title: "Recipient Receives", description: "Funds arrive in recipient's account" }
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <h3 className="text-xl font-semibold mb-4">See How Cross-Border Payments Work</h3>
      
      {/* Transaction Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
            Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              className={`block w-full pl-10 pr-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </div>
        </div>
        
        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className={`block w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-indigo-500 focus:border-indigo-500`}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
        </div>
        
        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
            Recipient Country
          </label>
          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className={`block w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-indigo-500 focus:border-indigo-500`}
          >
            <option value="Japan">Japan (JPY)</option>
            <option value="Mexico">Mexico (MXN)</option>
            <option value="India">India (INR)</option>
            <option value="Nigeria">Nigeria (NGN)</option>
          </select>
        </div>
      </div>
      
      {/* Transaction Animation */}
      <div className="relative h-32 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full relative">
            {[0, 1, 2, 3, 4].map((dotStep) => (
              <div 
                key={dotStep}
                className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center ${
                  dotStep <= step 
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' 
                    : `${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                }`}
                style={{ left: `${dotStep * 25}%` }}
              >
                {dotStep < step ? (
                  <Check className="h-3 w-3" />
                ) : dotStep === step ? (
                  <Clock className="h-3 w-3 animate-pulse" />
                ) : (
                  <span className="text-xs">{dotStep + 1}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated coin */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
          initial={{ left: '0%' }}
          animate={{ left: `${step * 25}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {step < 2 ? currency : step < 4 ? "USDC" : recipient === "Japan" ? "JPY" : recipient === "Mexico" ? "MXN" : recipient === "India" ? "INR" : "NGN"}
        </motion.div>
      </div>
      
      {/* Step description */}
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-6`}>
        <h4 className="font-semibold">{steps[step].title}</h4>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{steps[step].description}</p>
      </div>
      
      {/* Transaction details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400">You Send</p>
          <p className="text-lg font-semibold">{currency} {parseFloat(amount).toLocaleString()}</p>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400">Fee</p>
          <p className="text-lg font-semibold">{currency} {fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className="text-xs text-green-500">Only 0.5% (vs 3-5% traditional)</p>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400">Recipient Gets</p>
          <p className="text-lg font-semibold">
            {recipient === "Japan" ? "¥" : recipient === "Mexico" ? "MX$" : recipient === "India" ? "₹" : "₦"}
            {recipientAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-between">
        <div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Clock className="inline h-4 w-4 mr-1" />
            Estimated delivery: <span className="font-semibold">2-10 minutes</span>
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0 || isPlaying}
            className={`px-3 py-1 rounded ${
              step === 0 || isPlaying
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Prev
          </button>
          <button
            onClick={togglePlay}
            className="px-3 py-1 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => setStep(Math.min(4, step + 1))}
            disabled={step === 4 || isPlaying}
            className={`px-3 py-1 rounded ${
              step === 4 || isPlaying
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDemo;