// Utility functions for MotoMindr

/**
 * Format date to readable string
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate days until next maintenance
 * @param {Date} lastService - Date of last service
 * @param {number} intervalDays - Service interval in days
 * @returns {number} Days remaining
 */
export const daysUntilService = (lastService, intervalDays) => {
  const nextService = new Date(lastService);
  nextService.setDate(nextService.getDate() + intervalDays);
  const today = new Date();
  const diffTime = nextService - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Format mileage with commas
 * @param {number} mileage - Mileage number
 * @returns {string} Formatted mileage string
 */
export const formatMileage = (mileage) => {
  return mileage.toLocaleString('en-US');
};

/**
 * Storage helper functions
 */
export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};
