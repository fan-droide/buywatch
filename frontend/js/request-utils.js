import { tvepisodesApi, gql } from './server-api.js'
export async function sendFormData(form) {
    let saveError = false;
    const formData = new FormData(form)

    // for (const [key, value] of formData) {
    //     console.log(`${key}: ${value}\n`)
    // }
    const tvserieId = await tvepisodesApi.getTVserieId("Jaws")
    console.log(tvserieId)
    if (tvserieId) {
        const tvepisode = {
            name: "Paco",
            price: "10.0",
            episodeNumber:1, 
            creativeWorkSeason:2, 
            copyrightHolderWebid:"https://fandroide.solidcommunity.net/", 
            tvserieId,
        };
        console.log(tvepisode)
        const { error } = await tvepisodesApi.mutation(gql`
          mutation($tvepisode: TvepisodeInput!) {
            saveTvepisode(input: $tvepisode) {
              id
            }
          }
        `, { tvepisode });

        if (!error) {
            return { ok: true };
        } else {
            saveError = true;
        }
    } else {
        saveError = true;
    }
    return { error: saveError };

}