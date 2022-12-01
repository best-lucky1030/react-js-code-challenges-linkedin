import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
    return (
        <div>
            {WindowEvent && <WindowEvent />}
        </div>
    )
}
