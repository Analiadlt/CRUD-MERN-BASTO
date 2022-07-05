export function validate(input) {
	let errors = {}

	if (input.senasaId && input.senasaId.length > 16) {
		errors.name = 'ID SENASA must be a 16-character alphanumeric string.'
	}

	if (input.dispositivoNro && input.dispositivoNro.length > 8) {
		errors.name = 'Device Number must be a 8-character alphanumeric string.'
	}

	if (input.pesoKg && input.pesoKg === 0) {
		errors.name = 'Peso must be a number higher than 0.'
	}

	if (input.potreroNombre && input.potreroNombre === '') {
		errors.name = 'Potrero Nombre must be a string';
	}

	return errors;
}