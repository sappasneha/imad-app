var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    title: 'Article one',
    date:'15 sep 2017',
    heading:'Article one',
    content:`
     <a href="/">Home</a>
        <div>
            August 10,2017
        </div>
        <div>
            <p>
                Life is what you make of it!!
            </p>
        </div>`
    
},
'article-two':{
    title: 'Article Two',
    date:'28 Nov 2017',
    heading:'Article Two',
    content:`
     <a href="/">Home</a>
        <div>
            August 10,2017
        </div>
        <div>
            <p>
                Better to be silent!!
            </p>
        </div>`
},
'article-three':{
    title: 'Article Three',
    date:'30 May 2017',
    heading:'Article Three',
    content:`
     <a href="/">Home</a>
        <div>
            August 10,2017
        </div>
        <div>
            <p>
                Love u Mom n Dad!!
            </p>
        </div>`
}
};

function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
        
    
    var htmltemplate=`
    <html>
    <head>
        <title>
        ${title}
        </title>
    <meta name="view port" content="width=device-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <div class="container">
    <body>
        <a href="/">Home</a>
        <div>
            ${date}
        </div>
        <div>
            <p>
                ${content}
            </p>
        </div>
        
    </body>
    </div>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
     res.send((createtemplate(articles[articlename]) ));


});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
