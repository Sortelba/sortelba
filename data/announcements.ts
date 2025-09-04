import { PageProps } from "../App";

export interface AnnouncementArticle {
  id: string;
  label: string;
  headline: string;
  fullText: string;
  image?: string;
  videoUrl?: string; // For embeddable videos
  youtubeLinkUrl?: string; // For direct YouTube links
}

export interface AnnouncementAction {
    id: string;
    label: string;
    headline: string;
    action: (props: any) => void;
}

export type Announcement = AnnouncementArticle | AnnouncementAction;

// To add new content, populate this array with announcement objects.
export const announcementData: Announcement[] = [
  {
    id: 'supreme-strobeck-2025',
    label: 'INTEL+',
    headline: 'Neuer Supreme Clip: Ein Must-Watch',
    fullText: 'Gefilmt wurde der Clip von William Strobeck, und er zeigt starke Lines und individuellen Stil von Joseph Campos, Kevin Bradley, Troy Gipson, Hyun Kummer und Auguste Bouznad – ein absolutes Must-Watch für 2025.',
    youtubeLinkUrl: 'https://www.youtube.com/watch?v=hMNvpoKUkmE' // This video disallows embedding, so we link to it directly.
  }
];
