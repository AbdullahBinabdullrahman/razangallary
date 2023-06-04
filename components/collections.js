import React, { useState } from "react";
import { motion } from "framer-motion";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import Image from "next/image";

import { Modal } from "react-bootstrap";

const collections = [
  {
    id: 1,
    title: "Collection 1",
    imageUrl: photo1,
  },
  {
    id: 2,
    title: "Collection 2",
    imageUrl: photo2,
  },
  {
    id: 3,
    title: "Collection 3",
    imageUrl: photo1,
  },

  {
    id: 4,
    title: "Collection 4",
    imageUrl: photo1,
  },
  {
    id: 5,
    title: "Collection 5",
    imageUrl: photo2,
  },
  {
    id: 6,
    title: "Collection 6",
    imageUrl: photo1,
  },
];

const listVariants = {
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
              src={selectedImage}
              width={600}
              alt="Full-size"
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      ```
      <motion.div
        className="row"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            className="col-md-4 mb-4"
            variants={itemVariants}
          >
            <div
              className="card h-100"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              onClick={() => handleShowModal(collection.imageUrl)}
            >
              <Image
                src={collection.imageUrl}
                alt={collection.title}
                className="card-img-top"
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">{collection.title}</h5>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Collections;
