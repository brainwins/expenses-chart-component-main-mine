//
async function getData() {
    let url = './js/data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let data = await getData();
    data.forEach((element, i) => {
      const targetbar = document.querySelector(`[data-day="${i}"]`);
      const targetBarHover = document.querySelector(`[data-bar-hover="${i}"]`);
      targetbar.style.paddingTop = `${element.amount*2.75}px`;
      targetBarHover.innerHTML = "$" + element.amount;

    });



}

renderData();

//Color today's bar cyan
const date = new Date();
const today = date.getDay()
const todaysBar = document.querySelector(`[data-day="${today}"]`)
todaysBar.style.backgroundColor = 'hsl(186, 34%, 60%)';

/*
bar = document.querySelector(".bar");
bar.addEventListener('mouseover', event => {
  console.log(bar.nextElementSibling.style.display="block")
    //Handleclick(item);
  })
*/
