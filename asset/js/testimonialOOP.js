class Author {
  #author;

  constructor(author) {
    this.#author = author;
  }

  get Author() {
    return this.#author;
  }
}

class Comment extends Author {
  #comment;

  constructor(author, comment) {
    super(author);
    this.#comment = comment;
  }

  get Comment() {
    return this.#comment;
  }
}

class Testimonial extends Comment {
  #image;

  constructor(author, comment, image) {
    super(author, comment);
    this.#image = image;
  }

  get Image() {
    return this.#image;
  }

  //   getImage() {
  //     return this.#image;
  //   }

  renderToHtml() {
    return `
     <div class="card">
         <div class="card-item">
             <img src="${this.Image}" alt="Picture" />
             <p>${this.Comment}</p>
             <div class="card-author">
                 <p>- ${this.Author}</p>
             </div>
         </div>
     </div>
         `;
  }
}

let personData = [
  {
    name: "Bob",
    comment: "Bagus",
    image: "./asset/images/person-test-1.jpg",
  },
  {
    name: "Stuart",
    comment: "Bagus",
    image: "./asset/images/person-test-2.jpg",
  },
  {
    name: "Jacob",
    comment: "Bagus",
    image: "./asset/images/person-test-3.jpg",
  },
];

function loopTestimonial() {
  let testimonial = [];
  for (const item of personData) {
    testimonial.push(new Testimonial(item.name, item.comment, item.image));
  }
  return testimonial;
}

for (const object of loopTestimonial()) {
  document.getElementById("content").innerHTML += object.renderToHtml();
}
