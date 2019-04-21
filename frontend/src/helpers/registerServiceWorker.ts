export default (): void => {
  // Register the service worker
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener(
      "load",
      (): void => {
        const swUrl = "/service-worker.js"
        navigator.serviceWorker.register(swUrl).catch(
          (error): void => {
            console.error("Error during service worker registration:", error)
          }
        )
      }
    )
  }
}

export const unregister = (): void => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(
      (registration): void => {
        registration.unregister()
      }
    )
  }
}
