import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, MoreVertical, Zap } from 'lucide-react';
import { ConfirmModal } from '../components/ConfirmModal';
import { motion } from 'framer-motion';

const initialTasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'This is the first task description.',
    completed: false,
    recurring: 'Daily',
    streak: { current: 3 },
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'This is the second task description.',
    completed: true,
    recurring: 'Weekly',
    streak: { current: 1 },
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'This is the third task description.',
    completed: false,
    recurring: 'Monthly',
    streak: { current: 5 },
  },
];

export function TaskListView({ onEditTask, isConfirmModalOpen, onConfirmModalOpen, onConfirmModalClose }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskToUncomplete, setTaskToUncomplete] = useState(null);

  const completeTask = (taskId) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: true }
          : task
      )
    );
  };

  const uncompleteTask = (taskId) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: false }
          : task
      )
    );
  };

  const handleTaskClick = (e, task) => {
    if (e.target.closest('button')) return;

    if (task.completed) {
      setTaskToUncomplete(task);
      onConfirmModalOpen();
    } else {
      completeTask(task.id);
    }
  };

  const handleConfirmUncomplete = () => {
    if (taskToUncomplete) {
      uncompleteTask(taskToUncomplete.id);
      // Clear the task after updating
      setTimeout(() => setTaskToUncomplete(null), 300);
    }
  };

  const handleCloseConfirm = () => {
    onConfirmModalClose();
    // Clear the task after modal close animation
    setTimeout(() => setTaskToUncomplete(null), 300);
  };

  return (
    <>
      <div className="pt-1 px-4 space-y-3">
  {tasks.map((task) => (  // Make sure task is defined here in the map function
    <div
      key={task.id}
      onClick={(e) => handleTaskClick(e, task)}
      className={`bg-slate-800/60 backdrop-blur-sm rounded-xl border border-purple-500/10
        hover:border-purple-500/20 hover:bg-slate-700/40
        transition-all duration-200 active:scale-[0.98] cursor-pointer
        ${task.completed ? 'bg-emerald-900/20 border-emerald-500/20' : ''}`}
    >
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex items-center flex-1 min-w-0">
            <div className={`flex-shrink-0 transition-colors duration-200 
              ${task.completed ? 'text-emerald-400' : 'text-purple-400'}`}
            >
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <h3 className={`font-medium transition-all duration-200
                ${task.completed ? 'text-purple-200/50 line-through' : 'text-purple-200'}`}
              >
                {task.title}
              </h3>
              {task.description && (  // Add check for description existence
                <p className={`text-sm truncate transition-all duration-200
                  ${task.completed ? 'text-purple-200/30' : 'text-purple-200/70'}`}
                >
                  {task.description}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-purple-500/10">
              <Clock className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200/80">{task.recurring}</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEditTask(task);
              }}
              className="p-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20
                text-purple-300 hover:text-purple-200 transition-colors"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {task.streak.current > 0 && (
          <div className="mt-2 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-sm">
              🔥 {task.streak.current} day streak!
            </span>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirmUncomplete}
      />
    </>
  );
}