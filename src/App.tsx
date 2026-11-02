/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen px-6 sm:px-10 py-16 sm:py-24 md:py-32 flex flex-col justify-between">
      <article className="max-w-2xl mx-auto w-full space-y-8 text-[1.0625rem] sm:text-[1.1875rem] md:text-[1.25rem] leading-[1.75] font-[520] tracking-[-0.01em]">
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[550] tracking-tight">
            hello!
          </h1>
          <p>
            my name is{' '}
            <a
              href="https://www.google.com/search?q=jasson+franklyn+wang&oq=jasson+franklyn+wang"
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-link"
            >
              jasson franklyn wang
            </a>
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

        <section className="space-y-2">
          <p>
            you can access my instagram{' '}
            <a
              href="https://instagram.com/franklynical"
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-link"
            >
              here
            </a>
            ,
          </p>
          <p>
            github{' '}
            <a
              href="https://github.com/4ranklyn"
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-link"
            >
              here
            </a>
            ,
          </p>
          <p>
            and my linkedin{' '}
            <a
              href="https://linkedin.com/in/franklynical"
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-link"
            >
              here
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
