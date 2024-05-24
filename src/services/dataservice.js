import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000/';

export default {
    getAllSeasons(){
        return Axios.get('/seasons')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    // getAllTelefonok(){
    //     return Axios.get('/getTelefonok')
    //         .then(resp => {
    //             console.log(resp.data);
    //             return resp.data;
    //         })
    //         .catch(err =>{
    //             console.log(err);
    //             return Promise.reject(err);
    //         })
    // },
    getEpisodeById(id, page, limit){
        console.log(page);
        return Axios.get(`/episodes?season=${id}&_page=${page}&_limit=${limit}`)
           
    },
    saveUser(user){
        return Axios.post('/users',user).then(()=>{});
    },
    updateUser(user,id){
        return Axios.put(`/users/${id}`,user).then(()=>{});
    }


}