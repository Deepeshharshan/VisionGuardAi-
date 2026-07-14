// ============================================================
// VisionGuard AI — Global Type Definitions
// ============================================================

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
  avatar?: string;
  company?: string;
  createdAt: string;
}

export interface Machine {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  healthScore: number;
  lastInspection: string;
  totalAlerts: number;
  uptime: number;
}

export interface Alert {
  id: string;
  machineId: string;
  machineName: string;
  type: 'anomaly' | 'defect' | 'maintenance' | 'quality';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  timestamp: string;
  status: 'open' | 'acknowledged' | 'resolved';
  confidence: number;
}

export interface VideoAnalysis {
  id: string;
  filename: string;
  machineId: string;
  machineName: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  uploadedAt: string;
  completedAt?: string;
  duration?: number;
  framesProcessed?: number;
  detectionsCount?: number;
  anomalyScore?: number;
  confidence?: number;
}

export interface Detection {
  id: string;
  videoId: string;
  frameNumber: number;
  timestamp: number;
  type: string;
  confidence: number;
  bbox: { x: number; y: number; width: number; height: number };
  severity: 'critical' | 'high' | 'medium' | 'low';
}

export interface DashboardStats {
  totalMachines: number;
  healthyMachines: number;
  activeAlerts: number;
  criticalAlerts: number;
  videosProcessed: number;
  detectionAccuracy: number;
  uptimePercentage: number;
  downTimeReduction: number;
}

export interface ChartDataPoint {
  time: string;
  value: number;
  label?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  children?: NavItem[];
}

export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type Status = 'healthy' | 'warning' | 'critical' | 'offline';
export type AlertType = 'anomaly' | 'defect' | 'maintenance' | 'quality';
