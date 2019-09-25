import Geocode from "react-geocode";

const locationSearch = location => {
  Geocode.setApiKey("AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE");
  Geocode.setLanguage("en");
  Geocode.fromAddress(location).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );
};

export default locationSearch;
