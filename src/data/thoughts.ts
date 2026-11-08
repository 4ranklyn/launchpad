export interface ThoughtBlock {
  type: 'p' | 'h2' | 'h3' | 'blockquote';
  text: string;
}

export interface ThoughtEntry {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  paragraphs: string[];
  externalUrl?: string;
  contentBlocks?: ThoughtBlock[];
}

export const thoughts: ThoughtEntry[] = [
  {
    slug: 'what-mountain-view-taught-me-google-io-2026',
    title: 'Memo from The Valley: When Young Local Ambition Met the Core of All Tech',
    category: 'Memo',
    date: 'Oct 2026',
    readTime: '6 min read',
    summary: "It has been a while since I lived a short life in Mountain View, California. May 2026 had me always pinching myself every night, just because I still can't believe I travelled 20,000 miles to witness how are the future of agentic AI.",
    externalUrl: 'https://www.linkedin.com/pulse/memo-from-valley-when-young-local-ambition-met-core-all-wang-p6wzc/',
    contentBlocks: [
      {
        type: 'p',
        text: "It has been a while since I lived a short life in Mountain View, California. May 2026 had me always pinching myself every night, just because I still can't believe I travelled 20,000 miles to witness how are the future of agentic AI."
      },
      {
        type: 'p',
        text: "Google selected 7 Google Student Ambassador Indonesia representatives from hundreds and thousands available, and it's also been a journey with them since the first time we briefed our visa camp around April."
      },
      {
        type: 'h3',
        text: "Now the reason I'm writing this memo are these 2 lines:"
      },
      {
        type: 'blockquote',
        text: '"The Silicon Valley was the land that sparked my ever growing ambitions and fueled my expectations. However, the reality in Indonesia remains humbling, that I needed to find my own way to my greatest potential."'
      },
      {
        type: 'h2',
        text: 'Concepts are as celebrated as mature products'
      },
      {
        type: 'p',
        text: "I want to highlight how 1 weeks prior to the Students' programming, the team handling it sent us a form to further ask our capabilities with 'vibe-coding'. I know sometimes it remains controversial, but I believe that the thing itself is a double-bladed sword. This is important knowing Indonesia is one of AI's largest market, yet usage is sub-optimal to other countries."
      },
      {
        type: 'p',
        text: "I remembered prototyping during GDG Jogjakarta 's Build with AI session where I built a fun 'Tinder for Restaurants' to resolve students' food decision fatigue (like mine). And I remembered that I would develop it for JuaraVibeCoding by GDG Live Indonesia ."
      },
      {
        type: 'p',
        text: "So I thought why don't I submit this one to the form. Little did I know, the Creative Technologist seemed to like it (I presented it shortly during Aaron Wade 's session about 'Vibe-Coding' too)."
      },
      {
        type: 'p',
        text: "Looking back, I didn't expect that my fun little side project would be as valued as they are a growing startup, existing products, or a simple yet very useful feature. And for a product builder like me, this was a huge signal."
      },
      {
        type: 'h2',
        text: 'Everyone was worth speaking to'
      },
      {
        type: 'p',
        text: "I missed talking to many Googlers and Executives to discuss the things that I am passionate for. Hell, I drafted a 12 questions document for nothing... or so I thought."
      },
      {
        type: 'p',
        text: "Looking back, the whole room with fellow ambassadors gave another kind of bliss. Everyone was so welcoming as much as they were so sharp and perceptive. I remembered my Dragons' Den team (our fun marketing challenge) were so drowned in capturing the victory that we still kept in touch to prepare our deck even when we were apart (I still remember giving them some help while I was walking at 9 PM around Stanford)."
      },
      {
        type: 'h2',
        text: 'The vibes are very inclusive (even if the bar is so high and so thick)'
      },
      {
        type: 'p',
        text: "I still didn't stress enough that as a foreigner, travelling to somewhere like the U.S. is so hard and rigorous. The selection was as rough as it was unexpected too."
      },
      {
        type: 'p',
        text: "Yet somehow, every people there was very welcoming. I saw that in the US (maybe the Valley), people celebrated anyone who's willing to learn. I'd also argue that it's easier to find like-minded people there who would agree to talk about what's happening in the world or in tech than in here."
      },
      {
        type: 'p',
        text: "The barrier that most people know is only an enough English language perception, a hard-passing visa, and an considerably large amount of money. They didn't know us ambassadors contributed months into our performance, built our own brand around the ambassadorship, and what in our minds for this spectacle."
      },
      {
        type: 'h2',
        text: 'The High Valley vs. The Steep Local Reality'
      },
      {
        type: 'p',
        text: "Somehow, if you put younger me to chase a degree in Harvard, Stanford, or any tech-reputable university in the west, I would settle down with any full-time job easy. But reality has a way to humble people down."
      },
      {
        type: 'p',
        text: "I didn't live lucky. I only graduated from semi-target national university, on a degree only on its emerging path, looking to kickstart a career in a seemingly awkward job in an awkward tech space that has just been normalized by the winter."
      },
      {
        type: 'p',
        text: "I also didn't have much professional experience due to multiple causes surrounding personal financial and shifting curriculum."
      },
      {
        type: 'p',
        text: "We know top 3 target is law for breaking through in prestigious career pipeline, as well as a student internship experience(s), so this is heartbreakingly normal yet so gut-wrenching and mind-bending. I came from a student delegated to Mountain View, to desperately navigating hundreds of job applications and rejections over rejections. The blow is so hard I started question my own worth every single day."
      },
      {
        type: 'p',
        text: "This is why I mentioned the barrier is so tall and so thick. The current situation might be devastating, but as a third-world-young-generation, grit is our best friend. This is proven by the playmakers who are the current billionaires holding the tech pillars exist today. The same grit can also be applied in this sparse condition. Even if that mean days of slow progress, constant rejections, and strict operations."
      },
      {
        type: 'p',
        text: "But the same grit needs to adapt pragmatically to the situations present. Look for asymmetric leverage, risk safely, and iterate with caution. Small compounds to big interest."
      },
      {
        type: 'p',
        text: "My goal is to reach the Valley again, to bring more of it to Indonesia. The current options have me in a chokehold. But no dead ends for the one willing to carve a path."
      },
      {
        type: 'p',
        text: "Godspeed. #GoogleStudentAmbassador #IOStudents26"
      }
    ],
    paragraphs: [
      "It has been a while since I lived a short life in Mountain View, California. May 2026 had me always pinching myself every night, just because I still can't believe I travelled 20,000 miles to witness how are the future of agentic AI.",
      "Google selected 7 Google Student Ambassador Indonesia representatives from hundreds and thousands available, and it's also been a journey with them since the first time we briefed our visa camp around April.",
      '"The Silicon Valley was the land that sparked my ever growing ambitions and fueled my expectations. However, the reality in Indonesia remains humbling, that I needed to find my own way to my greatest potential."',
      "I want to highlight how 1 weeks prior to the Students' programming, the team handling it sent us a form to further ask our capabilities with 'vibe-coding'. I know sometimes it remains controversial, but I believe that the thing itself is a double-bladed sword. This is important knowing Indonesia is one of AI's largest market, yet usage is sub-optimal to other countries.",
      "Looking back, I didn't expect that my fun little side project would be as valued as they are a growing startup, existing products, or a simple yet very useful feature. And for a product builder like me, this was a huge signal.",
      "The barrier that most people know is only an enough English language perception, a hard-passing visa, and an considerably large amount of money. They didn't know us ambassadors contributed months into our performance, built our own brand around the ambassadorship, and what in our minds for this spectacle.",
      "We know top 3 target is law for breaking through in prestigious career pipeline, as well as a student internship experience(s), so this is heartbreakingly normal yet so gut-wrenching and mind-bending. I came from a student delegated to Mountain View, to desperately navigating hundreds of job applications and rejections over rejections. The blow is so hard I started question my own worth every single day.",
      "This is why I mentioned the barrier is so tall and so thick. The current situation might be devastating, but as a third-world-young-generation, grit is our best friend. But the same grit needs to adapt pragmatically to the situations present. Look for asymmetric leverage, risk safely, and iterate with caution. Small compounds to big interest.",
      "My goal is to reach the Valley again, to bring more of it to Indonesia. The current options have me in a chokehold. But no dead ends for the one willing to carve a path. Godspeed. #GoogleStudentAmbassador #IOStudents26"
    ]
  }
];
