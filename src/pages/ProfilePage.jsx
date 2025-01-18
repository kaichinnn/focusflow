import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, Bell, Shield, HelpCircle, LogOut, Trophy, Medal, Star, 
  Target, Zap, ChevronRight, Edit, Calendar, ArrowLeft, Sparkles, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProfilePage() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showAchievementToast, setShowAchievementToast] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const achievements = [
    {
      icon: Trophy,
      title: '30 Day Streak',
      progress: 12,
      total: 30,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Medal,
      title: 'Task Master',
      progress: 87,
      total: 100,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Star,
      title: 'Perfect Week',
      progress: 5,
      total: 7,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10'
    }
  ];

  const badges = [
    { icon: Zap, title: 'Early Bird', color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { icon: Target, title: 'Goal Setter', color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
    { icon: Trophy, title: 'Champion', color: 'text-indigo-400', bgColor: 'bg-indigo-400/10' },
  ];

  const menuItems = [
    {
      icon: Settings,
      title: 'Settings',
      description: 'App preferences and account settings',
      action: () => showToast('Settings')
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      action: () => showToast('Notifications')
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Control your privacy settings',
      action: () => showToast('Privacy')
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help with using the app',
      action: () => showToast('Help')
    }
  ];

  const showToast = (feature) => {
    setShowAchievementToast(true);
    setTimeout(() => setShowAchievementToast(false), 2000);
  };

  // Handle the first logout click
  const handleLogoutClick = () => {
    if (!isLoggingOut) {
      setIsLoggingOut(true);
      // Reset confirmation after 3 seconds
      const timer = setTimeout(() => {
        setIsLoggingOut(false);
      }, 3000);
      setLogoutTimer(timer);
    } else {
      // Clear the timeout if user confirms quickly
      if (logoutTimer) clearTimeout(logoutTimer);
      // Perform logout
      handleLogout();
    }
  };

  // Handle the actual logout
  const handleLogout = () => {
    // Navigate to login page with a fade effect
    navigate('/login', { replace: true });
  };

  // Clear timer on component unmount
  useEffect(() => {
    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
    };
  }, [logoutTimer]);

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
      className="min-h-screen bg-slate-900 text-purple-200/90 pb-24"
    >
      {/* Achievement Toast */}
      <AnimatePresence>
        {showAchievementToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg
              flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Coming soon!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="absolute top-4 left-4 z-10"
      >
        <motion.button
          onClick={handleGoBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-800/80 p-2 rounded-full shadow-lg hover:bg-slate-700/80 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-200" />
        </motion.button>
      </motion.div>

      {/* Profile Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative"
      >
        <div className="h-36 bg-gradient-to-r from-purple-600 to-indigo-600" />
        
        <div className="px-4 -mt-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 relative overflow-hidden
              border border-purple-500/20"
          >
            {/* Edit Button */}
            <div className="absolute top-4 right-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEditProfile}
                className="text-purple-400 hover:bg-purple-500/20 p-2 rounded-full transition-colors"
              >
                {editMode ? <Calendar className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
              </motion.button>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full 
                flex items-center justify-center shadow-lg border-2 border-purple-400/20 mb-4">
                <span className="text-3xl text-white font-bold">JD</span>
              </div>
              
              {editMode ? (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <input 
                    type="text" 
                    defaultValue="John Doe"
                    className="text-xl font-bold text-center bg-slate-700/50 rounded-lg px-3 py-1.5
                      border border-purple-500/20 focus:border-purple-500/50 focus:outline-none text-purple-200"
                  />
                  <input 
                    type="text" 
                    defaultValue="Level 10 Achiever"
                    className="text-sm text-center bg-slate-700/50 rounded-lg px-3 py-1.5
                      border border-purple-500/20 focus:border-purple-500/50 focus:outline-none text-purple-200/60"
                  />
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-purple-200">John Doe</h2>
                  <p className="text-sm text-purple-200/60">Level 10 Achiever</p>
                </>
              )}

              {/* Level Progress */}
              <div className="w-full mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-purple-200/60">Level Progress</span>
                  <span className="text-green-400 font-medium">70%</span>
                </div>
                <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  />
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
        transition={{ delay: 0.2 }}
        className="px-4 mt-4"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg grid grid-cols-3 
          border border-purple-500/20">
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-green-400">32</div>
            <div className="text-xs text-purple-200/60">Routines</div>
          </div>
          <div className="text-center py-4 border-x border-purple-500/10">
            <div className="text-2xl font-bold text-purple-400">87%</div>
            <div className="text-xs text-purple-200/60">Completion</div>
          </div>
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-indigo-400">12</div>
            <div className="text-xs text-purple-200/60">Day Streak</div>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-4 mt-4"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-5 border border-purple-500/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-purple-200">Achievements</h3>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="text-green-400 text-sm hover:bg-green-400/10 px-3 py-1.5 rounded-lg"
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
                  className="flex items-center space-x-4 bg-slate-700/30 p-4 rounded-xl 
                    border border-purple-500/10"
                >
                  <div className={`p-2.5 rounded-lg ${achievement.bgColor}`}>
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-purple-200">{achievement.title}</span>
                      <span className="text-sm text-purple-200/60">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          progressPercent >= 100 
                            ? 'bg-gradient-to-r from-green-400 to-green-500' 
                            : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                        }`}
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
        transition={{ delay: 0.4 }}
        className="px-4 mt-4"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-5 
          border border-purple-500/20">
          <h3 className="text-lg font-semibold text-purple-200 mb-4">Earned Badges</h3>
          <div className="flex justify-around">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div 
                  key={badge.title}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className={`p-4 rounded-2xl ${badge.bgColor} mb-3 shadow-lg 
                    border border-purple-500/20 group-hover:border-purple-500/40 transition-colors`}>
                    <Icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <span className="text-sm text-purple-200/60 group-hover:text-purple-200 
                    transition-colors">{badge.title}</span>
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
        transition={{ delay: 0.5 }}
        className="px-4 mt-4"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden 
          border border-purple-500/20">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title}
                whileHover={{ backgroundColor: 'rgba(147, 51, 234, 0.05)' }}
                whileTap={{ scale: 0.99 }}
                onClick={item.action}
                className={`p-4 flex items-center justify-between cursor-pointer 
                  ${index !== menuItems.length - 1 ? 'border-b border-purple-500/10' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-purple-200 font-medium">{item.title}</h3>
                    <p className="text-sm text-purple-200/60">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="text-purple-400/60 w-5 h-5" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Logout Button */}
      <motion.button 
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleLogoutClick}
  className={`w-[calc(100%-2rem)] mx-4 mt-4 p-4 rounded-2xl flex items-center 
    justify-center space-x-2 transition-all duration-300
    ${isLoggingOut 
      ? 'bg-red-500/20 text-red-400 border-red-500/40' 
      : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
>
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={isLoggingOut ? 'warning' : 'logout'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
    >
      {isLoggingOut ? <AlertTriangle className="w-5 h-5" /> : <LogOut className="w-5 h-5" />}
    </motion.div>
  </AnimatePresence>
  <AnimatePresence mode="wait" initial={false}>
    <motion.span 
      key={isLoggingOut ? 'confirm' : 'logout'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
      className="font-medium"
    >
      {isLoggingOut ? 'Are you sure?' : 'Log Out'}
    </motion.span>
  </AnimatePresence>
</motion.button>
    </motion.div>
  );
}