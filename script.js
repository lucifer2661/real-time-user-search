const users = [
  {
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Frontend developer who loves building UI with React and JavaScript."
  },
  {
    name: "Ananya Singh",
    image: "https://i.pravatar.cc/300?img=2",
    bio: "UI/UX designer passionate about creating beautiful interfaces."
  },
  {
    name: "Aman Verma",
    image: "https://i.pravatar.cc/300?img=3",
    bio: "Backend developer experienced in Node.js and databases."
  },
  {
    name: "Priya Mehta",
    image: "https://i.pravatar.cc/300?img=4",
    bio: "Full stack developer who enjoys solving complex problems."
  },
  {
    name: "Rohit Kapoor",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Software engineer focused on scalable backend systems."
  },
  {
    name: "Neha Gupta",
    image: "https://i.pravatar.cc/300?img=6",
    bio: "Creative designer who loves animations and modern web design."
  },
  {
    name: "Arjun Patel",
    image: "https://i.pravatar.cc/300?img=7",
    bio: "JavaScript enthusiast exploring new frontend frameworks."
  },
  {
    name: "Sneha Iyer",
    image: "https://i.pravatar.cc/300?img=8",
    bio: "Tech blogger and frontend developer."
  },
  {
    name: "Karan Malhotra",
    image: "https://i.pravatar.cc/300?img=9",
    bio: "DevOps engineer working with cloud and automation."
  },
  {
    name: "Isha Khanna",
    image: "https://i.pravatar.cc/300?img=10",
    bio: "Passionate coder who enjoys building web applications."
  }
];



function showUsers(arr){

  const container = document.querySelector(".cards");
  container.innerHTML = "";

if(arr.length === 0){
  let msg=document.createElement("h2");
  msg.textContent="No users found";
  msg.classList.add("no-users");
  container.appendChild(msg);
  return;
}




  arr.forEach(function(user){

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.image;
    img.classList.add("bg-img");

    let blur = document.createElement("div");
    blur.classList.add("blur");

    let content = document.createElement("div");
    content.classList.add("content");

    let name = document.createElement("h3");
    name.textContent = user.name;

    let bio = document.createElement("p");
    bio.textContent = user.bio;

    content.appendChild(name);
    content.appendChild(bio);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    container.appendChild(card);

  });

}

let inp = document.querySelector(".search");

inp.addEventListener("input", function(){

  let newUsers = users.filter(function(user){
    if(inp.value === ""){
      return true;
    }else{
    return user.name
      .toLowerCase()
      .includes(inp.value.toLowerCase());

}});

  showUsers(newUsers);

});
showUsers(users);
