"use client"
import {ClipboardDocumentListIcon} from "@heroicons/react/24/outline";

export default function CopyButton({code}: { code: string }) {
    return (
        <button className="copy-code" onClick={() => navigator.clipboard.writeText(code)}>
            <ClipboardDocumentListIcon className="w-5 h-5 text-white"/>
        </button>
    );
}
