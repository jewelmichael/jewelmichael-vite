import React, { createContext, useContext, useMemo } from "react";

type Signal = { promise: Promise<void>; resolve: () => void };
type Store = Map<string, Signal>;

const Ctx = createContext<Store | null>(null);

function makeSignal(): Signal {
  let resolve!: () => void;
  const promise = new Promise<void>((r) => (resolve = r));
  return { promise, resolve };
}

export function RevealTimelineProvider({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => new Map() as Store, []);
  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useTimeline() {
  const store = useContext(Ctx);
  if (!store) throw new Error("useTimeline must be used within RevealTimelineProvider");

  function waitFor(id?: string) {
    if (!id) return Promise.resolve();
    if (!store.has(id)) store.set(id, makeSignal());
    return store.get(id)!.promise;
  }

  function done(id?: string) {
    if (!id) return;
    if (!store.has(id)) store.set(id, makeSignal());
    store.get(id)!.resolve();
  }

  return { waitFor, done };
}
