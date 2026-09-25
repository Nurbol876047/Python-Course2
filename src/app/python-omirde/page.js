'use client';
import { useState, useEffect, useRef } from 'react';
import { MODULES } from '../../data/python_omirde';
import Link from 'next/link';
import Head from 'next/head';

export default function PythonOmirde() {
  const [view, setView] = useState('dashboard'); // 'dashboard', 'lesson'
  const [activeModule, setActiveModule] = useState(null);
  const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'example', 'task'
  const [taskIndex, setTaskIndex] = useState(0);
  const [pyodide, setPyodide] = useState(null);
  const [output, setOutput] = useState('');
  const [code, setCode] = useState('');
  
  // ... pyodide setup
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.onload = async () => {
      const py = await window.loadPyodide();
      setPyodide(py);
    };
    document.body.appendChild(script);
  }, []);

  // Update code when task changes
  useEffect(() => {
    if (activeModule && activeModule.tasks && activeModule.tasks[taskIndex]) {
      setCode(activeModule.tasks[taskIndex].starter);
      setOutput('');
    }
  }, [activeModule, taskIndex, activeTab]);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Python жүктелуде, сәл күте тұрыңыз...');
      return;
    }
    if (code.includes('___')) {
      setOutput('❌ Қате: Кодтағы бос орындарды (___) толтырыңыз.');
      return;
    }
    setOutput('Орындалуда...');
    try {
      pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
      `);
      pyodide.runPython(code);
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      setOutput(stdout);
    } catch (err) {
      const errStr = err.toString();
      const lines = errStr.split('\n').filter(l => l.trim().length > 0);
      const actualError = lines[lines.length - 1];
      setOutput('❌ ' + actualError);
    }
  };

  if (view === 'dashboard') {
    return (
      <div className="container">
        <header className="header">
          <Link href="/" className="back-btn">← Артқа</Link>
          <h1>Python Өмірде 🐍</h1>
          <p>Бағдарламалауды нақты мысалдар арқылы үйрен</p>
        </header>

        <div className="modules-grid">
          {MODULES.map(mod => (
            <div key={mod.id} className="module-card" onClick={() => { setActiveModule(mod); setView('lesson'); setActiveTab('theory'); setTaskIndex(0); }}>
              <div className="module-hero" dangerouslySetInnerHTML={{ __html: mod.heroSvg }} />
              <div className="module-info">
                <h3>{mod.title}</h3>
                <p className="topic">{mod.topic}</p>
                <span className="time">⏱ {mod.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === 'lesson' && activeModule) {
    return (
      <div className="lesson-container">
        <header className="lesson-header">
          <button className="back-btn" onClick={() => setView('dashboard')}>← Тізімге қайту</button>
          <h2>{activeModule.title}</h2>
        </header>

        <div className="tabs">
          <button className={activeTab === 'theory' ? 'active' : ''} onClick={() => setActiveTab('theory')}>Теория</button>
          <button className={activeTab === 'example' ? 'active' : ''} onClick={() => setActiveTab('example')}>Мысал</button>
          <button className={activeTab === 'task' ? 'active' : ''} onClick={() => { setActiveTab('task'); setTaskIndex(0); }}>Тапсырма</button>
        </div>

        <div className="tab-content">
          {activeTab === 'theory' && (
            <div className="theory-section">
              {activeModule.theory.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
              {activeModule.theoryCodes?.map((c, i) => (
                <pre key={i} className="code-block"><code>{c}</code></pre>
              ))}
            </div>
          )}

          {activeTab === 'example' && (
            <div className="example-section">
              {activeModule.examples?.map((ex, i) => (
                <div key={i} className="example-item">
                  <p dangerouslySetInnerHTML={{ __html: ex.intro }}></p>
                  <pre className="code-block"><code>{ex.code}</code></pre>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'task' && activeModule.tasks && activeModule.tasks.length > 0 && (
            <div className="task-section-wrapper">
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {activeModule.tasks.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setTaskIndex(i)}
                    style={{
                      padding: '0.5rem 1rem', 
                      background: i === taskIndex ? 'var(--primary)' : '#e2e8f0',
                      color: i === taskIndex ? 'white' : '#4a5568',
                      border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div dangerouslySetInnerHTML={{ __html: activeModule.tasks[taskIndex].conditionHtml }} />
              <div dangerouslySetInnerHTML={{ __html: activeModule.tasks[taskIndex].valuesHtml }} style={{ marginTop: '1rem', padding: '1rem', background: '#e0f2fe', borderRadius: '8px' }} />
              
              <div className="editor-container">
                <textarea 
                  className="code-editor"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button className="run-btn" onClick={runCode}>▶ Кодты орындау</button>
              </div>

              <div className="output-container">
                <h4>Нәтиже:</h4>
                <pre className="output">{output || 'Мұнда бағдарлама нәтижесі көрінеді.'}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
