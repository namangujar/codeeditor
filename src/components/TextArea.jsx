import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import '../App.css'

function TextArea() {

  const boilerplate = '<!DOCTYPE html>\n<html>\n<head>\n<title>write your code</title>\n</head>\n<body>\n</body>\n</html>';

  const [code, setCode] = useState(boilerplate)

  useEffect(() => {

    if (typeof window !== undefined) {
      Prism.highlightAll();
    }
    
  }, [code])

  return (
      <div className='wrapper'>
        <textarea
          value={code}
          onChange={(e) => { setCode(e.target.value) }}
        />
        <pre>
          <code className='language-html'>{code}</code>
        </pre>
      </div>
  )
}

export default TextArea