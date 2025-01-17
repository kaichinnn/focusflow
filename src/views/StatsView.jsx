import React from 'react';
import { Trophy, Target, Zap, Award } from 'lucide-react';

export function StatsView() {
  return (
    <div className="mx-5 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">85%</span>
          </div>
          <p className="text-sm text-gray-600">Completion Rate</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-red-500" />
            <span className="text-2xl font-bold text-gray-900">15</span>
          </div>
          <p className="text-sm text-gray-600">Longest Streak</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-purple-500" />
            <span className="text-2xl font-bold text-gray-900">7</span>
          </div>
          <p className="text-sm text-gray-600">Active Routines</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-2xl font-bold text-gray-900">120</span>
          </div>
          <p className="text-sm text-gray-600">Total XP Earned</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Routine 1</span>
              <span className="text-sm text-gray-500">5 day streak</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full transition-all duration-300" style={{ width: '71%' }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Routine 2</span>
              <span className="text-sm text-gray-500">3 day streak</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full transition-all duration-300" style={{ width: '43%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
