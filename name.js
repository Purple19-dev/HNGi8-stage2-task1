const Introduction = () => {
  let name = "Abdulrahman Imam Olamilekan";
  let intro = (document.getElementById("wrapper").innerHTML =
    "Hello my name is" + " " + name);
  return intro;
};
Introduction();
