"use client"

import { ClipboardCopyIcon } from "@radix-ui/react-icons"

export default function CopyButton({code}: { code: string }) {
    return (
        <button className="copy-code" onClick={() => navigator.clipboard.writeText(code)}>
            <ClipboardCopyIcon className="w-5 h-5 text-white" />
        </button>
    );
}
