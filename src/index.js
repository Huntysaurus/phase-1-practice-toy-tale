let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  toggleForm()
  getToys()
  newToyForm()
}); //DOMContentLoaded

const newToyForm = () => {
  //get the form
  const toyForm = document.querySelector('.add-toy-form')

  //add event listener for submoit
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newToyName = e.target.name.value
    const newToyImage = e.target.image.value

    const newToyObj = {
      name: newToyName,
      image: newToyImage,
      Likes: 0
    }
    renderToy(newToyObj)
  })

  //get the info from the form

  //get the toy to show up
}


const getToys = () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(toy => renderToy(toy)))
}

function renderToy(toy) {
  //create a div with the class "card"
  const toyCard = document.createElement('div')
  toyCard.className = "card"

  const toyName = document.createElement('h2')
  toyName.innerText = toy.name

  const toyImage = document.createElement('img')
  toyImage.src = toy.image
  toyImage.classname = "toy-avatar"

  const toyLikes = document.createElement('p')
  toyLikes.innerText = `${toy.likes} likes`

  const likeBtn = document.createElement('button')
  likeBtn.innerText = `Like <3`
  likeBtn.className = 'like-btn'
  likeBtn.id = toy.id

  likeBtn.addEventListener('click', (e) => {
    const currentLikesText = e.target.previousSibling.innerText
    const actualLikes = currentLikesText.split(" ")[0]
    
    e.target.previousSibling.innerText = `${parseInt(actualLikes) + 1} Likes`
  })


  toyCard.append(toyName, toyImage, toyLikes, likeBtn)

  //append that div to collection
  //get the collection div

  const toyCollection = document.querySelector('#toy-collection')
  //append it
  toyCollection.append(toyCard)
}

const toggleForm = () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}


