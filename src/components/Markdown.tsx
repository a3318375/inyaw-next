"use client"

import markdownItAnchor from "markdown-it-anchor"
import highlightjs from 'markdown-it-highlightjs'
import markdownIt from "markdown-it"

export default function Markdown({context}: { context: string }) {
    const html = markdownIt()
        .use(markdownItAnchor)
        .use(highlightjs)
        .render(context)
    return (
        <>
            <article className="prose max-w-none p-4 dark:prose-invert" dangerouslySetInnerHTML={{__html: html}}/>
        </>
    );
}
