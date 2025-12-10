// Notion API Types

export interface NotionRichText {
  type: "text" | "mention" | "equation";
  text?: {
    content: string;
    link?: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
}

export interface NotionBlock {
  object: "block";
  id: string;
  type: string;
  has_children: boolean;
  children?: NotionBlock[];

  paragraph?: {
    rich_text: NotionRichText[];
    color: string;
  };

  heading_1?: {
    rich_text: NotionRichText[];
    color: string;
  };

  heading_2?: {
    rich_text: NotionRichText[];
    color: string;
  };

  heading_3?: {
    rich_text: NotionRichText[];
    color: string;
  };

  bulleted_list_item?: {
    rich_text: NotionRichText[];
    color: string;
  };

  numbered_list_item?: {
    rich_text: NotionRichText[];
    color: string;
  };

  to_do?: {
    rich_text: NotionRichText[];
    checked: boolean;
    color: string;
  };

  toggle?: {
    rich_text: NotionRichText[];
    color: string;
  };

  quote?: {
    rich_text: NotionRichText[];
    color: string;
  };

  callout?: {
    rich_text: NotionRichText[];
    icon?: {
      type: "emoji" | "external" | "file";
      emoji?: string;
      external?: { url: string };
      file?: { url: string };
    };
    color: string;
  };

  divider?: object;

  table?: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
  };

  table_row?: {
    cells: NotionRichText[][];
  };

  code?: {
    rich_text: NotionRichText[];
    language: string;
    caption: NotionRichText[];
  };

  image?: {
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
    caption: NotionRichText[];
  };

  bookmark?: {
    url: string;
    caption: NotionRichText[];
  };

  link_preview?: {
    url: string;
  };

  embed?: {
    url: string;
    caption: NotionRichText[];
  };
}

export interface NotionPage {
  object: "page";
  id: string;
  properties: {
    title?: {
      title: NotionRichText[];
    };
    [key: string]: unknown;
  };
}

export interface NotionListResponse<T> {
  object: "list";
  results: T[];
  next_cursor: string | null;
  has_more: boolean;
}
