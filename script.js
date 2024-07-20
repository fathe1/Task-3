fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>  posts.forEach((page , index) => {
            const apiContainer = document.getElementById('api');

            const post = document.createElement('div');
            post.classList.add('post', 'col-md-4');
            
        //   مكتبه صور عشوائيه
            const imgUrl = `https://picsum.photos/seed/${index}/300/200`;
            post.innerHTML = `
                <img src="${imgUrl}" >
                <h2>${page.title}</h2>
                <p>${page.body}</p>
            `;
            apiContainer.appendChild(post);
        })
    );