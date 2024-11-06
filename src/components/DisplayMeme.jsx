// eslint-disable-next-line react/prop-types
const DisplayMeme = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { title, url } = data;

  return (
    <div className="m-5 p-4 border border-black rounded-lg">
      <img src={url} alt={title} className="w-64 h-64" />
    </div>
  );
};

export default DisplayMeme;
