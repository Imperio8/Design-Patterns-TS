import readline from "readline-sync";
import { singletonExample } from "./creational/singleton/example";
import {factoryMethodExample} from "./creational/factory-method/example";
import {abstractFactoryExample} from "./creational/abstract-factory/example";
import {builderExample} from "./creational/builder/example";
import {prototypeExample} from "./creational/prototype/example";
import {adapterExample} from "./structural/adapter/example";
import {bridgeExample} from "./structural/bridge/example";
import {compositeExample} from "./structural/composite/example";
import {observerExample} from "./behavioral/observer/example";
import {commandExample} from "./behavioral/command/example";
import {strategyExample} from "./behavioral/strategy/example";
import {stateExample} from "./behavioral/state/example";
import {templateMethodExample} from "./behavioral/template-method/example";
import {iteratorExample} from "./behavioral/iterator/example";
import {mediatorExample} from "./behavioral/mediator/example";

const patterns: { [key: string]: (os: string) => void } = {
  // Creational
  singleton: singletonExample,
  factoryMethod: factoryMethodExample,
  abstractFactory: abstractFactoryExample,
  builder: builderExample,
  prototype: prototypeExample,
  
  // Structural
  adapter: adapterExample,
  bridge: bridgeExample,
  composite: compositeExample,
  
  // Behavioral
  observer: observerExample,
  command: commandExample,
  strategy: strategyExample,
  state: stateExample,
  templateMethod: templateMethodExample,
  iterator: iteratorExample,
  mediator: mediatorExample
};


function main() {
  console.log("Available patterns:");
  console.log(Object.keys(patterns).join("\n"));
  
  const pattern = readline.question("Enter pattern name: ");
  
  if (patterns[pattern]) {
    console.log(`\nRunning ${pattern} example:\n`);
    if (pattern === "abstractFactory") {
      const os = readline.question("Enter operating system (Windows/macOS): ");
      patterns[pattern](os);
    } else {
      patterns[pattern]('');
    }
  } else {
    console.log("Pattern not found");
  }
}

main();