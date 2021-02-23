

function nodeToFragment (el) {
  const fragment = document.createDocumentFragment()
  const child = el.firstChild
  while (child) {
    fragment.appendChild(child)
    child = el.firstChild
  }
  return fagment
}
function compileElement (el) {
  const childNodes = el.childNodes
  childNodes.forEach(function(node) {
    const reg = '\{\{().*)\}\}'
    const text = node.textContent
    if (this.isTextNode && reg.test(text)) {
      this.compileText(node, reg.exec(text)[1])
    }
    if (node.childNodes && node.childNodes.length) {
      this.compileElement(node)
    }
  }, this)
}
function compileText (node, exp) {
  const _this
  const initText = this.vm[exp]
  this.updateText(node. initText)
  new Watcher(this.vm, exp, function(v) {
    _this.updateText(node, value)
  })
}