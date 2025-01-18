import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BarChart2, PlusCircle, UserCircle, LineChart } from 'lucide-react';

export function MobileNavbar({ viewMode, isModalOpen, onViewChange, onAddTask, onCloseModals }) {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    if (isModalOpen) {
      onCloseModals();
    } else {
      onAddTask();
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-800/90 backdrop-blur-sm border-t border-purple-500/10 px-6 z-40">
  <div className="flex items-center max-w-md mx-auto relative h-16">
    {/* Tasks Button */}
    <div className="flex-1 flex justify-center">
      <button
        onClick={() => onViewChange('tasks')}
        className={`p-2 rounded-lg transition-all duration-300 transform 
          ${viewMode === 'tasks' 
            ? 'text-purple-400 bg-purple-500/20 shadow-inner shadow-purple-500/10' 
            : 'text-purple-200/60 hover:text-purple-200/80 hover:bg-purple-500/10'}
          ${isModalOpen ? '-translate-x-2 opacity-75' : 'translate-x-0 opacity-100'}`}
      >
        <Home className="w-7 h-7" />
      </button>
    </div>
    
    {/* Stats Button */}
    <div className="flex-1 flex justify-center">
      <button
        onClick={() => onViewChange('stats')}
        className={`p-2 rounded-lg transition-all duration-300 transform
          ${viewMode === 'stats' 
            ? 'text-purple-400 bg-purple-500/20 shadow-inner shadow-purple-500/10' 
            : 'text-purple-200/60 hover:text-purple-200/80 hover:bg-purple-500/10'}
          ${isModalOpen ? '-translate-x-1 opacity-75' : 'translate-x-0 opacity-100'}`}
      >
        <BarChart2 className="w-7 h-7" />
      </button>
    </div>
    
    {/* Add/Close Task Button */}
    <div className="flex-1 flex justify-center">
      <div className="relative w-14 h-14">
        <button
          onClick={handleAddButtonClick}
          className={`absolute left-1/2 flex items-center justify-center 
            transform -translate-x-1/2 duration-300
            transition-[background-color,width,height,transform,border-radius,color,shadow]
            ${isModalOpen 
              ? 'w-10 h-10 translate-y-2 rounded-lg text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 !bg-transparent'
              : 'w-14 h-14 -translate-y-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/25'}`}
        >
          <PlusCircle className={`w-7 h-7 transition-transform duration-300 ${isModalOpen ? 'rotate-45' : 'rotate-0'}`} />
        </button>
      </div>
    </div>

    {/* Insights Button */}
    <div className="flex-1 flex justify-center">
      <button
        onClick={() => onViewChange('insights')}
        className={`p-2 rounded-lg transition-all duration-300 transform
          ${viewMode === 'insights' 
            ? 'text-purple-400 bg-purple-500/20 shadow-inner shadow-purple-500/10' 
            : 'text-purple-200/60 hover:text-purple-200/80 hover:bg-purple-500/10'}
          ${isModalOpen ? 'translate-x-1 opacity-75' : 'translate-x-0 opacity-100'}`}
      >
        <LineChart className="w-7 h-7" />
      </button>
    </div>
    
    {/* User Profile Button */}
    <div className="flex-1 flex justify-center">
      <button
        onClick={handleProfileClick}
        className={`p-2 rounded-lg transition-all duration-300 transform
          ${viewMode === 'profile' 
            ? 'text-purple-400 bg-purple-500/20 shadow-inner shadow-purple-500/10' 
            : 'text-purple-200/60 hover:text-purple-200/80 hover:bg-purple-500/10'}
          ${isModalOpen ? 'translate-x-2 opacity-75' : 'translate-x-0 opacity-100'}`}
      >
        <UserCircle className="w-7 h-7" />
      </button>
    </div>
  </div>
</nav>
  );
}