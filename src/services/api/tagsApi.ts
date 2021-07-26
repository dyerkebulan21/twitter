import axios from 'axios'
import { TagsState } from '../../store/ducks/tags/contracts/state'

export const TagsApi = {
    async fetchTags():Promise<TagsState['items']> {
        return axios.get('/tags').then(({data}) => data)
    }
}