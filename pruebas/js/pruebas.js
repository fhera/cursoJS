'use strict'

function selectOptionAndRemoveFromSelect(buttonAtt, selectAtt) {
  var button = $(buttonAtt);
  var select = $(selectAtt);

  button.click(() => {
    $('#selectedCars').append(`<li id="car_${select.val()}">${select.val()} 
      <button type="button" onclick="selectOptionAndAddToSelect('${select.val()}', '#car_${select.val()}', '#cars')">Quitar</button></li>`);
    $(`option[value='${select.val()}']`, select).remove();
  });
}

function selectOptionAndAddToSelect(text, li, selectAtt) {
  $(selectAtt).prepend(`<option value="${text}">${text}</option>`);
  $(li).remove();
}

$(document).ready(() => {
  selectOptionAndRemoveFromSelect('#buttonCar', '#cars');
});