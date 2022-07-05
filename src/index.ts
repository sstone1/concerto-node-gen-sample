import * as Concerto from "@accordproject/concerto-runtime";
import { Example, ExampleData } from "./generated";

async function main() {
    // Parse input data into an instance.
    const inputData1: ExampleData = {
      $class: Example.$class,
      value: 'hello, world'
    };
    const instance1 = Concerto.parse(inputData1);
    console.log('Parsed input data into instance (class not specified):', instance1);

    // Parse input data into an instance of a specified class.
    const instance2 = Example.parse(inputData1);
    console.log('Parsed input data into instance (class specified):', instance2);

    // Parse input data into an instance.
    const inputData2 = JSON.stringify({
      $class: Example.$class,
      value: 'hello, world'
    });
    const instance3 = Concerto.parse(inputData2);
    console.log('Parsed input data into instance (from JSON string):', instance3);

    // Modify the instance and serialize it into output data.
    instance2.value = 'bonjour, monde';
    const outputData = instance2.serialize();
    console.log('Serialized instance into output data:', outputData);

    // Delete a required property from the instance and validate it.
    delete (instance2 as unknown as Record<string, unknown>)['value'];
    try {
        instance2.validate();
    } catch (error) {
        console.log('Caught validation error from instance:', error);
    }
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});