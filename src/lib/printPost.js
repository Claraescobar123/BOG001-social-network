

export const printPost = (post, profile) => {
  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.innerHTML = post.comment;
  newpost.innerHTML = profile;
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"><img src="${profile.photo}" id="profile-pic"/></div>        
      <div class="detail">
      <p class="name">${profile.name}</p>
      <p class="posted"></p>          
    </div>   
    <div class="categories"></div>   
  </div>
  <div class="desc">
  ${post.comment}
  </div></div></div>`;


  const icons = document.createElement('section')
  icons.setAttribute('class', 'input-comment');
  icons.innerHTML = `<div class="icons">
  <img src="img/dislike.png" class="likes" width="20px"/>
  <span class="likes-count">0</span>
  <img src="img/comment.png" class="commentaries" width="20px""/></div>
  <div class="inputCommentandButton"><span>
  <textarea class="inputComment" id="comment" cols="40" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
  <button type="submit" class="btnCommentaries">Enviar</button></span>
  </div>`;

  newpost.appendChild(icons);


  //ocultar comentarios
  window.addEventListener('click', (e) => {
    if (e.target == icons.querySelector('.commentaries')) {
      icons.querySelector('.inputCommentandButton').style.display = 'block';
      newpost.querySelector('.card').style.display = 'none';
    } else {
      icons.querySelector('.inputCommentandButton').style.display = 'none';
      newpost.querySelector('.card').style.display = 'block';
    }
  });


  //like activo inactivo
  window.addEventListener('click', (e) => {
    if (e.target == icons.querySelector('.likes')) {
      if (icons.querySelector('.likes').getAttribute('src') === 'img/like.png') {
        icons.querySelector('.likes').setAttribute('src', 'img/dislike.png');
        icons.querySelector('.like').style.display = 'block';
      } else if (icons.querySelector('.likes').getAttribute('src') === 'img/dislike.png') {
        icons.querySelector('.likes').setAttribute('src', 'img/like.png');
        icons.querySelector('.like').style.display = 'block';
      }
    }
  });






  return newpost;
};



/*
export const printPost = (post, userName) => {
  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.setAttribute('id', 'docCard');
  newpost.innerHTML = post.comment;
  newpost.innerHTML = `<div class="card">
  <div class="content">
  <div class="header">
    <div class="profile-pic"><img src="${currentUser().photoURL}" id="profile-pic"/></div>
      <div class="detail">
      <p class="name">${userName.name}</p>
      <p class="posted">${Date.toDate}</p>
    </div>
    <div class="categories"></div>
  </div>
  <div class="desc">
  ${post.comment}
  </div></div></div>`;

  const icons = document.createElement('section')
    icons.setAttribute('class', 'input-comment');
    icons.innerHTML = `<div class="icons"><img src="img/like.png" class="likes" width="20px"/>
    <img src="img/comment.png" class="commentaries" width="20px""/></div>
    <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" cols="40" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
    </div>`;

    newpost.appendChild(icons);

    //commentPublish(comment, category, userID);

    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });

    /*window.addEventListener('click', (e)=>{
      if(e.target == icons.querySelector('.commentaries')){
        icons.querySelector('.inputCommentandButton').style.display = 'block';
      }else{
        icons.querySelector('.inputCommentandButton').style.display = 'none';
      });

      return newpost;
};
*/
