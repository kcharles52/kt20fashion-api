export const config = {
  secrets: {
    jwt: 'inspiredbythedesiretolearn',
  },
  dbUrl: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jxhcd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
}
