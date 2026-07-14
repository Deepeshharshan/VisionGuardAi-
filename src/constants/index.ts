// ============================================================
// VisionGuard AI — Application Constants
// ============================================================

export const APP_NAME = 'VisionGuard AI';
export const APP_VERSION = '2.1.0';
export const APP_TAGLINE = 'AI-Powered Vision-Based Predictive Maintenance';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FEATURES = [
  {
    id: 'cctv-integration',
    title: 'Existing CCTV Integration',
    description:
      'Connect directly to your existing IP cameras, CCTV, and RTSP streams. No new hardware required. Deploy within hours, not weeks.',
    icon: 'Camera',
    metric: 'Zero new hardware',
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Processing',
    description:
      'Run inference locally at the edge for sub-100ms response times. Minimize bandwidth usage and ensure data privacy within your facility.',
    icon: 'Cpu',
    metric: '<100ms latency',
  },
  {
    id: 'anomaly-detection',
    title: 'Visual Anomaly Detection',
    description:
      'YOLO-powered real-time object detection identifies leaks, smoke, sparks, vibrations, and physical deformities with 99.2% accuracy.',
    icon: 'ScanSearch',
    metric: '99.2% accuracy',
  },
  {
    id: 'quality-inspection',
    title: 'Automated Quality Inspection',
    description:
      'Detect surface defects, dimensional errors, and assembly faults at line speed. Reduce manual inspection overhead by up to 80%.',
    icon: 'ShieldCheck',
    metric: '80% cost reduction',
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    description:
      'Monitor machine behavior over time to predict failures before they occur. Reduce unplanned downtime by 60% with AI-driven alerts.',
    icon: 'Activity',
    metric: '60% downtime reduction',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'Centralized real-time dashboards for plant managers. Customizable KPIs, trend charts, alert timelines, and exportable PDF reports.',
    icon: 'BarChart3',
    metric: 'Real-time insights',
  },
] as const;

export const INDUSTRIES = [
  {
    id: 'manufacturing',
    title: 'General Manufacturing',
    description: 'Assembly line monitoring, machine health, and production quality inspection.',
    icon: 'Factory',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Weld seam detection, paint defect analysis, and robotic arm monitoring.',
    icon: 'Car',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabric defect detection, weave pattern quality, and loom health monitoring.',
    icon: 'Layers',
  },
  {
    id: 'food',
    title: 'Food Processing',
    description: 'Contamination detection, packaging integrity, and hygiene compliance monitoring.',
    icon: 'Package',
  },
  {
    id: 'foundry',
    title: 'Foundries & Casting',
    description: 'Surface crack detection, mold quality analysis, and thermal anomaly alerts.',
    icon: 'Flame',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    description: 'PCB defect inspection, solder joint quality, and component placement verification.',
    icon: 'CircuitBoard',
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Connect Video Source',
    description:
      'Connect your existing CCTV, IP cameras, or upload recorded video files. Supports RTSP, HTTP streams, and MP4 upload.',
    icon: 'Video',
  },
  {
    step: '02',
    title: 'AI Vision Analysis',
    description:
      'Frames are extracted and processed through OpenCV and YOLO models in real time. Multi-class object detection runs at 30fps.',
    icon: 'Brain',
  },
  {
    step: '03',
    title: 'Detect Anomalies',
    description:
      'The detection engine identifies defects, anomalies, and deviations using trained AI models specific to your industry.',
    icon: 'ScanSearch',
  },
  {
    step: '04',
    title: 'Alerts & Reports',
    description:
      'Instant alerts via dashboard, email, or SMS. Detailed reports with frame captures, confidence scores, and recommendations.',
    icon: 'Bell',
  },
] as const;

export const STATS = [
  { value: 99.2, suffix: '%', label: 'Detection Accuracy', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Monitoring Coverage', decimals: 0 },
  { value: 60, suffix: '%', label: 'Downtime Reduction', decimals: 0 },
  { value: 40, suffix: '%', label: 'Quality Improvement', decimals: 0 },
] as const;

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹12,999',
    period: '/month',
    description: 'For small manufacturers getting started with AI vision.',
    highlight: false,
    features: [
      'Up to 4 camera streams',
      'Video upload analysis',
      'Basic anomaly detection',
      'Email alerts',
      '7-day data retention',
      'Standard support',
      'CSV export',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '₹39,999',
    period: '/month',
    description: 'For mid-scale operations requiring real-time monitoring.',
    highlight: true,
    features: [
      'Up to 20 camera streams',
      'Real-time RTSP processing',
      'Advanced defect detection',
      'Multi-channel alerts',
      '90-day data retention',
      'Custom AI model training',
      'PDF & CSV reports',
      'Priority support',
      'RBAC & audit logs',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large facilities with complex multi-plant requirements.',
    highlight: false,
    features: [
      'Unlimited camera streams',
      'Multi-plant deployment',
      'Custom model development',
      'On-premise or private cloud',
      'Unlimited data retention',
      'SLA guarantee (99.9%)',
      'Dedicated success manager',
      'API & webhook access',
      'Integration support',
    ],
    cta: 'Contact Sales',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Do I need to replace my existing cameras or hardware?',
    answer:
      'No. VisionGuard AI is designed to work with your existing CCTV infrastructure. We support RTSP, ONVIF, and HTTP camera protocols, as well as video file uploads. Our software integrates with most IP cameras and NVR systems without any hardware replacement.',
  },
  {
    question: 'How accurate is the AI detection system?',
    answer:
      'Our pre-trained models achieve 99.2% detection accuracy on standard industrial datasets. Accuracy improves further with custom model fine-tuning specific to your factory environment. We continuously retrain models based on your operational feedback.',
  },
  {
    question: 'What types of defects and anomalies can be detected?',
    answer:
      'VisionGuard AI detects surface cracks, dimensional deviations, weld defects, packaging errors, smoke/fire, liquid leaks, equipment vibration anomalies, missing components, incorrect assembly, and contamination — across 6+ industries.',
  },
  {
    question: 'Is the system suitable for small and medium enterprises?',
    answer:
      'Absolutely. The Starter plan is designed specifically for MSMEs. You can begin with just 4 cameras and video upload analysis. The platform scales seamlessly as your operations grow, with no infrastructure changes required.',
  },
  {
    question: 'Can the system process video in real time?',
    answer:
      'Yes. With the Professional and Enterprise plans, VisionGuard AI processes live RTSP and IP camera streams at up to 30fps. The Edge AI module runs inference locally for sub-100ms latency, ensuring instant detection and alerts.',
  },
  {
    question: 'How is our factory data secured?',
    answer:
      'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Enterprise customers can deploy on-premise or in a private cloud. We are SOC 2 Type II compliant and provide full audit logs for all system activities.',
  },
  {
    question: 'What integrations are supported?',
    answer:
      'VisionGuard AI integrates with ERP systems (SAP, Oracle), SCADA systems, email, SMS, Slack, Microsoft Teams, and custom webhooks. Our REST API allows integration with any third-party system.',
  },
  {
    question: 'How long does it take to deploy and go live?',
    answer:
      'Typical deployment takes 2–5 business days for the Starter plan. For Professional and Enterprise deployments with custom model training, expect 2–4 weeks. Our team handles the complete onboarding and commissioning process.',
  },
] as const;

export const TRUSTED_INDUSTRIES = [
  'Manufacturing',
  'Automotive',
  'Textiles',
  'Food Processing',
  'Foundries',
  'Engineering',
] as const;
