import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoPrice {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  icon: string;
}

interface CryptoTickerProps {
  darkMode: boolean;
}

const CryptoTicker: React.FC<CryptoTickerProps> = ({ darkMode }) => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      price: 85991.10, 
      change24h: 2.34,
      icon: '₿'
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      price: 2227.78, 
      change24h: -1.23,
      icon: 'Ξ'
    },
    { 
      name: 'USDT', 
      symbol: 'USDT', 
      price: 1.00, 
      change24h: 0.01,
      icon: '₮'
    },
    { 
      name: 'USDC', 
      symbol: 'USDC', 
      price: 1.00, 
      change24h: 0.00,
      icon: '$'
    },
    { 
      name: 'XRP', 
      symbol: 'XRP', 
      price: 2.19, 
      change24h: 3.45,
      icon: '✕'
    },
    { 
      name: 'BNB', 
      symbol: 'BNB', 
      price: 607.78, 
      change24h: 2.43,
      icon: 'BNB'
    },
    { 
      name: 'SOL', 
      symbol: 'SOL', 
      price: 143.25, 
      change24h: 1.99,
      icon: 'SOL'
    },
    { 
      name: 'ADA', 
      symbol: 'ADA', 
      price: 0.67, 
      change24h: 3.12,
      icon: '₳'
    },
    { 
      name: 'TRX', 
      symbol: 'TRX', 
      price: 0.23, 
      change24h: 1.5,
      icon: 'TRX'
    }
  ]);

  // Simulate price changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrices(prevPrices => 
        prevPrices.map(crypto => {
          // Random price change between -0.5% and +0.5%
          const priceChange = crypto.price * (Math.random() * 0.01 - 0.005);
          const newPrice = crypto.price + priceChange;
          
          // Random 24h change adjustment
          const changeAdjustment = (Math.random() * 0.2 - 0.1);
          const newChange = crypto.change24h + changeAdjustment;
          
          return {
            ...crypto,
            price: newPrice,
            change24h: newChange
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <div className="flex items-center py-2 animate-marquee">
        {cryptoPrices.map((crypto, index) => (
          <div 
            key={index} 
            className={`flex items-center px-6 py-2 ${index < cryptoPrices.length - 1 ? 'border-r' : ''} ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="mr-2 text-xl">{crypto.icon}</div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{crypto.symbol}</span>
                <span className={`text-sm ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                  {crypto.change24h >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(crypto.change24h).toFixed(2)}%
                </span>
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        ))}
        
        {/* Duplicate for seamless looping */}
        {cryptoPrices.map((crypto, index) => (
          <div 
            key={`dup-${index}`} 
            className={`flex items-center px-6 py-2 ${index < cryptoPrices.length - 1 ? 'border-r' : ''} ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="mr-2 text-xl">{crypto.icon}</div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{crypto.symbol}</span>
                <span className={`text-sm ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                  {crypto.change24h >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(crypto.change24h).toFixed(2)}%
                </span>
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;