new Vue({
 el: '#exercise',
 data: {
 	myName: 'Alex',
 	myAge: 26,
 	img: 'https://s-media-cache-ak0.pinimg.com/originals/30/f4/2c/30f42c25ac743c1e643522013bfb14d2.png'
 },
 methods: {
 	randomFloat: function() {
 		return Math.random()*100;
 	}
 }
})