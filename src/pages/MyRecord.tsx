import type React from "react";

export default function MyRecord(): React.JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Record</h1>
        <p className="text-lg max-w-2xl">
          This is a demo application built with React and React Router. It
          showcases how to implement client-side routing in a React application.
        </p>
      </div>
    </div>
  );
}
