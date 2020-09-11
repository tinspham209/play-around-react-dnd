# Mini Project: Practice Drag & Drop with react-dnd

## Date: 10 ~~>> 12 - Sep - 2020

### Functions

- Drag item from List and Drop to Container
- Drag Item Around in Container
- Study react-dnd
- study useContext for state management
- study redux toolkit for state management

### Screenshot

<img src="https://i.imgur.com/8HvH10W.png" alt="practice-react-dnd"/>

### Tech-Stack

- React Hooks
- immutability-helper : Mutate a copy of data without changing the original source
- react-dnd
- react-redux
- @reduxjs/toolkit

### Plan Of Action

- Read document of react-dnd
- Initial Box component
- useMemo for BoxStyle
- Initial Container
- Display box in Container
- Drag box around in Container
- Initial List component
- useMemo for ListStyle
- Drag item from List and Drop to Container
- Display item currently dnd to Container
- Read Document of immutability-helper
- use immutability-helper to add newItem to boxes
- check isDragBox and isDragList
- useContext for state management : isDragBox, isDragList
- Read Document of react-redux
- Read Document of redux toolkit
- update state management with Redux-toolkit
- setBoxDragging
- setListDragging
- addItemBox
- use immutability-helper to add newItem to boxItems
- setNewLocationItem
- use immutability-helper to update location of item in boxItems

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── public
└── src
    ├── app
        └── store.js
    ├── components
        ├── Box.jsx
        ├── BoxSlice.js
        ├── Container.jsx
        ├── List.jsx
        └── index.jsx
    ├── App.js
    ├── ItemTypes.js
    └── index.js
```

### Set up

Use the cmd line to clone repo to your computer

```
git clone [github_repo_url]
```

Use the cmd line to install dependencies.

```
npm install
```

Run in cmd for start the dependencies server

```
npm start
```
