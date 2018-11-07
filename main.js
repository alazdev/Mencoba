var quotes=[
    { no :'1',img :'img/quotes/1.jpg'},
    { no :'2',img :'img/quotes/2.jpg'},
    { no :'3',img :'img/quotes/3.jpg'},
    { no :'4',img :'img/quotes/4.jpg'},
    { no :'5',img :'img/quotes/5.jpg'},
    { no :'6',img :'img/quotes/6.jpg'},
    { no :'7',img :'img/quotes/7.jpg'},
    { no :'8',img :'img/quotes/8.jpg'},
    { no :'9',img :'img/quotes/9.jpg'},
    { no :'10',img :'img/quotes/10.jpg'},
    { no :'11',img :'img/quotes/11.jpg'},
    { no :'12',img :'img/quotes/12.jpg'},
    { no :'13',img :'img/quotes/13.jpg'},
    { no :'14',img :'img/quotes/14.jpg'},
    { no :'15',img :'img/quotes/15.jpg'},
    { no :'16',img :'img/quotes/16.jpg'},
    { no :'17',img :'img/quotes/17.jpg'},
    { no :'18',img :'img/quotes/18.jpg'},
    { no :'19',img :'img/quotes/19.jpg'},
    { no :'20',img :'img/quotes/20.jpg'}
]

var gombalan=[
    { no :'1',img :'img/gombalan/1.jpg'},
    { no :'2',img :'img/gombalan/2.jpg'},
    { no :'3',img :'img/gombalan/3.jpg'},
    { no :'4',img :'img/gombalan/4.jpg'},
    { no :'5',img :'img/gombalan/5.jpg'},
    { no :'6',img :'img/gombalan/6.jpg'},
    { no :'7',img :'img/gombalan/7.jpg'},
    { no :'8',img :'img/gombalan/8.jpg'},
    { no :'9',img :'img/gombalan/9.jpg'},
    { no :'10',img :'img/gombalan/10.jpg'}
]

var lucu=[
    { no :'1',img :'img/lucu/1.png'},
    { no :'2',img :'img/lucu/2.jpg'},
    { no :'3',img :'img/lucu/3.jpg'},
    { no :'4',img :'img/lucu/4.jpg'},
    { no :'5',img :'img/lucu/5.jpg'},
    { no :'6',img :'img/lucu/6.jpg'},
    { no :'7',img :'img/lucu/7.jpg'},
    { no :'8',img :'img/lucu/8.jpg'},
    { no :'9',img :'img/lucu/9.jpg'},
    { no :'10',img :'img/lucu/10.png'}
]

function preview(){
    var q = document.getElementById('q4').getAttribute("src")
    if (q == 'img/quotes/1.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/20.jpg')
    }else if (q == 'img/quotes/2.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/1.jpg')
    }else if (q == 'img/quotes/3.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/2.jpg')
    }else if (q == 'img/quotes/4.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/3.jpg')
    }else if (q == 'img/quotes/5.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/4.jpg')
    }else if (q == 'img/quotes/6.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/5.jpg')
    }else if (q == 'img/quotes/7.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/6.jpg')
    }else if (q == 'img/quotes/8.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/7.jpg')
    }else if (q == 'img/quotes/9.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/8.jpg')
    }else if (q == 'img/quotes/10.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/9.jpg')
    }else if (q == 'img/quotes/11.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/10.jpg')
    }else if (q == 'img/quotes/12.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/11.jpg')
    }else if (q == 'img/quotes/13.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/12.jpg')
    }else if (q == 'img/quotes/14.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/13.jpg')
    }else if (q == 'img/quotes/15.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/14.jpg')
    }else if (q == 'img/quotes/16.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/15.jpg')
    }else if (q == 'img/quotes/17.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/16.jpg')
    }else if (q == 'img/quotes/18.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/17.jpg')
    }else if (q == 'img/quotes/19.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/18.jpg')
    }else if (q == 'img/quotes/20.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/19.jpg')
    }
}

