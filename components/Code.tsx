import { Meta } from "../types/blog"
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import kotlin from 'highlight.js/lib/languages/kotlin'
hljs.registerLanguage('kotlin', kotlin)
hljs.registerLanguage('bash', bash)


interface Props {
    code: string,
    meta: Meta
}

export default function Code({code, meta}: Props): JSX.Element { 
    if(hljs.listLanguages().find(language => meta.lang == language)){
        const hlCode = hljs.highlight(code, { language: meta.lang as string }).value
        return <pre><code dangerouslySetInnerHTML={{__html: hlCode}}/></pre>
    }
    return <div></div>
 }