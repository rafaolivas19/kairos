import { IconCheck, IconCopy } from "@tabler/icons-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group"
import { useState } from "react"

type CopyInputProps = {
  key: string
  value: string | undefined
}

export const CopyInput = (props: CopyInputProps) => {
  const { key, value } = props
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <InputGroup key={key}>
      <InputGroupInput
        placeholder={value}
        readOnly
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy"
          title="Copy"
          size="icon-xs"
          onClick={() => {
            copyToClipboard(value || "")
          }}
        >
          {isCopied ? <IconCheck /> : <IconCopy />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
