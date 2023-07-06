"use client"

import markdownItAnchor from "markdown-it-anchor"
import highlightjs from 'markdown-it-highlightjs'
import markdownIt from "markdown-it"
import markdownItToc from "markdown-it-toc-done-right"

export default function Markdown({context}) {
    const html = markdownIt()
        .use(markdownItAnchor)
        .use(highlightjs)
        .render(context)
    return (
        <>
            <article className="prose max-w-none p-4" dangerouslySetInnerHTML={{__html: html}}/>
        </>
    );
}
