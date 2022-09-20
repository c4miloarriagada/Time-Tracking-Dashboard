import data from "./data.json" assert { type: "json" };
let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];
let dailyBtn = document.getElementById("daily");
let weeklyyBtn = document.getElementById("weekly");
let monthlyBtn = document.getElementById("monthly");
const secondSection = document.querySelector(".second-section");
let dailyArray = data.map((e) => e.timeframes.daily);
let weeklyArray = data.map((e) => e.timeframes.weekly);
let monthlyArray = data.map((e) => e.timeframes.monthly);

dailyBtn.addEventListener("click", () => {
  drawElement(dailyArray);
});

weeklyyBtn.addEventListener("click", () => {
  drawElement(weeklyArray);
});
monthlyBtn.addEventListener("click", () => {
  drawElement(monthlyArray);
});
const drawElement = (array) => {
  secondSection.innerHTML = "";
  array.forEach((elemento, index) => {
    secondSection.innerHTML += `
        <div class="card">
        <div class="card__background" style="background-color: ${
          bgColors[index]
        }">
          <img class="card__image" src="./images/icon-${data[index].title
            .toLocaleLowerCase()
            .replace(/ /g, "-")}.svg" alt="" />
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${data[index].title}</p>
            <img
              class="card__dots"
              src="./images/icon-ellipsis.svg"
              alt="three dots"
            />
          </div>
          <div class="card__time">
            <p class="card__hour">${elemento.current} hrs</p>
            <p class="card__previous">Previous - ${elemento.previous}hrs</p>
          </div>
        </div>
      </div>
    
        `;
  });
};
