import { Preview } from '@creatomate/preview';
import { cloneDeep } from 'lodash';

import './style.css';

let preview: Preview | undefined;

document.addEventListener('DOMContentLoaded', function() {
  preview = new Preview(document.querySelector('#container'), 'player', 'public-0x6hcqpfhrhw16d67ogth7ry');

  preview.onReady = async () => {

    console.log('Setting source');

    await preview.setSource({ /* TODO */ });

    console.log('Before', preview.getSource());

    // Delete the "white_circle_1" element by its ID
    const source = cloneDeep(preview.getSource());
    source.elements = source.elements.filter((element: Record<string, any>) => element.id !== 'b0515897-e89b-4d76-afc1-a4142daf9f29');

    await preview.setSource(source);

    console.log('After', preview.getSource());
  };
});
