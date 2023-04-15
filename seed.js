'use strict'

const tvepisodes = [
  {
    name: "Toto, I've got a feeling we're not in Kansas anymore.",
    creativeWorkSeason: 1,
    episodeNumber: 1,
    copyrightHolderWebid:"https://fandroide.solidcommunity.net",
    price:0.1,
    tvserieName: 'The Wizard of Oz',
    tvserieCopyrightHolderWebid:"https://fandroide.solidcommunity.net",
    tvseriePrice:12.5
  },
  {
    name: "You're gonna need a bigger boat.",
    creativeWorkSeason: 1,
    episodeNumber: 1,
    copyrightHolderWebid:"https://fandroide.solidcommunity.net",
    price:0.1,
    tvserieName: 'Jaws',
    tvserieCopyrightHolderWebid:"https://fandroide.solidcommunity.net",
    tvseriePrice:12.5
  },
  {
    name: 'May the Force be with you.',
    creativeWorkSeason: 1,
    episodeNumber: 1,
    copyrightHolderWebid:"https://fandroide.solidcommunity.net",
    price:0.1,
    tvserieName: 'Star Wars',
    tvserieCopyrightHolderWebid:"https://fandroide.solidcommunity.net",
    tvseriePrice:12.5
  },
  {
    name: 'I have always depended on the kindness of strangers.',
    creativeWorkSeason: 1,
    episodeNumber: 1,
    copyrightHolderWebid:"https://fandroide.solidcommunity.net",
    price:0.1,
    tvserieName: 'A Streetcar Named Desire',
    tvserieCopyrightHolderWebid:"https://fandroide.solidcommunity.net",
    tvseriePrice:12.5
  }
]

module.exports = async function ({ entities, db, sql }) {
  for (const values of tvepisodes) {
    const tvserie = await entities.tvseries.save({ input: { name: values.tvserieName, copyrightHolderWebid: values.tvserieCopyrightHolderWebid , price: values.tvseriePrice } })

    console.log('Created serie:', tvserie)

    const tvepisode = {
      name: values.name,
      creativeWorkSeason: values.creativeWorkSeason,
      episodeNumber: values.episodeNumber,
      copyrightHolderWebid: values.copyrightHolderWebid,
      price: values.price,
      tvserieId: tvserie.id
    }

    await entities.tvepisode.save({ input: tvepisode })

    console.log('Created episode:', tvepisode)
  }
}