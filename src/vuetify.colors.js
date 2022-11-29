import colors from 'vuetify/lib/util/colors'

let copyOfColors = Object.assign(
  {},
  {
    ...colors,
  },
)

let newColors = {}

for (const color in copyOfColors) {
  for (const level in copyOfColors[color]) {
    if (level === 'base') {
      newColors[color] = copyOfColors[color][level]
    } else {
      newColors[
        `${color}-${level.slice(0, level.length - 1)}-${
          level[level.length - 1]
        }`
      ] = copyOfColors[color][level]
    }
  }
}

export default colors
