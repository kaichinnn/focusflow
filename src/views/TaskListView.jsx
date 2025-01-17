import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, MoreVertical } from 'lucide-react';
import { ConfirmModal } from '../components/ConfirmModal';

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
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={(e) => handleTaskClick(e, task)}
            className={`bg-white rounded-xl shadow-md cursor-pointer
              transition-all duration-200 active:scale-[0.98] hover:shadow-lg
              ${task.completed ? 'bg-green-50' : ''}`}
          >
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex items-center flex-1 min-w-0">
                  <div className={`flex-shrink-0 transition-colors duration-200 
                    ${task.completed ? 'text-green-500' : 'text-gray-300'}`}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <h3 className={`font-medium transition-all duration-200
                      ${task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}
                    >
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className={`text-sm truncate transition-all duration-200
                        ${task.completed ? 'text-gray-400' : 'text-gray-500'}`}
                      >
                        {task.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{task.recurring}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditTask(task);
                    }}
                    className="text-gray-400 p-1 rounded-lg hover:bg-gray-100 
                      hover:text-gray-600 transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {task.streak.current > 0 && (
                <div className="mt-2 text-sm text-purple-600">
                  🔥 {task.streak.current} day streak!
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