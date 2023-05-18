const LightBox = ({ newimages }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageFrameRef = useRef(null);
  const imageRef = useRef(null);
  const prevHandler = () => {
    setCurrentIndex((currentIndex - 1 + newimages?.length) % newimages?.length);
  };
  const nextHandler = () => {
    setCurrentIndex((currentIndex + 1) % newimages?.length);
  };
  useEffect(() => {
    const { height } = imageRef.current?.getBoundingClientRect() || {};
    const { width } = imageFrameRef.current?.getBoundingClientRect() || {};
    setHeight(height);
    setWidth(width);
  }, []);
  return (
    <div>
      <div>
        <div>
          <ButtonLight
            height={height}
            text=" ‹"
            onClick={prevHandler}
            direction="left"
            currentIndex={currentIndex}
            numimages={newimages?.length}
          />
          <div>
            {newimages?.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-1 m-0  transition-transform duration-300 ease-in-out overflow-hidden w-full h-screen "
                ref={imageFrameRef}
                style={{ transform: `translateX(-${currentIndex * width}px)` }}
              >
                <div class="flex h-5/6 ">
                  <img
                    className="w-full object-contain"
                    src={image.image}
                    alt="Image"
                    ref={imageRef}
                  />
                </div>
              </div>
            ))}
          </div>

          <ButtonLight
            text=" ›"
            onClick={nextHandler}
            height={height}
            direction="right"
            numimages={newimages?.length}
          />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
