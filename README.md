# react-modal-zarconoshrnet

> hrnet-modal-zarconos is a simple and customizable modal component for React applications.

[![NPM](https://img.shields.io/npm/v/react-modal-zarconoshrnet.svg)](https://www.npmjs.com/package/react-modal-zarconoshrnet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Prerequisites

Node.js version 10 or higher

## Recommended Text Editor

Visual Studio Code

## Install

```bash
npm install i react-modal-zarconoshrnet
```

## Usage

Import the Modal component into your React application and use it as follows:


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
      <Modal onClose={closeModal} options={{ closeText: 'x' }}>
        <div>Modal Content Goes Here</div>
      </Modal>
    </div>
  );
}

export default App;
```

## Example Usage

![Alt text](https://image.noelshack.com/fichiers/2024/15/4/1712790827-modal.png "Modal")


## Props

- onClose: A function to be called when the modal is closed.
- options: An object containing additional options for customizing the modal. Currently supports closeText option for customizing the close button text.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
MIT © [Zarconos](https://github.com/Zarconos)

