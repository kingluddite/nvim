Vim�UnDo� �/'�FS� AѢ�|����Q��.��n                                     `��N    _�                        J    ����                                                                                                                                                                                                                                                                                                                                                             `��     �               Lconst MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";5�_�                       J    ����                                                                                                                                                                                                                                                                                                                                                             `��    �                  #const express = require("express");   !const logger = require("morgan");   %const mongoose = require("mongoose");   +const compression = require("compression");       &const PORT = process.env.PORT || 3001;   Mconst MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget2";       const app = express();       app.use(logger("dev"));       app.use(compression());   0app.use(express.urlencoded({ extended: true }));   app.use(express.json());       "app.use(express.static("public"));       mongoose.connect(MONGODB_URI, {     useNewUrlParser: true,     useFindAndModify: false   });       	// routes   $app.use(require("./routes/api.js"));       app.listen(PORT, () => {   .  console.log(`App running on port ${PORT}!`);   });5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��B     �                 useFindAndModify: false,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��E     �                  useFindAndModify: false,jjjjjj5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��F     �                 useFindAndModify: false,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��I     �                  useUnifiedTopology5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��M    �              
     useUnifiedTopology: true   });       	// routes   $app.use(require('./routes/api.js'));       app.listen(PORT, () => {   .  console.log(`App running on port ${PORT}!`);   });    5��