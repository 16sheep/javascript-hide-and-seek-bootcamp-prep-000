const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('#nested .target')
}

const increaseRankBy = (n) => {
  const matches = document.querySelectorAll('.ranked-list')
  matches.forEach((match) => {
    match.childNodes.forEach((item) => {
      // console.log(item)
      item.innerHTML = parseInt(item.innerHTML) + n;
      console.log(item, n)
    });
  });
};


const deepestChild = () => {

  let parent = document.querySelector('#grand-node')
  console.log(parent)

  while (!!parent.children[0]) {
    parent = parent.children[0]
  }
  console.log(parent)
  return parent
}

deepestChild()

// increaseRankBy(4)
