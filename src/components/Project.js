export default function Project({ project }) {
  return (
    <li className="project">
      <h3>{project.name}</h3>
      <h4>
        <a href={project.deployments_url} target="_blank">
          Deployed Project URL
        </a>
      </h4>
      <h4>
        <a href={project.html_url} target="_blank">
          GitHub URL
        </a>
      </h4>
    </li>
  );
}
