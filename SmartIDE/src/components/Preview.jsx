import React from 'react'
import { useSelector } from 'react-redux'

const Preview = () => {
    const tabsState = useSelector(state => state.tabs)

    const getCode = (lang) => {
        return tabsState.find(obj => obj.lang === lang).code
    }

    const srcDoc = `
    <html>
    <head>
    <style>${getCode("css")}</style>
    </head>
    <body>
    ${getCode("html")}
    <script>${getCode("js")}</script>
    </body>
    </html>
    `
  return (
    <div className='flex absoule top-0 left-0 w-full h-full bg-zinc-900'>
        <iframe className='block w-full h-full  bg-zinc-100' srcDoc={srcDoc} sandbox='allow-scripts'></iframe>
    </div>
  )
}

export default Preview