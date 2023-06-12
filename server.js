const  express =require('express');

const apps = express();

apps.get("/",(req,res)=>{
    res.send("hi1111111");
});

apps.get("/about",(req,res)=>{
    res.send("<h1>this is headingpppppppppppppppppppppppp</h1>");
})

apps.get("/contact",(req,res)=>{
    res.send(`<h1>heading</h1><a href="http://google.com">google</a>`);
})



apps.listen(5000,()=>{
   console.log("started");

})




