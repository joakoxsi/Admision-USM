import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Input } from '@material-ui/core';
import Autocomplete from '@mui/lab/Autocomplete';
import '../stylesheets/Postulaciones/PostulacionesPage.scss';

const steps = ['Datos Personales', 'Datos Academicos', 'Selección de Carrera', 'Documentos'];

const ciudadesDeChile = [
    'Santiago',
    'Valparaíso',
    'Concepción',
    'La Serena',
    'Antofagasta',
    'Temuco',
    'Rancagua',
    'Iquique',
    'Puerto Montt',
    'Arica',
];

const carreras = [
    'Ingeniería Civil Informática',
    'Ingeniería Civil Industrial',
    'Ingeniería Civil Mecánica',
    'Ingeniería Civil Electrónica',
    'Ingeniería Civil Matemática',
    'Ingeniería Civil Química',
    'Ingeniería Civil Obras Civiles',
    'Ingeniería Civil Ambiental',
    'Ingeniería Civil en Biotecnología',
    'Ingeniería Civil en Computación',
    'Ingeniería Civil en Construcción',
    'Ingeniería Civil en Geografía',
    'Ingeniería Civil en Geomensura',
];

const ramas = [
    'Humanistico-Cientifico',
    'Técnico-Profesional',
];

const tipos = [
    'Carrera diurnas',
    'Carreras vespertinas',
    'Ciencias Aeronauticas',
    'Carreras Técnicas',
    'Postgrados',
]

const aniosEgreso = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);


const DatosPersonales = ({ handleChange, handleCityChange, values }) => (
    <div className='DatosPersonales'>
        <TextField
            label="Nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Apellido"
            name="apellido"
            value={values.apellido}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Rut"
            name="rut"
            value={values.rut}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Nacionalidad"
            name="nacionalidad"
            value={values.nacionalidad}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Correo"
            name="correo"
            value={values.correo}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Fecha de nacimiento"
            name="fechaNacimiento"
            type="date"
            value={values.fechaNacimiento}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <Autocomplete
            options={ciudadesDeChile}
            value={values.ciudad}
            onChange={handleCityChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Ciudad"
                    margin="normal"
                    fullWidth
                />
            )}
            style={{ width: '80%' }}
        />
        <TextField
            label="Comuna"
            name="comuna"
            value={values.comuna}
            onChange={handleChange}
            style={{ width: '80%' }}
            margin="normal"
        />
        <TextField
            label="Dirección"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            style={{ width: '80%', paddingBottom: '5%' }}
            margin="normal"
        />
    </div>
);

