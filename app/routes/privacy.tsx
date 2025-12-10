import type { Route } from "./+types/privacy";
import { getNotionService } from "~/lib/notion/service.server";
import { NotionRenderer } from "~/components/NotionRenderer";
import type { NotionBlock } from "~/lib/notion/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "개인정보처리방침 - m24" },
    { name: "description", content: "m24 개인정보처리방침" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const pageId = process.env.NOTION_PRIVACY_POLICY_PAGE_ID;

  if (!pageId) {
    throw new Error("NOTION_PRIVACY_POLICY_PAGE_ID is not set");
  }

  const notionService = getNotionService();
  const { blocks } = await notionService.getPageWithBlocks(pageId);

  return { blocks };
}

export default function Privacy({ loaderData }: Route.ComponentProps) {
  const { blocks } = loaderData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="m24" className="h-16" />
            </a>
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              홈으로
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <NotionRenderer blocks={blocks as NotionBlock[]} />
          </article>
        </div>
      </main>
    </div>
  );
}
