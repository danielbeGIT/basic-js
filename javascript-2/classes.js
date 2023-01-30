class Rectangle {
    constructor(rooms, jacuzzi, solarPanels = true) {
        if (typeof height !== "number") {
            throw new Error("Height is not a number")
        }

        this.height = height
        this.width = width
    }
  
    area() {
      return this.height * this.width
    }
    
    circumference() {
      return this.height * 2 + this.width * 2
    }
}
  
const myRectangle1 = new Rectangle(10, 20)
console.log("myReactangle1 area", myRectangle1.area())

const myRectangle2 = new Rectangle(15, 25)
console.log("myReactangle1 area", myRectangle2.area())

const notaRectangle = new Rectangle("lol", "cats")