const Movie=require('../models/Movie')

let movies=[{
    _id:1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Lukas',
    year: '2020',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.'
  }]


exports.getAll=()=>{
    const movies= Movie.find()
    return movies
    //return movies.slice()
}  

exports.search=async (title,genre,year)=>{
let result=await Movie.find().lean()
 

if(title){
        result=result.filter(m=>m.title.includes(title))
    } 
if(genre){
        result=result.filter(m=>m.genre===genre)
    }
        
if(year){
        result=result.filter(m=>m.year===year)
    }
//TODO filter result in mongoDB

    return result
}
        
        

exports.getOne=(movieId)=>{
    const movie=Movie.findById(movieId).populate('casts')
    return movie
}
exports.create= (movieData)=>{
    const result= Movie.create(movieData)
    return result
    
}
exports.attach=async (movieId,castId)=>{
    return Movie.findByIdAndUpdate(movieId,{$push:{casts:castId}})
}
exports.delete=(movieId)=>Movie.findByIdAndDelete(movieId)