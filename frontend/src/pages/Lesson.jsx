import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getLesson } from "../adapters/lesson-adapter";

// let URL = "https://www.youtube.com/embed/6gHfVQ50OnQ?si=ti_apvfSIrjFX4S6";
let transcriptTitle = "Description"
// let transcript ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur."




export default function Lesson() {
  const [errorText, setErrorText] = useState(null);
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const navigate = useNavigate();

  
  let pageId = window.location.href;
  pageId = pageId.split("/");
  pageId = pageId.pop()
  // console.log(pageId);
  
  const [id,setId] = useState(pageId);

  
  useEffect(() => {
    const loadLesson = async (id) => {
      console.log(id)
      const [lesson, error] = await getLesson(id);

      setTitle(lesson.title)
      setUrl(lesson.url)
      setTranscript(lesson.transcript)

      if (error) return setErrorText(error.statusText);
      
    };
  
    loadLesson(id);
  }, [id]);

  return (
    <>
      <div id="video-section">
        <h1 id="video-title">{title}</h1>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen = "yes"
        ></iframe>
      </div>

      <div id="lesson-content">
        <button onClick={() => navigate("/")}  id="vocabulary">Lessons</button>
        <div id="transcript">
          <h1>{transcriptTitle}</h1>
          <p>{transcript}</p>
        </div>
        <button onClick={() => navigate("/quiz/1")} id="notes">Quiz</button>
      </div>
    </>
  );
}
