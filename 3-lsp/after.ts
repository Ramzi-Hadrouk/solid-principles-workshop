
 class Vehicle {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  stop(): void {
    console.log(`${this.name} is stopping.`);
  }

  getName(): string {
    return this.name;
  }

  accelerate(): void {
    console.log(`${this.name} is accelerating.`);
  }
}

//----------------------------------------------

abstract class MotorVehicle extends Vehicle {
  constructor(name: string) {
    super(name);
  }

  abstract startMotor(): void;
}

//---------------------------------------------- 
 class Bicycle extends Vehicle {
  constructor() {
    super("Bicycle");
  }
}

//----------------------------------------------
 class CombustionVehicle extends MotorVehicle {
  constructor(name: string) {
    super(name);
  }

  startMotor(): void {
    console.log(`${this.getName()}: Starting combustion engine.`);
  }
}

//----------------------------------------------
 class ElectricVehicle extends MotorVehicle {
  constructor(name: string) {
    super(name);
  }

  startMotor(): void {
    console.log(`${this.getName()}: Starting electric motor.`);
  }
}

//*********************************************

const vehicles = [
  new Bicycle(),
  new CombustionVehicle("Car"),
  new ElectricVehicle("Tesla")
];

vehicles.forEach(vehicle => {
  console.log(`Testing ${vehicle.getName()}:`);
  if (vehicle instanceof MotorVehicle) {
    vehicle.startMotor();
  }
  vehicle.accelerate();
  vehicle.stop();
  console.log("------------------");
});