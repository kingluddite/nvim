Vim�UnDo� =�3A�
���L�At��~����z�p�^73   %                                   `j�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `j�     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `j�     �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `j�    �   
       %            maxlength: 280       },       createdAt: {         type: Date,         default: Date.now,   M      get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')       },       username: {         type: String,         required: true       },       reactions: [reactionSchema]     },     {       toJSON: {         getters: true       }     }   );       7thoughtSchema.virtual('reactionCount').get(function() {5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `j�    �   $   &          module.exports = Thought;�   #   %           �   "   $          0const Thought = model('Thought', thoughtSchema);�   !   #           �       "          });�      !            return this.reactions.length;�                 8thoughtSchema.virtual('reactionCount').get(function () {�                 �                );�                  },�                    },�                      getters: true,�                    toJSON: {�                  {�                  },�                     reactions: [reactionSchema],�                    },�                      required: true,�                      type: String,�                    username: {�                    },�                P      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),�                      default: Date.now,�                      type: Date,�                    createdAt: {�                    },�   
                   maxlength: 280,�   	                   minlength: 1,�      
          /      required: 'You need to leave a thought!',�      	                type: String,�                    thoughtText: {�                  {�                !const thoughtSchema = new Schema(�                 �                -const reactionSchema = require('./Reaction');�                !const moment = require('moment');�                 .const { Schema, model } = require('mongoose');5��