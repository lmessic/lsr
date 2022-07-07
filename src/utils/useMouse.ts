import { ref } from "vue";

export default function useMouse() {
  const x = ref(0);
  const y = ref(0);

  window.addEventListener("mousemove", (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return { x, y };
}
