/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';

export default function App() {
  const currentYear = new Date().getFullYear();
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const socialTimerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const openBar = () => {
    if (socialTimerRef.current) clearTimeout(socialTimerRef.current);
    setIsSocialOpen(true);
  };

  const closeBarWithDelay = () => {
    if (socialTimerRef.current) clearTimeout(socialTimerRef.current);
    socialTimerRef.current = window.setTimeout(() => {
      setIsSocialOpen(false);
    }, 280);
  };

  const handlePointerToggle = (e: React.PointerEvent) => {
    e.stopPropagation();
    if (socialTimerRef.current) clearTimeout(socialTimerRef.current);
    setIsSocialOpen((prev) => !prev);
  };

  // Only listen for outside clicks when the tray is actually open
  useEffect(() => {
    if (!isSocialOpen) return;

    const handleOutside = (e: PointerEvent | MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsSocialOpen(false);
      }
    };

    // Small delay so the opening touch gesture doesn't instantly re-trigger outside closing
    const timer = window.setTimeout(() => {
      document.addEventListener('pointerdown', handleOutside);
    }, 60);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('pointerdown', handleOutside);
    };
  }, [isSocialOpen]);

  return (
    <main className="min-h-screen px-6 sm:px-10 py-16 sm:py-24 md:py-32 flex flex-col justify-between">
      <article className="max-w-2xl mx-auto w-full space-y-8 text-[1.0625rem] sm:text-[1.1875rem] md:text-[1.25rem] leading-[1.75] font-[460] tracking-[-0.01em]">
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] tracking-tight">
            hello!
          </h1>
          <p>
            my name is{' '}
            <span
              ref={containerRef}
              className="social-anchor group"
              onMouseEnter={openBar}
              onMouseLeave={closeBarWithDelay}
            >
              {/* Floating Social Tray - Anchored Directly to Name */}
              <span
                role="tooltip"
                className={`floating-social-tray ${isSocialOpen ? 'is-open' : ''}`}
                onMouseEnter={openBar}
                onMouseLeave={closeBarWithDelay}
              >
                <span
                  style={{
                    backgroundColor: 'var(--link-invert-bg)',
                    color: 'var(--link-invert-text)',
                  }}
                  className="inline-flex items-center gap-3.5 px-4 py-2 shadow-xl border border-black/10 dark:border-white/15 whitespace-nowrap"
                >
                  <a
                    href="https://instagram.com/franklynical"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (@franklynical)"
                    title="Instagram (@franklynical)"
                    className="opacity-80 hover:opacity-100 transition-opacity p-1 inline-flex items-center text-inherit hover:scale-105 transform duration-150"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  <span className="w-px h-4 opacity-25" style={{ backgroundColor: 'var(--link-invert-text)' }} />

                  <a
                    href="https://github.com/4ranklyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub (@4ranklyn)"
                    title="GitHub (@4ranklyn)"
                    className="opacity-80 hover:opacity-100 transition-opacity p-1 inline-flex items-center text-inherit hover:scale-105 transform duration-150"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>

                  <span className="w-px h-4 opacity-25" style={{ backgroundColor: 'var(--link-invert-text)' }} />

                  <a
                    href="https://linkedin.com/in/franklynical"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn (franklynical)"
                    title="LinkedIn (franklynical)"
                    className="opacity-80 hover:opacity-100 transition-opacity p-1 inline-flex items-center text-inherit hover:scale-105 transform duration-150"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.01-3.3 1.65 1.65 0 0 0 .01 3.3m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                    </svg>
                  </a>

                  <span className="w-px h-4 opacity-25" style={{ backgroundColor: 'var(--link-invert-text)' }} />

                  <a
                    href="https://www.google.com/search?q=jasson+franklyn+wang&oq=jasson+franklyn+wang&udm=50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Search: jasson franklyn wang"
                    title="Google Search"
                    className="opacity-80 hover:opacity-100 transition-opacity p-1 inline-flex items-center text-inherit hover:scale-105 transform duration-150"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" x2="16.65" y1="21" y2="16.65"/>
                    </svg>
                  </a>
                </span>
                <span
                  className="block w-2.5 h-2.5 rotate-45 mx-auto -mt-1.5 shadow-sm"
                  style={{ backgroundColor: 'var(--link-invert-bg)' }}
                />
              </span>

              {/* The Name Trigger with Fluid Sliding Inverse Highlight */}
              <span
                role="button"
                tabIndex={0}
                aria-expanded={isSocialOpen}
                aria-label="jasson franklyn wang - tap to toggle links"
                className={`sliding-link cursor-pointer select-none ${
                  isSocialOpen ? 'active' : ''
                }`}
                onPointerDown={handlePointerToggle}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsSocialOpen((prev) => !prev);
                  }
                }}
              >
                jasson franklyn wang
              </span>
            </span>
            .
          </p>
          <p>
            product manager and builder. compsci graduate. emerging content creator.
          </p>
        </header>

        <section>
          <p>
            currently interning at Privy as Product Manager, unlearning and relearning product management.
          </p>
        </section>

        <section>
          <p>
            i was 1 of 7 Indonesian delegate for Google I/O 2026 (Q2 2026), live in Mountain View. i presented my prototype, my team won the student global marketing pitch challenge.
          </p>
        </section>

        <section className="space-y-1">
          <p>
            before, i was 2nd gen, 1st cohort of Google Student Ambassador (2025).
          </p>
          <p>2x Content Grand Champion.</p>
          <p>one of highest engagements.</p>
        </section>

        <section>
          <p>
            even before, i was a Machine Learning Apprentice and Capstone Product Manager during Bangkit Academy last cohort (H2 2024).
          </p>
        </section>

        <section>
          <p>
            i possess technical foundation from college, now focusing on AI product development, (harnessing LLM workflows, agentic architectures, MCP, RAG), and rapid prototyping, while enriching business acumen.
          </p>
        </section>

        <section>
          <p>
            i also edit video and produce visual media when ideas need distribution.
          </p>
        </section>

        <section>
          <p>
            anything to talk?
            <br />
            send to{' '}
            <a
              href="mailto:jassonfranklyn@gmail.com"
              className="sliding-link"
            >
              mail
            </a>
            .
          </p>
        </section>

        <div className="pt-2">
          <p>that&apos;s all, fellas. thanks for coming!</p>
        </div>
      </article>

      <footer className="max-w-2xl mx-auto w-full pt-16 sm:pt-24 text-xs opacity-50 select-none">
        <p>the frank&apos;s launchpad · {currentYear}</p>
      </footer>
    </main>
  );
}
