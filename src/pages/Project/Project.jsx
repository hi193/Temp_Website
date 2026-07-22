import React, { useEffect } from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import RevealText from "../../components/RevealText/RevealText";
import { siteConfig } from "../../data";

import ReactLenis from "lenis/react";

import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = parseInt(id, 10);
  const project = projects.find((p) => p.id === currentId) || projects[0];
  const projectConfig = siteConfig.projectPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <ReactLenis root>
      <div className="page project">
        <button onClick={() => {
          if (window.history.length > 2) {
            navigate(-1);
          } else {
            navigate("/#case-studies");
          }
        }} className="project-back-btn" style={{ background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none', padding: 0 }}>
          <ArrowLeft size={24} /> Back
        </button>


        <section className="project-details">
          {project.content ? (
            <div className="project-markdown-content">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          ) : (
            <>
              <div className="details">
                <RevealText tag="p" animateOnScroll={true} className="primary sm">
                  {projectConfig.overviewLabel}
                </RevealText>
                <RevealText tag="h4" animateOnScroll={true}>
                  {project.description || projectConfig.overviewCopy}
                </RevealText>
              </div>

              {projectConfig.meta.map((item) => (
                <div className="details" key={item.label}>
                  <RevealText tag="p" animateOnScroll={true} className="primary sm">
                    {item.label}
                  </RevealText>
                  <RevealText tag="h4" animateOnScroll={true}>
                    {item.value}
                  </RevealText>
                </div>
              ))}
            </>
          )}
        </section>



        <ProjectCarousel />
      </div>
    </ReactLenis>
  );
};

export default Project;
