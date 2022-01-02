import ReactDOMServer from "react-dom/server"
import * as ContextMenu from "@radix-ui/react-context-menu"
import { CodeIcon, MagicWandIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Card({ source, animation }: ISnippet): JSX.Element {
  const itemStyle =
    "flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none text-gray-500 focus:bg-white/5 transition-colors duration-200 disabled:opacity-75"
  const itemTextStyle = "ml-2 flex-grow text-gray-200"
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="bg-gray-800 ring-1 ring-inset ring-gray-500/20 h-28 w-full rounded-lg flex cursor-context-menu">
          <div className="m-auto text-gray-200">{source}</div>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="radix-state-open:animate-fade-in w-52 px-1.5 py-1.5 rounded-lg bg-gray-900/95 backdrop-blur ring-1 ring-inset ring-gray-500/30">
        <ContextMenu.Item
          className={itemStyle}
          onClick={() => navigator.clipboard.writeText(ReactDOMServer.renderToString(source))}
        >
          <CodeIcon className="mb-px" />
          <span className={itemTextStyle}>Copy Source</span>
          <kbd>S</kbd>
        </ContextMenu.Item>
        <ContextMenu.Item
          className={itemStyle}
          onClick={() => navigator.clipboard.writeText(animation || "no custom animations used")}
        >
          <MagicWandIcon className="mb-[2px]" />
          <span className={itemTextStyle}>Copy Keyframes</span>
          <kbd>K</kbd>
        </ContextMenu.Item>
        <ContextMenu.Separator className="h-px m-1 bg-gray-500/30" />
        <ContextMenu.Item className={itemStyle}>
          <GitHubLogoIcon className="mb-[2px]" />
          <span className={itemTextStyle}>Open in Github</span>
          <kbd>G</kbd>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}
