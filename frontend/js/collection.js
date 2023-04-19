import { tvepisodesApi, gql } from './server-api.js'

const { data } = await tvepisodesApi.query(gql`
  query {
    tvepisodes {
      id
      name
      episodeNumber
      creativeWorkSeason
      datePublished
      copyrightHolderWebid
      price
      tvserie {
        id
        name
        price
        copyrightHolderWebid
      }
  }
  }
`)

const tvepisodes = data?.tvepisodes || []

if (tvepisodes.length) {
  const itemsGrid = document.getElementById('itemsgrid')
  for (let episode of tvepisodes) {
    const newitem = `<div class="col">
    <div class="card shadow-sm">
      <a class="navbar-brand" href="/viewer">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
          role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
            dy=".3em">${episode.tvserie.name}</text>
        </svg>
      </a>
      <div class="card-body">
        <p class="card-text">${episode.name}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">${episode.price}€</small>
        </div>
      </div>
    </div>
    </div>`
    itemsGrid.innerHTML += newitem
  }
}