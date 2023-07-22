;[
  {
    type: 'text',
    value:
      'import { mount, useState } from "alura-elements";\n\nconst App = () => {\n  const [counter, setCounter] = useState(0);\n\n  const handleIncrement = () => setCounter(counter + 1);\n  const handleDecrement = () => setCounter(counter - 1);\n\n  return (\n    '
  },
  {
    type: 'component',
    tag: 'div',
    params: [{ name: 'className', type: 'string', value: 'container' }],
    children: [
      { type: 'text', value: '\n      ' },
      {
        type: 'component',
        tag: 'span',
        params: [],
        children: [{ type: 'variable', value: 'counter' }]
      },
      { type: 'text', value: '\n\n      ' },
      {
        type: 'component',
        tag: 'div',
        params: [{ name: 'className', type: 'string', value: 'buttons' }],
        children: [
          { type: 'text', value: '\n        ' },
          {
            type: 'component',
            tag: 'button',
            params: [
              { name: 'onClick', type: 'variable', value: 'handleIncrement' }
            ],
            children: [{ type: 'text', value: 'increment' }]
          },
          { type: 'text', value: '\n        ' },
          {
            type: 'component',
            tag: 'button',
            params: [
              { name: 'onClick', type: 'variable', value: 'handleDecrement' }
            ],
            children: [{ type: 'text', value: 'decrement' }]
          },
          { type: 'text', value: '\n      ' }
        ]
      },
      { type: 'text', value: '\n    ' }
    ]
  },
  {
    type: 'text',
    value: '\n  );\n};\n\nmount(document.getElementById("root"), '
  },
  { type: 'component', tag: 'App', params: [], children: [] },
  {
    type: 'text',
    value:
      ');\n\n// https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/\n// https://cssgradient.io/gradient-backgrounds/'
  }
]
