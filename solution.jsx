The solution involves restructuring the route to avoid parameter conflicts. The best approach is to use a single set of `useParams` in the parent route and then pass these parameters directly to child routes via props, instead of each route independently invoking the `useParams` hook.

```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  const { parentId, childId } = useParams();
  return (
    <div>
      <h1>Parent: {parentId}</h1>
      <ChildRoute childId={childId} />
    </div>
  );
}

function ChildRoute({ childId }) {
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
        <Route path=':parentId/child/:childId' element={<ParentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
```

This revised code avoids parameter clashes and ensures both parent and child routes correctly retrieve their respective parameters.