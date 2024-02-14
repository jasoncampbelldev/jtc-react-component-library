import React from 'react';

export interface chipArgs {
    label: string,
}

const Chip = (props: chipArgs) => {
    return(<span className="chip">{props.label}</span>);
}

export default Chip;