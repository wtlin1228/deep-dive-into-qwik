import {
  component$,
  useTask$,
  Resource,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Reactivity } from "~/components/reactivity/reactivity";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Qwik reactivity</h1>
      {/* <Reactivity /> */}
      {/* <ImplicitTemplateUpdates /> */}
      {/* <ExplicitUseTask /> */}
      <ExplicitUseResource />
    </>
  );
});

export const ImplicitTemplateUpdates = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <button onClick$={() => count.value++}>count++</button>
      <p>Count: {count.value}</p>
    </>
  );
});

export const ExplicitUseTask = component$(() => {
  const count = useSignal(0);
  const delayCount = useSignal(0);

  useTask$(({ track, cleanup }) => {
    track(() => count.value);
    const id = setTimeout(() => (delayCount.value = count.value), 2000);
    cleanup(() => clearTimeout(id));
  });

  return (
    <>
      <button onClick$={() => count.value++}>count++</button>
      <p>Count: {count.value}</p>
      <p>Delayed Count: {delayCount.value}</p>
    </>
  );
});

export const ExplicitUseResource = component$(() => {
  const count = useSignal(1);
  const pokemonList = useResource$(async ({ track }) => {
    track(() => count.value);
    await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
    return Array(count.value)
      .fill(null)
      .map((_, idx) => `pokemon-${idx + 1} 🐙`);
  });

  return (
    <>
      <button onClick$={() => count.value++}>count++</button>
      <p>Count: {count.value}</p>
      <Resource
        value={pokemonList}
        onPending={() => <h2>loading...</h2>}
        onResolved={(pokemons) => <h2>{pokemons}</h2>}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Dive into Qwik's reactivity",
};
