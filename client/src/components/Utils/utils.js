export function validate(input) {
	let errors = {}
	console.log('INPUT ', input)
 try {
	if (input.senasaId && input.senasaId.length !== 16) {
		errors.name = 'ID SENASA must be a 16-character alphanumeric string.'
	}

	if (!input.dispositivoNro.trim() || input.dispositivoNro.length !== 8) {
		errors.name = 'Device Number must be a 8-character alphanumeric string.'
	}

	if (!input.pesoKg || input.pesoKg < 1) {
		errors.name = 'Weight must be a number higher than 0.'
	}

	if (!input.potreroNombre || !input.potreroNombre.trim()) {
		errors.name = 'Paddock Name must be a string';
	}
} catch {
	errors.name ='You must enter all values correctly.';
}
	return errors;
}