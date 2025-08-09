import React from "react";
import clipboard from "../assets/no-projects.png";
import Button from "./utils/Button";

const NoProjectSelected = ({ onAddProj }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={clipboard}
        alt="Clipboard"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onAddProj}>Create new project </Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
