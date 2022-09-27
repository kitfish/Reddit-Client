//const express = require('express');
const snoowrap = require('snoowrap');
require('dotenv').config();
//const app = express();



async function scrapeSubreddit(){


    const r = new snoowrap({
        userAgent:  'demo',
        clientId: process.env.CLIENT,
        clientSecret: process.env.SECRET,
        refreshToken: process.env.REFRESH
    });
    const subreddit = await r.getSubreddit('realEstate');
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


}
scrapeSubreddit();