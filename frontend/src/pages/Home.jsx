let CourseLink = "/lessons/1"
let thumbnail = "https://public-files.gumroad.com/variants/ubzr3vd0kk7g35zisc1noh1e1h5d/086fe0ccf7daf594181e55addc374111404928c7b7566b9971b7b19152128f20"
let CourseName = "HTML 1"
export default function HomePage() {
  return <>
    <h1 id="course-title">COURSES</h1>
    <ul id="course-list">
      <li id="course-item">
        <div className="course-card">
          <a className="course-link" href={CourseLink}>
          <h1 className="course-name">{CourseName}</h1>
          <img className="course-thumb" src={thumbnail} alt="" />
          </a>
        </div>
      </li>
      <li id="course-item">
        <div className="course-card">
          <a className="course-link" href={"/lessons/2"}>
          <h1 className="course-name">{"HTML 2"}</h1>
          <img className="course-thumb" src={thumbnail} alt="" />
          </a>
        </div>
      </li>
      <li id="course-item">
        <div className="course-card">
          <a className="course-link" href={"/lessons/3"}>
          <h1 className="course-name">{"HTML 3"}</h1>
          <img className="course-thumb" src={thumbnail} alt="" />
          </a>
        </div>
      </li>
    </ul>
  </>;
}
