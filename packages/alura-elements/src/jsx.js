const EVENTS = ['onClick', 'onBlur']
const MAP_TO_NATIVE_EVENTS = {
  onClick: 'click'
}
const MAP_TO_NATIVE_PROPS = {
  className: 'class'
}

const isEvent = (name) => EVENTS.includes(name)
const mapToNativeProps = (prop) => MAP_TO_NATIVE_PROPS[prop]
const mapToNativeEvents = (prop) => MAP_TO_NATIVE_EVENTS[prop]

const jsx = (tag, props, ...children) => {
  let element

  if (typeof tag === 'function') {
    element = tag()
  } else {
    element = document.createElement(tag)
  }

  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (isEvent(key)) {
        const nativeEventKey = mapToNativeEvents(key)
        element.addEventListener(nativeEventKey, value)
      }

      if (mapToNativeProps(key)) {
        element.setAttribute(mapToNativeProps(key), value)
      }
    }
  }

  for (const child of children) {
    if (child === null) continue

    if (typeof child === 'function') {
      const nestedElement = child()
      element.appendChild(nestedElement)

      continue
    }

    element.append(child)
  }

  return element
}

export default jsx
