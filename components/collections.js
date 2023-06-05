import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import camelModboard from "../assets/camelModboard.jpeg";
import modeboard2 from "../assets/modeboard2.png";
import camelModBoard2 from "../assets/camelModBoard2.png";
import patrron from "../assets/patrron.png";

import Image from "next/image";
import { Modal } from "react-bootstrap";

const collections = [
  {
    id: 1,
    title: "collection 1",
    imageUrl: camelModboard,
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
  {
    id: 2,
    title: "Collection 2",
    imageUrl: modeboard2,
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
  {
    id: 3,
    title: "collection 3",
    imageUrl: camelModBoard2,
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
  {
    id: 4,
    title: "Patrron",
    imageUrl: patrron,
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
];

const listVariants = {
  open: {
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
  collapsed: {
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Collections = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShowModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container mt-5">
      <div className="container mt-5">
        {/* ... (motion.div with collection cards) ... */}

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body>
            <Image
              src={selectedImage.image}
              width={600}
              alt="Full-size"
              className="img-fluid"
            />
            <div className="w-full">
              <label className="text-[#C19A6B] text-2xl flex flex-1 justify-center p-4">
                {selectedImage.title}
              </label>

              <p className="text-black">{selectedImage.description}</p>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              className="btn bg-[#C19A6B] text-white"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <label className="text-3xl py-2 text-[#C19A6B]">
        {" "}
        Dreamy desert by Razan{" "}
      </label>
      <div className="h-[1px] w-full bg-[#C19A6B] mb-4" />
      <motion.div
        className="row "
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            className="col-md-4 mb-4 "
            variants={itemVariants}
          >
            <div
              className="card h-100 collection-card hover:translate-y-2"
              onClick={() =>
                handleShowModal({
                  image: collection.imageUrl,
                  title: collection.title,
                  description: collection?.description,
                })
              }
            >
              <Image
                src={collection.imageUrl}
                alt={collection.title}
                className="card-img-top"
                width={300}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title text-[#C19A6B] ">
                  {collection.title}
                </h5>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Collections;
