import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAudio, setText } from "../store/textAudioSlice";

function TextToSpeech() {
  // const [text, setText] = useState('');
  // const [audio, setAudio] = useState(null);
  const dispatch = useDispatch();
  const { images, selectedImage } = useSelector((state) => state.image);
  const { text, audio } = useSelector((state) => state.text);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState(null);

  const handleTextChange = (event) => {
    dispatch(setText(event.target.value));
  };

  const handleAudioChange = (event) => {
    dispatch(setAudio(event.target.files[0]));
  };

  const handleTextToSpeech = () => {
    // Use text and audio to generate speech using API
    // console.log(text);
    // console.log(audio);
    // console.log(images);
    // console.log(selectedImage);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Basic WkdGdWFYTm9jMkZzYVcwek1qTkFaMjFoYVd3dVkyOXQ6Q21vVHhiU0Vlckc2YmJabnpValRB",
      },
      body: JSON.stringify({
        script: {
          type: "text",
          provider: { type: "microsoft", voice_id: "Jenny" },
          ssml: "false",
          input: text || "this is an ai generated video done by md danish" ,
        },
        config: { fluent: "false", pad_audio: "0.0" },
        source_url:"https://d-id-public-bucket.s3.amazonaws.com/or-roman.jpg",
      }),
    };

    fetch("https://api.d-id.com/talks", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization:
          "Basic WkdGdWFYTm9jMkZzYVcwek1qTkFaMjFoYVd3dVkyOXQ6Q21vVHhiU0Vlckc2YmJabnpValRB",
      },
    };

    fetch("https://api.d-id.com/talks?limit=100", option)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setGeneratedVideoUrl(response.talks[0]["result_url"]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-to-speech">
      <h2>Script</h2>

      <textarea
        value={text}
        onChange={handleTextChange}
        className="input-text"
        placeholder="Write your script here..."
      />

      <label>
        Audio:
        <input type="file" accept="audio/*" onChange={handleAudioChange} />
      </label>
      <br />
      <button onClick={handleTextToSpeech}>Generate video</button>
      {generatedVideoUrl && (
        <div className="generated-video">
          <video src={generatedVideoUrl} controls />
        </div>
      )}
    </div>
  );
}

export default TextToSpeech;
