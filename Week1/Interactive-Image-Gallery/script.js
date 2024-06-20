const gallery = [
  {
    thumbUrl:
      "https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A buger is a patty of ground beef grilled and placed between two halves of a bun",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "An ultra-thin pancake common in France that can be made sweet or savory, typically rolled or folded with a variety of fillings from jam or Nutella to ham and cheese to seafood.",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented. ",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/20476112/pexels-photo-20476112/free-photo-of-set-table-in-the-dining-room.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/20476112/pexels-photo-20476112/free-photo-of-set-table-in-the-dining-room.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "They have strong flavour and are used chiefly for soups, stews, and other prepared dishes and for frying.",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste architecto, nulla laboriosam nihil nesciunt omnis. Non odit ea est eos, ut aliquam delectus, iusto error assumenda quae amet facilis.",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A cake is a sweet food made by baking a mixture of flour, eggs, sugar, and fat. ... a piece of chocolate cake.",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A salad is a dish consisting of mixed ingredients, frequently vegetables",
  },
  {
    thumbUrl:
      "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The basic process involves mixing of ingredients until the flour is converted into a stiff paste or dough, followed by baking the dough into a loaf.",
  },
];

const cardsContainer = document.querySelector(".cards");
const modalEl = document.querySelector(".modal");
const closemodalEl = document.querySelector(".closemodal");
const contentEl = document.querySelector(".content");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let currIndex = 0;

let cardContent = "";
gallery.forEach((item, index) => {
  console.log(item.image);
  cardContent += `
       <div class="image-card">
            <img src=${item.image} alt="Image" onClick="HandleImage(${index})">
        </div>
        `;
});
cardsContainer.innerHTML = cardContent;

function HandleImage(index) {
  currIndex = index;
  HandleThumbContent();
  modalEl.classList.remove("hidden");
  contentEl.classList.remove("hide");
}

function HandleThumbContent() {
  let photos = gallery[currIndex];
  document.querySelector(".lightbox-image").src = photos.thumbUrl;
  document.querySelector(".image-description").innerHTML = photos.description;
}

closemodalEl.addEventListener("click", function () {
  modalEl.classList.add("hidden");
  contentEl.classList.add("hide");
});

nextEl.addEventListener("click", function () {
  if (currIndex < gallery.length - 1) {
    currIndex++;
    HandleThumbContent();
    updateIconState();
  }
});

prevEl.addEventListener("click", function () {
  if (currIndex > 0) {
    currIndex--;
    HandleThumbContent();
    updateIconState();
  }
});

function updateIconState() {
  if (currIndex <= 0) {
    prevEl.classList.add("disabled");
    prevEl.style.pointerEvents = "none";
  } else {
    prevEl.classList.remove("disabled");
    prevEl.style.pointerEvents = "auto";
  }

  if (currIndex >= gallery.length - 1) {
    nextEl.classList.add("disabled");
    nextEl.style.pointerEvents = "none";
  } else {
    nextEl.classList.remove("disabled");
    nextEl.style.pointerEvents = "auto";
  }
}
