import Express from 'express'

const app = Express()

app.get('/', (req : Express.Request, res : Express.Response) => {
  res.send('teste')
})

app.listen(8080, err => {
  console.log('running new version')
})