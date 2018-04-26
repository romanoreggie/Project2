console.log("Sanity Check: JS is working!");

let pastPost = [];

document.getElementById("postButton").addEventListener("click", function(e) {

  e.preventDefault();

let textPost = document.getElementById('areaPost').value;
  pastPost.push(textPost);
  document.getElementById('text1').innerHTML = pastPost[pastPost.length - 1];
  document.getElementById('text2').innerHTML = pastPost[pastPost.length - 2];
  document.getElementById('text3').innerHTML = pastPost[pastPost.length - 3];
  document.getElementById('text4').innerHTML = pastPost[pastPost.length - 4];
  console.log(pastPost[pastPost.length - 1]);
});
