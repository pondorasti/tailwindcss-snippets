import { useRef } from "react"
import ReactDOMServer from "react-dom/server"
import * as ContextMenu from "@radix-ui/react-context-menu"
import { CodeIcon, MagicWandIcon, PlayIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { useHotkeys } from "react-hotkeys-hook"
import { trackGoal } from "fathom-client"

export default function Card({ source, animation, editLink, playgroundLink }: ISnippet): JSX.Element {
  const copySourceRef = useRef<HTMLDivElement>(null)
  const copyAnimationRef = useRef<HTMLDivElement>(null)
  const openPlaygroundRef = useRef<HTMLDivElement>(null)
  const openGithubRef = useRef<HTMLDivElement>(null)

  const itemStyle =
    "flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none text-gray-500 focus:bg-white/5 radix-disabled:opacity-50 radix-disabled:cursor-not-allowed transition-colors ease-out duration-200 disabled:opacity-75"
  const itemTextStyle = "ml-2 flex-grow text-gray-200"

  // Copy Source
  useHotkeys("s", () => copySourceRef.current?.click())
  function handleCopySource() {
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(source))
    trackGoal("GHMTI4HH", 1)
  }

  // Copy Animation
  useHotkeys("k", () => copyAnimationRef.current?.click())
  function handleCopyAnimation() {
    navigator.clipboard.writeText(animation || "no custom animation used")
  }

  // Open in Playground
  useHotkeys("p", () => openPlaygroundRef.current?.click())
  function handleOpenInPlayground() {
    window.open(playgroundLink, "_blank")
  }

  // Open in Github
  useHotkeys("g", () => openGithubRef.current?.click())
  function handleOpenInGithub() {
    window.open(editLink, "_blank")
  }

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="bg-gray-800/50 ring-1 ring-inset ring-gray-500/20 h-28 w-full rounded-lg flex cursor-context-menu">
          <div className="m-auto text-gray-200 select-none">{source}</div>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="radix-state-open:animate-fade-in radix-state-closed:animate-fade-out origin-top-left w-52 px-1.5 py-1.5 rounded-lg bg-gray-900/95 backdrop-blur ring-1 ring-inset ring-gray-500/30">
        {/* Copy Source */}
        <ContextMenu.Item ref={copySourceRef} className={itemStyle} onSelect={() => handleCopySource()}>
          <CodeIcon className="mb-px" />
          <span className={itemTextStyle}>Copy Source</span>
          <kbd>S</kbd>
        </ContextMenu.Item>

        {/* Copy Animation */}
        <ContextMenu.Item
          ref={copyAnimationRef}
          className={itemStyle}
          disabled={!animation}
          onSelect={() => handleCopyAnimation()}
        >
          <MagicWandIcon className="mb-[2px]" />
          <span className={itemTextStyle}>Copy Keyframes</span>
          <kbd>K</kbd>
        </ContextMenu.Item>

        <ContextMenu.Separator className="h-px m-1 bg-gray-500/30" />

        {/* Open in Playground */}
        <ContextMenu.Item
          ref={openPlaygroundRef}
          className={itemStyle}
          disabled={!playgroundLink}
          onSelect={() => handleOpenInPlayground()}
        >
          <PlayIcon className="mb-px" />
          <span className={itemTextStyle}>Open in Playground</span>
          <kbd>P</kbd>
        </ContextMenu.Item>

        {/* Open in Github */}
        <ContextMenu.Item ref={openGithubRef} className={itemStyle} onSelect={() => handleOpenInGithub()}>
          <GitHubLogoIcon className="mb-px" />
          <span className={itemTextStyle}>Open in Github</span>
          <kbd>G</kbd>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}
