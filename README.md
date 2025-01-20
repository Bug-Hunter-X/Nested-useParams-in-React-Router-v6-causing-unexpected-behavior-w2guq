# React Router v6 Nested useParams Bug

This repository demonstrates a bug encountered when using nested routes with the `useParams` hook in React Router v6.  When a parent route and a child route both use `useParams`, the child route may not correctly access its parameters.

## Bug Description

The issue arises when a parent route consumes a URL parameter, leaving none available for a nested child route to access.  This leads to unexpected behavior, such as the child route's `useParams` hook returning an empty object even when the parameter exists in the URL.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to a URL like `/123/child/456`.  Observe that the child route does not correctly display the `childId` parameter.

## Solution

The solution involves restructuring the routes to avoid parameter conflict. One approach is using route path concatenation and passing the parameter to the child route through props.