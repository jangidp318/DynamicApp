export interface QuizData {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  class_list: string[];
  yoast_head: string;
  yoast_head_json: {
    title: string;
    description: string;
    robots: {
      index: string;
      follow: string;
      "max-snippet": string;
      "max-image-preview": string;
      "max-video-preview": string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_publisher: string;
    article_modified_time: string;
    og_image: {
      width: number;
      height: number;
      url: string;
      type: string;
    }[];
    twitter_card: string;
    twitter_site: string;
    twitter_misc: Record<string, string>;
    schema: {
      "@context": string;
      "@graph": SchemaGraph[];
    };
  };
  jetpack_likes_enabled: boolean;
  jetpack_sharing_enabled: boolean;
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: EmbeddedLink[];
    replies?: EmbeddedLink[];
  };
}

export interface SchemaGraph {
  "@type": string;
  "@id"?: string;
  url?: string;
  name?: string;
  isPartOf?: {
    "@id": string;
  };
  primaryImageOfPage?: {
    "@id": string;
  };
  image?: {
    "@id": string;
  };
  thumbnailUrl?: string;
  datePublished?: string;
  dateModified?: string;
  description?: string;
  breadcrumb?: {
    "@id": string;
  };
  inLanguage?: string;
  potentialAction?: {
    "@type": string;
    target: string[] | any;
    'query-input'?: any;
  }[];
  contentUrl?: string;
  width?: number;
  height?: number;
  caption?: string;
  itemListElement?: Breadcrumb[];
  publisher?: {
    "@id": string;
  };
  potentialActionList?: SearchAction[];
  logo?: Logo;
  sameAs?: string[];
}

export interface Breadcrumb {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

export interface SearchAction {
  "@type": string;
  target: {
    "@type": string;
    urlTemplate: string;
  };
  "query-input": {
    "@type": string;
    valueRequired: boolean;
    valueName: string;
  };
}

export interface Logo {
  "@type": string;
  inLanguage: string;
  "@id": string;
  url: string;
  contentUrl: string;
  width: number;
  height: number;
  caption: string;
}

export interface Link {
  href: string;
}

export interface EmbeddedLink extends Link {
  embeddable: boolean;
}