import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/header";
import { TaskListView } from "../views/TaskListView";
import { StatsView } from "../views/StatsView";
import { InsightsView } from "../views/InsightsView";
import { ProfilePage } from "../pages/ProfilePage";
import { MobileNavbar } from "../components/MobileNavbar";
import { AddTaskModal } from "../components/AddTaskModal";
import { EditTaskModal } from "../components/EditTaskModal";

// View transition animation variants
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20 // Subtle vertical movement for mobile
  },
  in: { 
    opacity: 1,
    y: 0 
  },
  out: { 
    opacity: 0,
    y: 20 
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.25
};

export function HomePage() {
  const [activeView, setActiveView] = useState("tasks");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleViewChange = (view) => {
    handleCloseAllModals();
    setActiveView(view);
  };

  const handleOpenAddModal = () => {
    handleCloseAllModals();
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (task) => {
    handleCloseAllModals();
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTimeout(() => setSelectedTask(null), 300);
  };

  const handleOpenConfirmModal = () => {
    handleCloseAllModals();
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleCloseAllModals = () => {
    if (isAddModalOpen) handleCloseAddModal();
    if (isEditModalOpen) handleCloseEditModal();
    if (isConfirmModalOpen) handleCloseConfirmModal();
  };

  const isAnyModalOpen = isAddModalOpen || isEditModalOpen || isConfirmModalOpen;

  const renderView = () => {
    switch (activeView) {
      case "tasks":
        return (
          <motion.div
            key="tasks"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute w-full"
          >
            <TaskListView 
              onEditTask={handleOpenEditModal}
              onConfirmModalOpen={handleOpenConfirmModal}
              onConfirmModalClose={handleCloseConfirmModal}
              isConfirmModalOpen={isConfirmModalOpen}
            />
          </motion.div>
        );
      case "stats":
        return (
          <motion.div
            key="stats"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute w-full"
          >
            <StatsView />
          </motion.div>
        );
      case "insights":
        return (
          <motion.div
            key="insights"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute w-full"
          >
            <InsightsView />
          </motion.div>
        );
      case "profile":
        return (
          <motion.div
            key="profile"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute w-full"
          >
            <ProfilePage />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="default-tasks"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute w-full"
          >
            <TaskListView onEditTask={handleOpenEditModal} />
          </motion.div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      <div className="pb-20 relative">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </div>
      <MobileNavbar 
        viewMode={activeView} 
        isModalOpen={isAnyModalOpen}
        onViewChange={handleViewChange}
        onAddTask={handleOpenAddModal}
        onCloseModals={handleCloseAllModals}
      />
      
      <AddTaskModal 
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
      />
      
      <EditTaskModal 
        task={selectedTask}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
      />
    </div>
  );
}