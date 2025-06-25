import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const ImageModal = ({
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev
}) => {
  const [direction, setDirection] = React.useState(0);

  const handleDragEnd = (event, info) => {
    const swipeOffset = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeOffset < -swipeConfidenceThreshold || swipeVelocity < -500) {
      setDirection(1);
      onNext();
    } else if (swipeOffset > swipeConfidenceThreshold || swipeVelocity > 500) {
      setDirection(-1);
      onPrev();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative max-w-3xl w-full p-4 overflow-hidden flex items-center justify-center h-[500px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl z-50"
          aria-label="Закрити"
        >
          &times;
        </button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Перегляд"
            className="absolute w-auto max-w-full max-h-full rounded-lg"
            custom={direction}
            variants={{
              enter: (dir) => ({
                x: dir > 0 ? 300 : -300,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
              },
              exit: (dir) => ({
                x: dir > 0 ? -300 : 300,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => {
                setDirection(-1);
                onPrev();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
              aria-label="Попереднє фото"
            >
              ‹
            </button>
            <button
              onClick={() => {
                setDirection(1);
                onNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
              aria-label="Наступне фото"
            >
              ›
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ImageModal;
