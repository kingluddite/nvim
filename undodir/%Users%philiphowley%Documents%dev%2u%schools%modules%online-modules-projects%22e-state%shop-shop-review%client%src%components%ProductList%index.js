Vim�UnDo� I1�E���e�-�h�D��}o�]��nKT   I           });   $   
      F       F   F   F    `�l�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `vq�     �          .      import React from "react";5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vq�    �       )   .   )   'import React, {useEffect} from "react";   /import { useQuery } from '@apollo/react-hooks';       )import ProductItem from "../ProductItem";   5import { QUERY_PRODUCTS } from "../../utils/queries";   .import spinner from "../../assets/spinner.gif"       +function ProductList({ currentCategory }) {   5  const { loading, data } = useQuery(QUERY_PRODUCTS);       (  const products = data?.products || [];         function filterProducts() {       if (!currentCategory) {         return products;       }       P    return products.filter(product => product.category._id === currentCategory);     }       
  return (       <div className="my-2">         <h2>Our Products:</h2>         {products.length ? (   "        <div className="flex-row">   .            {filterProducts().map(product => (                   <ProductItem   $                  key= {product._id}   #                  _id={product._id}   '                  image={product.image}   %                  name={product.name}   '                  price={product.price}   -                  quantity={product.quantity}                   />               ))}           </div>         ) : (   4        <h3>You haven't added any products yet!</h3>         )}         { loading ?    0      <img src={spinner} alt="loading" />: null}5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `vq�     �         -       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vq�     �         .      import {useStoreContext}5�_�                       8    ����                                                                                                                                                                                                                                                                                                                                                             `vq�     �         .      8import {useStoreContext} from '../../utils/GlobalState';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr     �         /      import {UPDATE_PRODUCTS}5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                             `vr    �         /      8import {useStoreContext} from '../../utils/GlobalState';   4import {UPDATE_PRODUCTS} from '../../utils/actions';5�_�      	                 3    ����                                                                                                                                                                                                                                                                                                                                                             `vr4     �   
      0        �   
      /    5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `vr<     �   
      0        const [state, dispatch]5�_�   	              
      -    ����                                                                                                                                                                                                                                                                                                                                                             `vrF     �   
      0      -  const [state, dispatch] = useStoreContext()5�_�   
                    .    ����                                                                                                                                                                                                                                                                                                                                                             `vrG     �   
      0      .  const [state, dispatch] = useStoreContext();5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrS     �         1        const {currentCategory}5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `vrX     �         1    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr^     �         2    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrg     �                (  const products = data?.products || [];5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `vri     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `vrl     �         1       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrl     �         2        5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrp     �         3        useEffect()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrp     �         3        useEffect(())5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrr     �         3        useEffect(() =>)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrr     �         5          �         4    �         3        useEffect(() => {})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrw     �         7            �         6    �         5          if (data) {}5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vrz     �         9              �         8    �         7            dispatch({})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr     �         9              type: UPDATE_PRODUCTS,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �         :        })5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �         :        },)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �         :        }, [data,])5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �         :    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �         ;            return products;5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �      !   ;      R    return products.filter((product) => product.category._id === currentCategory);5�_�      !               
       ����                                                                                                                                                                                                                                                                                                                                                             `vr�     �   	      ;      +function ProductList({ currentCategory }) {5�_�       "           !   
       ����                                                                                                                                                                                                                                                                                                                                                             `vr�    �         ;      "  const {currentCategory} = state;       5  const { loading, data } = useQuery(QUERY_PRODUCTS);             useEffect(() => {       if (data) {         dispatch({           type: UPDATE_PRODUCTS,           products: data.products         })       }     }, [data, dispatch])5�_�   !   #           "   %       ����                                                                                                                                                                                                                                                                                                                                                             `vs    �   $   &   :            {products.length ? (5�_�   "   $           #   	        ����                                                                                                                                                                                                                                                                                                                                                             `�jS     �      
   :       5�_�   #   %           $   	        ����                                                                                                                                                                                                                                                                                                                                                             `�jV     �      	          mport 5�_�   $   &           %   	        ����                                                                                                                                                                                                                                                                                                                                                             `�jV     �      
   :       �      
   9    5�_�   %   '           &   	       ����                                                                                                                                                                                                                                                                                                                                                             `�j\     �      
   :      import { idbPromise }5�_�   &   (           '   	   1    ����                                                                                                                                                                                                                                                                                                                                                             `�jc    �         :      1import { idbPromise } from '../../utils/helpers';5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         <          �         ;    5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �                    // 5�_�   )   +           *      	    ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         ;      	      });5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         <            5�_�   +   -           ,      W    ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         =      W      // but let's also take each product and save it to IDB using the helper function 5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         >            data.products.forEach()5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         >            data.products.forEach(())5�_�   .   0           /      (    ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         >      )      data.products.forEach((product) =>)5�_�   /   1           0      *    ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         @              �         ?    �         >      ,      data.products.forEach((product) => {})5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         @              idbPromise()5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         @              idbPromise('products',)5�_�   2   4           3      %    ����                                                                                                                                                                                                                                                                                                                                                             `�j�     �         @      &        idbPromise('products', 'put',)5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                             `�k     �         @            })5�_�   4   6           5          ����                                                                                                                                                                                                                                                                                                                                                             `�k     �         @        }, [data, dispatch]);5�_�   5   7           6          ����                                                                                                                                                                                                                                                                                                                                                             `�k     �         @        }, [data, loading,dispatch]);5�_�   6   8           7   #       ����                                                                                                                                                                                                                                                                                                                                                             `�k    �         @      W      // but let's also take each product and save it to IDB using the helper function 5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �         @          }5�_�   8   :           9          ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �         B            �         A    �         @          } else if (!loading) {}5�_�   9   ;           :      M    ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �          B      M      // since we are offline, get all of the data from the `products` store 5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �          C            idbPromise()5�_�   ;   =           <          ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �          C            idbPromise('products',)5�_�   <   >           =      )    ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �          C      *      idbPromise('products', 'get').then()5�_�   =   ?           >      *    ����                                                                                                                                                                                                                                                                                                                                                             `�k�     �          C      ,      idbPromise('products', 'get').then(())5�_�   >   @           ?      6    ����                                                                                                                                                                                                                                                                                                                                                             `�l      �          C      7      idbPromise('products', 'get').then((products) =>)5�_�   ?   A           @      8    ����                                                                                                                                                                                                                                                                                                                                                             `�l     �      !   E              �      !   D    �      !   C      :      idbPromise('products', 'get').then((products) => {})5�_�   @   B           A       G    ����                                                                                                                                                                                                                                                                                                                                                             `�l     �      "   E      G        // use retrieved data to set global state for offline browsing 5�_�   A   C           B   !       ����                                                                                                                                                                                                                                                                                                                                                             `�l     �   !   #   H      
          �   !   #   G    �       #   F              dispatch({})5�_�   B   D           C   "        ����                                                                                                                                                                                                                                                                                                                                                             `�l     �   !   $   H                 type: UPDATE_PRODUCTS,5�_�   C   E           D   $   	    ����                                                                                                                                                                                                                                                                                                                                                             `�l"    �      &   I      M      // since we are offline, get all of the data from the `products` store    8      idbPromise('products', 'get').then((products) => {   G        // use retrieved data to set global state for offline browsing            dispatch({              type: UPDATE_PRODUCTS,             products   
        })         })5�_�   D   F           E   $   
    ����                                                                                                                                                                                                                                                                                                                                                             `�l�     �   #   %   I              });�   $   %   I    5�_�   E               F   $   
    ����                                                                                                                                                                                                                                                                                                                                                             `�l�    �   #   %   I              })n;5��