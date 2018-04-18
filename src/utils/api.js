var axios = require('axios');

module.exports={
     getRecent:function(type) {
        return axios.get('https://hackerhunt.co/api/topic/'+type+'/date')
        .then(function (data) {
            return data.data.data;
        })
    },

    convertToHtml(id) {
        return axios.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty')
        .then(function (data) {
           return data;
        })
    }

} 
