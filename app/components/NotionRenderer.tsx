import type { NotionBlock, NotionRichText } from "~/lib/notion/types";

function RichText({ richTexts }: { richTexts: NotionRichText[] }) {
  return (
    <>
      {richTexts.map((text, index) => {
        let content: React.ReactNode = text.plain_text;

        if (text.annotations.bold) {
          content = <strong key={`bold-${index}`}>{content}</strong>;
        }
        if (text.annotations.italic) {
          content = <em key={`italic-${index}`}>{content}</em>;
        }
        if (text.annotations.strikethrough) {
          content = <s key={`strike-${index}`}>{content}</s>;
        }
        if (text.annotations.underline) {
          content = <u key={`underline-${index}`}>{content}</u>;
        }
        if (text.annotations.code) {
          content = (
            <code
              key={`code-${index}`}
              className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
            >
              {content}
            </code>
          );
        }

        if (text.href) {
          content = (
            <a
              key={`link-${index}`}
              href={text.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {content}
            </a>
          );
        }

        return <span key={index}>{content}</span>;
      })}
    </>
  );
}

function BlockRenderer({ block, listIndex }: { block: NotionBlock; listIndex?: number }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          <RichText richTexts={block.paragraph?.rich_text || []} />
        </p>
      );

    case "heading_1":
      return (
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
          <RichText richTexts={block.heading_1?.rich_text || []} />
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
          <RichText richTexts={block.heading_2?.rich_text || []} />
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
          <RichText richTexts={block.heading_3?.rich_text || []} />
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li className="text-gray-600 dark:text-gray-300 ml-4 mb-1">
          <RichText richTexts={block.bulleted_list_item?.rich_text || []} />
          {block.children && block.children.length > 0 && (
            <ul className="list-disc list-inside mt-1">
              {block.children.map((child) => (
                <BlockRenderer key={child.id} block={child} />
              ))}
            </ul>
          )}
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="text-gray-600 dark:text-gray-300 ml-4 mb-1">
          <RichText richTexts={block.numbered_list_item?.rich_text || []} />
          {block.children && block.children.length > 0 && (
            <ol className="list-decimal list-inside mt-1">
              {block.children.map((child) => (
                <BlockRenderer key={child.id} block={child} />
              ))}
            </ol>
          )}
        </li>
      );

    case "to_do":
      return (
        <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 mb-1">
          <input
            type="checkbox"
            checked={block.to_do?.checked}
            readOnly
            className="mt-1"
          />
          <span className={block.to_do?.checked ? "line-through opacity-60" : ""}>
            <RichText richTexts={block.to_do?.rich_text || []} />
          </span>
        </div>
      );

    case "toggle":
      return (
        <details className="text-gray-600 dark:text-gray-300 mb-2">
          <summary className="cursor-pointer font-medium">
            <RichText richTexts={block.toggle?.rich_text || []} />
          </summary>
          {block.children && block.children.length > 0 && (
            <div className="ml-4 mt-2">
              {block.children.map((child) => (
                <BlockRenderer key={child.id} block={child} />
              ))}
            </div>
          )}
        </details>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-300 my-4">
          <RichText richTexts={block.quote?.rich_text || []} />
        </blockquote>
      );

    case "callout":
      return (
        <div className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg my-4">
          {block.callout?.icon?.emoji && (
            <span className="text-xl">{block.callout.icon.emoji}</span>
          )}
          <div className="text-gray-600 dark:text-gray-300">
            <RichText richTexts={block.callout?.rich_text || []} />
          </div>
        </div>
      );

    case "divider":
      return <hr className="border-gray-200 dark:border-gray-700 my-6" />;

    case "table":
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <tbody>
              {block.children?.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  className={
                    rowIndex === 0 && block.table?.has_column_header
                      ? "bg-gray-50 dark:bg-gray-800"
                      : ""
                  }
                >
                  {row.table_row?.cells.map((cell, cellIndex) => {
                    const isHeader =
                      (rowIndex === 0 && block.table?.has_column_header) ||
                      (cellIndex === 0 && block.table?.has_row_header);
                    const CellTag = isHeader ? "th" : "td";
                    return (
                      <CellTag
                        key={cellIndex}
                        className={`px-4 py-3 text-left text-sm border-b border-gray-200 dark:border-gray-700 ${
                          isHeader
                            ? "font-semibold text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        <RichText richTexts={cell} />
                      </CellTag>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "code":
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
          <code className="text-sm font-mono">
            {block.code?.rich_text.map((t) => t.plain_text).join("")}
          </code>
        </pre>
      );

    case "image": {
      const imageUrl =
        block.image?.type === "external"
          ? block.image.external?.url
          : block.image?.file?.url;
      return (
        <figure className="my-4">
          <img
            src={imageUrl}
            alt={block.image?.caption?.[0]?.plain_text || "Image"}
            className="max-w-full rounded-lg"
          />
          {block.image?.caption && block.image.caption.length > 0 && (
            <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              <RichText richTexts={block.image.caption} />
            </figcaption>
          )}
        </figure>
      );
    }

    case "bookmark":
      return (
        <a
          href={block.bookmark?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 my-4"
        >
          <span className="text-blue-600 dark:text-blue-400 hover:underline">
            {block.bookmark?.url}
          </span>
        </a>
      );

    case "link_preview":
      return (
        <a
          href={block.link_preview?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 my-4"
        >
          <span className="text-blue-600 dark:text-blue-400 hover:underline">
            {block.link_preview?.url}
          </span>
        </a>
      );

    default:
      return null;
  }
}

function groupListItems(blocks: NotionBlock[]): (NotionBlock | NotionBlock[])[] {
  const result: (NotionBlock | NotionBlock[])[] = [];
  let currentList: NotionBlock[] = [];
  let currentListType: string | null = null;

  for (const block of blocks) {
    if (
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item"
    ) {
      if (currentListType === block.type) {
        currentList.push(block);
      } else {
        if (currentList.length > 0) {
          result.push(currentList);
        }
        currentList = [block];
        currentListType = block.type;
      }
    } else {
      if (currentList.length > 0) {
        result.push(currentList);
        currentList = [];
        currentListType = null;
      }
      result.push(block);
    }
  }

  if (currentList.length > 0) {
    result.push(currentList);
  }

  return result;
}

export function NotionRenderer({ blocks }: { blocks: NotionBlock[] }) {
  const groupedBlocks = groupListItems(blocks);

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, index) => {
        if (Array.isArray(item)) {
          const listType = item[0].type;
          const ListTag = listType === "numbered_list_item" ? "ol" : "ul";
          const listClass =
            listType === "numbered_list_item"
              ? "list-decimal list-inside space-y-1 mb-4"
              : "list-disc list-inside space-y-1 mb-4";

          return (
            <ListTag key={`list-${index}`} className={listClass}>
              {item.map((block, blockIndex) => (
                <BlockRenderer key={block.id} block={block} listIndex={blockIndex + 1} />
              ))}
            </ListTag>
          );
        }

        return <BlockRenderer key={item.id} block={item} />;
      })}
    </div>
  );
}
