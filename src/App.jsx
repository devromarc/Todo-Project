import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import { useState } from "react";
import { nanoid } from "nanoid";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setprojectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setprojectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: nanoid(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setprojectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleStartAddProject() {
    setprojectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancel() {
    setprojectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(id) {
    setprojectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleAddProject(projectData) {
    setprojectsState((prevState) => {
      const newProj = {
        ...projectData,
        id: nanoid(),
      };
      return {
        ...prevState,
        selectedProjectId: newProj.id,
        projects: [newProj, ...prevState.projects],
      };
    });
  }

  function handleDeleteProject() {
    setprojectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProj={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onAddProj={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProj={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
