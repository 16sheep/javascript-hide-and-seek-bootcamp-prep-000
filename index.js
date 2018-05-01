const getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

const nestedTarget = () => {
  return document.querySelector('#nested .target');
};

const increaseRankBy = (n) => {
  let rankedList = document.querySelectorAll('ul.ranked-list li')
  for(let i = 0; i>rankedList.length; i++){
   rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString()
   console.log(rankedList[i])
  }
};

const deepestChild = () =>{
  
}