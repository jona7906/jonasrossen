import Iframe from "react-iframe";

function EmbedVideo(props) {
  const embedUrl = props.video_url;

  return (
    <div className="embed-video-wrapper">
      <Iframe
        url={embedUrl}
        width="560"
        height="315"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default EmbedVideo;
