Vim�UnDo� �L\?]�k��νB���,�|3�9��f�6�   6   $    localStorage.remove("id_token");   0         H       H   H   H    _�h�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�(3     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�(8     �                  import5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�(9     �                 	importkdd5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                  import decode from 'jwt-decode'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                  5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �             �                 class AuthService {}5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                 }5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                  5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             _�(�     �                  export default new AuthService()5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�(�    �                import decode from 'jwt-decode'       class AuthService {   //5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        _�+�     �                  //5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        _�+�     �                 �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        _�,     �                 �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,     �         
          �         	    �                 getProfile() {}5�_�                           ����                                                                                                                                                                                                                                                                                                                                      
           V        _�,     �         
          return decode()5�_�                           ����                                                                                                                                                                                                                                                                                                                                      
           V        _�,     �      	   
        }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,     �      
           5�_�                   	   )    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,`     �               )  // check if the user is still logged in5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                 V        _�,d     �   
                �   
          �   	              loggedIn() {}5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,o     �                   �             5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,z     �               "    const token = this.getToken();5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                   �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                 5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �               #  // check if the token has expired5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                   �             �                 isTokenExpired(token) {}5�_�                        	    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                     �             �               
    try {}5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �                     const decoded = decode()5�_�       "           !      $    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �               $      const decoded = decode(token);5�_�   !   #           "      !    ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �               "      if(decoded.exp < Data.now())5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                 V        _�,�     �               )      if(decoded.exp < Data.now() / 1000)5�_�   #   %           $      )    ����                                                                                                                                                                                                                                                                                                                                                 V        _�-     �               )      if(decoded.exp < Date.now() / 1000)5�_�   $   &           %      +    ����                                                                                                                                                                                                                                                                                                                                                 V        _�-     �                       �             �               ,      if(decoded.exp < Date.now() / 1000) {}5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                 V        _�-     �                     }5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                 V        _�-	     �                       �             �                     } else {}5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                 V        _�-     �                   }5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                 V        _�-     �                      �             �                   } catch (err) {}5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                  V        _�-%    �                +      if(decoded.exp < Date.now() / 1000) {5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                  V        _�-4     �                  }5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                      !           V        _�-4     �          !        5�_�   ,   .           -      %    ����                                                                                                                                                                                                                                                                                                                                      "           V        _�-?     �      !   "      %  // retrieve token from localStorage5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                      #           V        _�-F     �       "   %          �       "   $    �      "   #        getToken() {}5�_�   .   0           /   !   1    ����                                                                                                                                                                                                                                                                                                                                      %           V        _�-Q     �       #   %      1    // Retrieves the user token from localStorage5�_�   /   1           0   "       ����                                                                                                                                                                                                                                                                                                                                      &           V        _�-W     �   !   #   &          return localStorage.getItem5�_�   0   2           1   "        ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-Y     �   !   #   &      $    return localStorage.getItem(key)5�_�   1   3           2   #       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-`     �   "   %   &        }5�_�   2   4           3   $       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-`     �   #   &   '        5�_�   3   5           4   &        ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-n     �   %   '   )        �   %   '   (    5�_�   4   6           5   &       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-u     �   &   (   +          �   &   (   *    �   %   (   )        login(idToken) {}5�_�   5   7           6   '   '    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-     �   &   )   +      '    // Saves user token to localStorage5�_�   6   8           7   (       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   '   )   ,          localStorage.setItem()5�_�   7   9           8   (   %    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   '   *   ,      %    localStorage.setItem('id_token');5�_�   8   :           9   )       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   (   +   -          5�_�   9   ;           :   *       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   )   +   .          window.location.assign()5�_�   :   <           ;   *       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�    �   !   +   .   	   ,    return localStorage.getItem('id_token');     }       :  // set token to localStorage and reload page to homepage     login(idToken) {   '    // Saves user token to localStorage   %    localStorage.setItem('id_token');            window.location.assign('/');5�_�   ;   =           <   (   #    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�    �   '   )   .      %    localStorage.setItem("id_token");5�_�   <   >           =   +       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   *   -   .        }5�_�   =   ?           >   ,       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   +   .   /        5�_�   >   @           ?   .        ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   -   /   1        �   -   /   0    5�_�   ?   A           @   .       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   .   0   3          �   .   0   2    �   -   0   1        logout() {}5�_�   @   B           A   /   :    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   .   1   3      :    // clear user token and profile data form localStorage5�_�   A   C           B   0       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   /   1   4          localStorage.remove()5�_�   B   D           C   0   $    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�-�     �   /   2   4      $    localStorage.remove('id_token');5�_�   C   E           D   1   F    ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�.    �   /   1   5      $    localStorage.remove('id_token');5�_�   D   F           E   2       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�.     �   1   3   6          �   1   3   5    5�_�   E   G           F   2       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�.     �   1   3   6          window.location.assign()5�_�   F   H           G   2       ����                                                                                                                                                                                                                                                                                                                            "           "   "       v   "    _�.     �   1   3   6           window.location.assign('/');5�_�   G               H   0       ����                                                                                                                                                                                                                                                                                                                                       6           V        _�h�    �   /   1   6      $    localStorage.remove("id_token");5�_�                   	   )    ����                                                                                                                                                                                                                                                                                                                            	   4       	   7       v   7    _�,]     �      
         ;  // check if the user is still logged <input type="text"/>5�_�                     	   4    ����                                                                                                                                                                                                                                                                                                                            	   4       	   7       v   7    _�,^     �      
         7  // check if the user is still logged <input type=""/>5��