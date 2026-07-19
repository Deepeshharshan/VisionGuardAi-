# VisionGuard AI

VisionGuard AI is a premium enterprise SaaS platform built for modern manufacturing, providing edge-first computer vision for predictive maintenance and quality control.

## Overview
By leveraging existing camera infrastructure, VisionGuard AI deploys lightweight agents on local IPCs (edge nodes) to process frames in milliseconds without internet dependency. Only metadata and critical alerts sync to the central cloud for fleet management.

## Tech Stack
- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (Enterprise Graphite/Emerald Design System)
- **Cinematic Motion**: GSAP (ScrollTrigger) & Framer Motion
- **3D Rendering**: Three.js + React Three Fiber / Drei
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js 18+

### Installation & Running Locally
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Architecture highlights
- **V3 Enterprise Frontend Architecture:** Designed for high-fidelity product communication. Every scroll sequence acts as a cinematic product reveal using progressive disclosure.
- **Edge Layer:** Local model deployment (TensorRT pipeline) handling raw video feeds.
- **Neural Engine:** Frames processed locally; no massive bandwidth usage.
- **Central Cloud:** Monitor thousands of edge devices, deploy new AI models OTA via REST/GraphQL APIs.
