import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '@/components/Loader/Loader';
import { Modal } from '@/components/Modal/Modal';
import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectSignatureModal } from '@/store/Modal/ModalSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';

export const SignatureModal: FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<boolean> = useSelector(selectSignatureModal);

  const body = (
    <div className="flex flex-col items-center">
      <p className="mt-6  text-slate-500 text-md leading-relaxed">
        Your publication has been successfuly created. Please, sign the
        transaction via your Xumm applictaion.
      </p>
      <Loader className="mt-12" />
    </div>
  );

  /** Methods */
  const onClose = () => {
    dispatch(ModalActions.closeModal('publicationResult'));
    dispatch(LoaderAction.setLoaded('publish'));
  };

  return (
    <Modal
      onClose={onClose}
      title="Publication result"
      isOpen={modalData.isOpen}
      footer={null}
    >
      {body}
    </Modal>
  );
};
