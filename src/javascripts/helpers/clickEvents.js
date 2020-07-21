const showAirportDiv = () => {
  $('#homepage').hide();
  $('#crew').hide();
  $('#hangar').show();
  $('#plane-collection').hide();
};

const showPlaneDiv = () => {
  $('#homepage').hide();
  $('#crew').hide();
  $('#hangar').hide();
  $('#plane-collection').show();
};

const showCrewDiv = () => {
  $('#homepage').hide();
  $('#crew').show();
  $('#hangar').hide();
  $('#plane-collection').hide();
};

const showFoodDiv = () => {
  $('#homepage').hide();
  $('#crew').hide();
  $('#hangar').hide();
  $('#plane-collection').hide();
  $('#food').show();
};

const clickEvents = () => {
  $('body').on('click', '.airport-nav', showAirportDiv);
  $('body').on('click', '.plane-nav', showPlaneDiv);
  $('body').on('click', '.crew-nav', showCrewDiv);
  $('body').on('click', '.food-nav', showFoodDiv);
};

export default { clickEvents };
