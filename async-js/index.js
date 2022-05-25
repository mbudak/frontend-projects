var userlist = document.getElementById('userlist');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then((data) => {
        data.forEach(user => {
            userlist.innerHTML += `<div class="user-line" id="user_${user.id}">uid: [${user.id}] ${user.name} | ${user.email}</div>` + 
            `<div class="post" id="userposts_${user.id}"><!-- placeholder --></div>`
            fetchPostsByUserId(user.id)
        });
        
}).catch(err => console.error(err));

function fetchPostsByUserId(uid) {
fetch('https://jsonplaceholder.typicode.com/posts?userId=' + uid)
    .then(result => result.json())
    .then((pdata) => {
        let user_posts = document.getElementById("userposts_" + uid);
        pdata.forEach(post => {
            
            user_posts.innerHTML += `<div>
                <div class="post-title">:: ${post.title}</div>
                <pre>${post.body}</pre>
                </div>`
            
        });
        
}).catch(err => console.error(err));
}


