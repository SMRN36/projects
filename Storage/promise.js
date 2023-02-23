const posts = [];


function updateLastUserActivityTime() {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     const lastActivityTime = new Date().toLocaleString();
     console.log(`Last Activity Time: ${lastActivityTime}`);
     resolve(lastActivityTime);
   }, 1000);
 });
}


function createPost(post) {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     posts.push(post);
     resolve(post);
   }, 2000);
 });
}


function deleteLastPost() {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     const deletedPost = posts.pop();
     if (deletedPost) {
       console.log(`Deleted Post: ${deletedPost.title}`);
       resolve(deletedPost);
     } else {
       reject("ERROR: No post to delete");
     }
   }, 1000);
 });
}

const post1 = { title: "Post 1" };
const post2 = { title: "Post 2" };
const post3 = { title: "Post 3" };

createPost(post1)
 .then((post) => {
   return updateLastUserActivityTime().then((lastActivityTime) => {
     return { post, lastActivityTime };
   });
 })
 .then(({ post, lastActivityTime }) => {
   console.log(`Created Post: ${post.title} at ${lastActivityTime}`);
   return createPost(post2).then((post) => {
     return updateLastUserActivityTime().then((lastActivityTime) => {
       return { post, lastActivityTime };
     });
   });
 })

 .then(({ post, lastActivityTime }) => {
   console.log(`Created Post: ${post.title} at ${lastActivityTime}`);
   return createPost(post3).then((post) => {
     return updateLastUserActivityTime().then((lastActivityTime) => {
       return { post, lastActivityTime };
     });
   });
 })

 .then(({ post, lastActivityTime }) => {
   console.log(`Created Post: ${post.title} at ${lastActivityTime}`);
   return deleteLastPost().then(() => {
     console.log("Posts after deletion:", posts);
   });
 })
 .catch((error) => {
   console.error(error);
 });