function cekQuotes(){
    var q = document.getElementById('q4').getAttribute("src")
    if (q == 'img/quotes/1.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/2.jpg')
    }else if (q == 'img/quotes/2.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/3.jpg')
    }else if (q == 'img/quotes/3.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/4.jpg')
    }else if (q == 'img/quotes/4.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/5.jpg')
    }else if (q == 'img/quotes/5.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/6.jpg')
    }else if (q == 'img/quotes/6.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/7.jpg')
    }else if (q == 'img/quotes/7.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/8.jpg')
    }else if (q == 'img/quotes/8.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/9.jpg')
    }else if (q == 'img/quotes/9.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/10.jpg')
    }else if (q == 'img/quotes/10.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/11.jpg')
    }else if (q == 'img/quotes/11.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/12.jpg')
    }else if (q == 'img/quotes/12.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/13.jpg')
    }else if (q == 'img/quotes/13.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/14.jpg')
    }else if (q == 'img/quotes/14.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/15.jpg')
    }else if (q == 'img/quotes/15.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/16.jpg')
    }else if (q == 'img/quotes/16.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/17.jpg')
    }else if (q == 'img/quotes/17.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/18.jpg')
    }else if (q == 'img/quotes/18.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/19.jpg')
    }else if (q == 'img/quotes/19.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/20.jpg')
    }else if (q == 'img/quotes/20.jpg'){
        document.getElementById('q4').setAttribute("src",'img/quotes/1.jpg')
    }
}
function preview2(){
	var q = document.getElementById('g4').getAttribute("src")
    if (q == 'img/gombalan/1.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/10.jpg')
    }else if (q == 'img/gombalan/2.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/1.jpg')
    }else if (q == 'img/gombalan/3.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/2.jpg')
    }else if (q == 'img/gombalan/4.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/3.jpg')
    }else if (q == 'img/gombalan/5.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/4.jpg')
    }else if (q == 'img/gombalan/6.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/5.jpg')
    }else if (q == 'img/gombalan/7.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/6.jpg')
    }else if (q == 'img/gombalan/8.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/7.jpg')
    }else if (q == 'img/gombalan/9.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/8.jpg')
    }else if (q == 'img/gombalan/10.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/9.jpg')
}
}

function cekGombalan(){
    var q = document.getElementById('g4').getAttribute("src")
    if (q == 'img/gombalan/1.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/2.jpg')
    }else if (q == 'img/gombalan/2.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/3.jpg')
    }else if (q == 'img/gombalan/3.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/4.jpg')
    }else if (q == 'img/gombalan/4.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/5.jpg')
    }else if (q == 'img/gombalan/5.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/6.jpg')
    }else if (q == 'img/gombalan/6.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/7.jpg')
    }else if (q == 'img/gombalan/7.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/8.jpg')
    }else if (q == 'img/gombalan/8.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/9.jpg')
    }else if (q == 'img/gombalan/9.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/10.jpg')
    }else if (q == 'img/gombalan/10.jpg'){
        document.getElementById('g4').setAttribute("src",'img/gombalan/1.jpg')
}
}
function cekLucu(){
	var q = document.getElementById('l4').getAttribute("src")
    if (q == 'img/lucu/1.png'){
        document.getElementById('l4').setAttribute("src",'img/lucu/2.jpg')
    }else if (q == 'img/lucu/2.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/3.jpg')
    }else if (q == 'img/lucu/3.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/4.jpg')
    }else if (q == 'img/lucu/4.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/5.jpg')
    }else if (q == 'img/lucu/5.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/6.jpg')
    }else if (q == 'img/lucu/6.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/7.jpg')
    }else if (q == 'img/lucu/7.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/8.jpg')
    }else if (q == 'img/lucu/8.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/9.jpg')
    }else if (q == 'img/lucu/9.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/10.png')
    }else if (q == 'img/lucu/10.png'){
        document.getElementById('l4').setAttribute("src",'img/lucu/1.png')
}
}
function preview3(){
    var q = document.getElementById('l4').getAttribute("src")
    if (q == 'img/lucu/1.png'){
        document.getElementById('l4').setAttribute("src",'img/lucu/10.png')
    }else if (q == 'img/lucu/2.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/1.png')
    }else if (q == 'img/lucu/3.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/2.jpg')
    }else if (q == 'img/lucu/4.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/3.jpg')
    }else if (q == 'img/lucu/5.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/4.jpg')
    }else if (q == 'img/lucu/6.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/5.jpg')
    }else if (q == 'img/lucu/7.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/6.jpg')
    }else if (q == 'img/lucu/8.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/7.jpg')
    }else if (q == 'img/lucu/9.jpg'){
        document.getElementById('l4').setAttribute("src",'img/lucu/8.jpg')
    }else if (q == 'img/lucu/10.png'){
        document.getElementById('l4').setAttribute("src",'img/lucu/9.jpg')
}
}