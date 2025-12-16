const lines = [
  "Hello, I'm Tanishq Agrawal",
  "Competitive Programmer",
  "Codeforces Specialist ",
  "Leetcode knight",
  "Codechef 3⭐️",
  "Web Developer",
  "Tech Enthusiast"
];

let i = 0, j = 0;
const el = document.getElementById("type");

function type(){
  if(j < lines[i].length){
    el.textContent += lines[i][j++];
    setTimeout(type, 50);
  }else{
    setTimeout(()=>{
      el.textContent = "";
      j = 0;
      i = (i + 1) % lines.length;
      type();
    }, 1200);
  }
}
type();
