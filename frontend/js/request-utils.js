import { tvepisodesApi, gql } from './server-api.js'
export async function sendFormData(form) {
    let saveError = false
    const formData = new FormData(form)

    const tvseriePrice = '12.4'
    const tvserieId = await tvepisodesApi.getTVserieId(formData.get('partof'), tvseriePrice, formData.get('ownerwebid'))
    if (tvserieId) {
        const tvepisode = {
            name: formData.get('filename'),
            price: formData.get('price'),
            episodeNumber:1, 
            creativeWorkSeason:2, 
            copyrightHolderWebid:formData.get('ownerwebid'), 
            tvserieId,
        }        
        const { error } = await tvepisodesApi.mutation(gql`
          mutation($tvepisode: TvepisodeInput!) {
            saveTvepisode(input: $tvepisode) {
              id
            }
          }
        `, { tvepisode })

        if (!error) {
            return { ok: true }
        } else {
            saveError = true
        }
    } else {
        saveError = true
    }
    return { error: saveError }

}