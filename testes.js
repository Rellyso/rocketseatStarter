axios.get('https://api.github.com/users/rellyso')
   .then(function(response){
        console.log(`${response.data.name} tem ${response.data.followers} followers.`)
   })
   .catch(function(error){
        console.warn(error)
   })