// App constants for MotoMindr

export const APP_NAME = 'MotoMindr';
export const APP_VERSION = '1.0.0';

// Maintenance intervals (in days)
export const MAINTENANCE_INTERVALS = {
  OIL_CHANGE: 90,
  TIRE_CHECK: 180,
  BRAKE_INSPECTION: 180,
  CHAIN_MAINTENANCE: 30,
  COOLANT_CHECK: 365,
  AIR_FILTER: 180,
  SPARK_PLUGS: 365,
  BATTERY_CHECK: 180
};

// Mileage intervals (in miles)
export const MILEAGE_INTERVALS = {
  OIL_CHANGE: 3000,
  TIRE_ROTATION: 5000,
  BRAKE_PADS: 10000,
  CHAIN_REPLACEMENT: 20000,
  MAJOR_SERVICE: 12000
};

// Maintenance types
export const MAINTENANCE_TYPES = [
  { id: 'oil', label: 'Oil Change', icon: '🛢️' },
  { id: 'tires', label: 'Tire Check', icon: '🛞' },
  { id: 'brakes', label: 'Brake Inspection', icon: '🛑' },
  { id: 'chain', label: 'Chain Maintenance', icon: '⛓️' },
  { id: 'coolant', label: 'Coolant Check', icon: '💧' },
  { id: 'filter', label: 'Air Filter', icon: '🌬️' },
  { id: 'plugs', label: 'Spark Plugs', icon: '⚡' },
  { id: 'battery', label: 'Battery Check', icon: '🔋' }
];

// Local storage keys
export const STORAGE_KEYS = {
  MOTORCYCLES: 'motomindr_motorcycles',
  MAINTENANCE_RECORDS: 'motomindr_maintenance',
  USER_SETTINGS: 'motomindr_settings'
};

// Status colors
export const STATUS_COLORS = {
  OVERDUE: '#ef4444',
  DUE_SOON: '#f59e0b',
  GOOD: '#10b981'
};
