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
  title: "But Who the Hell Knows!",
  description:
    "A podcast to share my thoughts about life, relationships, health, and everything in between.",
  subtitle: "Life, relationships, health, and everything in between",
  language: "en",
  author: "Victoria Seibert",
  email: "vmatandiko@gmail.com",
  copyright: `© ${new Date().getFullYear()} Victoria Seibert`,
  image: "/images/cover.png",
  category: "Society & Culture",
  explicit: false,
  websiteUrl: "https://yourwebsite.com",
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
    image: `/images/episode-1.png`,
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
    image: "/images/episode-2.png",
  },
];
