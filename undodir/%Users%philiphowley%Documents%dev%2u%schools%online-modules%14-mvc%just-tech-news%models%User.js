Vim�UnDo� �S�dU�{��|������ab�{���>k   ^     }   [                           `Z]�    _�                     T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: false,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: alse,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: lse,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: se,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: e,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�     �   S   U   ^          timestamps: ,5�_�                    T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�    �   Z   \   ^        }5�_�                     T       ����                                                                                                                                                                                                                                                                                                                                                             `Z]�    �   ]   _          module.exports = User;�   \   ^           �   [   ]          );�   Z   \            },�   Y   [              modelName: 'user',�   X   Z          @    // make it so our model name stays lowercase in the database�   W   Y              underscored: true,�   V   X          Z    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)�   U   W              freezeTableName: true,�   T   V          -    // don't pluralize name of database table�   S   U              timestamps: true,�   R   T          E    // don't automatically create createAt/updatedAt timestamp fields�   Q   S              sequelize,�   P   R          X    // pass in our imported sequelize connection (the direct connection to our Database)�   O   Q           �   N   P          r    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))�   M   O           �   L   N              },�   K   M                },�   J   L                  return updatedUserData;�   I   K          S        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);�   H   J          +      async beforeUpdate(updatedUserData) {�   G   I          ;      // set up beforeUpdate lifecycle "hook" functionality�   F   H                },�   E   G                  return newUserData;�   D   F          K        newUserData.password = await bcrypt.hash(newUserData.password, 10);�   C   E          '      async beforeCreate(newUserData) {�   B   D          ;      // set up beforeCreate lifecycle "hook" functionality�   A   C              hooks: {�   @   B            {�   ?   A            },�   >   @              },�   =   ?                },�   <   >                  len: [4],�   ;   =          H        // this means the password must be at least four characters long�   :   <                validate: {�   9   ;                allowNull: false,�   8   :                type: DataTypes.STRING,�   7   9              password: {�   6   8              // define a password column�   5   7              },�   4   6                },�   3   5                  isEmail: true,�   2   4                validate: {�   1   3          k      // if allowNull is set to false, we can run our data through valiators before creating the table data�   0   2                unique: true,�   /   1          A      // there cannot be any duplicate email values in this table�   .   0                allowNull: false,�   -   /                type: DataTypes.STRING,�   ,   .              email: {�   +   -              // define an email column�   *   ,              },�   )   +                allowNull: false,�   (   *                type: DataTypes.STRING,�   '   )              username: {�   &   (              // define a username column�   %   '              },�   $   &                autoIncrement: true,�   #   %                // turn on auto increment�   "   $                primaryKey: true,�   !   #          .      // instruct that this is the Primary Key�       "                allowNull: false,�      !          :      // this is the equivalent of SQL's `NOT NULL` option�                       type: DataTypes.INTEGER,�                V      // use the special Sequelize DataTypes object to provide what type of data it is�                	    id: {�                    // define an id column�                '    // Table COLUMN DEFINITIONS GO HERE�                  {�                
User.init(�                )// define table columns and configuration�                 �                }�                  }�                    return attributes;�                    }�                      delete attributes[a];�                +    for (const a of PROTECTED_ATTRIBUTES) {�                )    const attributes = { ...this.get() };�                    // hide protected fields�                  toJSON() {�                 �                  }�   
             6    return bcrypt.compareSync(loginPw, this.password);�   	               checkPassword(loginPw) {�      
          G  // set up method to run on instance data (per user) to check password�      	          class User extends Model {�                // create our User model�                 �                *const PROTECTED_ATTRIBUTES = ['password'];�                 �                2const sequelize = require('../config/connection');�                !const bcrypt = require('bcrypt');�                 2const { Model, DataTypes } = require('sequelize');5��