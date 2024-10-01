import { useNavigation } from '@app/app/hooks/useNavigation';
import { log } from 'node_modules/astro/dist/core/logger/core';
import { useEffect, useState } from 'react';
import { Button } from 'src/ui/buttons'
import { InputCheckbox } from 'src/ui/From/InputCheckbox'
import { InputSelect } from 'src/ui/From/InputSelect'
import { InputText } from 'src/ui/From/InputText'
import Modal from 'src/ui/Modal';

export const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: '',
    fechaNacimiento: '',
    correo: '',
    telefono: '',
    pais: '',
    terminos: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.nombre) {
      errors.nombre = 'El nombre completo es requerido';
    }
    if (!values.fechaNacimiento) {
      errors.fechaNacimiento = 'La fecha de nacimiento es requerida';
    }
    if (!values.correo) {
      errors.correo = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
      errors.correo = 'El correo electrónico no es válido';
    }
    if (!values.telefono) {
      errors.telefono = 'El número de teléfono es requerido';
    }
    if (!values.pais) {
      errors.pais = 'El país de residencia es requerido';
    }
    if (!values.terminos) {
      errors.terminos = 'Debes aceptar los términos y condiciones';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      useNavigation('thasks');
    }
    setIsSubmitting(true);
  };

  return (
    <form id='form' onSubmit={handleSubmit} className='pb-[34px] lg:pb-0 px-4'>
      <section className="flex justify-center w-full mt-[10px] lg:py-8 lg:rounded-3xl lg:w-full lg:max-w-[424px] lg:bg-whiteRgba lg:absolute top-[40px] right-3">
        <div className="flex flex-col w-full max-w-[328px]">
          <InputText
            label='Nombre Completo'
            type='text'
            name='nombre'
            placeholder='Nombres y Apellidos'
            value={formValues.nombre}
            onChange={handleChange}
            error={formErrors.nombre}
          />
          <InputText
            label='Fecha de Nacimiento'
            type='date'
            name='fechaNacimiento'
            value={formValues.fechaNacimiento}
            onChange={handleChange}
            error={formErrors.fechaNacimiento}
          />
          <InputText
            label='Correo electrónico'
            type='email'
            name='correo'
            placeholder='Introduce tu correo electrónico'
            value={formValues.correo}
            onChange={handleChange}
            error={formErrors.correo}
          />
          <InputText
            label='Teléfono'
            type='number'
            name='telefono'
            placeholder='Número de contacto'
            value={formValues.telefono}
            onChange={handleChange}
            error={formErrors.telefono}
          />
          <InputSelect
            label='País de Residencia'
            name='pais'
            value={formValues.pais}
            onChange={handleChange}
            error={formErrors.pais}
          />
          <InputCheckbox
            label='Acepto los términos y condiciones'
            name='terminos'
            checked={formValues.terminos}
            onChange={handleChange}
            error={formErrors.terminos}
          />
          <Button text='SIGUIENTE' icon />
        </div>
      </section>
    </form>
  );
};