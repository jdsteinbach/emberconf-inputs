import { initialize } from 'reveal.js'
import { initHighlightingOnLoad } from 'highlight.js'

initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  width: 1024,
  height: 600,
  transition: 'fade'
});

initHighlightingOnLoad()
