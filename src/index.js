//displaying all ramen

//fetching ramen
fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => data.forEach(ramen => {
    //creating ramen images for ramen menu at top of page
    const ramenMenuImg = document.createElement("img")
    const ramenMenuDiv = document.querySelector("#ramen-menu")
    ramenMenuImg.src = ramen.image
    ramenMenuDiv.appendChild(ramenMenuImg)

    //creating click event to show ramen details
    ramenMenuImg.addEventListener("click", () => {
        renderRamen(ramen)
    })
},
    renderRamen(data[0])
))


const formNew = document.querySelector("#new-ramen")
const newName = document.querySelector("#new-name")
const newRestaurant = document.querySelector("#new-restaurant")
const newImage = document.querySelector("#new-image")
const newRating = document.querySelector("#new-rating")
const newComment = document.querySelector("#new-comment")

formNew.addEventListener("submit", (e) => {
    e.preventDefault()
    const ramen= {}
    ramen.name = newName.value
    ramen.restaurant = newRestaurant.value
    ramen.image = newImage.value
    ramen.rating = newRating.value
    ramen.comment = newComment.value
    console.log(ramen)

    const ramenMenuImg = document.createElement("img")
    const ramenMenuDiv = document.querySelector("#ramen-menu")
    ramenMenuImg.src = ramen.image
    ramenMenuDiv.appendChild(ramenMenuImg)
    ramenMenuImg.addEventListener("click", () => {
        renderRamen(ramen)
    })

    fetch("http://localhost:3000/ramens",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(ramen)
    })
})

//const formEdit = document.querySelector("#edit-ramen")


function renderRamen(ramen){
    const ramenDetailImg = document.querySelector(".detail-image")
    const ramenDetailName = document.querySelector(".name")
    const ramenRestaurant = document.querySelector(".restaurant")
    const ramenRating = document.querySelector("#rating-display")
    const ramenComment = document.querySelector("#comment-display")

    ramenDetailImg.src = ramen.image
    ramenDetailName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment
}

// const deleteBtn = document.querySelector("#deleteBtn")
// deleteBtn.addEventListener("click", () => {
//     const currentName = document.querySelector(".name")
//     console.log(currentName)
//     fetch("http://localhost:3000/ramens")
// })