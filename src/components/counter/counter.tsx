import { component$, useSignal } from "@builder.io/qwik";
import { Wrapper } from "../wrapper/wrapper";
import { Incrementor } from "../incrementor/incrementor";

export interface ICounterProps {
  initialCount: number;
  identifier: string;
}

export const Counter = component$<ICounterProps>((props) => {
  console.log(`Counter-${props.identifier}`);

  const count = useSignal(props.initialCount);

  return (
    <div class={`Counter-${props.identifier}`}>
      <h2>{props.identifier.toUpperCase()} Counter</h2>
      <Wrapper numberToShow={count} identifier={props.identifier} />
      <Incrementor count={count} identifier={props.identifier} />
    </div>
  );
});
