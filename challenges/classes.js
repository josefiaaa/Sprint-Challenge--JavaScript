// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(prop){
      this.length = prop.length;
      this.width = prop.width;
      this.height = prop.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea () {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker{
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return 6 * (this.length * this.length)
  }
}

const cuboid = new CuboidMaker({

  length: 4,
  width: 5,
  height: 5,

  }
);

const cube1 = new CubeMaker({

  length: 7,
  width: 7,
  height: 7,

  }
);

const cube2 = new CubeMaker({

  length: 7,
  width: 7,
  height: 7,

  }
);
    

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube1.volume());
console.log(cube1.surfaceArea());
console.log(cube2.volume());
console.log(cube2.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

