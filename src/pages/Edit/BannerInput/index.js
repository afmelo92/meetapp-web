import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdAddAPhoto } from 'react-icons/md';
import api from '~/services/api';

import { ContainerBanner, ContainerExample } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]); //eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <ContainerBanner>
        <label htmlFor="banner">
          <img src={preview} alt="" />
          <input
            type="file"
            id="banner"
            name="banner_id"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </ContainerBanner>
      <ContainerExample>
        <MdAddAPhoto size={40} />
        <p>Selecionar Imagem</p>
      </ContainerExample>
    </>
  );
}
