import { component$, $, type Signal } from "@builder.io/qwik";

interface IIncrementorProps {
  count: Signal<number>;
  identifier: string;
}

export const Incrementor = component$<IIncrementorProps>((props) => {
  console.log(`Incrementor-${props.identifier}`);

  const increment = $(() => props.count.value++);
  const decrement = $(() => props.count.value--);

  return (
    <div class={`Incrementor-${props.identifier}`}>
      <button onClick$={increment}>increment value</button>
      <button onClick$={decrement}>decrement value</button>
    </div>
  );
});
