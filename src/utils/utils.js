export function handleInputChange(event, setInputValue) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInputValue(value);
}
