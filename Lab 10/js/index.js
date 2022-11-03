document.getElementById('add-new-page').addEventListener('click', () => {
  const header = document.querySelector('header');
  const div = document.createElement('div');
  div.classList.add('page-title');
  const pages = document.getElementsByClassName('page-title');
  const lastPage = pages[pages.length - 1];
  const lastNumber = lastPage.innerText.split(' ')[1];
  //  console.log(lastNumber);
  div.innerText = `Page ${parseInt(lastNumber, 10) + 1}`;
  header.appendChild(div);
});


const saveStorage = (param1) => {
  //alert(param1);
  //alert(JSON.stringify(param1));
  localStorage.setItem('history', JSON.stringify(param1));
};

const loadStorage = () => {
  //alert(param1);
  //alert(JSON.stringify(param1));
  let history = localStorage.getItem('history') || '';
  return JSON.parse(history);
};

document.querySelector('header').addEventListener('click', function (event) {
  const current_Number = event.target.innerText.split(' ')[1];
  const current_li = document.getElementById("page-counter-" + current_Number);
  const statistic_list = document.getElementById('statistic-list');
  if (current_li == null) {
    const li = document.createElement('li');
    li.id = "page-counter-" + current_Number;
    li.innerText = event.target.innerText + ':' + 1;
    statistic_list.appendChild(li);
  }
  else {
    count = parseInt(current_li.innerText.split(':')[1], 10) + 1;
    current_li.innerText = current_li.innerText.split(':')[0] + ':' + count;
  }
  saveStorage(statistic_list.innerHTML);
  //alert('2');
});


window.onload = function (e) {
  const statistic_list = document.getElementById('statistic-list');
  statistic_list.innerHTML=loadStorage();
}
