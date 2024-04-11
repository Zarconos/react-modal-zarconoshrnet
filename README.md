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

const modalContent = <div id="confirmation" className="modal-text">Success</div>;

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
    {isModalOpen && (
      <Modal onClose={closeModal} content={modalContent} options={{ closeText: 'x', modalText: 'Custom Text Here' }} />
    )}
    </div>
  );
}

export default App;

```

## Styles

```jsx

import 'react-modal-zarconoshrnet/dist/index.css'

```

## Example Usage

![Alt text](https://image.noelshack.com/fichiers/2024/15/4/1712790827-modal.png "Modal")


## Props

The Modal component accepts the following props:

- `onClose`: A function to be called when the modal is closed. **Required**.
- `content`: The content of the modal. This can be a React element or any valid JSX. **Required**.
- `options`: An object containing additional options for customizing the modal.
- `closeText`: The text for the close button. **Required**.
- `modalText`: Optional text for the modal itself.

These props allow you to customize the behavior and appearance of the Modal component according to your needs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
MIT © [Zarconos](https://github.com/Zarconos)