const DatosAcademicos = ({ handleChange, values }) => (
    <div className='DatosPersonales'>
        <TextField
            label="Ciudad de tu colegio"
            name="ciudadColegio"
            value={values.ciudadColegio}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <TextField
            label="Comuna de tu colegio"
            name="comunaColegio"
            value={values.comunaColegio}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <TextField
            label="Ciudad de tu colegio"
            name="CiudadColegio"
            value={values.ciudadColegio}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <FormControl style={{ width: '80%', margin: 'normal' }}>
            <InputLabel id="rama-label">Rama educacional</InputLabel>
            <Select
                labelId="rama-label"
                name="rama"
                value={values.rama}
                onChange={handleChange}
            >
                {ramas.map((rama) => (
                    <MenuItem key={rama} value={rama}>
                        {rama}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl style={{ width: '80%', margin: 'normal' }}>
            <InputLabel id="anio-egreso-label">Año de egreso</InputLabel>
            <Select
                labelId="anio-egreso-label"
                name="anioEgreso"
                value={values.anioEgreso}
                onChange={handleChange}
            >
                {aniosEgreso.map((anio) => (
                    <MenuItem key={anio} value={anio}>
                        {anio}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <TextField
            label="Promedio Primero Medio (Ejemplo 6,123)"
            name="promedio1"
            value={values.promedio1}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <TextField
            label="Promedio Segundo Medio (Ejemplo 6,123)"
            name="promedio2"
            value={values.promedio2}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <TextField
            label="Promedio Tercero Medio (Ejemplo 6,123)"
            name="promedio3"
            value={values.promedio3}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%' }}
        />
        <TextField
            label="Promedio Cuarto Medio (Ejemplo 6,123)"
            name="promedio4"
            value={values.promedio4}
            onChange={handleChange}
            margin="normal"
            style={{ width: '80%', paddingBottom: '5%' }}
        />
    </div>
);

const Documentos = ({ handleChange }) => (
    <div className='DatosPersonales'>
        <div style={{ width: '80%', margin: 'normal', paddingBottom: '5%',  paddingTop : '5%'}}>
            <InputLabel htmlFor="certificado-notas">Certificado de Notas</InputLabel>
            <Input
                type="file"
                id="certificado-notas"
                name="certificadoNotas"
                onChange={handleChange}
                inputProps={{ accept: '.pdf,.doc,.docx,.jpg,.png' }}
                fullWidth
            />
        </div>
        <div style={{ width: '80%', margin: 'normal', paddingBottom: '5%' }}>
            <InputLabel htmlFor="certificado-nacimiento">Certificado de Nacimiento</InputLabel>
            <Input
                type="file"
                id="certificado-nacimiento"
                name="certificadoNacimiento"
                onChange={handleChange}
                inputProps={{ accept: '.pdf,.doc,.docx,.jpg,.png' }}
                fullWidth
            />
        </div>
    </div>
);
const Selección = ({ handleChange, values, handleCarreraChange }) => (
    <div className='DatosPersonales'>
        <FormControl style={{ width: '80%', margin: 'normal' }}>
            <InputLabel id="tipo-carreras">Tipo de Admisión</InputLabel>
            <Select
                labelId="tipo-carrera"
                name="tipoCarrera"
                value={values.tipoCarrera}
                onChange={handleChange}
            >
                {tipos.map((anio) => (
                    <MenuItem key={anio} value={anio}>
                        {anio}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <Autocomplete
            options={carreras}
            value={values.carrera}
            onChange={handleCarreraChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Carrera"
                    margin="normal"
                    fullWidth
                />
            )}
            style={{ width: '80%', paddingBottom: '2%' }}
        />
    </div>
);

const getStepContent = (stepIndex, handleChange, values, handleCityChange, handleCarreraChange) => {
    switch (stepIndex) {
        case 0:
            return <DatosPersonales handleChange={handleChange} values={values} handleCityChange={handleCityChange} />;
        case 1:
            return <DatosAcademicos handleChange={handleChange} values={values} />;
        case 2:
            return <Selección handleChange={handleChange} values={values} handleCarreraChange={handleCarreraChange} />;
        case 3:
            return <Documentos handleChange={handleChange} />;
        default:
            return 'Paso desconocido';
    }
};

const PostulacionPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        nombre: '',
        correo: '',
        telefono: ''
    });
    useEffect(() => {
        if (!formValues.ciudadColegio) {
            setFormValues((prevValues) => ({
                ...prevValues,
                ciudadColegio: prevValues.ciudad
            }));
        }
    }, [formValues.ciudad]);

    useEffect(() => {
        if (!formValues.comunaColegio && activeStep === 1) {
            setFormValues((prevValues) => ({
                ...prevValues,
                comunaColegio: prevValues.comuna
            }));
        }
    }, [formValues.comuna, activeStep]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleCityChange = (event, newValue) => {
        setFormValues({
            ...formValues,
            ciudad: newValue
        });
    };
    const handleCarreraChange = (event, newValue) => {
        setFormValues({
            ...formValues,
            carrera: newValue
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <Typography variant="h5" gutterBottom>
                        ¡Formulario completado!
                    </Typography>
                ) : (
                    <div className='Button-container'>
                        {getStepContent(activeStep, handleChange, formValues, handleCityChange, handleCarreraChange)}
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Atrás
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostulacionPage;