import axios from 'axios'
import { TagsState } from '../../store/ducks/tags/contracts/state'

export const TweetsApi = {
    fetchTags():Promise<TagsState['items']> {
        return axios.get('/tags').then(({data}) => data)
    }
}