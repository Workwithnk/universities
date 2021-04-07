const SelectData = () => {
  let uniData = document.querySelector(".uniData");
  let value = "";
  let country = document.getElementById("mySelect").value;
  fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        uniData.innerHTML = "Data not found";
      } else {
        Array.from(data).forEach((element) => {
          let customData = `<div class="container">
          <span class="nameOfUni">${element.name}</span><hr>
          <div style="margin: 4px 0px;"><label>Country :</label><span class="uniDetails">
          ${element.country}</span></div>
          <a href="${element.web_pages}" class="visit">VISIT</a>
          </div>`;
          value += customData;
        });
        uniData.innerHTML = value;
      }
      console.log(data);
    });
  };
  