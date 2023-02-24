const preMovie = async () => {
    const promiseWifeBringTickets = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('coldDrink'));

    let ticket = await promiseWifeBringTickets;

    console.log(`wife: i have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`wife: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: I need coldDrink');

    let coldDrink = await getColdDrinks;

    console.log(`wife: i got some ${coldDrink}`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');

    return ticket;
}


// converting createPost , deletePost into async await 


const posts = [];

async function createPost(post) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!post || !post.title || !post.body) {
          reject(new Error("Invalid post"));
        } else {
          const newPost = { id: posts.length + 1, ...post };
          posts.push(newPost);
          resolve(newPost);
        }
      }, 1000);
    });

    const lastActivityTime = await updateLastUserActivityTime();

    console.log("All posts:", posts);
    console.log("Last activity time:", lastActivityTime);

    return result;
  } catch (error) {
    console.error(error);
  }
}

async function deletePost(id) {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = posts.findIndex((post) => post.id === id);
        if (index === -1) {
          reject(new Error(`Post with id ${id} not found`));
        } else {
          const deletedPost = posts.splice(index, 1);
          resolve(deletedPost[0]);
        }
      }, 1000);
    });

    console.log("Posts after deletion:", posts);

    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updateLastUserActivityTime() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date();
      resolve(now);
    }, 1000);
  });

  return result;
}
