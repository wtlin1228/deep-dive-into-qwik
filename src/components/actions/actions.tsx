import { component$, $, type Signal } from "@builder.io/qwik";

interface IActionsProps {
  count: Signal<number>;
  identifier: string;
}

export const Actions = component$<IActionsProps>((props) => {
  console.log(`Actions-${props.identifier}`);

  const plus = $(() => props.count.value++);
  const minus = $(() => props.count.value--);

  return (
    <div class={`Actions-${props.identifier}`}>
      <button onClick$={plus}>increment</button>
      <button onClick$={minus}>decrement</button>
    </div>
  );
});
