let posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]


  var filter = document.getElementById("input");
  var button = document.getElementById("find");
  var result = document.getElementById("result");


  function getPosts(idnum) {
    return posts.filter(x => x.id == idnum) 
      // her bi object icin (x) (x.id id parametresine esitse)
  }



  button.addEventListener('click', getPosts(filter.value))

 

  // function FindPostById(id) {
  //   if (posts.filter(value => value.id == id).length != 0) {
  //       return posts.filter(value => value.id == id)
  //   } else {
  //       return [{ title: 'No post found' }]
  //   }
  // }
  // button.addEventListener("click", (e) => { e.preventDefault()
  //   let post = FindPostById(filter.value)[0]
  //       console.log(post.title)
  //       result.innerText = post.title 
  // })
  
  





  