const  express =require('express');

const apps = express();
require('dotenv').config();
const PORT = process.env.PORT || 2000;

apps.get("/",(req,res)=>{
    res.send("hi1111111");
});

apps.get("/about",(req,res)=>{
    res.send("<h1>this is headingpppppppppppppppppppppppp</h1>");
})

apps.get("/contact",(req,res)=>{
    res.send(`<h1>heading</h1><a href="http://google.com">google</a>`);
})



apps.listen(PORT,()=>{
   console.log(`started: ${PORT}`);

})




