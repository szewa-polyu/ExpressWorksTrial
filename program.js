// Hello World!

// var express = require('express')
// var app = express()
// app.get('/home', function (req, res) {	
	// res.end('Hello World!')
// })
// app.listen(process.argv[2])


// Static

// var path = require('path')
// var express = require('express')
// var app = express()
// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')))
// app.listen(process.argv[2])


// Jade (which is renamed to Pug)

//console.log(process.argv)
//var path = require('path')
// var express = require('express')

// var app = express()
// app.set('views', process.argv[3])
// app.set('view engine', 'jade')

// app.get('/home', function (req, res) {
	// res.render('index', {date: new Date().toDateString()})
// })

// app.listen(process.argv[2])


// Good old form

//console.log(process.argv)

// var express = require ('express')
// var bodyparser = require('body-parser')

// var app = express()
// app.use(bodyparser.urlencoded({extended: false}))
// app.post('/form', function (req, res) {
	// res.end(req.body.str.split('').reverse().join(''))
// })

// app.listen(process.argv[2])


// Stylish CSS

// console.log(process.argv)

// var path = require('path')
// var express = require('express')
// var stylus = require('stylus')

// var app = express()

// app.use(stylus.middleware(process.argv[3]))
// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')))

// app.listen(process.argv[2])


// Param pam pam

// console.log(process.argv)

// var crypto = require('crypto')
// var express = require ('express')

// var app = express()
// app.put('/message/:ID', function (req, res) {
	// res.send(crypto
		// .createHash('sha1')
		// .update(new Date().toDateString() + req.params.ID)
		// .digest('hex'))
// })

// app.listen(process.argv[2])


// What's in query

// console.log(process.argv)

// var express = require ('express')

// var app = express()
// app.get('/search', function (req, res) {
	// var obj = req.query
	// console.log(obj)
	// res.send(obj)
// })

// app.listen(process.argv[2])


// What's in query

console.log(process.argv)

var fs = require('fs')
var express = require ('express')

var app = express()
app.get('/books', function (req, res) {
	fs.readFile(process.argv[3], function (err, data) {
		if (err) {
			return res.send(err)
		} 
		
		try {
			var books = JSON.parse(data)
			res.json(books)
		} catch (err) {
			res.send(err)
		}
	})
})

app.listen(process.argv[2])
