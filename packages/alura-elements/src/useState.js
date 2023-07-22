import EventSignal from './models/EventSignal.js'

const useState = (value) => {
  let newValue = value
  const eventSignal = new EventSignal()

  eventSignal.listen((event) => {
    newValue = event.detail
  })

  return [newValue, eventSignal.send]
}

export default useState
