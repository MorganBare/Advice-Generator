import divider from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import axios from "axios";
import React from 'react';

export default function Advice(){

    const [post, setPost] = React.useState({});

    const fetchPost = async () => {
        try{
          const response = await axios("https://api.adviceslip.com/advice");
          setPost(response.data.slip);
          console.log(response)
        }catch(err){
          console.error(err)
        }
      };

    React.useEffect(() => {
        fetchPost();
        }, []);

    function newPost(){
        fetchPost()
        setPost(post)
    }

    return (
        <div>
            <p className='fs-100 txt-neon letter-space'>ADVICE #<span>{post.id}</span></p>
            <p className='fs-200' >{post.advice}</p>
            <picture>
                <source srcSet={divider} media="(min-width: 600px)"/>
                <img src={dividerMobile} alt='' />
            </picture>
            <div onClick={newPost} className='dice--container'>
                <img onClick={newPost} src={dice} alt='' className='dice'/> 
            </div>
        </div>
   )
}