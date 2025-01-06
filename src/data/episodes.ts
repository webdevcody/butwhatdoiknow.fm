export interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  file: string;
  duration: string; // Format: "HH:MM:SS"
  explicit: boolean;
  season?: number;
  episode?: number;
  image?: string; // Episode-specific image URL (optional)
}

export const podcastInfo = {
  title: "Podcast Name",
  description: "Talking about life, relationships, and everything in between.",
  language: "en",
  author: "Victoria Seibert",
  email: "vmatandiko@gmail.com",
  copyright: `© ${new Date().getFullYear()} Victoria Seibert`,
  image: "/podcast-cover.jpg", // Add your podcast cover image
  category: "Society & Culture",
  explicit: false,
  websiteUrl: "https://yourwebsite.com",
};

export const episodes: Episode[] = [
  {
    id: 1,
    title: "He Cheated, But She Stayed for the Money",
    description:
      "In this episode, we explore the controversial story of a high-profile relationship where a wealthy businessman's infidelity became public knowledge. Despite the scandal, his wife chose to maintain their marriage, sparking debates about love, money, and societal expectations. We dive deep into the complexities of their relationship and examine the various factors that influenced her decision to stay.",
    date: "2025-01-03",
    file: "/episodes/0001-rich-cheating-husbands.mp3",
    duration: "15:56",
    explicit: false,
    season: 1,
    episode: 1,
  },
  {
    id: 2,
    title: "The Pregancy from H**L That Almost Killed Me",
    description:
      "In this episode, I share my harrowing experience with multiple pregnancy complications including peripartum cardiomyopathy and pubic symphysis dysfunction. I discuss how these conditions impacted my pregnancy journey, the challenges of managing multiple serious health conditions simultaneously, and my ongoing journey with perimenopause. This raw and emotional episode aims to raise awareness about these lesser-known but serious pregnancy-related conditions.",
    date: "2025-01-06",
    file: "/episodes/0002-pregnancy-from-hell.mp3",
    duration: "55:16",
    explicit: false,
    season: 1,
    episode: 2,
  },
];
