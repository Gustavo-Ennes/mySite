import agatha1 from "../assets/img/portfolio/portfolio-1.jpg";
import agatha2 from "../assets/img/portfolio/portfolio-2.jpg";
import agatha3 from "../assets/img/portfolio/portfolio-3.jpg";
import feriapp1 from "../assets/img/portfolio/portfolio-4.jpg";
import feriapp2 from "../assets/img/portfolio/portfolio-5.jpg";
import feriapp3 from "../assets/img/portfolio/portfolio-6.jpg";
import agatha4 from "../assets/img/portfolio/portfolio-7.jpg";
import agatha5 from "../assets/img/portfolio/portfolio-8.jpg";
import feriapp4 from "../assets/img/portfolio/portfolio-9.jpg";
import feriapp5 from "../assets/img/portfolio/portfolio-10.jpg";
import feriapp6 from "../assets/img/portfolio/portfolio-11.jpg";
import feriapp7 from "../assets/img/portfolio/portfolio-12.jpg";

const agathaProject = {
  images: [agatha1, agatha2, agatha3, agatha4, agatha5],
  title: "Ágatha",
};
const feriappProject = {
  images: [
    feriapp1,
    feriapp2,
    feriapp3,
    feriapp4,
    feriapp5,
    feriapp6,
    feriapp7,
  ],
  title: "Feriapp",
};

const allProjects = {
  images: agathaProject.images.concat(feriappProject.images),
  title: "all",
};

const projectList = [allProjects, agathaProject, feriappProject];

export { projectList };
