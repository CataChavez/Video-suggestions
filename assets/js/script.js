
class Video{
  constructor(url){
  this._url = url
	}
	get url(){
		return this._url
	}
}

class Music extends Video{
	constructor(url){
	super(url)	
	}
}

class Movie extends Video{
	constructor(url){
	super(url)	
	}
}

class Serie extends Video{
	constructor(url){
	super(url)	
	}
}


let musicURL = '<iframe width="560" height="315"src="https://www.youtube.com/embed/1lyu1KKwC74" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>';

const musicVideo = new Music(musicURL)

let movieURL = '<iframe width="560" height="315"src="https://www.youtube.com/embed/5PSNL1qE6VY" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>';

const movieVideo = new Movie(movieURL)

let serieURL = '<iframe width="560" height="315" src="https://www.youtube.com/embed/cUnkjEIW2-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

const serieVideo = new Serie(serieURL)

var musicBtn = $('[data-target="#collapseOne"]')
var movieBtn = $('[data-target="#collapseTwo"]')
var serieBtn = $('[data-target="#collapseThree"]')



musicBtn.on('click',function(){
	var target = $('#musica')
		return function(){
		$('.card-body.text-center').empty()
		target.append(musicVideo.url)
	}
}())

movieBtn.on('click', function(){
	var target = $('#peliculas')
		return function(){
		$('.card-body.text-center').empty()
		target.append(movieVideo.url)
	}
}())

serieBtn.on('click', function(){
	var target = $('#series')
		return function(){
		$('.card-body.text-center').empty()
		target.append(serieVideo.url)
	}
}())

