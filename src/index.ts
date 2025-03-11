import readline from "readline-sync";
import { singletonExample } from "./creational/singleton/example";
import {factoryMethodExample} from "./creational/factory-method/example";
import {abstractFactoryExample} from "./creational/abstract-factory/example";
import {builderExample} from "./creational/builder/example";
import {prototypeExample} from "./creational/prototype/example";

const patterns: { [key: string]: (os: string) => void } = {
  singleton: singletonExample,
  factoryMethod: factoryMethodExample,
  abstractFactory: abstractFactoryExample,
  builderExample: builderExample,
  prototypeExample: prototypeExample
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