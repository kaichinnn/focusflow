import React from 'react';
import { Clock, Calendar, TrendingUp } from 'lucide-react';

export function InsightsView() {
  return (
    <div className="pt-1 px-4 space-y-3">
      {/* Routine Insights Card */}
      <div className="bg-white rounded-xl shadow-md">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Routine Insights</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Best Time of Day</h4>
                <p className="text-sm text-gray-600 mt-1">
                  You're most productive in the morning (6 AM - 12 PM)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Most Consistent Routine</h4>
                <p className="text-sm text-gray-600 mt-1">
                  "Daily Exercise" with a 30-day best streak
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Completion Trend</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Your routine completion rate is improving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Routine Heatmap Card */}
      <div className="bg-white rounded-xl shadow-md">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Routine Heatmap</h3>
          
          <div className="grid grid-cols-7 gap-1">
            {[...Array(28)].map((_, i) => (
              <div
                key={i}
                className={`w-full pt-[100%] rounded-sm ${
                  Math.random() > 0.5 
                    ? `bg-purple-${Math.random() > 0.5 ? '300' : '100'}`
                    : 'bg-gray-100'
                }`}
              />
            ))}
          </div>

          <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-100" />
              <div className="w-3 h-3 rounded-sm bg-purple-100" />
              <div className="w-3 h-3 rounded-sm bg-purple-300" />
              <div className="w-3 h-3 rounded-sm bg-purple-500" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}