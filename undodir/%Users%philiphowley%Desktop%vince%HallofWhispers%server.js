Vim�UnDo� �X�*��XgE_4ۢ��h��T�m��)�#�B   #                                  `VV�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `VS�     �         #       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `VT     �         $      console.log()5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             `VT    �       "   $   !   #const express = require("express");   %const mongoose = require("mongoose");   const app = express();   &const PORT = process.env.PORT || 5000;   const path = require("path");       0app.use(express.urlencoded({ extended: true }));   app.use(express.json());       G// After you run it, creates index.html file inside the "Build" folder.   ,if (process.env.NODE_ENV === "production") {   *  app.use(express.static("client/build"));   }       %console.log(process.env.MONGODB_URI);   mongoose.connect(   D  process.env.MONGODB_URI || "mongodb://localhost/hall_of_whispers",     {       useNewUrlParser: true,       useUnifiedTopology: true,       useFindAndModify: false,     },     (err) => {       if (err) throw err;   (    console.log("connected to mongodb");     }   );       R// This has "/api" because all routes from this route are implied to contain /api/   0app.use("/api", require("./routes/api-routes"));       app.get("*", (req, res) => {   I  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));5�_�                            ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         $       5�_�                           ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         %      console.log()5�_�                           ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &       �         %    5�_�                            ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &    �         &    5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �                 5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &       console.log('hello from heroku')5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      console.log('')5�_�   
                    (    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�    �         &       console.log('hello from heroku')   %console.log(process.env.MONGODB_URI);   +console.log('yo yo you after the mongouri')5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      ,console.log('yo yo you after the mongouri');5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      +console.log('yo yo you after the monguri');5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      *console.log('yo yo you after the mongri');5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      )console.log('yo yo you after the mongi');5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      (console.log('yo yo you after the mong');5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�     �         &      -console.log('yo yo you after the mongoURIj');5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                          !       v   !    `VU�    �         &      ,console.log('yo yo you after the mongoURI');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `VV�     �                +console.log('yo yo you after the mongoURI);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `VV�     �                !console.log('hello from heroku');5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `VV�    �                %console.log(process.env.MONGODB_URI);5��