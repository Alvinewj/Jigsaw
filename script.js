const unsplashImg = document.getElementById('unsplash');

fetch ('https://api.unsplash.com/photos/random&client_id=2ZAv_Qa3YRhUJ1QHyRBGlG1LuSYSXpWfmy3FBQwXouw#')

.then((result) => {
    console.log(result)
    return result.json()
}).then((apiImage => {
    console.log(apiImage)
    // const dogPic = apiImage.Response;
    // console.log(dogPic)
}))
.catch((err) => {
    console.log(err)
});

