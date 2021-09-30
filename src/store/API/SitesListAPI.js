import { axiosInstance } from "./index";
import axios from 'axios'
import {
    API_URL,
    GET_SITES_LIST,

} from './urlConsts'

// const handlerEnabled = false;

const url = endpoint => `${API_URL}${endpoint}`;

const getSitesList = async () => {
    return await axiosInstance.get(`${url(GET_SITES_LIST)}`)
}


// const createSite = async ({ name, url, description, head, RSS, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }) => {
//     const formData = new FormData();
//     { name && formData.append('name', name); }
//     { url && formData.append('url', url); }
//     { description && formData.append('description', description) }
//     { head && formData.append('head', head) }
//     { encoding && formData.append('encoding', encoding) }
//     { factor && formData.append('factor', factor) }
//     { minimum && formData.append('minimum', minimum) }
//     { tracking && formData.append('tracking', tracking) }
//     { auto_publish && formData.append('auto_publish', auto_publish) }
//     { better_images && formData.append('better_images', better_images) }
//     { feed_definition && formData.append('feed_definition', feed_definition) }
//     { post_definition && formData.append('post_definition', post_definition) }
//     { refresh_interval && formData.append('refresh_interval', refresh_interval) }
//     { copy_from_site && formData.append('copy_from_site', copy_from_site) }
//     { guess_remote && formData.append('guess_remote', guess_remote) }
//     { tag_map && formData.append('tag_map', tag_map) }
//     { RSS && formData.append('feeds', RSS) }

//     return await axios.post(`${API_URL}${GET_SITES_LIST}`, formData, {
//         headers: {
//             Authorization: sessionStorage.getItem('token'),
//             "Content-Type": "application/json",
//         }
//     });
// }

const createSite = async ({ name, feeds, url, state, description, head, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }) => {
    const objective = { name, url, feeds, description, state, head, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }
    let dataforSend = Object.fromEntries(Object.entries(objective).filter(([_, v]) => v != null));
    return await axiosInstance.post(`${API_URL}${GET_SITES_LIST}`, dataforSend)
}



const getSiteDetails = async ({ id }) => {
    return await axiosInstance.get(`${url(GET_SITES_LIST)}/${id}`)
}

const updateSiteDetails = async ({ id, name, feeds, url, state, description, head, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }) => {
    const objective = { name, url, feeds, description, state, head, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }
    let dataforSend = Object.fromEntries(Object.entries(objective).filter(([_, v]) => v != null));
    return await axiosInstance.put(`${API_URL}${GET_SITES_LIST}/${id}`, dataforSend)
}

// const updateSiteDetails = async ({ id, name, url, RSS, description, head, encoding, factor, minimum, tracking, auto_publish, better_images, feed_definition, post_definition, refresh_interval, copy_from_site, guess_remote, tag_map }) => {
//     const formData = new FormData();
//     { name && formData.append('name', name); }
//     { url && formData.append('url', url); }
//     { description && formData.append('description', description) }
//     { head && formData.append('head', head) }
//     { encoding && formData.append('encoding', encoding) }
//     { factor && formData.append('factor', factor) }
//     { minimum && formData.append('minimum', minimum) }
//     { tracking && formData.append('tracking', tracking) }
//     { auto_publish && formData.append('auto_publish', auto_publish) }
//     { better_images && formData.append('better_images', better_images) }
//     { feed_definition && formData.append('feed_definition', feed_definition) }
//     { post_definition && formData.append('post_definition', post_definition) }
//     { refresh_interval && formData.append('refresh_interval', refresh_interval) }
//     { copy_from_site && formData.append('copy_from_site', copy_from_site) }
//     { guess_remote && formData.append('guess_remote', guess_remote) }
//     { tag_map && formData.append('tag_map', tag_map) }

//     return await axios.put(`${API_URL}${GET_SITES_LIST}/${id}`, formData, {
//         headers: {
//             Authorization: sessionStorage.getItem('token'),
//             "Content-Type": "application/json",
//         }
//     });
// }

const deleteSite = async ({ id }) => {
    return await axiosInstance.delete(`${url(GET_SITES_LIST)}/${id}`)
}

export default {
    getSitesList,
    getSiteDetails,
    createSite,
    updateSiteDetails,
    deleteSite
};
