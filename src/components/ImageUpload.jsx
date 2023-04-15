import { useSelector, useDispatch } from "react-redux";
import { setImage, setSelectedImage } from "../store/imageSlice";

function ImageUpload() {
  const dispatch = useDispatch();
  const { images, selectedImage } = useSelector((state) => state.image);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    dispatch(setImage(uploadedImages));
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const newFile = event.dataTransfer.files[0];
    dispatch(setImage([newFile]));
  };

  const handleImageClick = (event) => {
    dispatch(setSelectedImage(event.target.src));
  };

  return (
    <div className="image-upload">
      <h1>Image Upload</h1>
      <div
        className="file-upload"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {selectedImage && <img src={selectedImage} alt="im" />}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </div>
      {images.length ? <h2>Select any Avatar</h2> : <h2>Upload Avatar</h2>}
      <ul className="image-card-container">
        <img
          src="https://d-id-public-bucket.s3.amazonaws.com/or-roman.jpg"
          className="image-card"
          alt="default img"
          onClick={handleImageClick}
          
        />

        {images.map((image, index) => (
          // eslint-disable-next-line
          <div key={index} className="image-card" onClick={handleImageClick}>
            <img
              src={URL.createObjectURL(image)}
              alt="UploadedImage"
              name={image["name"]}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ImageUpload;
