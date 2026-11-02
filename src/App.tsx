/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white px-6 sm:px-10 py-16 sm:py-24 md:py-32 flex flex-col justify-between">
      <article className="max-w-2xl mx-auto w-full space-y-8 text-[1.0625rem] sm:text-[1.1875rem] md:text-[1.25rem] leading-[1.75] font-[520] tracking-[-0.01em]">
        <header className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[550] tracking-tight text-black">
            hello
          </h1>
          <p className="text-black">good to have you here.</p>
        </header>

        <section className="space-y-4">
          <p>so here&apos;s the thing...</p>
          <p>
            i am currently burdened by my 8-6-5 work schedule (8 hours intern, 6 hours commute, 5 days a week)
          </p>
          <p>
            i am dying to have a launchpad web, but this is the best i can make right now.
          </p>
        </section>

        <section className="space-y-4">
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
            friends know me as an active, good-spirited persona. others might know me as the google ambassador who represented indonesia to google i/o. but i&apos;m pleased to meet you.
          </p>
        </section>

        <section className="space-y-3">
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

      <footer className="max-w-2xl mx-auto w-full pt-16 sm:pt-24 text-xs text-black/50 select-none">
        <p>the frank&apos;s launchpad</p>
      </footer>
    </main>
  );
}
