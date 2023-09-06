let Title = "Silly Cory";
let URL = "https://www.youtube.com/embed/6gHfVQ50OnQ?si=ti_apvfSIrjFX4S6";
let transcriptTitle = "Transcript"
let transcript ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur."

export default function Lesson() {
  return (
    <>
      <div id="video-section">
        <h1>{Title}</h1>
        <iframe
          width="560"
          height="315"
          src={URL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen = "yes"
        ></iframe>
      </div>

      <div id="lesson-content">
        <div id="vocabulary">Vocab</div>
        <div id="transcript">
          <h1>{transcriptTitle}</h1>
          <p>{transcript}</p>
        </div>
        <div id="notes">Notes</div>
      </div>
    </>
  );
}
