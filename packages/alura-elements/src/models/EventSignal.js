import uniqueId from '../utils/uniqueId.js'

class EventSignal {
  name

  constructor() {
    this.name = uniqueId('useState-')
  }

  send(data) {
    const event = new CustomEvent(this.name, { bubbles: false, detail: data })
    document.dispatchEvent(event)
  }

  listen = (handler) => {
    document.addEventListener(this.name, handler)
  }

  remove = (handler) => {
    document.removeEventListener(this.name, handler)
  }
}

export default EventSignal
