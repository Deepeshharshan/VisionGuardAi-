export const detectionData = [
  { time: '00:00', detections: 12, anomalies: 1 },
  { time: '02:00', detections: 8, anomalies: 0 },
  { time: '04:00', detections: 15, anomalies: 2 },
  { time: '06:00', detections: 24, anomalies: 1 },
  { time: '08:00', detections: 48, anomalies: 3 },
  { time: '10:00', detections: 62, anomalies: 2 },
  { time: '12:00', detections: 58, anomalies: 4 },
  { time: '14:00', detections: 72, anomalies: 3 },
  { time: '16:00', detections: 85, anomalies: 5 },
  { time: '18:00', detections: 67, anomalies: 2 },
  { time: '20:00', detections: 43, anomalies: 1 },
  { time: '22:00', detections: 28, anomalies: 0 },
];

export const healthData = [
  { name: 'Mon', healthy: 8, warning: 2, critical: 1 },
  { name: 'Tue', healthy: 9, warning: 1, critical: 1 },
  { name: 'Wed', healthy: 7, warning: 3, critical: 2 },
  { name: 'Thu', healthy: 10, warning: 1, critical: 0 },
  { name: 'Fri', healthy: 8, warning: 2, critical: 1 },
  { name: 'Sat', healthy: 9, warning: 2, critical: 0 },
  { name: 'Sun', healthy: 11, warning: 0, critical: 0 },
];

export const donutHealthData = [
  { name: 'Healthy', value: 85, color: '#10B981' },
  { name: 'Warning', value: 10, color: '#F59E0B' },
  { name: 'Critical', value: 5, color: '#EF4444' },
];

export const machines = [
  { id: 'M001', name: 'CNC Lathe #3', type: 'CNC Machine', location: 'Floor A', status: 'healthy', score: 96, alerts: 0, uptime: 99.2 },
  { id: 'M002', name: 'Hydraulic Press #7', type: 'Press', location: 'Floor B', status: 'warning', score: 71, alerts: 2, uptime: 94.5 },
  { id: 'M003', name: 'Conveyor Belt #2', type: 'Conveyor', location: 'Floor C', status: 'critical', score: 38, alerts: 5, uptime: 78.3 },
  { id: 'M004', name: 'Welding Robot #1', type: 'Robot', location: 'Floor A', status: 'healthy', score: 89, alerts: 0, uptime: 97.8 },
  { id: 'M005', name: 'Injection Molder #4', type: 'Molder', location: 'Floor D', status: 'healthy', score: 92, alerts: 1, uptime: 98.1 },
];

export const alerts = [
  { id: 'A001', type: 'critical', machine: 'Conveyor Belt #2', message: 'Severe vibration anomaly detected — immediate inspection required', time: '2m ago', status: 'open' },
  { id: 'A002', type: 'warning', machine: 'Hydraulic Press #7', message: 'Surface crack detected on component batch #4421', time: '15m ago', status: 'open' },
  { id: 'A003', type: 'info', machine: 'CNC Lathe #3', message: 'Scheduled maintenance reminder — 48 hours remaining', time: '1h ago', status: 'open' },
  { id: 'A004', type: 'warning', machine: 'Injection Molder #4', message: 'Temperature deviation detected — check coolant flow', time: '3h ago', status: 'open' },
];

export const recentVideos = [
  { id: 'V001', filename: 'assembly_line_a_2024_01.mp4', machine: 'CNC Lathe #3', time: '4h ago', detections: 3, status: 'completed' },
  { id: 'V002', filename: 'hydraulic_press_inspection.mp4', machine: 'Hydraulic Press #7', time: '8h ago', detections: 7, status: 'completed' },
  { id: 'V003', filename: 'conveyor_anomaly_check.mp4', machine: 'Conveyor Belt #2', time: 'Just now', detections: 0, status: 'processing' },
];
