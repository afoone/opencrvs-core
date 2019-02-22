import * as mongoose from 'mongoose'

import { MONGO_URL } from './constants'
import { logger } from 'src/logger'

const db = mongoose.connection

db.on('disconnected', () => {
  logger.info('MongoDB disconnected')
})

db.on('connected', () => {
  logger.info('Connected to MongoDB')
})

const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time))

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(
      MONGO_URL,
      { autoReconnect: true }
    )
  } catch (err) {
    logger.info(
      'MongoDB takes a while to start. Retrying connection. Please wait'
    )
    await wait(1000)
    return connect()
  }
}

export async function stop() {
  mongoose.disconnect()
}

export async function start() {
  return connect()
}
