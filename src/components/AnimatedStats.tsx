import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface AnimatedStatsProps {
  darkMode: boolean;
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Generate random data for charts
  const generateChartData = (months: number, baseValue: number, volatility: number) => {
    const labels = [];
    const data = [];
    
    let currentValue = baseValue;
    
    for (let i = 0; i < months; i++) {
      // Generate month label (go back in time from current month)
      const date = new Date();
      date.setMonth(date.getMonth() - (months - 1 - i));
      labels.push(date.toLocaleString('default', { month: 'short' }));
      
      // Generate random change with trend
      const change = (Math.random() - 0.3) * volatility; // Bias toward growth
      currentValue = Math.max(0, currentValue + change);
      data.push(currentValue);
    }
    
    return { labels, data };
  };
  
  // Generate chart data for different metrics
  const transactionData = generateChartData(12, 5000000, 500000);
  const userGrowthData = generateChartData(12, 50000, 8000);
  const savingsData = generateChartData(12, 200000, 30000);
  
  // Chart options
  const getChartOptions = (title: string) => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: title,
          color: darkMode ? '#e5e7eb' : '#1f2937',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          titleColor: darkMode ? '#e5e7eb' : '#1f2937',
          bodyColor: darkMode ? '#e5e7eb' : '#1f2937',
          borderColor: darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.3)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
          },
          ticks: {
            color: darkMode ? '#9ca3af' : '#4b5563'
          }
        },
        y: {
          grid: {
            color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
          },
          ticks: {
            color: darkMode ? '#9ca3af' : '#4b5563',
            callback: function(value: any) {
              if (value >= 1000000) {
                return '$' + (value / 1000000).toFixed(1) + 'M';
              } else if (value >= 1000) {
                return '$' + (value / 1000).toFixed(1) + 'K';
              }
              return '$' + value;
            }
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 2,
          hoverRadius: 5
        }
      }
    };
  };
  
  // Chart data
  const chartData = [
    {
      title: "Monthly Transaction Volume",
      data: {
        labels: transactionData.labels,
        datasets: [
          {
            label: 'Transaction Volume',
            data: transactionData.data,
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            fill: true
          }
        ]
      },
      options: getChartOptions('Monthly Transaction Volume'),
      stats: [
        { label: "Total Volume", value: 250000000, prefix: "$", suffix: "", decimals: 0 },
        { label: "Average Transaction", value: 1250, prefix: "$", suffix: "", decimals: 0 },
        { label: "Growth Rate", value: 15.7, prefix: "", suffix: "%", decimals: 1 }
      ]
    },
    {
      title: "User Growth",
      data: {
        labels: userGrowthData.labels,
        datasets: [
          {
            label: 'Active Users',
            data: userGrowthData.data,
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            fill: true
          }
        ]
      },
      options: getChartOptions('Monthly Active Users'),
      stats: [
        { label: "Total Users", value: 125000, prefix: "", suffix: "", decimals: 0 },
        { label: "New Users (Monthly)", value: 12500, prefix: "", suffix: "", decimals: 0 },
        { label: "Retention Rate", value: 92.3, prefix: "", suffix: "%", decimals: 1 }
      ]
    },
    {
      title: "Customer Savings",
      data: {
        labels: savingsData.labels,
        datasets: [
          {
            label: 'Total Savings',
            data: savingsData.data,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true
          }
        ]
      },
      options: getChartOptions('Monthly Customer Savings'),
      stats: [
        { label: "Total Saved", value: 12500000, prefix: "$", suffix: "", decimals: 0 },
        { label: "Average Savings", value: 105, prefix: "$", suffix: "/transfer", decimals: 0 },
        { label: "Savings Rate", value: 78.5, prefix: "", suffix: "%", decimals: 1 }
      ]
    }
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <h3 className="text-xl font-semibold mb-4">Real-Time Platform Metrics</h3>
      
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          {chartData.map((chart, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 rounded-md transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md' 
                  : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
              }`}
            >
              {chart.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {chartData[activeTab].stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 shadow-sm`}
          >
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{stat.label}</p>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <CountUp 
                end={stat.value} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
                decimals={stat.decimals}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Chart */}
      <motion.div
        key={`chart-${activeTab}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-4 shadow-sm h-64`}
      >
        <Line 
          data={chartData[activeTab].data} 
          options={chartData[activeTab].options}
        />
      </motion.div>
      
      {/* Live Stats Ticker */}
      <div className={`mt-6 p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'} backdrop-blur-sm`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Live Platform Stats</span>
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
  );
};

export default AnimatedStats;