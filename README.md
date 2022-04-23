# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### Screenshot

![](https://user-images.githubusercontent.com/36883730/164895643-e32517fe-5c2e-4b8c-bf59-2f1150955c82.gif)

### Links

- Live Site URL: [CLICK HERE](https://adice-api-generator.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was my first deep dive into React using an API and understanding how handy React.useState can be.

I am most proud of this code snippet:

```const [post, setPost] = React.useState({});

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
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Morgan Bare](https://www.your-site.com)

