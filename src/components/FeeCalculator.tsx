import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, CreditCard, TrendingDown } from 'lucide-react';

interface FeeCalculatorProps {
  darkMode: boolean;
}

const FeeCalculator: React.FC<FeeCalculatorProps> = ({ darkMode }) => {
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [transferMethod, setTransferMethod] = useState('gleam');
  const [showResults, setShowResults] = useState(false);
  
  // Fee rates for different methods
  const feeRates = {
    gleam: 0.005, // 0.5%
    bank: 0.045, // 4.5%
    paypal: 0.055, // 5.5%
    westernunion: 0.065 // 6.5%
  };
  
  // Exchange rates (simplified for demo)
  const exchangeRates = {
    'USD-EUR': 0.92,
    'USD-GBP': 0.78,
    'USD-JPY': 150.25,
    'USD-AUD': 1.52,
    'EUR-USD': 1.09,
    'EUR-GBP': 0.85,
    'EUR-JPY': 163.50,
    'EUR-AUD': 1.65,
    'GBP-USD': 1.28,
    'GBP-EUR': 1.18,
    'GBP-JPY': 192.75,
    'GBP-AUD': 1.95
  };
  
  // Calculate results
  const getExchangeRate = () => {
    const key = `${fromCurrency}-${toCurrency}`;
    return exchangeRates[key] || 1;
  };
  
  const getFee = (method) => {
    return parseFloat(amount) * feeRates[method];
  };
  
  const getReceivedAmount = (method) => {
    const exchangeRate = getExchangeRate();
    const fee = getFee(method);
    return (parseFloat(amount) - fee) * exchangeRate;
  };
  
  const getSavings = () => {
    const gleamFee = getFee('gleam');
    const comparisonFee = getFee(transferMethod === 'gleam' ? 'bank' : transferMethod);
    return comparisonFee - gleamFee;
  };
  
  const getDeliveryTime = (method) => {
    switch(method) {
      case 'gleam': return '2-10 minutes';
      case 'bank': return '2-5 business days';
      case 'paypal': return '1-3 business days';
      case 'westernunion': return '1-2 business days';
      default: return 'Unknown';
    }
  };
  
  // Handle calculate button click
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  // Reset when inputs change
  useEffect(() => {
    if (showResults) setShowResults(false);
  }, [amount, fromCurrency, toCurrency, transferMethod]);

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      {/* Calculator Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Amount to Send
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
                placeholder="Enter amount"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                From Currency
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className={`block w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                To Currency
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className={`block w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="USD">USD - US Dollar</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Compare With
            </label>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-2 rounded-md`}>
              {[
                { id: 'gleam', name: 'Gleam', icon: <CreditCard className="h-4 w-4" /> },
                { id: 'bank', name: 'Bank', icon: <DollarSign className="h-4 w-4" /> },
                { id: 'paypal', name: 'PayPal', icon: <CreditCard className="h-4 w-4" /> },
                { id: 'westernunion', name: 'Western Union', icon: <CreditCard className="h-4 w-4" /> }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setTransferMethod(method.id)}
                  className={`flex items-center justify-center p-2 rounded-md text-sm ${
                    transferMethod === method.id
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                      : darkMode ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{method.icon}</span>
                  {method.name}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
          >
            Calculate Savings <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Results Section */}
        <div>
          {showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4`}
            >
              <h3 className="text-lg font-semibold mb-4">Transfer Comparison</h3>
              
              <div className="space-y-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Gleam</div>
                    <div className="text-green-500 flex items-center">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      Lowest Fee
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Fee</div>
                      <div className="font-semibold">{getFee('gleam').toFixed(2)} {fromCurrency}</div>
                      <div className="text-xs text-green-500">Only 0.5%</div>
                    </div>
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Recipient Gets</div>
                      <div className="font-semibold">{getReceivedAmount('gleam').toFixed(2)} {toCurrency}</div>
                    </div>
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Delivery</div>
                      <div className="font-semibold">2-10 minutes</div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="font-medium mb-2">{
                    transferMethod === 'bank' ? 'Traditional Bank' :
                    transferMethod === 'paypal' ? 'PayPal' :
                    transferMethod === 'westernunion' ? 'Western Union' : 'Comparison'
                  }</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Fee</div>
                      <div className="font-semibold text-red-500">{getFee(transferMethod).toFixed(2)} {fromCurrency}</div>
                      <div className="text-xs text-red-500">{(feeRates[transferMethod] * 100).toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Recipient Gets</div>
                      <div className="font-semibold">{getReceivedAmount(transferMethod).toFixed(2)} {toCurrency}</div>
                    </div>
                    <div>
                      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Delivery</div>
                      <div className="font-semibold">{getDeliveryTime(transferMethod)}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30`}>
                  <div className="text-center">
                    <div className="text-lg font-semibold mb-1">Your Savings with Gleam</div>
                    <div className="text-2xl font-bold text-green-500">
                      {getSavings().toFixed(2)} {fromCurrency}
                    </div>
                    <div className="text-sm mt-1">
                      Plus faster delivery and better exchange rates!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className={`h-full flex flex-col items-center justify-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'} rounded-lg p-6 text-center`}>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Savings Illustration" 
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">See How Much You Can Save</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Enter your transfer details and compare Gleam with traditional methods.
              </p>
              <div className="flex items-center text-sm text-green-500">
                <TrendingDown className="h-4 w-4 mr-1" />
                Average savings of 80% on fees
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;