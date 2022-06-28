import { ref } from "Vue"

export default function useMouse() {
    let x = ref(0)
    let y = ref(0)

    window.addEventListener('mousemove', (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    })

    return {x, y}
}