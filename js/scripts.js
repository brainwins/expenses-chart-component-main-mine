const date = new Date();
const today = date.getDay();

const daysOfWeekLabel = {
    0: 'mon',
    1: 'tue',
    2: 'wed',
    3: 'thu',
    4: 'fri',
    5: 'sat',
    6: 'sun'
};

const daysOfWeekJs = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat'
}


//Get data from JSON
async function getData() {
    let url = './js/data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

//Generate DIVS
async function renderData() {
  let data = await getData();
  data.forEach((element, i) => {

    const divDay = document.createElement("div");
    divDay.classList.add('day');

    const divLabel = document.createElement("div");
    divLabel.classList.add('label');
    let labelText = document.createTextNode(daysOfWeekLabel[i]);
    divLabel.appendChild(labelText);
    divDay.appendChild(divLabel)

    const divBar = document.createElement("div");
    divBar.classList.add('bar');
    divBar.style.paddingTop = `${element.amount*2.75}px`;
    //color cyan if today
    if (daysOfWeekJs[today] == daysOfWeekLabel[i]) {
      divBar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }
    divDay.appendChild(divBar);

    const divHover = document.createElement("div");
    divHover.classList.add('bar-hover');
    divHoverText = document.createTextNode("$" + element.amount);
    divHover.appendChild(divHoverText);
    divDay.appendChild(divHover);

    document.querySelector(".graph-bars").appendChild(divDay);

  });

}

renderData();
