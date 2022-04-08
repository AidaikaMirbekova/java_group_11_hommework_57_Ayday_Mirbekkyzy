// Создан объект каласса Пользователя,
const User = {
    id: 1,
    email: 'mike@gmail.com',
    autorized:true};

// Создан объект класса Постов. я решила связать user  и  post просто указав ссылку на сам объект, путем его объявления.
// Так как он будет в будущем ссылатся именно на данного пользователя.
const Post={
    id:1,
    author:User,
    image:'horror.jpg',
    description:'Hello'};

//Создан объект Класса коментарий. Он также будет ссылатся единственного пользователя.
const Comment = {
    id:1,
    author:User,
    post:Post,
    commentText:'Good foto)'};

// Массив постов
let postArray=[
    {id:1,author:User,image:'summer.jpg',description:'So sunny'},
    {id:2,author:User,image:'winter.jpg',description:'So cold'},
    {id:3,author:User,image:'autumn.jpg',description:'So wildly'},
    {id:4,author:User,image:'spring.jpg',description:'So green'},];