import { useState } from "react"
import ReactDOMServer from "react-dom/server"
import * as ContextMenu from "@radix-ui/react-context-menu"
import { CodeIcon, MagicWandIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { useHotkeys } from "react-hotkeys-hook"
import { trackGoal } from "fathom-client"

export default function Card({ source, animation, editLink }: ISnippet): JSX.Element {
  const [isContextMenuOpen, setContextMenu] = useState(false)

  const itemStyle =
    "flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none text-gray-500 focus:bg-white/5 transition-colors ease-out duration-200 disabled:opacity-75"
  const itemTextStyle = "ml-2 flex-grow text-gray-200"

  // Copy Source
  function handleCopySource() {
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(source))
    trackGoal("GHMTI4HH", 1)
  }
  useHotkeys(
    "s",
    () => {
      if (isContextMenuOpen) {
        handleCopySource()
        setContextMenu(false)
      }
    },
    [isContextMenuOpen]
  )

  // Copy Animation
  function handleCopyAnimation() {
    navigator.clipboard.writeText(animation || "no custom animation used")
  }
  useHotkeys(
    "k",
    () => {
      if (isContextMenuOpen) {
        handleCopyAnimation()
        setContextMenu(false)
      }
    },
    [isContextMenuOpen]
  )

  // Open in Github
  function handleOpenInGithub() {
    window.open(editLink, "_blank")
  }
  useHotkeys(
    "g",
    () => {
      if (isContextMenuOpen) {
        handleOpenInGithub()
        setContextMenu(false)
      }
    },
    [isContextMenuOpen]
  )

  return (
    <ContextMenu.Root
      onOpenChange={(open) => {
        console.log(open)
        setContextMenu(open)
      }}
    >
      <ContextMenu.Trigger>
        <div className="bg-gray-800/40 backdrop-blur ring-1 ring-inset ring-gray-500/20 h-28 w-full rounded-lg flex cursor-context-menu">
          <div className="m-auto text-gray-200">{source}</div>
        </div>
      </ContextMenu.Trigger>
      {isContextMenuOpen && (
        <ContextMenu.Content className="radix-state-open:animate-fade-in radix-state-closed:animate-fade-out origin-top-left w-52 px-1.5 py-1.5 rounded-lg bg-gray-900/95 backdrop-blur ring-1 ring-inset ring-gray-500/30">
          <ContextMenu.Item className={itemStyle} onSelect={() => handleCopySource()}>
            <CodeIcon className="mb-px" />
            <span className={itemTextStyle}>Copy Source</span>
            <kbd>S</kbd>
          </ContextMenu.Item>
          <ContextMenu.Item className={itemStyle} onSelect={() => handleCopyAnimation()}>
            <MagicWandIcon className="mb-[2px]" />
            <span className={itemTextStyle}>Copy Keyframes</span>
            <kbd>K</kbd>
          </ContextMenu.Item>
          <ContextMenu.Separator className="h-px m-1 bg-gray-500/30" />
          <ContextMenu.Item className={itemStyle} onSelect={() => handleOpenInGithub()}>
            <GitHubLogoIcon className="mb-px" />
            <span className={itemTextStyle}>Open in Github</span>
            <kbd>G</kbd>
          </ContextMenu.Item>
        </ContextMenu.Content>
      )}
    </ContextMenu.Root>
  )
}
