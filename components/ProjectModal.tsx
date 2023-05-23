import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import Modal from 'react-modal';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  currentProject: Project | undefined;
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(36, 36, 36, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(203 140 6 / 0.93)',
  },
};

Modal.setAppElement('#projects');

const ProjectModal = ({ modalIsOpen, closeModal, currentProject }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex flex-wrap items-center space-x-2 justify-center sm:gap-0 gap-1">
        {currentProject?.technologies.map(technology => (
          <img
            className="w-6 h-6 sm:h-10 sm:w-10"
            key={technology?._id}
            src={urlFor(technology?.image).url()}
            alt="Technology image"
            title={technology?.title}
          />
        ))}
      </div>
      <p className="mt-5 text-md text-center">{currentProject?.summary}</p>
    </Modal>
  );
};

export default ProjectModal;
