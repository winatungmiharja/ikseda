import * as React from 'react';
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import { useFormContext } from 'react-hook-form';

import 'react-dropzone-uploader/dist/styles.css';

type FileInputType = {
  id: string;
  label: string;
};

const FileInput = ({ id, label }: FileInputType) => {
  const { setValue } = useFormContext();
  const [status, setStatus] = React.useState('');

  const getUploadParams: IDropzoneProps['getUploadParams'] = () => {
    return { url: 'https://httpbin.org/post' };
  };

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    { file },
    status
  ) => {
    if (status === 'done' || status === 'headers_received') {
      setValue(id, file);
      setStatus('done');
    } else {
      setStatus(status);
    }
  };

  return (
    <div className='relative z-0 py-1 text-primary-100'>
      <label className='text-primary-200'>{label}</label>

      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        inputContent='Pilih File'
        submitButtonContent='tambahkan'
        classNames={{
          dropzone: 'relative border-primary-900 border-2 shadow-inner p-2',
          inputLabel: 'bg-primary-200 rounded-sm px-2 py-1 text-primary-900 ',
          inputLabelWithFiles: '',
          preview: 'flex justify-between',
          previewImage: 'w-1/3 md:w-1/4 rounded-sm border-2 border-primary-200',
          submitButtonContainer: 'w-full flex justify-end',
          submitButton:
            'text-right text-primary-100 text-xs bg-teal rounded-sm px-2 py-1 border border-primary-900',
        }}
      />
      <small className='text-primary-300'>
        status : {status ? status : 'no file chosen'}
      </small>
    </div>
  );
};

export default FileInput;
