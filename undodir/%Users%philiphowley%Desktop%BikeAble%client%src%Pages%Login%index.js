Vim�UnDo� ]���ͥy�xz#+}�B�
Qj�+�X�`���   I   3              class="glyphicon glyphicon-plus-sign"   =                          `�M    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `��     �         >    �         >    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �         @       �         ?    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �                k5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �                3import React, { useState, Component } from "react";5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �          ?      3import React, { useState, Component } from "react";5�_�                           ����                                                                                                                                                                                                                                                                                                                                         "       v   "    `��     �          ?      2import React, { useState Component } from "react";5�_�                           ����                                                                                                                                                                                                                                                                                                                                         "       v   "    `��    �              9   /import { useHistory, } from "react-router-dom";       const Login = (props) => {       let history = useHistory();   *    const [email, setEmail] = useState('')   0    const [password, setPassword] = useState('')       !    const handleSubmit = (e) => {           e.preventDefault();   4        API.loginUser(email, password).then(res => {   &            // This is whre I redirect   0            if (res.data.success === ('true')) {   *                history.push('/dashboard')               }   
        })       }       @    // const redirectToReferrer = this.state.redirectToReferrer;   )    // if (redirectToReferrer === true) {   .    //     return <Redirect to="/dashboard" />       // }               return (           <div className="Login">   )            <h1>Welcome to Bikeable!</h1>   *            <Form onSubmit={handleSubmit}>   K                <Form.Group size="lg" className="email" controlId="email" >   2                    <Form.Label>Email</Form.Label>   !                    <Form.Control   !                        autoFocus   $                        type="email"   %                        value={email}   B                        onChange={(e) => setEmail(e.target.value)}                       />                   </Form.Group>   P                <Form.Group size="lg" className="password" controlId="password">   5                    <Form.Label>Password</Form.Label>   !                    <Form.Control   '                        type="password"   (                        value={password}   E                        onChange={(e) => setPassword(e.target.value)}                       />                   </Form.Group>   N                <Button block size="lg" className="loginButton" type="submit">                       Login           </Button>   G                <Button block size="lg" className="sign" type="submit">                       Sign Up!           </Button>               </Form>           </div>       );   }           export default Login;5�_�      	              5        ����                                                                                                                                                                                                                                                                                                                            5   	       7   	       V   	    `��     �   6   8                  </Button>�   5   7                    Sign Up!�   4   6          ?        <Button block size="lg" className="sign" type="submit">5�_�      
           	   8        ����                                                                                                                                                                                                                                                                                                                            5   	       7   	       V   	    `��     �   7   9   >    5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                            5   	       7   	       V   	    `��     �         ?    �         ?    5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �                +// import { Link } from 'react-router-dom';5�_�                    9        ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   8   :   @       5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   8   :   @               Lin5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `��     �   8   :   @               <Link></Link>5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `��     �   8   :   @      %         <Link to="/register"></Link>5�_�                    9   %    ����                                                                                                                                                                                                                                                                                                                                       ���       v       `��    �      :   @   7   (import { Link } from 'react-router-dom';   (import Form from "react-bootstrap/Form";   ,import Button from "react-bootstrap/Button";   *import { API } from "../../Utils/userAPI";   import "./Login.css";   .import { useHistory } from "react-router-dom";       const Login = (props) => {     let history = useHistory();   )  const [email, setEmail] = useState("");   /  const [password, setPassword] = useState("");         const handleSubmit = (e) => {       e.preventDefault();   2    API.loginUser(email, password).then((res) => {          // This is whre I redirect   (      if (res.data.success === "true") {   #        history.push("/dashboard");         }       });     };       >  // const redirectToReferrer = this.state.redirectToReferrer;   '  // if (redirectToReferrer === true) {   ,  //     return <Redirect to="/dashboard" />     // }       
  return (       <div className="Login">   #      <h1>Welcome to Bikeable!</h1>   $      <Form onSubmit={handleSubmit}>   B        <Form.Group size="lg" className="email" controlId="email">   (          <Form.Label>Email</Form.Label>             <Form.Control               autoFocus               type="email"               value={email}   6            onChange={(e) => setEmail(e.target.value)}             />           </Form.Group>   H        <Form.Group size="lg" className="password" controlId="password">   +          <Form.Label>Password</Form.Label>             <Form.Control               type="password"               value={password}   9            onChange={(e) => setPassword(e.target.value)}             />           </Form.Group>   F        <Button block size="lg" className="loginButton" type="submit">             Login           </Button>   G        {/* <Button block size="lg" className="sign" type="submit"> */}           {/*   Sign Up! */}           {/* </Button> */}   -         <Link to="/register">Register</Link>5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�     �   8   :   @      ,        <Link to="/register">Register</Link>5�_�                    :       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�(     �   9   ;   @    5�_�                    :        ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�(     �   :   E   A    �   :   ;   A    5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�*     �   8   9          ,        <Link to="/register">Register</Link>5�_�                    9        ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�+     �   8   9           5�_�                    9   
    ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�,    �   8   C   I   
             <p>               Not a member?{" "}   !            <Link to="/register">                 <span   5                class="glyphicon glyphicon-plus-sign"   "                aria-hidden="true"                 ></span>{" "}                 Register here               </Link>             </p>5�_�                     =       ����                                                                                                                                                                                                                                                                                                                                       ���       v       `�L    �   <   >   I      3              class="glyphicon glyphicon-plus-sign"5��