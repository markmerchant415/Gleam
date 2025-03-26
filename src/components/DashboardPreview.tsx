import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  PieChart, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  MoreHorizontal,
  ChevronRight,
  Bell,
  Settings,
  User,
  CreditCard,
  DollarSign,
  Search
} from 'lucide-react';

interface DashboardPreviewProps {
  darkMode: boolean;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg overflow-hidden`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">User Dashboard</h3>
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-1 rounded-md text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Demo Mode
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1 rounded-md text-sm">
              Sign Up
            </button>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
          {/* Dashboard Header */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 flex justify-between items-center border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 mr-3">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium User</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <Search className="h-4 w-4" />
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} relative`}>
                <Bell className="h-4 w-4" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <Settings className="h-4 w-4" />
              </button>
              <button 
                className={`md:hidden p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className={`${
              showMobileMenu ? 'block' : 'hidden'
            } md:block ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} md:w-48 border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <nav className="p-4">
                <ul className="space-y-2">
                  {[
                    { id: 'overview', name: 'Overview', icon: <BarChart className="h-4 w-4" /> },
                    { id: 'wallets', name: 'My Wallets', icon: <Wallet className="h-4 w-4" /> },
                    { id: 'transactions', name: 'Transactions', icon: <ArrowUpRight className="h-4 w-4" /> },
                    { id: 'exchange', name: 'Exchange', icon: <PieChart className="h-4 w-4" /> },
                    { id: 'cards', name: 'Cards', icon: <CreditCard className="h-4 w-4" /> },
                    { id: 'settings', name: 'Settings', icon: <Settings className="h-4 w-4" /> }
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveTab(item.id);
                          setShowMobileMenu(false);
                        }}
                        className={`w-full flex items-center px-3 py-2 rounded-md text-sm ${
                          activeTab === item.id
                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                            : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'}`
                        }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-4">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Balance Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Balance</div>
                        <DollarSign className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-2xl font-bold">$12,345.67</div>
                      <div className="flex items-center mt-2 text-sm text-green-500">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        +5.2% this month
                      </div>
                    </div>
                    
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending</div>
                        <Clock className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div className="text-2xl font-bold">$1,250.00</div>
                      <div className="flex items-center mt-2 text-sm text-yellow-500">
                        <Clock className="h-3 w-3 mr-1" />
                        2 transactions pending
                      </div>
                    </div>
                    
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Saved in Fees</div>
                        <DollarSign className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div className="text-2xl font-bold">$567.89</div>
                      <div className="flex items-center mt-2 text-sm text-indigo-500">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        Compared to banks
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Transactions */}
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">Recent Transactions</h4>
                      <button className="text-xs text-indigo-500 flex items-center">
                        View All <ChevronRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { 
                          type: 'send', 
                          name: 'To Maria L.', 
                          amount: '-$350.00', 
                          date: 'Today, 10:24 AM',
                          status: 'completed',
                          currency: 'USDC'
                        },
                        { 
                          type: 'receive', 
                          name: 'From Alex W.', 
                          amount: '+$1,200.00', 
                          date: 'Yesterday, 2:15 PM',
                          status: 'completed',
                          currency: 'BTC'
                        },
                        { 
                          type: 'send', 
                          name: 'To James K.', 
                          amount: '-$75.50', 
                          date: 'May 15, 9:30 AM',
                          status: 'pending',
                          currency: 'ETH'
                        }
                      ].map((transaction, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center justify-between p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-colors duration-150 cursor-pointer`}
                        >
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === 'send' 
                                ? 'bg-red-100 text-red-500' 
                                : 'bg-green-100 text-green-500'
                            }`}>
                              {transaction.type === 'send' ? (
                                <ArrowUpRight className="h-5 w-5" />
                              ) : (
                                <ArrowDownRight className="h-5 w-5" />
                              )}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{transaction.name}</div>
                              <div className="text-xs text-gray-500">{transaction.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${
                              transaction.type === 'send' ? 'text-red-500' : 'text-green-500'
                            }`}>
                              {transaction.amount}
                            </div>
                            <div className="text-xs flex items-center justify-end">
                              <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                                transaction.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                              }`}></span>
                              {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                              <span className="ml-1 text-gray-500">• {transaction.currency}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Wallets and Alerts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">My Wallets</h4>
                        <button className="text-xs text-indigo-500">Add Wallet</button>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { name: 'USDC Wallet', balance: '2,540.00', currency: 'USDC', change: 0 },
                          { name: 'Bitcoin Wallet', balance: '0.0345', currency: 'BTC', change: 2.4 },
                          { name: 'Ethereum Wallet', balance: '1.245', currency: 'ETH', change: -1.2 }
                        ].map((wallet, index) => (
                          <div 
                            key={index} 
                            className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}
                          >
                            <div className="flex justify-between">
                              <div className="font-medium">{wallet.name}</div>
                              <div className="font-semibold">{wallet.balance} {wallet.currency}</div>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <div className="text-xs text-gray-500">
                                {wallet.currency === 'USDC' ? 'Stablecoin' : wallet.currency === 'BTC' ? 'Bitcoin Network' : 'Ethereum Network'}
                              </div>
                              <div className={`text-xs px-2 py-0.5 rounded ${
                                wallet.change === 0 
                                  ? `${darkMode ? 'bg-gray-600' : 'bg-gray-200'} text-gray-500` 
                                  : wallet.change > 0 
                                    ? 'bg-green-100 text-green-500' 
                                    : 'bg-red-100 text-red-500'
                              }`}>
                                {wallet.change === 0 ? 'Stable' : wallet.change > 0 ? `+${wallet.change}%` : `${wallet.change}%`}
                              </div>
                            </div>
                            
                            <div className="flex mt-3 space-x-2">
                              <button className="text-xs bg-indigo-500 text-white px-2 py-1 rounded flex-1">
                                Send
                              </button>
                              <button className={`text-xs ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'} px-2 py-1 rounded flex-1`}>
                                Receive
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">Price Alerts</h4>
                        <button className="text-xs text-indigo-500">Add Alert</button>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { currency: 'BTC', condition: 'above', price: 65000, active: true },
                          { currency: 'ETH', condition: 'below', price: 3000, active: false }
                        ].map((alert, index) => (
                          <div 
                            key={index} 
                            className={`flex items-center justify-between p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}
                          >
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                alert.currency === 'BTC' 
                                  ? 'bg-orange-100 text-orange-500' 
                                  : 'bg-blue-100 text-blue-500'
                              }`}>
                                {alert.currency === 'BTC' ? '₿' : 'Ξ'}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium">{alert.currency} {alert.condition} ${alert.price.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">Created 2 days ago</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className={`w-8 h-4 rounded-full ${
                                alert.active 
                                  ? 'bg-green-500' 
                                  : `${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`
                              } relative transition-colors duration-200`}>
                                <div className={`absolute w-3 h-3 rounded-full bg-white top-0.5 ${
                                  alert.active ? 'right-0.5' : 'left-0.5'
                                } transition-all duration-200`}></div>
                              </div>
                              <button className="ml-2 text-gray-500">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          This is a preview of the user dashboard. Sign up to access the full platform.
        </p>
      </div>
    </div>
  );
};

export default DashboardPreview;