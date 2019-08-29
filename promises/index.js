const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('Staf worked') ;
  } else {
    reject('Error it broke')
  }
})

const promise2 = new Promise((resolve, reject) => {
setTimeout(resolve, 100, 'hi')
})

const promise3 = new Promise((resolve, reject) => {
setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
setTimeout(resolve, 3000, 'is it me sre you lokking for ?')
})

promise.all([promise, promise2, promise3, promise4])
.then(values => console.log(values))


promise
.then(result => {
  throw Error
  return result + !
})
.then(result2 => console.log('result2'))
.catch(() => conslole.log('Error!'))



const promiseLate = new Promise((resolve, reject) =>{
setTimeout(resolve,4000, "Success");})
.then(value=>console.log(value));

//async functions

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(console.log)

async function fetchusers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}



const urls=[
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {

  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
    ))
    console.log('users' , users);
    console.log('posts' , posts);
    console.log('albums' , albums);
  } catch (err) {
    console.log('Z tego dupa' , err)
  }

}

const getData2 = async function() {

  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }))
    console.log('users' , users);
    console.log('posts' , posts);
    console.log('albums' , albums);
  } catch (err) {
    console.log('Z tego dupa' , err)
  }

}


const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

const {tiger, ...rest} = animals;


const getData3 = async function () {
  const arrayOffPromises = urls.map(url => fetch(url));
  for await (let request of arrayOffPromises) {
    const data = await request.json();
    console.log(data);
  }
}
