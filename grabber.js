//const express = require('express');
const snoowrap = require('snoowrap');
require('dotenv').config();
//const app = express();

sub = '2007scape';


 async function listSubreddit(sub){


    const r = new snoowrap({
        userAgent:  'demo',
        clientId: process.env.CLIENT,
        clientSecret: process.env.SECRET,
        refreshToken: process.env.REFRESH
    });
    const subreddit = await r.getSubreddit(sub);
    const topPosts = await subreddit.getTop({time: 'week', limit: 3});
  
    let data = [];
  
    topPosts.forEach((post) => {
      data.push({
        link: post.url,
        text: post.title,
        score: post.score
      })
    });
    
    console.log(data);


    /*
    r.getUser('kit_is_lost').fetch().then(userInfo => {
        console.log(userInfo.name); // 'not_an_aardvark'
        console.log(userInfo.created); // 1419104352

        
      });
    */
      //r.getComment('ikcjinl').fetch().then(comment => comment.body).then(console.log)
    

}
listSubreddit(sub);