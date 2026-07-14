// ============================================================
// ArchitectureSection — Dark, full-width 2-col: copy + code,
// then 3-col layer cards below
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, ScanSearch, Database, LayoutDashboard, Bell } from 'lucide-react';

type Icon = React.FC<{ className?: string }>;

const layers = [
  { icon: Camera as Icon,         label: 'Video Sources',       tags: ['RTSP', 'HTTP', 'ONVIF', 'MP4'],              desc: 'Connect any existing CCTV or IP camera in minutes.' },
  { icon: Cpu as Icon,            label: 'Vision AI Engine',    tags: ['OpenCV', 'YOLO v8', 'PyTorch'],              desc: 'Real-time inference at up to 30fps per stream on the edge.' },
  { icon: ScanSearch as Icon,     label: 'Detection Engine',    tags: ['Anomaly Detection', 'Defect Classification'], desc: 'Multi-class detection with confidence scoring and bounding boxes.' },
  { icon: Database as Icon,       label: 'Analytics Backend',   tags: ['FastAPI', 'PostgreSQL', 'WebSocket'],         desc: 'Secure real-time pipeline — JWT auth, REST and WebSocket APIs.' },
  { icon: LayoutDashboard as Icon,label: 'Dashboard & Reports', tags: ['React', 'Recharts', 'PDF Export'],           desc: 'Live OEE dashboards with shift-level trends and PDF exports.' },
  { icon: Bell as Icon,           label: 'Alert Engine',        tags: ['Email', 'SMS', 'Slack', 'Webhook'],          desc: 'Configurable multi-channel alerting with escalation rules.' },
];

const codeLines = [
  { t: 'kw', v: 'import' }, { t: 'txt', v: ' VisionGuardAI ' }, { t: 'kw', v: 'from' }, { t: 'str', v: " '@visionguard/sdk'" }, { t: 'txt', v: ';' },
  { t: 'empty', v: '' },
  { t: 'kw', v: 'const' }, { t: 'txt', v: ' client = ' }, { t: 'kw', v: 'new' }, { t: 'txt', v: ' VisionGuardAI({' },
  { t: 'txt', v: '  apiKey: process.env.' }, { t: 'str', v: 'VISIONGUARD_API_KEY' }, { t: 'txt', v: ',' },
  { t: 'txt', v: '  edge: ' }, { t: 'kw', v: 'true' }, { t: 'txt', v: ',  ' }, { t: 'cmt', v: '// on-premise deployment' },
  { t: 'txt', v: '});' },
  { t: 'empty', v: '' },
  { t: 'kw', v: 'const' }, { t: 'txt', v: ' stream = ' }, { t: 'kw', v: 'await' }, { t: 'txt', v: ' client.streams.connect({' },
  { t: 'txt', v: '  url: ' }, { t: 'str', v: "'rtsp://192.168.1.100:554/live'" }, { t: 'txt', v: ',' },
  { t: 'txt', v: '  cameraId: ' }, { t: 'str', v: "'cnc-lathe-floor-a'" }, { t: 'txt', v: ',' },
  { t: 'txt', v: '});' },
  { t: 'empty', v: '' },
  { t: 'txt', v: 'stream.on(' }, { t: 'str', v: "'detection'" }, { t: 'txt', v: ', ({ type, score, bbox }) => {' },
  { t: 'kw', v: '  if' }, { t: 'txt', v: ' (type === ' }, { t: 'str', v: "'anomaly'" }, { t: 'txt', v: ' && score > 0.85) {' },
  { t: 'cmt', v: '    // auto-trigger alert pipeline' },
  { t: 'txt', v: '    alerts.send({ type, score, bbox });' },
  { t: 'txt', v: '  }' },
  { t: 'txt', v: '});' },
];

// Group into lines for rendering
const codeText = `import VisionGuardAI from '@visionguard/sdk';

const client = new VisionGuardAI({
  apiKey: process.env.VISIONGUARD_API_KEY,
  edge: true, // on-premise deployment
});

const stream = await client.streams.connect({
  url: 'rtsp://192.168.1.100:554/live',
  cameraId: 'cnc-lathe-floor-a',
});

stream.on('detection', ({ type, score, bbox }) => {
  if (type === 'anomaly' && score > 0.85) {
    // auto-trigger alert pipeline
    alerts.send({ type, score, bbox });
  }
});`;

export const ArchitectureSection: React.FC = () => (
  <section id="architecture" className="section-dark border-t border-white/[0.06]" aria-labelledby="arch-heading">
    <div className="section-container section-py">

      {/* ── Top: 2-col — copy left, code right ── */}
      <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="t-label mb-5 eyebrow" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Developer API
          </motion.p>
          <motion.h2 id="arch-heading"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.07 }}
            className="t-headline mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#FAFAFA' }}>
            Deploy, edit, and build in one afternoon
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.14 }}
            className="t-body-lg mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
            A clean SDK and REST API ship with every plan. Connect cameras, configure
            detection rules, and go live in hours — not months.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex gap-3">
            <a href="#" className="btn btn-sm" style={{ background: '#FAFAFA', color: '#000', borderColor: '#FAFAFA' }}>
              View API Docs
            </a>
            <a href="#" className="btn btn-sm" style={{ color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.15)', background: 'transparent' }}>
              GitHub SDK
            </a>
          </motion.div>
        </div>

        {/* Code block */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          className="code-block">
          <div className="code-block-header">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <span className="ml-3 text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.22)' }}>
              quickstart.ts
            </span>
          </div>
          <pre className="code-block pre" style={{ padding: '24px' }}>
            <code>
              {codeText.split('\n').map((line, i) => (
                <div key={i} className="block leading-[1.8] text-[12.5px] font-mono"
                  style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {line
                    .split(/(import|from|const|await|new|if|true|false)/g)
                    .map((part, j) => (
                      ['import','from','const','await','new','if','true','false'].includes(part)
                        ? <span key={j} style={{ color: '#C084FC' }}>{part}</span>
                        : part.includes('//') 
                          ? <span key={j} style={{ color: 'rgba(255,255,255,0.22)' }}>{part}</span>
                          : part.includes("'")
                            ? <span key={j}>{part.split(/('[^']*')/g).map((s, k) =>
                                s.startsWith("'") ? <span key={k} style={{ color: '#86EFAC' }}>{s}</span> : s
                              )}</span>
                            : part
                    ))
                  }
                </div>
              ))}
            </code>
          </pre>
        </motion.div>
      </div>

      {/* ── Bottom: 3-col architecture layer cards ── */}
      <div className="border-t border-white/[0.06] pt-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="t-label text-center mb-10" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Six-Layer Architecture
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div key={layer.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="card group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: 'rgba(255,255,255,0.55)' }} />
                  </div>
                  <div>
                    <span className="tabular-nums text-[10px] font-bold mr-2"
                      style={{ color: 'rgba(255,255,255,0.2)' }}>L{i + 1}</span>
                    <span className="text-[13px] font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {layer.label}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {layer.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {layer.tags.map(tag => (
                    <span key={tag} className="tag text-[10px]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
