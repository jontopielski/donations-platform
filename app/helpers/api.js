import axios from 'axios'
import { serverUrl } from 'config/constants'

export function sendDonationToBackend(formData) {
  return axios({
    method: 'post',
    url: `${serverUrl}/api/donate`,
    data: formData
  })
}
