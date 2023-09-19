//first element
elements.MotorOil = {
  color: "#504340",
  behavior: behaviors.LIQUID,
  category: "liquids",
  viscosity: 100000,
  state: "liquid",
  density: 830,
}
// Create a new tool:
elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};
