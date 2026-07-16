# VisionGuard AI

VisionGuard AI is a premium enterprise SaaS platform built for modern manufacturing, providing edge-first computer vision for predictive maintenance and quality control.

## Overview
By leveraging existing camera infrastructure, VisionGuard AI deploys lightweight agents on local IPCs (edge nodes) to process frames in milliseconds without internet dependency. Only metadata and critical alerts sync to the central cloud for fleet management.

## Tech Stack
- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom CSS variables (`index.css`) for a design-system-first approach
- **Animations**: Framer Motion
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
```

## Architecture highlights
- **Edge Layer:** Local model deployment (TensorRT pipeline) handling raw video feeds.
- **Neural Engine:** Frames processed locally; no massive bandwidth usage.
- **Central Cloud:** Monitor thousands of edge devices, deploy new AI models OTA via REST/GraphQL APIs.
