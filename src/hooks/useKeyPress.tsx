import { useEffect } from "react";

function useKeyPress(key: string, action: () => void) {
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.code === key) {
        action();
      }
    };
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key, action]);
}
export default useKeyPress;
