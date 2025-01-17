import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, Bell, Shield, HelpCircle, LogOut, Trophy, Medal, Star, 
  Target, Zap, ChevronRight, Edit, Calendar, ArrowLeft
} from 'lucide-react';
import { motion } from 'framer-motion';

export function ProfilePage() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const achievements = [
    {
      icon: Trophy,
      title: '30 Day Streak',
      progress: 12,
      total: 30,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Medal,
      title: 'Task Master',
      progress: 87,
      total: 100,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Star,
      title: 'Perfect Week',
      progress: 5,
      total: 7,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    }
  ];

  const badges = [
    { icon: Zap, title: 'Early Bird', color: 'text-amber-500', bgColor: 'bg-amber-100' },
    { icon: Target, title: 'Goal Setter', color: 'text-green-500', bgColor: 'bg-green-100' },
    { icon: Trophy, title: 'Champion', color: 'text-purple-500', bgColor: 'bg-purple-100' },
  ];

  const menuItems = [
    {
      icon: Settings,
      title: 'Settings',
      description: 'App preferences and account settings',
      action: () => {}
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      action: () => {}
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Control your privacy settings',
      action: () => {}
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help with using the app',
      action: () => {}
    }
  ];

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 pb-24"
    >
      {/* Back Button */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          delay: 0.1
        }}
        className="absolute top-4 left-4 z-10"
      >
        <motion.button
          onClick={handleGoBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </motion.button>
      </motion.div>

      {/* Profile Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 250, 
          damping: 20,
          delay: 0.2
        }}
        className="relative"
      >
        <div className="h-36 bg-gradient-to-r from-purple-600 to-purple-700" />
        
        <div className="px-4 -mt-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.3, 
              type: "spring", 
              stiffness: 300 
            }}
            className="bg-white rounded-2xl shadow-md p-6 relative overflow-hidden"
          >
            {/* Existing profile content remains the same */}
            <div className="absolute top-4 right-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEditProfile}
                className="text-purple-600 hover:bg-purple-50 p-2 rounded-full transition-colors"
              >
                {editMode ? <Calendar className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
              </motion.button>
            </div>

            {/* Rest of the profile content */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-3xl text-purple-600 font-bold">JD</span>
              </div>
              
              {editMode ? (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <input 
                    type="text" 
                    defaultValue="John Doe"
                    className="text-xl font-bold text-center bg-gray-100 rounded-lg px-2 py-1 mb-1"
                  />
                  <input 
                    type="text" 
                    defaultValue="Level 10 Achiever"
                    className="text-sm text-center bg-gray-100 rounded-lg px-2 py-1 text-gray-500"
                  />
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-sm text-gray-500">Level 10 Achiever</p>
                </>
              )}

              {/* Level Progress */}
              <div className="w-full mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Level Progress</span>
                  <span className="text-purple-600 font-medium">70%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-4 mt-4"
      >
        {/* Rest of the content remains the same */}
        <div className="bg-white rounded-2xl shadow-md grid grid-cols-3 divide-x divide-gray-100">
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-purple-600">32</div>
            <div className="text-xs text-gray-500">Routines</div>
          </div>
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-green-600">87%</div>
            <div className="text-xs text-gray-500">Completion</div>
          </div>
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-amber-600">12</div>
            <div className="text-xs text-gray-500">Day Streak</div>
          </div>
        </div>
      </motion.div>


      {/* Achievements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="text-purple-600 text-sm hover:bg-purple-50 px-2 py-1 rounded-md"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              const progressPercent = (achievement.progress / achievement.total) * 100;
              return (
                <motion.div 
                  key={achievement.title}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 bg-gray-50 p-3 rounded-xl"
                >
                  <div className={`p-2.5 rounded-lg ${achievement.bgColor}`}>
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{achievement.title}</span>
                      <span className="text-sm text-gray-500">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Earned Badges</h3>
          <div className="flex justify-around">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div 
                  key={badge.title}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className={`p-3.5 rounded-full ${badge.bgColor} mb-2 shadow-md`}>
                    <Icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{badge.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Menu Items */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
                whileTap={{ scale: 0.99 }}
                onClick={item.action}
                className={`p-4 flex items-center justify-between cursor-pointer 
                  ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-purple-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 w-5 h-5" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Logout Button */}
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleLogout}
        className="w-[calc(100%-2rem)] mx-4 mt-4 bg-red-50 p-4 rounded-2xl flex items-center justify-center space-x-2 text-red-600 hover:bg-red-100 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Log Out</span>
      </motion.button>
    </motion.div>
  );
}