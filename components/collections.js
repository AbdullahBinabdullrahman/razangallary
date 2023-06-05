import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import camelModboard from "../assets/camelModboard.jpeg";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";

import patrron from "../assets/patrron.png";

import Image from "next/image";
import { Modal } from "react-bootstrap";

const collections = [
  {
    id: 1,
    title: "ModBoard",
    imageUrl: camelModboard,
    description: `هو عن طبيعة الصحراء الحالمة وسكانها من جبال وصخور وتراب و حيوانات وكثبان رملية ومن مناخها الحار في النهار والبارد في الليل … تم توظيف المجموعه بكاملها من خلال المودبورد وايضا هذه المجموعة تناسب المرأة من سن ٢٠-٣٠ لان المجموعة تحتوي على لمسة عصرية وايضا كلاسيكية في نفس الوقت 
    `,
  },
  {
    id: 2,
    title: "التصميم رقم -1-",
    imageUrl: design1,
    description: `هو تصميم مستوحى من الطبيعة الحالمة في الصحراء وايضا من الوان الحيوانات والصخور وايضا الاتربه في الصحراء عبارة عن جاكيت شامواه بحزام مفتوح من الخلف ومخيط بواسطة حبال شامواه مع تنورة قصيرة بنفس اللون ونفس الخامة `,
  },
  {
    id: 3,
    title: "التصميم رقم -2-",
    imageUrl: design2,
    description: `عبارة عن تصميم مستوحى من الطبيعة الخلابة والمناخ الصحراوي ويمثل البرد الذي في الليل من خلال قماش الشامواه والحر الذي في النهار من خلال قماش الكتان `,
  },
  {
    id: 4,
    title: "التصميم رقم -3-",
    imageUrl: design3,
    description: `هو عبارة عن تصميم مستوحى من انحناءات وتموجات الطبيعة في الصحراء وهو جاكيت بلا اكمام من جلد الجمل او شعر الجمل المدعم بالعظام لكي يعطي التقويسه المناسبة وبالنسبة للاكسسوارات هي عبارة عن شنطة وحلق من قوتشي واخيرا شال مصنوع من الكتان الطبيعي `,
  },
  {
    id: 5,
    title: "التصميم رقم -4-",
    imageUrl: design4,
    description: `عبارة عن تصميم مستوحى من الاتربه في الصحراء والكثبان الرملية بمنحنياتها المتنوعة واختلاف درجات الوانها وايضا بانسيابيتها وهو عبارة عن جاكيت باكمام فقط ذو سحاب خلفي واهداب من الطرفين`,
  },
  {
    id: 6,
    title: "Patrron",
    imageUrl: patrron,
    description: `هو عبارة عن انحناءات مستوحاة من الطبيعة الخلابة في الصحراء من شتى انواعها سواء من الاتربه او الجبال او الكثبان الرملية او الصخور وماالى ذلك وتم توظيف هذه الانحناءات بمختلف مقاسات السمك لتعطي تأثير وانطباع جميل`,
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
