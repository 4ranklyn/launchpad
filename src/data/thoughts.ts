export interface ThoughtBlock {
  type: 'p' | 'h2' | 'h3' | 'blockquote' | 'img' | 'ul';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  size?: 'wide' | 'compact';
}

export interface ThoughtEntry {
  slug: string;
  title: string;
  category: string;
  date: string;
  publishDate?: string;
  readTime: string;
  summary: string;
  paragraphs: string[];
  externalUrl?: string;
  coverImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  contentBlocks?: ThoughtBlock[];
  disclaimer?: string;
}

export const thoughts: ThoughtEntry[] = [
  {
    slug: 'how-ai-enabled-larp-culture',
    title: 'How AI Has Enabled LARP Culture (A Google Ambassador Case)',
    category: 'Perspective',
    date: 'Nov 2026',
    publishDate: '2026-11-16',
    readTime: '3 min read',
    summary: "Generative AI didn't just lower the barrier to create; it lowered the cost of institutional LARPing (Live Action Role-Playing) to zero. The era of synthetic credentials is here. Don't fall for the render, look for the friction.",
    externalUrl: 'https://franklyn.page/thoughts/how-ai-enabled-larp-culture',
    disclaimer: "These thoughts are all mine and by no means I use these thought to represent any brand or anyone else but me.",
    contentBlocks: [
      {
        type: 'p',
        text: "We can’t pretend AI is just a productivity hack anymore. It edits videos, orders groceries, scripts workflows, and, if you have zero shame, fakes your entire reality. People are literally faking vacations with diffusion models now."
      },
      {
        type: 'p',
        text: "Generative AI didn't just lower the barrier to create; it lowered the cost of institutional LARPing (Live Action Role-Playing) to zero. As you know, 'performative male' archetype has just appeared in the middle of last year. This more recent variant is even more aggressive and performative."
      },
      {
        type: 'p',
        text: "The case that broke my feed started with an anomaly. An ambassador popped up out of nowhere with zero traceable roots or verifiable background, suddenly claiming on LinkedIn and Instagram to work under \"Google Gemini\" doing Social Media Marketing in the UK. A few people bought it immediately. When I quietly asked some of my peers in proximity, nobody verified anything, yet nobody wanted to question it either. So the illusion held with zero flaws."
      },
      {
        type: 'p',
        text: "Soon, the boasts escalated. They posted grand paragraphs about their massive community \"impact,\" tagging official Googlers and regional leads for verified credibility. But the minute another ambassador reached out with basic questions about collaboration legality and logistics, they ghosted instantly. Meanwhile, persona event stories revealed they were physically operating out of an entirely different country, miles away from the UK office they claimed to represent."
      },
      {
        type: 'p',
        text: "Fast forward a few months, and the title evolved: \"Google Student Ambassador Moderator.\""
      },
      {
        type: 'blockquote',
        text: "“Wow, this looks so inspiring,” said 98% of people in the comments."
      },
      {
        type: 'p',
        text: "To anyone actually doing the work, it was peak idiocracy."
      },
      {
        type: 'p',
        text: "To be clear on what the role actually is: a Google Student Ambassador Moderator isn't a salaried Google employee setting Gemini activation strategy. It is an elected student volunteer role designed to lead certain ambassador events, say the first batch of Indonesia's GSA 2026 graduation event last August."
      },
      {
        type: 'p',
        text: "Watching someone stroll in with a completely fabricated track record and claim an aspired leadership title felt like an insult to thousands of ambassadors who grind every week to progress legitimately, including myself."
      },
      {
        type: 'p',
        text: "When I saw on that moderator title, I spent weeks doubting back and forth. \nI was a student from UNS commuting on an aging 2003 Honda Supra, showing up to organize solo events while wondering if I had any business guiding anyone. I didn’t feel like a tech influencer, and I didn't have a corporate veneer. But I earned my place through friction:"
      },
      {
        type: 'ul',
        items: [
          "Running actual workshops where students built AI proof of concepts, not just vague discussions.",
          "Untangling ground-level logistics: setting up venues and handling real community chaos.",
          "Accepting success by whether a student left with a tangible skill, not by manufactured vanity reach."
        ]
      },
      {
        type: 'p',
        text: "Then, on October 7, Google released synthid.com. A tool to detect synthetic watermarks embedded in AI-generated imagery. I decided to run a quick test. I took their latest LinkedIn post, a photo of him standing proudly in front of a \"Google Gemini\" event backdrop with a polished, waxy complexion and identical pose, and fed it into the detector."
      },
      {
        type: 'p',
        text: "The verdict flashed immediately:"
      },
      {
        type: 'blockquote',
        text: "\"This photo was edited or generated with OpenAI.\""
      },
      {
        type: 'p',
        text: "The irony is almost poetic. A person claiming to represent Google Gemini at the global level, generating a fake event photo of themselves using OpenAI, and getting caught red-handed by Google’s own forensic tool."
      },
      {
        type: 'p',
        text: "The tragic part isn’t that they tried to fake it. It’s that the system rewarded them anyway. When verification is lazy and vanity metrics reign supreme, synthetic confidence beats quiet competence. People, even actual Googlers, already vouched for the facade because the posts looked shiny, balanced, polished, and friction-free."
      },
      {
        type: 'p',
        text: "AI makes it trivially easy to generate the illusion of impact. But you can't prompt your way into true technical competence, and you can't fake the grit it takes to deliver when you feel completely underqualified."
      },
      {
        type: 'p',
        text: "The era of synthetic credentials is here. Don't fall for the render, look for the friction."
      }
    ],
    paragraphs: [
      "We can’t pretend AI is just a productivity hack anymore. It edits videos, orders groceries, scripts workflows, and, if you have zero shame, fakes your entire reality. People are literally faking vacations with diffusion models now.",
      "Generative AI didn't just lower the barrier to create; it lowered the cost of institutional LARPing (Live Action Role-Playing) to zero. As you know, 'performative male' archetype has just appeared in the middle of last year. This more recent variant is even more aggressive and performative.",
      "The case that broke my feed started with an anomaly. An ambassador popped up out of nowhere with zero traceable roots or verifiable background, suddenly claiming on LinkedIn and Instagram to work under \"Google Gemini\" doing Social Media Marketing in the UK. A few people bought it immediately. When I quietly asked some of my peers in proximity, nobody verified anything, yet nobody wanted to question it either. So the illusion held with zero flaws.",
      "Soon, the boasts escalated. They posted grand paragraphs about their massive community \"impact,\" tagging official Googlers and regional leads for verified credibility. But the minute another ambassador reached out with basic questions about collaboration legality and logistics, they ghosted instantly. Meanwhile, persona event stories revealed they were physically operating out of an entirely different country, miles away from the UK office they claimed to represent.",
      "Fast forward a few months, and the title evolved: \"Google Student Ambassador Moderator.\"",
      "“Wow, this looks so inspiring,” said 98% of people in the comments. To anyone actually doing the work, it was peak idiocracy.",
      "To be clear on what the role actually is: a Google Student Ambassador Moderator isn't a salaried Google employee setting Gemini activation strategy. It is an elected student volunteer role designed to lead certain ambassador events, say the first batch of Indonesia's GSA 2026 graduation event last August.",
      "Watching someone stroll in with a completely fabricated track record and claim an aspired leadership title felt like an insult to thousands of ambassadors who grind every week to progress legitimately, including myself.",
      "When I saw on that moderator title, I spent weeks doubting back and forth. I was a student from UNS commuting on an aging 2003 Honda Supra, showing up to organize solo events while wondering if I had any business guiding anyone. I didn’t feel like a tech influencer, and I didn't have a corporate veneer. But I earned my place through friction: running actual workshops where students built AI proof of concepts; untangling ground-level logistics; and accepting success by whether a student left with a tangible skill, not by manufactured vanity reach.",
      "Then, on October 7, Google released synthid.com. A tool to detect synthetic watermarks embedded in AI-generated imagery. I decided to run a quick test. I took their latest LinkedIn post, a photo of him standing proudly in front of a \"Google Gemini\" event backdrop with a polished, waxy complexion and identical pose, and fed it into the detector.",
      "The verdict flashed immediately: \"This photo was edited or generated with OpenAI.\"",
      "The irony is almost poetic. A person claiming to represent Google Gemini at the global level, generating a fake event photo of themselves using OpenAI, and getting caught red-handed by Google’s own forensic tool.",
      "The tragic part isn’t that they tried to fake it. It’s that the system rewarded them anyway. When verification is lazy and vanity metrics reign supreme, synthetic confidence beats quiet competence. People, even actual Googlers, already vouched for the facade because the posts looked shiny, balanced, polished, and friction-free.",
      "AI makes it trivially easy to generate the illusion of impact. But you can't prompt your way into true technical competence, and you can't fake the grit it takes to deliver when you feel completely underqualified.",
      "The era of synthetic credentials is here. Don't fall for the render, look for the friction."
    ]
  },
  {
    slug: 'what-mountain-view-taught-me-google-io-2026',
    title: 'Memo from The Valley: When Young Local Ambition Met the Core of All Tech',
    category: 'Memo',
    date: 'Oct 2026',
    publishDate: '2026-10-01',
    readTime: '6 min read',
    summary: "It has been a while since I lived a short life in Mountain View, California. May 2026 had me always pinching myself every night, just because I still can't believe I travelled 20,000 miles to witness how are the future of agentic AI.",
    externalUrl: 'https://www.linkedin.com/pulse/memo-from-valley-when-young-local-ambition-met-core-all-wang-p6wzc/',
    coverImage: {
      src: '/thoughts/what-mountain-view-taught-me/touchdown-golden-gate.webp',
      alt: 'Memo from The Valley: When Young Local Ambition Met the Core of All Tech',
      caption: "Touchdown! We're at the legendary Golden Gate!"
    },
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
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/7-ambassadors-delegates.webp',
        alt: '7 Google Indonesian Ambassador Delegates',
        caption: '7 Google Indonesian Ambassador Delegates',
        size: 'compact'
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
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/presenting-makansini.webp',
        alt: 'presenting my MakanSini prototype (read: EatHere)',
        caption: 'presenting my MakanSini prototype (read: EatHere)',
        size: 'wide'
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
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/winning-ten-dragons.webp',
        alt: 'the winning Ten Dragons!',
        caption: 'the winning Ten Dragons!',
        size: 'compact'
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
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/final-photo-together.webp',
        alt: 'final photo together!',
        caption: 'final photo together!',
        size: 'wide'
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
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/job-applications-3-months.webp',
        alt: 'Job Application Tracker',
        caption: 'no words needed (this is in 3 months)',
        size: 'wide'
      },
      {
        type: 'p',
        text: "This is why I mentioned the barrier is so tall and so thick. The current situation might be devastating, but as a third-world-young-generation, grit is our best friend. This is proven by the playmakers who are the current billionaires holding the tech pillars exist today. The same grit can also be applied in this sparse condition. Even if that mean days of slow progress, constant rejections, and strict operations."
      },
      {
        type: 'img',
        src: '/thoughts/what-mountain-view-taught-me/ship-has-set-for-land.webp',
        alt: 'the ship has set for land after 3 months',
        caption: 'the ship has set for land after 3 months',
        size: 'compact'
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
