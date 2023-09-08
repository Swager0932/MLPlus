let CourseLink = "/lesson"
let thumbnail = "https://public-files.gumroad.com/variants/ubzr3vd0kk7g35zisc1noh1e1h5d/086fe0ccf7daf594181e55addc374111404928c7b7566b9971b7b19152128f20"
let CourseName = "HTML"
export default function HomePage() {
  return <>
    <h1>COURSES</h1>
    <ul id="course-list">
      <div className="course-card">
        <a href={CourseLink}>
        <h1 className="course-name">{CourseName}</h1>
        <img className="course-thumb" src={thumbnail} alt="" />
        </a>
      </div>
    </ul>
  </>;
}
