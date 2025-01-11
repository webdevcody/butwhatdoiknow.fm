export interface Episode {
  id: number;
  title: string;
  description: string;
  subtitle?: string;
  date: string;
  file: string;
  duration: string; // Format: "HH:MM:SS"
  explicit: boolean;
  seasonNumber?: number;
  episodeNumber?: number;
  image?: string;
}

export interface PodcastInfo {
  title: string;
  description: string;
  subtitle?: string;
  summary?: string;
  language: string;
  author: string;
  email: string;
  copyright: string;
  image: string;
  category: string;
  explicit: boolean;
  websiteUrl: string;
  type?: "episodic" | "serial";
}

export const podcastInfo: PodcastInfo = {
  title: "But Who the Hell Knows!?",
  description:
    "A podcast to share my thoughts about life, relationships, health, and everything in between.",
  subtitle: "Life, relationships, health, and everything in between",
  language: "en",
  author: "Victoria Seibert",
  email: "vmatandiko@gmail.com",
  copyright: `© ${new Date().getFullYear()} Victoria Seibert`,
  image: "/images/cover.jpeg",
  category: "Society & Culture",
  explicit: false,
  websiteUrl: "https://butwhothehellknows.com",
  type: "episodic",
};

export const episodes: Episode[] = [
  {
    id: 1,
    title: "He Cheated, But She Stayed for the Money",
    subtitle:
      "Exploring the complexities of love, money, and societal expectations",
    description:
      "In this episode, we explore the controversial story of a high-profile relationship where a wealthy businessman's infidelity became public knowledge. Despite the scandal, his wife chose to maintain their marriage, sparking debates about love, money, and societal expectations. We dive deep into the complexities of their relationship and examine the various factors that influenced her decision to stay.",
    date: "2025-01-03",
    file: "/episodes/0001-rich-cheating-husbands.mp3",
    duration: "15:56",
    explicit: false,
    seasonNumber: 1,
    episodeNumber: 1,
    image: `/images/episode-1.jpeg`,
  },
  {
    id: 2,
    title: "The Pregancy from H**L that Almost Killed Me",
    subtitle: "A harrowing story of pregnancy complications",
    description:
      "In this episode, I share my harrowing experience with multiple pregnancy complications including peripartum cardiomyopathy and pubic symphysis dysfunction. I discuss how these conditions impacted my pregnancy journey, the challenges of managing multiple serious health conditions simultaneously, and my ongoing journey with perimenopause. This raw and emotional episode aims to raise awareness about these lesser-known but serious pregnancy-related conditions.",
    date: "2025-01-06",
    file: "/episodes/0002-pregnancy-from-hell.mp3",
    duration: "55:16",
    explicit: false,
    seasonNumber: 1,
    episodeNumber: 2,
    image: "/images/episode-2.jpeg",
  },
  {
    id: 3,
    title: "From Advice to Judgement: The Dark Side of Mom Groups",
    subtitle: "Navigating the world of mommy-shaming",
    description:
      "In this episode, I dive deep into the complex and often toxic world of mom groups on social media. From passive-aggressive comments to outright mom-shaming, we explore how these supposedly supportive spaces can become breeding grounds for competition and judgment. I share personal experiences and observations of how mothers constantly try to one-up each other - from bragging about their children's milestones to criticizing others' parenting choices. We'll discuss why it's so hard for moms to genuinely celebrate each other's successes and how this competitive culture affects maternal mental health. This episode aims to shed light on the dark side of mom groups and encourage more authentic, supportive relationships among mothers.",
    date: "2025-01-11",
    file: "/episodes/0003-mom-groups.mp3",
    duration: "30:45",
    explicit: false,
    seasonNumber: 1,
    episodeNumber: 3,
    image: "/images/episode-3.jpeg",
  },
];
