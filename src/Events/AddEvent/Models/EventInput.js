class EventInput {
    constructor(label, type, name, placeholder, help) {
        const inputData = {
            label,
            type,
            name,
            placeholder,
            help,
            value: type === 'text' ? '' : undefined,
            valid: false
        };
        Object.assign(this, inputData);
    }

    // ======================================================================
    // METHODS
    // ======================================================================

    validate = (value) => {
        switch(this.type) {
            case 'text':
                return value.length > 2;
            case 'date':
                return !!Date.parse(value);
            default:
                return null;
        }
    }
}

export default EventInput;