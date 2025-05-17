class Vehicle {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  stop(): void {
    console.log(`${this.name} is stopping.`);
  }

  startMotor(): void {
    throw new Error("Method not implemented.");
  }

  getName(): string {
    return this.name;
  }

  accelerate(): void {
    console.log(`${this.name} is accelerating.`);
  }
}

//----------------------------------------------
class Bicycle extends Vehicle {
  constructor() {
    super("Bicycle");
  }

  startMotor(): void {
    throw new Error("Bicycle has no motor!");
  }
}

//----------------------------------------------
 class CombustionVehicle extends Vehicle {
  constructor(name: string) {
    super(name);
  }

  startMotor(): void {
    console.log(`${this.getName()}: Starting combustion engine.`);
  }
}

//----------------------------------------------
 class ElectricVehicle extends Vehicle {
  constructor(name: string) {
    super(name);
  }

  startMotor(): void {
    console.log(`${this.getName()}: Starting electric motor.`);
  }
}


//**********************************************

const vehicles = [
  new Bicycle(),
  new CombustionVehicle("Car"),
  new ElectricVehicle("Tesla")
];

vehicles.forEach(vehicle => {
  console.log(`Testing ${vehicle.getName()}:`);
  try {
    vehicle.startMotor();
    vehicle.accelerate();
    vehicle.stop();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  console.log("------------------");
});