import React, { useEffect } from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import RevealText from "../../components/RevealText/RevealText";
import { siteConfig } from "../../data";

import ReactLenis from "lenis/react";

import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";

const Project = () => {
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const project = projects.find((p) => p.id === currentId) || projects[0];
  const projectConfig = siteConfig.projectPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <ReactLenis root>
      <div className="page project">
        <Link to="/#case-studies" className="project-back-btn">
          <ArrowLeft size={24} /> Back
        </Link>


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
