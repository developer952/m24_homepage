import type { NotionPage, NotionBlock, NotionListResponse } from "./types";

export class NotionService {
  private apiKey: string;
  private baseUrl = "https://api.notion.com/v1";
  private apiVersion = "2022-06-28";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    if (!this.apiKey) {
      throw new Error("Notion API key is required");
    }
  }

  private getHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      "Notion-Version": this.apiVersion,
      "Content-Type": "application/json",
    };
  }

  async getPage(pageId: string): Promise<NotionPage> {
    const response = await fetch(`${this.baseUrl}/pages/${pageId}`, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: `HTTP ${response.status}: ${response.statusText}`,
      }));
      throw new Error(
        `Failed to fetch Notion page: ${error.message || response.statusText}`
      );
    }

    return response.json();
  }

  async getPageBlocks(blockId: string): Promise<NotionBlock[]> {
    const allBlocks: NotionBlock[] = [];
    let nextCursor: string | null = null;

    do {
      const url = nextCursor
        ? `${this.baseUrl}/blocks/${blockId}/children?start_cursor=${nextCursor}`
        : `${this.baseUrl}/blocks/${blockId}/children`;

      const response = await fetch(url, {
        method: "GET",
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          message: `HTTP ${response.status}: ${response.statusText}`,
        }));
        throw new Error(
          `Failed to fetch Notion blocks: ${error.message || response.statusText}`
        );
      }

      const data: NotionListResponse<NotionBlock> = await response.json();

      for (const block of data.results) {
        if (block.has_children) {
          const childBlocks = await this.getPageBlocks(block.id);
          block.children = childBlocks;
        }
        allBlocks.push(block);
      }

      nextCursor = data.has_more ? data.next_cursor : null;
    } while (nextCursor);

    return allBlocks;
  }

  async getPageWithBlocks(pageId: string): Promise<{
    page: NotionPage;
    blocks: NotionBlock[];
  }> {
    const [page, blocks] = await Promise.all([
      this.getPage(pageId),
      this.getPageBlocks(pageId),
    ]);

    return { page, blocks };
  }
}

let notionService: NotionService | null = null;

export function getNotionService(): NotionService {
  if (!notionService) {
    const apiKey = process.env.NOTION_API_KEY;
    if (!apiKey) {
      throw new Error("NOTION_API_KEY environment variable is not set");
    }
    notionService = new NotionService(apiKey);
  }
  return notionService;
}
