export async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen({ onUnhandledRequest: "bypass" });
  } else {
    const { worker } = await import("./browser");
    // The `quiet: true` option helps reduce console noise
    // that sometimes interferes with Next.js HMR
    await worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  }
}
