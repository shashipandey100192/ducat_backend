const  express =require('express');
const apps = express();
const path = require('path');
apps.use(express.static('public'));
require('dotenv').config();
apps.use('/static', express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 2000;

apps.get("/",(req,res)=>{
    res.send("hi1111111");
});

apps.get("/about",(req,res)=>{
    res.send("<h1>this is headingpppppppppppppppppppppppp</h1>");
})

apps.get("/contact",(req,res)=>{
    res.send(`<h1>heading</h1><a href="http://google.com">google</a>`);
});
apps.get("/myform",(req,res)=>{
    res.send('about.html');
})



apps.listen(PORT,()=>{
   console.log(`started: ${PORT}`);

})




