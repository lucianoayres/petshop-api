import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import proprietarioRouter from './components/proprietario/proprietario.route.js'
import animalRouter from './components/animal/animal.route.js'
import servicoRouter from './components/servico/servico.route.js'
import postRouter from './components/post/post.route.js'
import comentarioRouter from './components/comentario/comentario.route.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/proprietario', proprietarioRouter)
app.use('/animal', animalRouter)
app.use('/servico', servicoRouter)
app.use('/post', postRouter)
app.use('/comentario', comentarioRouter)

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message })
})

app.listen(3000, () => console.log(`API Started on port: ${PORT}`))
