import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityExplainerProps {
  darkMode: boolean;
}

const SecurityExplainer: React.FC<SecurityExplainerProps> = ({ darkMode }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  const securitySteps = [
    {
      title: "Military-Grade Encryption",
      description: "All data is encrypted using AES-256, the same standard used by governments and financial institutions worldwide.",
      icon: <Lock className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Blockchain Immutability",
      description: "Once recorded on the blockchain, transaction records cannot be altered or deleted, creating a permanent and tamper-proof record.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Private Key Security",
      description: "Your funds are secured by cryptographic private keys that only you control, preventing unauthorized access.",
      icon: <Key className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Regulatory Compliance",
      description: "We adhere to KYC/AML regulations in all operating jurisdictions, ensuring legal compliance while protecting your privacy.",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600"
    }
  ];

  // Comparison data
  const securityComparison = [
    {
      feature: "End-to-End Encryption",
      traditional: false,
      gleam: true
    },
    {
      feature: "Immutable Transaction Records",
      traditional: false,
      gleam: true
    },
    {
      feature: "No Single Point of Failure",
      traditional: false,
      gleam: true
    },
    {
      feature: "User Controls Private Keys",
      traditional: false,
      gleam: true
    },
    {
      feature: "Transparent Fee Structure",
      traditional: false,
      gleam: true
    },
    {
      feature: "Regulatory Compliance",
      traditional: true,
      gleam: true
    }
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Shield className="mr-2 h-5 w-5" />
        Security Explained
      </h3>
      
      {/* Security Steps Animation */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {securitySteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative flex-1 py-2 transition-all duration-300 ${
                activeStep === index 
                  ? 'text-white' 
                  : darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {activeStep === index && (
                <motion.div
                  className={`absolute inset-0 rounded-md bg-gradient-to-r ${step.color}`}
                  layoutId="activeStep"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-sm font-medium">
                {index + 1}. {step.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
        
        <div className={`p-6 rounded-lg relative overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="flex items-start">
            <div className={`p-3 rounded-full mr-4 bg-gradient-to-r ${securitySteps[activeStep].color}`}>
              <div className="text-white">
                {securitySteps[activeStep].icon}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">{securitySteps[activeStep].title}</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {securitySteps[activeStep].description}
              </p>
            </div>
          </div>
          
          {/* Animated Security Visualization */}
          <div className="mt-6 h-32 relative">
            {activeStep === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-xl">🔒</span>
                    </div>
                    
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 flex-grow mx-2"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-xl">🔒</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-indigo-500"
                        initial={{ 
                          x: 0, 
                          y: 0,
                          opacity: 1 
                        }}
                        animate={{ 
                          x: Math.cos(i * Math.PI / 4) * 60, 
                          y: Math.sin(i * Math.PI / 4) * 30,
                          opacity: 0
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
            
            {activeStep === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="flex justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-16 h-16 mx-1 rounded-md flex items-center justify-center ${
                          darkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                      >
                        <div className="text-xs font-mono">
                          Block {i+1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-0 right-0 flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (i+1) * 0.2, duration: 0.3 }}
                      >
                        <div className="w-8 h-0.5 bg-indigo-500 mx-1" style={{ marginLeft: `${(i+1) * 68}px` }}></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeStep === 2 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="flex items-center justify-center">
                    <motion.div
                      className={`w-20 h-20 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center`}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0px rgba(99, 102, 241, 0.4)",
                          "0 0 0 20px rgba(99, 102, 241, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Key className="h-8 w-8 text-indigo-500" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                          rotate: i * 30,
                          opacity: 0
                        }}
                        animate={{ 
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <div className="w-1 h-12 bg-gradient-to-t from-indigo-500 to-transparent transform -translate-y-16"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeStep === 3 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className={`w-16 h-16 rounded-md ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-xl">👤</span>
                    </motion.div>
                    
                    <motion.div
                      className="flex-grow mx-4 h-0.5 bg-gradient-to-r from-indigo-500 to-green-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    />
                    
                    <motion.div
                      className={`w-16 h-16 rounded-md ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Shield className="h-8 w-8 text-green-500" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="absolute top-full left-0 right-0 text-center mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Verified & Compliant
                    </span>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Security Comparison Table */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-3">Traditional vs. Gleam Security</h4>
        <div className={`overflow-hidden rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className="px-4 py-2 text-left">Security Feature</th>
                <th className="px-4 py-2 text-center">Traditional Banks</th>
                <th className="px-4 py-2 text-center">Gleam Platform</th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {securityComparison.map((item, index) => (
                <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-150`}>
                  <td className="px-4 py-3">{item.feature}</td>
                  <td className="px-4 py-3 text-center">
                    {item.traditional ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.gleam ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Security Alert */}
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'} border ${darkMode ? 'border-amber-800/30' : 'border-amber-200'} flex items-start`}>
        <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h5 className="font-semibold text-amber-500">Security Best Practices</h5>
          <p className={`text-sm ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
            Always verify recipient addresses before sending funds. Enable two-factor authentication for your account. Never share your private keys or recovery phrases with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityExplainer;