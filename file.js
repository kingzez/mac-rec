const fs = require('fs/promises')

fs.readFile('user-rule.txt', { encoding: 'utf8' }).then((data) => {
  let arr = data.split('\n')
  arr = arr.sort()
  console.log(arr)
  fs.writeFile('user-rule.order.txt', arr.join('\n'), 'utf-8').then(() => {
    console.log('done')
  })
})
