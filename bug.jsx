In React Router Dom v6, if you have a nested route structure where a parent route has a `useParams` hook and a child route also uses `useParams`, you may encounter unexpected behavior or errors.  The child route's `useParams` hook might not properly resolve or may return an empty object even when a route parameter is defined. This is because the parent route's `useParams` hook already consumes the parameter from the URL, leaving none available for the child route. For example:

```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  const { parentId } = useParams();
  return (
    <div>
      <h1>Parent: {parentId}</h1>
      <Routes>
        <Route path=':childId' element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  const { childId } = useParams();
  return (
    <div>
      <h1>Child: {childId}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':parentId/child' element={<ParentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
```

In this setup, when navigating to `/123/child/456`, `parentId` will correctly be `123` but `childId` might incorrectly be `undefined` or `{}`.