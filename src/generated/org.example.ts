/* eslint-disable */
// Generated code for namespace: org.example

// generic imports
import * as Concerto from '@accordproject/concerto-runtime';

// model imports

// classes
export interface ExampleData extends Concerto.ConceptData {
   $class: string;
   value: string;
}

@Concerto.Typed({"namespace":"org.example","name":"Example"})
export class Example extends Concerto.Concept {
   public static $class = 'org.example.Example';
   public $class = Example.$class;

   @Concerto.StringProperty({})
   value!: string;

   public constructor(data?: Partial<Example>) {
      super();
      Object.assign(this, data);
   }

   public static parse(data: Buffer): Example
   public static parse(data: string): Example
   public static parse(data: object): Example
   public static parse(data: ExampleData): Example
   public static parse(data: unknown): Example {
      return Concerto.parse(Example, data);
   }

   public serialize(): ExampleData {
      return Concerto.serialize(this);
   }

   public validate(): void {
      return Concerto.validate(this);
   }
}

