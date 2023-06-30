import { component$, type Signal } from "@builder.io/qwik";

export interface IDisplayProps {
  numberToShow: Signal<number>;
  identifier: string;
}

export const Display = component$<IDisplayProps>((props) => {
  console.log(`Display-${props.identifier}`);

  return (
    <h3 class={`Display-${props.identifier}`}>{props.numberToShow.value}</h3>
  );
});
