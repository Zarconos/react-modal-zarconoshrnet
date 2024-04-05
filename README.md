# react-modal-zarconoshrnet

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal-zarconoshrnet.svg)](https://www.npmjs.com/package/react-modal-zarconoshrnet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install i react-modal-zarconoshrnet
```

## Usage

```jsx

import React, { useState } from 'react';
import Modal from 'react-modal-zarconoshrnet';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      </Modal onClose={closeModal} options={{ closeText: 'x' }}>
    </div>
  );
}

export default App;
```
Le composant <Modal> accepte les props suivantes :

- isOpen : booléen indiquant si la modale est ouverte
- onClose : fonction pour fermer la modale
- children : contenu à afficher dans la modale

## License

MIT © [Zarconos](https://github.com/Zarconos)
